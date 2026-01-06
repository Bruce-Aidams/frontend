import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: false, // For Sanctum cookie-based auth if on same domain, but we are on different ports (3000 vs 8000).
    // API Tokens usage:
});

api.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    console.log(`[Axios Request] ${config.method?.toUpperCase()} ${config.url}`, {
        hasToken: !!token,
        headers: config.headers
    });
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => {
        console.log(`[Axios Response] ${response.status} ${response.config.url}`, response.data);
        return response;
    },
    (error) => {
        console.error(`[Axios Error] ${error.response?.status} ${error.config?.url}`, error.response?.data);

        if (error.response?.status === 503 && error.response?.data?.maintenance) {
            if (typeof window !== 'undefined' && window.location.pathname !== '/maintenance') {
                window.location.href = '/maintenance';
            }
        }

        if (error.response?.status === 401 || error.response?.status === 403) {
            if (typeof window !== 'undefined') {
                const is403 = error.response?.status === 403;
                const msg = error.response?.data?.message || (is403 ? "Access Forbidden" : "Unauthorized");

                // If 403, we might want to log user out if it's a persistent auth issue
                if (error.response?.status === 401 || (is403 && !window.location.pathname.startsWith('/admin'))) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    if (!window.location.pathname.startsWith('/auth')) {
                        window.location.href = '/auth/login?error=' + encodeURIComponent(msg);
                    }
                }
            }
        }
        return Promise.reject(error);
    }
);

export default api;
