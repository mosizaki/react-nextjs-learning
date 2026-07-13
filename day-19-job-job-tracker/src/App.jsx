import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      location: "Remote",
      status: "applied",
      date: "2026-07-08",
      notes: "Applied through LinkedIn. Follow up next week.",
    },
    {
      id: 2,
      company: "Netflix",
      position: "React Developer",
      location: "Los Angeles, CA",
      status: "interview",
      date: "2026-07-10",
      notes: "Recruiter call scheduled for Friday.",
    },
    {
      id: 3,
      company: "Shopify",
      position: "Junior Frontend Engineer",
      location: "Remote",
      status: "rejected",
      date: "2026-07-12",
      notes: "Rejected after resume screening.",
    },
  ])

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    status: "applied",
    date: "",
    notes: ""
  })

  const [formError, setFormError] = useState("")

  const [editingJobId, setEditingJobId] = useState(null)

  const [searchText, setSearchText] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortOption, setSortOption] = useState("newest")



  const totalJobs = jobs.length

  const appliedCount = jobs.filter((job) => job.status === "applied").length

  const interviewCount = jobs.filter((job) => job.status === "interview").length

  const offerCount = jobs.filter((job) => job.status === "offer").length

  const rejectedCount = jobs.filter((job) => job.status === "rejected").length

  function handleInputChange(event) {
    const { name, value } = event.target 
    
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [name]: value,
      }
    })

    setFormError("")
  }

  function resetForm() {
    setFormData({
      company: "",
      position: "",
      location: "",
      status: "applied",
      date: "",
      notes: "",
    })

    setEditingJobId(null)
    setFormError("")
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (formData.company.trim() === "" || formData.position.trim() === "") {
      setFormError("Company and position are required!")
      return
    }

    if (editingJobId !== null) {
      setJobs((currentJobs) => {
        return currentJobs.map((job) => {
          if (job.id === editingJobId) {
            return {
              ...job,
              ...formData,
            }
          }

          return job
        })
      })

      setFormError("")
      resetForm()
      return
    }

    const newJob = {
      id: Date.now(),
      ...formData,
    }

    setJobs((currentJobs) => {
      return [newJob, ...currentJobs]
    })

    setFormError("")
    resetForm()
  }

  function handleDeleteJob(jobId) {
    setJobs((currentJobs) => (
      currentJobs.filter((job) => job.id !== jobId)
    ))

    if (editingJobId === jobId) {
      resetForm()
    }
  }

  function handleEditJob(job) {
    setEditingJobId(job.id)

    setFormData({
      company: job.company,
      position: job.position,
      location: job.location,
      status: job.status,
      date: job.date,
      notes: job.notes,
    })

    setFormError("")
  }

  function handleStatusChange(jobId, newStatus) {
    setJobs((currentJobs) => {
      return currentJobs.map((job) => {
        if (job.id === jobId) {
          return {
            ...job, 
            status: newStatus,
          }
        }

        return job
      })
    })

    if (editingJobId === jobId) {
      setFormData ((currentFormData) => {
        return {
          ...currentFormData,
          status: newStatus,
        }
      })
    }
  }

  const visibleJobs = jobs
    .filter((job) => {
      const searchMatches = 
        job.company.toLowerCase().includes(searchText.toLowerCase()) ||
        job.position.toLowerCase().includes(searchText.toLowerCase()) ||
        job.location.toLowerCase().includes(searchText.toLowerCase())

      const statusMatches = 
        statusFilter === "all" || job.status === statusFilter

      return searchMatches && statusMatches
    })
    .sort((a,b) => {
      if (sortOption === "newest") {
        return b.id - a.id
      }

      if (sortOption === "oldest") {
        return a.id - b.id
      }

      if (sortOption === "company-a-z") {
        return a.company.localeCompare(b.company)
      }

      return 0
    })

  function handleRestControls() {
    setSearchText("")
    setStatusFilter("all")
    setSortOption("newest")
  }

  function handleClearAllJobs() {
    const confirmed = window.confirm(
      "Area you sure you want to delete all job applicatins?"
    )

    if(!confirmed) {
      return
    }


    setJobs([])
    resetForm()
    handleRestControls()
  }

  const hasActiveControls = 
    searchText !== "" || statusFilter !== "all" || sortOption !== "newest"

  return (
    <div className='app'>
      <header className='app-header'>
        <div>
          <h1>Job Tracker</h1>
          <p>Track your job applications in one place</p>
        </div>

        
          {jobs.length > 0 && (
            <button className='danger-button' onClick={handleClearAllJobs}>
              Clear All
            </button>
          )}
        
      </header>

      <section className='stats-grid'>
        <div className="stat-card">
          <span>total</span>
          <strong>{totalJobs}</strong>
        </div>

        <div className="stat-card">
          <span>applied</span>
          <strong>{appliedCount}</strong>
        </div>

        <div className="stat-card">
          <span>Interview</span>
          <strong>{interviewCount}</strong>
        </div>

        <div className="stat-card">
          <span>Offer</span>
          <strong>{offerCount}</strong>
        </div>

        <div className="stat-card">
          <span>Rejected</span>
          <strong>{rejectedCount}</strong>
        </div>
      </section>

      <section className="form-section">
        <h2>{editingJobId === null ? "Add New Job" : "Edit Job"}</h2>

        {formError && <p className='form-error'>{formError}</p>}

        {editingJobId !== null && (
          <p className='edit-mode-message'>
            You are editing an existing job. Click Save Changes to update it.
          </p>
        )}

        <form className='job-form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company">Company *</label>
            <input
              id="company"
              type="text"
              placeholder="Example: Google"
              name='company'
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Posiotion *</label>
            <input 
              type="text" 
              id='position'
              placeholder='Example: FrontEnd Developer'
              name='position'
              value={formData.position}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Example: Remote"
              name='location'
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" name='status' value={formData.status} onChange={handleInputChange}>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date Applied</label>
            <input id="date" type="date" name='date' value={formData.date} onChange={handleInputChange}/>
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              placeholder="Example: Follow up next week..."
              name='notes'
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-actions full-width">
            <button type="submit">
              {editingJobId === null ? "Add Job" : "Save Changes"}

              {editingJobId !== null && (
                <button
                  type='button'
                  className='secondary-button'
                  onClick={resetForm}
                >
                  Cancel Edit
                </button>
              )}
            </button>
          </div>
        </form>
      </section>

      <section className="debug-section">
        <h2>Form Data Preview</h2>

        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </section>

      <section className="controls-section">
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search company, position, or location..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="filter">Filter by status</label>
          <select 
            id="filter"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sort">Sort</label>
          <select 
            id="sort"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="company-a-z">Company A-Z</option>
          </select>
        </div>

        {hasActiveControls && (
          <div className="form-group">
            <label>Reset</label>

            <button 
              type='button'
              className='secondary-button'
              onClick={handleRestControls}
            >
              Resest Filters
            </button>
          </div>
        )}
      </section>

      <section className="jobs-section">
        <div className="section-header">
          <h2>Applications</h2>
          <p>Showing {visibleJobs.length} of {jobs.length}</p>
        </div>

        {jobs.length === 0 && (
          <div className="empty-state">
            <h3>No jobs yet</h3>
            <p>Add your first job application using the form above!</p>
          </div>
        )}

        {jobs.length > 0 && visibleJobs.length === 0 && (
          <div className="empty-state">
            <h3>No matching jobs</h3>
            <p>Try changing your search, filter, or sort option.</p>
          </div>
        )}

        {visibleJobs.length > 0 && (
          <div className="jobs-list">
            {visibleJobs.map((job) => (
              <article className='job-card' key={job.id}>
                <div className='job-card-header'>
                  <div>
                    <h3>{job.position}</h3>
                    <p>{job.company}</p>
                  </div>

                  <span className={`status-badge ${job.status}`}>
                    {job.status}
                  </span>
                </div>

                <div className="job-meta">
                  {job.location && <span>📍 {job.location}</span>}
                  {job.date && <span>📅 {job.date}</span>}
                </div>

                {job.notes && (
                  <p className='job-notes'>
                    {job.notes}
                  </p>
                )}

                <div className="job-card-actions">
                  <select 
                    defaultValue={job.status} 
                    onChange={(event) => handleStatusChange(job.id, event.target.value)}
                  >
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                  </select>

                  <button onClick={() => handleEditJob(job)}>
                    Edit
                  </button>

                  <button className='danger-button' onClick={() => handleDeleteJob(job.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default App
