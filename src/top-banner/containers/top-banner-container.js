import React from 'react';
import { View } from 'react-native';
import TopBannerImage from '../components/top-banner-image';
import TopBannerText from '../components/top-banner-text';

/**
 * Containing component for the top-banner, uses the two child components
 * TopBannerImage and TopBannerView to return the top-banner
 * @constructor
 */
const TopBannerContainer = () => (
	<View style={styles.containingViewStyles}>
		<TopBannerImage/>
		<TopBannerText/>
	</View>
);

const styles = {
	 containingViewStyles: {
		 height: 250,
		 marginTop: 50,
	 }
};

export default TopBannerContainer;