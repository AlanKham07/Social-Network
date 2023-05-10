import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f1bce62e-8b3b-4015-a3d9-722110eda65c'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
};

export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
};

export const headerAPI = {
    authUsers() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
};

