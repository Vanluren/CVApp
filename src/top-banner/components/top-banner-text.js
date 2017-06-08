import React from 'react';
import { Text, View } from 'react-native';

/**
 * The text component for the top-banner
 * @constructor
 */
const TopBannerText = () => (
	<View style={styles.containingViewStyles}>
		<Text style={styles.nameTextStyles}>
			Villads Valur Korsholm Nielsen
		</Text>
		<Text style={styles.titleTextStyles}>
			Developer
		</Text>
	</View>
);

const styles = {
	containingViewStyles: {
		flex:1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	nameTextStyles:{
		fontSize: 18,
		color: 'black',
		fontWeight: '500',
	},
	titleTextStyles: {
		fontSize: 16,
		fontWeight: '300',
	},
};

export default TopBannerText;