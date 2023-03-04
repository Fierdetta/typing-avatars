import { constants as Constants, stylesheet as StyleSheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";
import { General } from "@vendetta/ui/components";

const { View, Text } = General;

const styles = StyleSheet.createThemedStyleSheet({
	container: {
		height: 12,
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		backgroundColor: semanticColors.BACKGROUND_TERTIARY,
	},
	text: {
		paddingHorizontal: 2,
		fontSize: 8,
		fontFamily: Constants.Fonts.PRIMARY_BOLD,
		color: semanticColors.INTERACTIVE_NORMAL
	}
});

export default function OverflowAvatar({ overflow, style }) {
	return (
		<View style={style}>
			<View style={styles.container}>
				<Text style={styles.text}>+{overflow}</Text>
			</View>
		</View>
	);
};
