import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PublicRoute from './components/PublicRoute/PublicRoute';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UploadPage from './pages/UploadPage/UploadPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container" style={{ padding: '2rem' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<PublicRoute>
                        <LoginPage />
                    </PublicRoute>} />
                    <Route path="/register" element={<PublicRoute>
                        <RegisterPage />
                    </PublicRoute>} />
                    <Route path="/upload" element={<ProtectedRoute>
                        <UploadPage />
                    </ProtectedRoute>} />
                    <Route path="/search" element={<ProtectedRoute>
                        <SearchPage />
                    </ProtectedRoute>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
