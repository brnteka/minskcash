import Vue from "vue";
import App from "./app.vue";
import "./styles/style.css";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import VueSlider from "vue-slider-component";
Vue.component("VueSlider", VueSlider);

import VModal from "vue-js-modal";
Vue.use(VModal, { dialog: true });

new Vue({
	render(h) {
		return h(App);
	}
}).$mount("#app");
