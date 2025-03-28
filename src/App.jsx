import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Authors from './pages/Authors';
import Categories from './pages/Categories';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1A1A1A',
              color: '#E0E0E0',
              border: '1px solid #333',
            },
            success: {
              iconTheme: {
                primary: '#00FFD1',
                secondary: '#121212',
              },
            },
            error: {
              iconTheme: {
                primary: '#FF007F',
                secondary: '#121212',
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout><Blogs /></Layout>} />
          <Route path="/authors" element={<Layout><Authors /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
