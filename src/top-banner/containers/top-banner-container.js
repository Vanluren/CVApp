import React/*, { PropTypes }*/ from 'react';
import { View } from 'react-native';
import TopBannerImage from '../components/top-banner-image';
import TopBannerText from '../components/top-banner-text';

const TopBannerContainer = () => (
	<View>
		<TopBannerImage/>
		<TopBannerText/>
	</View>
);

TopBannerContainer.propTypes = {};
const styles = {
 //TODO: styling
};

export default TopBannerContainer;