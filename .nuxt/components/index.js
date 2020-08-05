export { default as Nav } from '../../components/Nav.vue'
export { default as BaseButton } from '../../components/base/BaseButton.vue'
export { default as BaseCard } from '../../components/base/BaseCard.vue'
export { default as BaseInput } from '../../components/base/BaseInput.vue'
export { default as About } from '../../components/homepage/About.vue'
export { default as Title } from '../../components/homepage/Title.vue'
export { default as SignUp } from '../../components/sign-up/SignUp.vue'
export { default as SignIn } from '../../components/sign-in/SignIn.vue'

export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/Nav'}" */).then(c => c.default || c)
export const LazyBaseButton = import('../../components/base/BaseButton.vue' /* webpackChunkName: "components/base/BaseButton'}" */).then(c => c.default || c)
export const LazyBaseCard = import('../../components/base/BaseCard.vue' /* webpackChunkName: "components/base/BaseCard'}" */).then(c => c.default || c)
export const LazyBaseInput = import('../../components/base/BaseInput.vue' /* webpackChunkName: "components/base/BaseInput'}" */).then(c => c.default || c)
export const LazyAbout = import('../../components/homepage/About.vue' /* webpackChunkName: "components/homepage/About'}" */).then(c => c.default || c)
export const LazyTitle = import('../../components/homepage/Title.vue' /* webpackChunkName: "components/homepage/Title'}" */).then(c => c.default || c)
export const LazySignUp = import('../../components/sign-up/SignUp.vue' /* webpackChunkName: "components/sign-up/SignUp'}" */).then(c => c.default || c)
export const LazySignIn = import('../../components/sign-in/SignIn.vue' /* webpackChunkName: "components/sign-in/SignIn'}" */).then(c => c.default || c)
