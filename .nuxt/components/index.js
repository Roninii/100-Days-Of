export { default as Title } from '../../components/Title.vue'

export const LazyTitle = import('../../components/Title.vue' /* webpackChunkName: "components/Title'}" */).then(c => c.default || c)
