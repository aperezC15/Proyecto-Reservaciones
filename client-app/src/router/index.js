import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Opciones.vue';
import Salas from '../components/Cine/salas.vue';
import Hello from '../components/HelloWorld.vue';
//import Programacion from '../components/Cine/programacion.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/salas',
		name: 'Salas',
		component: Salas
	},
	{
		path: '/cine/salas/id/programacion',
		name: 'salair',
		component: () => import(/* webpackChunkName: "Ingresos" */ '../views/Salas.vue')
	},
	{
		path: '/cine/:id/programacion/listado-ingresos',
		name: 'Ingresos',
		component: () => import(/* webpackChunkName: "Ingresos" */ '../views/Ingresos.vue')
	},

	{
		path: '/hello',
		name: 'Hello',
		component: Hello
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
