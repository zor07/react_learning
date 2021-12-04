import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cf33d654-6242-4d8e-9684-14db21c7b808"
    }
})

export const AUTH_API = {
    me() {
       return instance.get(`/auth/me`, { withCredentials: true})
           .then(response => response.data)
    }
}

export const PROFILE_API = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
}

export const USERS_API = {
    getUsers (pageNo, pageSize) {
        return instance.get(`users?page=${pageNo}&count=${pageSize}`, {withCredentials: true})
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}