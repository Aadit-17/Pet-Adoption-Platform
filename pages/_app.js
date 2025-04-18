import "./style.css";
import React from "react";
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <style jsx global>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-content {
          margin-top: 80px;
          flex: 1;
          padding: 20px;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  );
}
