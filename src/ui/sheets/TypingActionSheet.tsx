import { find, findByProps, findByStoreName } from "@vendetta/metro";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import { constants as Constants, stylesheet as StyleSheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";

const LazyActionSheet = findByProps("openLazy", "hideActionSheet");

const { FormRow, FormArrow } = Forms;
const { View, Image, Text } = General;
const ActionSheet = find((m) => m.default?.render?.name === "ActionSheet").default.render;
const { BottomSheetScrollView } = findByProps("BottomSheetScrollView");
const { ActionSheetTitleHeader } = findByProps("ActionSheetTitleHeader");
const { type: Avatar } = findByProps("AvatarSizes").default;

const { useTypingUserIds } = findByProps("TYPING_WRAPPER_HEIGHT");

const UserStore = findByStoreName("UserStore");
const RelationshipStore = findByStoreName("RelationshipStore");
const GuildMemberStore = findByStoreName("GuildMemberStore");
const ThemeStore = findByStoreName("ThemeStore");
const { showUserProfile } = findByProps("showUserProfile");

export function showTypingActionSheet(channel) {
    LazyActionSheet.openLazy(new Promise(r => r({ default: TypingActionSheet })), "TypingActionSheet", { channel: channel });
};

const styles = StyleSheet.createThemedStyleSheet({
    text: {
        fontFamily: Constants.Fonts.PRIMARY_MEDIUM,
        fontSize: 16,
        lineHeight: 20,
        color: semanticColors.TEXT_MUTED,
        textAlign: "center",
        marginTop: 8
    }
});

const channelType = {
    "0": "channel",
    "1": "dm",
    "2": "channel",
    "3": "dm",
    // skipped GUILD_CATEGORY
    "5": "channel",
    "6": "channel",
    "10": "thread",
    "11": "thread",
    "12": "thread",
    "13": "channel"
    // skipped GUILD_DIRECTORY
    // skipped GUILD_FORUM
};

function TypingActionSheet({ channel }) {
    const typingIds = useTypingUserIds(channel.id);

    const typingUsers = typingIds.map((id) => UserStore.getUser(id));

    return (<ActionSheet scrollable>
        <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <ActionSheetTitleHeader title={`Users typing in ${channelType[channel.type] === "channel" ? "#" : ""}${channel.name}`} />
            {typingUsers.length !== 0 ? typingUsers.map((user) =>
                <FormRow
                    leading={<Avatar user={user} size="normal" guildId={channel.guild_id} />}
                    label={(channelType[channel.type] === "dm" ? RelationshipStore.getNickname(user.id) : GuildMemberStore.getNick(channel.guild_id, user.id)) ?? user.username}
                    trailing={<FormArrow />}
                    onPress={() => showUserProfile({ userId: user.id, channelId: channel.id })}
                />
            ) : <View style={{ paddingTop: 32, justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={getAssetIDByName(ThemeStore.theme === "light" ? "empty_channel_no_text_channels_light" : "empty_channel_no_text_channels_dark")}
                    style={{ width: 256, height: 128, resizeMode: "contain" }}
                />
                <Text style={styles.text}>Nobody is typing in this {channelType[channel.type] === "dm" ? channelType[channel.type].toUpperCase() : channelType[channel.type]} right now.</Text>
            </View>}
        </BottomSheetScrollView>
    </ActionSheet>)
};