import type { User } from '@/types/User'

const users: Array<User & { password: string }> = [
    { id: '1', username: 'employer1', type: 'employer', password: 'pass123' },
    { id: '2', username: 'applicant1', type: 'applicant', password: 'pass456' }
]

interface LoginResponse {
    user: User
    token: string
}

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const user = users.find(u => u.username === username && u.password === password)

    if (!user) {
        throw new Error('Invalid username or password')
    }

    // Strip password before returning
    const { password: _, ...userWithoutPassword } = user

    return {
        user: userWithoutPassword,
        token: `${user.id}-mock-token`
    }
}
