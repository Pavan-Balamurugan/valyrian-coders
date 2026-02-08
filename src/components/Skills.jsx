export default function Skills() {
  return (
    <section>
      <h2>Expertise</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px', gap: '32px' }}>
        <div>
          <h3>Web</h3>
          <p>React, Vite, SPA Architecture, Performance Optimization</p>
        </div>
        <div>
          <h3>Backend</h3>
          <p>Node.js, REST APIs, Authentication, Scalable Systems</p>
        </div>
        <div>
          <h3>Data</h3>
          <p>Python, Data Pipelines, ML Integration</p>
        </div>
        <div>
          <h3>Tools</h3>
          <p>Git, Docker, Cloud Deployment</p>
        </div>
      </div>
    </section>
  )
}
