import React, { useState } from 'react';
import Head from 'next/head';
import { FaFilter, FaPaw, FaSearch } from 'react-icons/fa';

const Listingpage = () => {
  const [filters, setFilters] = useState({
    animal: '',
    breed: '',
    age: '',
    gender: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="listingpage-container">
      <Head>
        <title>Browse Pets - FurryFinds</title>
      </Head>

      <div className="listingpage-content">
        <div className="filters-section">
          <div className="filters-header">
            <FaFilter className="filter-icon" />
            <h2>Filters</h2>
          </div>

          <div className="filter-group">
            <label>Animal Type</label>
            <select
              value={filters.animal}
              onChange={(e) => handleFilterChange('animal', e.target.value)}
            >
              <option value="">All Animals</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
              <option value="bird">Birds</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Breed</label>
            <select
              value={filters.breed}
              onChange={(e) => handleFilterChange('breed', e.target.value)}
            >
              <option value="">All Breeds</option>
              <option value="labrador">Labrador</option>
              <option value="persian">Persian</option>
              <option value="siamese">Siamese</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Age</label>
            <select
              value={filters.age}
              onChange={(e) => handleFilterChange('age', e.target.value)}
            >
              <option value="">All Ages</option>
              <option value="young">Young (0-2 years)</option>
              <option value="adult">Adult (2-7 years)</option>
              <option value="senior">Senior (7+ years)</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Gender</label>
            <select
              value={filters.gender}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
            >
              <option value="">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="pets-grid">
          {/* Placeholder for pet cards */}
          <div className="pet-card">
            <div className="pet-image">
              <FaPaw className="placeholder-icon" />
            </div>
            <div className="pet-info">
              <h3>Max</h3>
              <p>Golden Retriever • 2 years</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
          {/* Add more pet cards here */}
        </div>
      </div>

      <style jsx>{`
        .listingpage-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .listingpage-content {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
        }

        .filters-section {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .filter-icon {
          color: #BB8FF3;
        }

        .filter-group {
          margin-bottom: 1rem;
        }

        .filter-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .filter-group select {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: white;
        }

        .pets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .pet-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .pet-card:hover {
          transform: translateY(-4px);
        }

        .pet-image {
          height: 200px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-icon {
          font-size: 3rem;
          color: #BB8FF3;
        }

        .pet-info {
          padding: 1rem;
        }

        .pet-info h3 {
          margin: 0 0 0.5rem 0;
        }

        .pet-info p {
          color: #666;
          margin: 0 0 1rem 0;
        }

        .view-details-btn {
          width: 100%;
          padding: 0.5rem;
          background: #BB8FF3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .view-details-btn:hover {
          background: #9B6FD3;
        }
      `}</style>
    </div>
  );
};

export default Listingpage;
