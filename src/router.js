import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Career from './career/containers/career-container';

const scenes = Actions.create(
	<Scene
		key='root'
		navigationBarStyle={{ backgroundColor: 'yellow' }}
	>
		<Scene
			key='tabbar'
			tabs
			style={{
				height: 42,
				shadowColor: '#000000',
				shadowOpacity: 0.3,
				shadowOffset: {
					height: -2,
				},
				backgroundColor: 'yellow',
			}}
		>
			<Scene
				key='career'
			    title='career'
			    initial
			    component={Career}
			/>
			<Scene
				key='education'
				title='career'
				component={Career}
			/>
		</Scene>
	</Scene>
);

const RouterComponent = () => <Router scenes={scenes} />;

export default RouterComponent;