import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaUserLock, FaUserPlus, FaShieldAlt } from 'react-icons/fa';

const AuthPortal = () => {
  return (
    <>
      <div className="pages" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="title">Welcome to the Portal</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '1rem', fontSize: '1.2rem' }}>Please select how you would like to proceed.</p>
      </div>

      <section style={{ padding: '4rem 2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="student-search-card" style={{ width: '300px', textAlign: 'center', padding: '3rem 2rem', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FaUserLock style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1.5rem' }} />
            <h3>User Login</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '14px' }}>Already have an account? Sign in here to access your dashboard.</p>
          </div>
        </Link>

        <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="student-search-card" style={{ width: '300px', textAlign: 'center', padding: '3rem 2rem', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FaUserPlus style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1.5rem' }} />
            <h3>Create Account</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '14px' }}>New to Cambridge School? Register for a new account.</p>
          </div>
        </Link>

        <Link to="/admin-login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="student-search-card" style={{ width: '300px', textAlign: 'center', padding: '3rem 2rem', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FaShieldAlt style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1.5rem' }} />
            <h3>Admin Portal</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '14px' }}>Staff and administrators sign in here to manage the system.</p>
          </div>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default AuthPortal;
