/**
 * Created by villadsvalur on 05/06/2017.
 */
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

export default function configureStore(middleware) {
	// https://github.com/jhen0409/react-native-boilerplate/blob/master/src/configureStore.js
	
	// Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
	let composeEnhancers = compose;
	/* eslint-disable no-underscore-dangle, global-require, no-undef*/
	if (__DEV__) {
		composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
		                    require('remote-redux-devtools').composeWithDevTools)({
			name: Platform.OS,
			hostname: 'localhost',
			port: 8000,
		});
	}
	/* eslint-enable no-underscore-dangle, global-require, no-undef*/
	
	const enhancer = composeEnhancers(applyMiddleware(...middleware));
	
	const store = createStore(reducer, {}, enhancer);
	
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept(() => {
			const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextRootReducer);
		});
	}
	
	return store;
}
