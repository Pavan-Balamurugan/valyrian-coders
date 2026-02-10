import './Contact.css'

export default function Contact() {
  return (
    <section className="contact reveal">
      <div className="contact-inner">
        <h2>Contact</h2>

        <p className="contact-lead">
          Have a project in mind or need reliable engineering support?
        </p>

        <a className="contact-email" href="mailto:valyriancoders@gmail.com">
          valyriancoders@gmail.com
        </a>

        <div className="contact-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
