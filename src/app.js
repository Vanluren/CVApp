/**
 * Created by villadsvalur on 05/06/2017.
 */
import React from 'react';
import Router from './router';
import TopBanner from './top-banner/containers/top-banner-container';
import { View } from 'react-native';

const App = ()  => (
	<View>
		<TopBanner/>
		<Router/>
	</View>
);

export default App;