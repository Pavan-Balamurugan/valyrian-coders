export default function Projects() {
  return (
    <section>
      <h2>Selected Work</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '48px' }}>
        <div>
          <h3>Fintech Analytics Dashboard</h3>
          <p>High-performance analytics platform for financial insights.</p>
          <p>React · Node · PostgreSQL</p>
          <a href="#">GitHub</a> · <a href="#">Live Demo</a>
        </div>
        <div>
          <h3>Enterprise Automation Suite</h3>
          <p>Internal tooling reducing operational overhead.</p>
          <p>React · API Services · Cloud</p>
          <a href="#">GitHub</a> · <a href="#">Live Demo</a>
        </div>
        <div>
          <h3>Data-Driven Marketing Engine</h3>
          <p>Personalization engine for customer targeting.</p>
          <p>Python · ML · Web Integration</p>
          <a href="#">GitHub</a> · <a href="#">Live Demo</a>
        </div>
      </div>
    </section>
  )
}
