import './Skills.css'

export default function Skills() {
  return (
    <section className="skills reveal">
      <div className="skills-header">
        <h2>Expertise</h2>
        <p>
          Practical skills developed through real projects, learning, and hands-on implementation.

        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Web</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>SPA Architecture</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>Authentication</li>
            <li>Scalable Systems</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Data</h3>
          <ul>
            <li>Python</li>
            <li>Data Pipelines</li>
            <li>ML Integration</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Cloud Deployment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
