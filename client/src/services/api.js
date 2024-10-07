import axios from 'axios';

// Create an axios instance with a default base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Change this to your server's URL in production
});

// Set up interceptors if needed
api.interceptors.request.use(
    (config) => {
        // Add authorization token if needed
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Auth API calls
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const resetPassword = (email) => api.post('/auth/reset-password', { email });

// Profile API calls
export const getUserProfile = (userId) => api.get(`/profile/${userId}`);
export const updateProfile = (userId, profileData) => api.put(`/profile/${userId}`, profileData);

// Map API calls
export const createGame = (gameData) => api.post('/games', gameData);
export const getGames = () => api.get('/games');
export const getGameDetails = (gameId) => api.get(`/games/${gameId}`);

// Messaging API calls
export const getMessages = () => api.get('/messages');
export const getMessageThread = (threadId) => api.get(`/messages/${threadId}`);
export const sendMessage = (messageData) => api.post('/messages', messageData);

// Shop API calls
export const getProducts = () => api.get('/shop');
export const getProductDetails = (productId) => api.get(`/shop/${productId}`);
export const addToCart = (productId, quantity) => api.post('/cart', { productId, quantity });
export const getCartItems = () => api.get('/cart');

// Tournament API calls
export const getTournaments = () => api.get('/tournaments');
export const createTournament = (tournamentData) => api.post('/tournaments', tournamentData);
export const getTournamentDetails = (tournamentId) => api.get(`/tournaments/${tournamentId}`);

// Post API calls
export const createPost = (postData) => api.post('/posts', postData);
export const getPosts = () => api.get('/posts');
export const getPostDetails = (postId) => api.get(`/posts/${postId}`);

export default api;
