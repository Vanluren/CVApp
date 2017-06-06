import React, { PropTypes } from 'react';
import { Image } from 'react-native';

const ExperienceDetailsImage = ({imgUrl}) => (
		<Image
			style={styles.imageStyles}
			source={imgUrl}
		/>
);

ExperienceDetailsImage.propTypes = {
	imgUrl: PropTypes.number.isRequired,
};
const styles = {
	imageStyles: {
		height: 200,
		width: 500,
		alignItems: 'center',
	}
};

export default ExperienceDetailsImage;