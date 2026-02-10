import './Projects.css'

export default function Projects() {
  return (
    <section className="projects reveal">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
          A few real-world projects we have worked on while learning and
          building production-ready systems.
        </p>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">

            {/* FRONT */}
            <div className="flip-card-front">
              <h3>Madurai Solo Drop Taxi</h3>
            </div>

            {/* BACK */}
            <div className="flip-card-back">
              <h3>Madurai Solo Drop Taxi</h3>
              <p className="project-desc">
                A live taxi booking website built for a local travel service,
                enabling easy one-way taxi bookings.
              </p>
              <p className="project-tech">
                React · Node.js · JavaScript · Hosting
              </p>
              <div className="project-links">
                <a
                  href="https://maduraisolodroptaxi.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Project 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">

            <div className="flip-card-front">
              <h3>CampusEats</h3>
            </div>

            <div className="flip-card-back">
              <h3>CampusEats</h3>
              <p className="project-desc">
                A smart food court application designed to reduce queues
                and improve ordering efficiency inside a campus.
              </p>
              <p className="project-tech">
                ReactNative · Firebase · UI Design
              </p>
              <div className="project-links">
                <a href="#">Case Study</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
