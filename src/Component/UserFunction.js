import axios from 'axios'

export const signup = newUser => {
    return axios
        .post('signup', {
            email: newUser.email,
            password: newUser.password,
            confirmpassword: newUser.confirmpassword
        })
        .then(res => {
            console.log('registered!')
        })
}


export const login = user => {
    return axios
        .post('login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            console.log('login')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

