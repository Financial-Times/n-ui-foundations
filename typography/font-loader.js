import oTypography from 'o-typography';
const perfMark = require('../js/perf-mark');

new oTypography(document.documentElement)
	.load()
	.then(() => perfMark('fontsLoaded'));
