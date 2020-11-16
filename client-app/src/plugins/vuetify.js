import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true
		},
		themes: {
			light: {
				primary: '#1565C0',
				secondary: '#0277BD',
				cine: '#0097A7'
			}
		}
	}
});
