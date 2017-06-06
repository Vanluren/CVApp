/**
 * Created by villadsvalur on 06/06/2017.
 */
import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import ExperienceDetailsImage from '../components/experience-details-image';

const villads = require('../../../util/assets/img/Villads_2017.jpg');

const ExperienceDetailsContainer = ({imgUrl}) => (
		<View style={styles.containingViewStyles}>
				<ExperienceDetailsImage
					imgUrl={villads}
				/>
			<View>
				<Text style={styles.textContentStyle}>
					I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst. Det stammer fra et stykke litteratur på latin fra år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard McClintock, professor i latin fra Hampden-Sydney universitet i Virginia, undersøgte et af de mindst kendte ord "consectetur" fra en del af Lorem Ipsum, og fandt frem til dets oprindelse ved at studere brugen gennem klassisk litteratur. Lorem Ipsum stammer fra afsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum" (Det gode og ondes ekstremer), som er skrevet af Cicero i år 45 f.kr. Bogen, som var meget populær i renæssancen, er en afhandling om etik. Den første linie af Lorem Ipsum "Lorem ipsum dolor sit amet..." kommer fra en linje i afsnit 1.10.32.
				</Text>
			</View>
		</View>
);

ExperienceDetailsContainer.propTypes = {
	imgUrl: PropTypes.number,
};

ExperienceDetailsContainer.defaultProps = {
	imgUrl: 2,
}

const styles = {
	containingViewStyles: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	imageStyle: {
		height: 200,
		width: null,
	},
	textContentStyle: {
		fontSize: 16,
		marginVertical: 20,
		marginHorizontal: 20,
	}
}
export default ExperienceDetailsContainer;