
import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:3008',
})

export const signup = payload => api.post('/signup', payload)
export const login = payload => api.post('/login', payload)
// export const appoit =payload => api.post('/appt', payload) 
// export const contact =payload => api.post('/contact', payload) 


const apis = {
signup,
login
// appoit,
// contact
}

export default apis