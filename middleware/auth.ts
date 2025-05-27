export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useAuthStore()
    if (!userStore.token && to.path !== '/login') {
        return navigateTo('/login')
    }
})
