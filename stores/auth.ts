import { loginUser } from '@/utils/api/auth'

export const useAuthStore = defineStore('auth', () => {
    const forADay = {
        maxAge: 60 * 60 * 24
    }
    const user = useCookie('user', forADay)
    const token = useCookie('token', forADay)

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
