import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




// import { useState } from 'react';

import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

function App() {

  // Initial candidate data
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      role: "Python Developer",
      email: "rahul@gmail.com",
      phone: "9876543210",
      status: "Shortlisted"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "React Developer",
      email: "priya@gmail.com",
      phone: "9876543211",
      status: "Interview"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      role: "Java Developer",
      email: "arjun@gmail.com",
      phone: "9876543212",
      status: "Selected"
    },
    {
      id: 4,
      name: "Sneha Rao",
      role: "Data Analyst",
      email: "sneha@gmail.com",
      phone: "9876543213",
      status: "Applied"
    }
  ]);

  const [jobs] = useState([
    {
      id: 1,
      title: "Python Developer",
      department: "Engineering",
      applicants: 25
    },
    {
      id: 2,
      title: "React Developer",
      department: "Frontend",
      applicants: 18
    },
    {
      id: 3,
      title: "Data Analyst",
      department: "Analytics",
      applicants: 12
    }
  ]);

  // Form visibility
  const [showForm, setShowForm] = useState(false);

  // Search functionality
  const [search, setSearch] = useState("");

  // Form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Add candidate
  function handleSubmit(event) {
    event.preventDefault();

    const newCandidate = {
      id: Date.now(),
      ...formData,
      status: "Applied"
    };

    setCandidates([...candidates, newCandidate]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      role: ""
    });

    setShowForm(false);
  }

  // Search candidates
  const filteredCandidates = candidates.filter((candidate) =>
    `${candidate.name} ${candidate.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Dashboard statistics
  const totalCandidates = candidates.length;
  const activeJobs = jobs.length;

  const interviews = candidates.filter(
    (candidate) => candidate.status === "Interview"
  ).length;

  const selected = candidates.filter(
    (candidate) => candidate.status === "Selected"
  ).length;

  const stats = [
    {
      title: "Total Candidates",
      value: totalCandidates,
      icon: "👥"
    },
    {
      title: "Active Jobs",
      value: activeJobs,
      icon: "💼"
    },
    {
      title: "Interviews",
      value: interviews,
      icon: "📅"
    },
    {
      title: "Selected",
      value: selected,
      icon: "🎯"
    }
  ];

  return (
    <div className="app-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard-content">

          <h1>Recruitment Dashboard</h1>

          <p className="subtitle">
            Welcome back! Here is your recruitment overview.
          </p>

          {/* Statistics */}

          <div className="stats-container">

            {stats.map((stat) => (
              <div className="stat-card" key={stat.title}>

                <span className="stat-icon">
                  {stat.icon}
                </span>

                <div>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>
                </div>

              </div>
            ))}

          </div>

          {/* Candidate Management */}

          <div className="section">

            <div className="section-header">

              <h2>Candidate Management</h2>

              <button
                className="add-button"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "Close Form" : "+ Add Candidate"}
              </button>

            </div>

            {/* Candidate Registration Form */}

            {showForm && (

              <form
                className="candidate-form"
                onSubmit={handleSubmit}
              >

                <h3>Register New Candidate</h3>

                <div className="form-grid">

                  <input
                    type="text"
                    name="name"
                    placeholder="Candidate Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    required
                  />

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Job Role</option>
                    <option value="Python Developer">
                      Python Developer
                    </option>
                    <option value="React Developer">
                      React Developer
                    </option>
                    <option value="Java Developer">
                      Java Developer
                    </option>
                    <option value="Data Analyst">
                      Data Analyst
                    </option>
                  </select>

                </div>

                <button type="submit" className="add-button">
                  Save Candidate
                </button>

              </form>

            )}

            {/* Search */}

            <input
              type="text"
              className="search-input"
              placeholder="Search by candidate name or role..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {/* Candidates Table */}

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Applied Role</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredCandidates.length > 0 ? (

                    filteredCandidates.map((candidate) => (

                      <tr key={candidate.id}>

                        <td>{candidate.name}</td>

                        <td>{candidate.role}</td>

                        <td>{candidate.email}</td>

                        <td>
                          <span className={
                            `status ${candidate.status.toLowerCase()}`
                          }>
                            {candidate.status}
                          </span>
                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>
                      <td colSpan="4">
                        No candidates found.
                      </td>
                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

          {/* Active Jobs */}

          <div className="section">

            <h2>Active Job Openings</h2>

            <div className="jobs-container">

              {jobs.map((job) => (

                <div className="job-card" key={job.id}>

                  <h3>{job.title}</h3>

                  <p>{job.department}</p>

                  <h2>{job.applicants}</h2>

                  <small>Applicants</small>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
