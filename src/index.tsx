import { findByProps } from "@vendetta/metro";
import { React } from "@vendetta/metro/common";
import { after } from "@vendetta/patcher";
import TypingAvatars from "./components/TypingAvatars";

const TypingWrapper = findByProps("TYPING_WRAPPER_HEIGHT");

let unpatch;

export default {
    onLoad: () => {
        unpatch = after("default", TypingWrapper, ([{ channel }], res) => {
            if (!res) return;
            const Typing = res.props?.children;

            const unpatchTyping = after("type", Typing, (_, res) => {
                React.useEffect(() => () => { unpatchTyping() }, []);
                res.props.children[0].props.children.splice(0, 1, <TypingAvatars channel={channel} />);
            });
        });
    },
    onUnload: () => {
        unpatch();
    },
};
