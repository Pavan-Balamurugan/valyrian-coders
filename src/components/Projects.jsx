import './Projects.css'

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Selected Work</h2>
        <p>
          A focused set of projects demonstrating engineering quality,
          performance, and business impact.
        </p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Fintech Analytics Dashboard</h3>
          <p className="project-desc">
            High-performance analytics platform enabling real-time financial
            insights and reporting.
          </p>

          <p className="project-tech">
            React · Node.js · PostgreSQL
          </p>

          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Enterprise Automation Suite</h3>
          <p className="project-desc">
            Internal automation tools that reduced operational overhead and
            improved workflow efficiency.
          </p>

          <p className="project-tech">
            React · API Services · Cloud Infrastructure
          </p>

          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Data-Driven Marketing Engine</h3>
          <p className="project-desc">
            Personalization engine leveraging customer data to drive targeted
            marketing campaigns.
          </p>

          <p className="project-tech">
            Python · Machine Learning · Web Integration
          </p>

          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
