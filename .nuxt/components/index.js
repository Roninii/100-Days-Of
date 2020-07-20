export { default as Nav } from '../../components/Nav.vue'
export { default as About } from '../../components/homepage/About.vue'
export { default as Title } from '../../components/homepage/Title.vue'

export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/Nav'}" */).then(c => c.default || c)
export const LazyAbout = import('../../components/homepage/About.vue' /* webpackChunkName: "components/homepage/About'}" */).then(c => c.default || c)
export const LazyTitle = import('../../components/homepage/Title.vue' /* webpackChunkName: "components/homepage/Title'}" */).then(c => c.default || c)
