import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';

// Importing Pages
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import EditProfilePage from './pages/Profile/EditProfilePage';
import FriendsPage from './pages/Profile/FriendsPage';
import MapPage from './pages/Map/MapPage';
import CreateGamePage from './pages/Map/CreateGamePage';
import MessagesPage from './pages/Messaging/MessagesPage';
import MessageThreadPage from './pages/Messaging/MessageThreadPage';
import ExplorePage from './pages/Explore/ExplorePage';
import ShopPage from './pages/Shop/ShopPage';
import ProductDetailsPage from './pages/Shop/ProductDetailsPage';
import CartPage from './pages/Shop/CartPage';
import TournamentsPage from './pages/Tournaments/TournamentsPage';
import TournamentDetailsPage from './pages/Tournaments/TournamentDetailsPage';
import CreateTournamentPage from './pages/Tournaments/CreateTournamentPage';
import CreatePostPage from './pages/Posts/CreatePostPage';
import MediaGalleryPage from './pages/Posts/MediaGalleryPage';
import PostDetailsPage from './pages/Posts/PostDetailsPage';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="app-layout">
                <main>
                    <Routes>
                        <Route path="/" element={<ExplorePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/profile/edit" element={<EditProfilePage />} />
                        <Route path="/profile/friends" element={<FriendsPage />} />
                        <Route path="/map" element={<MapPage />} />
                        <Route path="/map/create" element={<CreateGamePage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/messages/:threadId" element={<MessageThreadPage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/shop/:productId" element={<ProductDetailsPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/tournaments" element={<TournamentsPage />} />
                        <Route path="/tournaments/:tournamentId" element={<TournamentDetailsPage />} />
                        <Route path="/tournaments/create" element={<CreateTournamentPage />} />
                        <Route path="/posts/create" element={<CreatePostPage />} />
                        <Route path="/posts/:postId" element={<PostDetailsPage />} />
                        <Route path="/media" element={<MediaGalleryPage />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
