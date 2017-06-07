import React  from 'react';
import { Image, View } from 'react-native';

//Imports the image for the top-banner
const villadsImage = require('../../util/assets/img/Villads_2017.jpg');

/**
 * The component containing the image view for the top-banner
 * @constructor
 */
const TopBannerImage = () => (
	<View style={styles.containingView}>
		<Image
			style={styles.imageStyling}
			source={villadsImage}
		/>
	</View>
);

const styles = {
	containingView: {
		flex: 1,
		height: 150,
		width: null,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageStyling:{
		height: 150,
		width: 150,
		borderRadius: 75,
	}
};

export default TopBannerImage;