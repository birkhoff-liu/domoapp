require('./styles/typebase.css');
require('./store/reducers');
require('./store/constants');
require.context('./store/actions', true, /\.actions\.js$/);

import angular from 'angular';
import { attachAll } from '../../other/boilerplate-utils.js';
const ngModule = angular.module('da.common', []);

attachAll(require.context('./services', true, /\.factory\.js$/))(ngModule);
attachAll(require.context('./filters', true, /\.filter\.js$/))(ngModule);
attachAll(require.context('./components', true, /\.(component|directive)\.js$/))(ngModule);

export default ngModule;
