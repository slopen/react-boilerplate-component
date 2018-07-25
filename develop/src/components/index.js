import React from 'react';
import {render} from 'react-dom';

import 'styles/styles.less';
import App from 'components/app';


const el = document.getElementById ('root');

if (el) {
	render (<App/>, el);

	if (module.hot) {
		module.hot.accept ();
	}

} else {
	console.error ('no root node found');
}
