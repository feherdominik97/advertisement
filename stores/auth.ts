import { loginUser } from '@/utils/api/auth'

export const useAuthStore = defineStore('auth', () => {
    const user = useCookie('user')
    const token = useCookie('token')

    const login = async (email: string, password: string) => {
        const response = await loginUser(email, password)

        user.value = response.user
        token.value = response.token
    }

    const logout = () => {
        user.value = null
        token.value = null
    }



    return { user, token, login, logout }
})
