import React  from 'react';
import { Image, View } from 'react-native';

const villadsImage = require('../../util/assets/img/Villads_2017.jpg');

const TopBannerImage = () => (
	<View>
		<Image
			style={styles.imageStyling}
			source={villadsImage}
		/>
	</View>
);

TopBannerImage.propTypes = {};
const styles = {
	imageStyling:{
		//TODO: styling
	}
};

export default TopBannerImage;