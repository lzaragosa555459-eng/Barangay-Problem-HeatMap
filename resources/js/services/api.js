import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;

api.interceptors.response.use(
    (response) => response,

    (error) => {

        if (error.response?.status === 503) {

            window.history.pushState({}, "", "/maintenance");
            window.dispatchEvent(new PopStateEvent("popstate"));

        }

        return Promise.reject(error);

    }
);