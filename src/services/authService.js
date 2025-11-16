import api from "./api"

export const login = async (email, senha) => {
    try {
        const response = await api.post('auth/login', { email, senha })
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}