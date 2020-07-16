export { default as Nav } from '../../components/Nav.vue'
export { default as Title } from '../../components/Title.vue'

export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/Nav'}" */).then(c => c.default || c)
export const LazyTitle = import('../../components/Title.vue' /* webpackChunkName: "components/Title'}" */).then(c => c.default || c)
