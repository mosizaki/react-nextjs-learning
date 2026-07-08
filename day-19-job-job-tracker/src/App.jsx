import { useState, useEffect } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <header className='app-header'>
        <div>
          <h1>Job Tracker</h1>
          <p>Track your job applications in one place</p>
        </div>

        
          <button className='danger-button'>
            Clear All
          </button>
        
      </header>

      <section className='stats-grid'>
        <div className="stat-card">
          <span>total</span>
          <strong>1</strong>
        </div>

        <div className="stat-card">
          <span>applied</span>
          <strong>1</strong>
        </div>

        <div className="stat-card">
          <span>Interview</span>
          <strong>1</strong>
        </div>

        <div className="stat-card">
          <span>Offer</span>
          <strong>1</strong>
        </div>

        <div className="stat-card">
          <span>Rejected</span>
          <strong>1</strong>
        </div>
      </section>

      <section className="form-section">
        <h2>Add New Job</h2>

        <form className='job-form'>
          <div className="form-group">
            <label htmlFor="position">Posiotion *</label>
            <input 
              type="text" 
              id='position'
              placeholder='Example: FrontEnd Developer'
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Example: Remote"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status">
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date Applied</label>
            <input id="date" type="date" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              placeholder="Example: Follow up next week..."
            />
          </div>

          <div className="form-actions full-width">
            <button type="submit">
              Add Job
            </button>
          </div>
        </form>
      </section>

      <section className="controls-section">
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search company, position, or location..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="filter">Filter by status</label>
          <select id="filter">
            <option value="all">All</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sort">Sort</label>
          <select id="sort">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="company-a-z">Company A-Z</option>
          </select>
        </div>
      </section>

      <section className="jobs-section">
        <div className="section-header">
          <h2>Applications</h2>
          <p>Showing 1 of 1</p>
        </div>

        <div className="jobs-list">
          <article className="job-card">
            <div className="job-card-header">
              <div>
                <h3>Frontend Developer</h3>
                <p>Google</p>
              </div>

              <span className="status-badge applied">
                applied
              </span>
            </div>

            <div className="job-meta">
              <span>📍 Remote</span>
              <span>📅 2026-07-08</span>
            </div>

            <p className="job-notes">
              Applied through LinkedIn. Follow up next week.
            </p>

            <div className="job-card-actions">
              <select defaultValue="applied">
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>

              <button>Edit</button>

              <button className="danger-button">
                Delete
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App
