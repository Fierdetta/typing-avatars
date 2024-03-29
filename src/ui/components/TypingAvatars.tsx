import { findByName, findByProps, findByStoreName } from "@vendetta/metro";
import { stylesheet as StyleSheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";
import { General } from "@vendetta/ui/components";
import { unfreeze } from "@vendetta/utils";
import { showTypingActionSheet } from "../sheets/TypingActionSheet";
import OverflowAvatar from "./OverflowAvatar";

const { Pressable } = General;
const { default: SummarizedIconRow } = findByName("SummarizedIconRow", false);
const { type: Avatar } = findByProps("AvatarSizes").default;

const { useTypingUserIds } = findByProps("TYPING_WRAPPER_HEIGHT");

const UserStore = findByStoreName("UserStore");

const AvatarConstants = findByProps("AVATAR_SIZE_MAP");

let AVATAR_SIZE_MAP = unfreeze(AvatarConstants.AVATAR_SIZE_MAP) as { size12: number };
let AvatarStyles = unfreeze(AvatarConstants.styles) as { size12: object };
AVATAR_SIZE_MAP.size12 = 12;
AvatarStyles.size12 = {
	width: 12,
	height: 12,
	borderRadius: 6
};

const styles = StyleSheet.createThemedStyleSheet({
	wrapper: {
		borderWidth: 2,
		borderRadius: 16,
		borderColor: semanticColors.BACKGROUND_SECONDARY,
		backgroundColor: semanticColors.BACKGROUND_SECONDARY
	}
});

export default function TypingAvatars({ channel }) {
	const typingIds = useTypingUserIds(channel.id);

	const typingUsers = typingIds.map((id) => UserStore.getUser(id));

	function renderAvatar(user) {
		return <Avatar user={user} size="size12" guildId={channel.guild_id} />
	};

	return (
		<Pressable onPress={() => showTypingActionSheet(channel)}>
			<SummarizedIconRow
				iconWrapperStyle={styles.wrapper}
				items={typingUsers}
				max={5}
				offsetAmount={-8}
				overflowComponent={OverflowAvatar}
				overflowStyle={styles.wrapper}
				style={{
					height: 16,
					paddingRight: 2
				}}
				renderItem={renderAvatar}
			/>
		</Pressable>
	);
};
