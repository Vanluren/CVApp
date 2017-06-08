import React, { PropTypes } from 'react';
import { Image } from 'react-native';

/**
 * Small component for the experience detail view, that spits out an image for the top of the view
 * takes the imgUrl as a prop, and uses it for the image source
 * @param imgUrl
 * @constructor
 */
const ExperienceDetailsImage = ({imgUrl}) => (
		<Image
			style={styles.imageStyles}
			source={{uri: imgUrl}}
		/>
);

ExperienceDetailsImage.propTypes = {
	imgUrl: PropTypes.string.isRequired,
};
const styles = {
	imageStyles: {
		height: 200,
		width: 500,
		alignItems: 'center',
	}
};

export default ExperienceDetailsImage;