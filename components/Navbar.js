import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    FurryFinds
                </Link>
                <div className="navbar-links">
                    <Link href="/listingpage" className={router.pathname === '/listingpage' ? 'active' : ''}>
                        Browse Pets
                    </Link>
                    <Link href="/signuppage" className={router.pathname === '/signuppage' ? 'active' : ''}>
                        Sign Up
                    </Link>
                    <Link href="/settings-page" className={router.pathname === '/settings-page' ? 'active' : ''}>
                        Settings
                    </Link>
                </div>
            </div>
            <style jsx>{`
        .navbar {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #BB8FF3;
          text-decoration: none;
        }
        .navbar-links {
          display: flex;
          gap: 2rem;
        }
        .navbar-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .navbar-links a:hover {
          color: #BB8FF3;
        }
        .navbar-links a.active {
          color: #BB8FF3;
        }
      `}</style>
        </nav>
    );
};

export default Navbar; 