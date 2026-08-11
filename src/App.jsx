import { useState } from 'react'
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiPackage,
  FiServer,
  FiShoppingBag,
  FiTool,
} from 'react-icons/fi'
import './App.css'

const services = [
  { title: 'Frontend engineering', detail: 'React.js and Next.js interfaces', Icon: FiCode },
  { title: 'Backend systems', detail: 'APIs and backend services', Icon: FiDatabase },
  { title: 'Cloud & DevOps', detail: 'GCP, Docker, CI/CD', Icon: FiCloud },
]

const careerObjective = 'To leverage my strong foundation in computer engineering and my passion for software development to effectively contribute to a dynamic team. I am seeking a Software Developer role where I can apply my expertise in Java, C++, JavaScript, HTML, CSS, React.js, and problem solving skills to build innovative and efficient software solutions. The aim is to grow in a challenging and fast-paced environment while contributing meaningfully to innovative software development.'

const skillCategories = [
  { title: 'Programming Languages', items: ['C', 'C++', 'Java', 'Core Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Web Technologies', items: ['HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'React.js'] },
  { title: 'Backend & Frameworks', items: ['Node.js', 'Express.js', 'Spring Boot'] },
  { title: 'Databases & APIs', items: ['MongoDB', 'MySQL', 'RESTful APIs'] },
  { title: 'DevOps & Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma (Basics)'] },
  { title: 'Concepts', items: ['OOPs', 'MVC Architecture', 'Client-Server Communication', 'DSA', 'SDLC'] },
  { title: 'Soft Skills', items: ['Teamwork', 'Time Management', 'Communication', 'Coding Problem Solving', 'Adaptability', 'Learning New Skills'] },
]

const education = [
  {
    title: 'Pune Institute of Computer Technology, Pune - 411043',
    subtitle: 'Bachelor of Engineering in Computer Engineering',
    detail: 'GPA: 7.38 / 10',
  },
  {
    title: 'PDEA College, Hadapsar, Pune – 28',
    subtitle: 'Higher Secondary Certificate (12th)',
    detail: 'Percentage: 54.34%',
  },
  {
    title: 'Sadhana Vidyalaya, Hadapsar, Pune – 28',
    subtitle: 'Secondary School Certificate (10th)',
    detail: 'Percentage: 80.60%',
  },
]

const courses = [
  {
    title: 'Java Developer Course',
    org: 'Floating Minds InfoTech',
    period: 'Completed – 2023',
  },
  {
    title: 'Full Stack Java Developer Course',
    org: 'IT Vedant Institute Pvt. Ltd.',
    period: 'Aug 2024 – March 2025',
  },
]

const projectEntries = [
  {
    title: 'E-Commerce Website – HTML, CSS, JavaScript',
    summary: 'Responsive, interactive website with dynamic gallery and form validation. Clean UI/UX with CSS animations and smooth scrolling.',
    tech: 'HTML5, CSS3, JavaScript',
  },
  {
    title: 'Project Management Application in React.js with MUI',
    summary: 'Responsive UI using React.js and Material UI (MUI). Task creation, assignment, update, and deletion.',
    tech: 'Spring Boot, React.js, CSS, JavaScript',
  },
  {
    title: 'E-Commerce Website – React.js (SPA)',
    summary: 'SPA with modular components, React Router navigation, and state management. Fully responsive and performance optimized.',
    tech: 'React.js, JSX, JavaScript, CSS3, HTML5',
  },
]

const internships = [
  {
    title: 'Metapercept Technology Services LLP',
    role: 'Software Engineer Intern',
    period: 'Jan 2025 – Apr 2025',
    location: 'Pune, India',
    bullets: [
      'Developed responsive web interfaces with HTML5, CSS3, JavaScript, and React.js.',
      'Designed RESTful APIs using Spring Boot; collaborated with backend UI/UX teams.',
      'Used Git and GitHub for version control and teamwork.',
    ],
  },
  {
    title: 'Extensile Solution Pvt. Ltd.',
    role: 'Java Developer Intern',
    period: 'Aug 2023 – Mar 2024',
    location: 'Pune, India',
    bullets: [
      'Developed backend services using Core Java, J2EE, and Spring Boot.',
      'Created REST APIs for business logic and database operations.',
      'Participated in code reviews, debugging, and performance improvements.',
    ],
  },
  {
    title: 'Guru Software Solution',
    role: 'Web Developer Intern',
    period: 'Mar 2023 – May 2023',
    location: 'Pune, India',
    bullets: [
      'Built and maintained responsive front-end components with HTML5, CSS3, JavaScript.',
      'Improved design and gained version control experience using Git/GitHub.',
    ],
  },
]

const publications = [
  {
    title: 'Decentralized E-Voting Systems Based on the Blockchain Technology and its Framework',
    publisher: 'International Journal of Creative Research Thoughts (IJCRT)',
    id: 'IJCRT2310554',
    date: 'Aug 2024',
    summary: 'Explores a decentralized framework using blockchain to ensure secure and transparent e-voting systems.',
  },
  {
    title: 'Blockchain-Based Electronic Voting System: Secure and Transparent Implementation for Trustworthy Electoral Processes',
    publisher: 'UGC CARE Journal',
    id: 'BTH/2536',
    date: 'Aug 2024',
    summary: 'Focuses on implementing blockchain in electoral systems to enhance transparency, immutability, and security.',
  },
]

const certifications = [
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild', note: 'Issued May 12, 2026', image: '/IBM.JPG' },
  { title: 'Master in Full Stack Web Development with Java', issuer: 'I.T. Vedant Institute', note: 'Course completed March 24, 2025', image: '/cce_certificate18677___1767338049.jpg' },
  { title: 'What Is Generative AI?', issuer: 'LinkedIn Learning', note: 'Generative AI foundations', image: '/cert-generative-ai.svg' },
  { title: 'Node.js Essential Training', issuer: 'LinkedIn Learning', note: 'Core Node.js concepts', image: '/cert-nodejs.svg' },
]

const testimonials = [
  { id: 'founder', name: 'Portfolio direction', role: 'Personal brand focus', quote: 'I build practical full-stack products with clean UI.' },
  { id: 'studio', name: 'Technical range', role: 'Cross-stack execution', quote: 'Work spans React, Next.js, Python, Java, and GCP.' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sathe-mahesh', Icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahesh-sathe-855a96293/', Icon: FiLinkedin },
]

const resumeContactEmail = 'sathemahesh8459@gmail.com'
const resumeDownloadUrl = '/Mahesh_Sathe_Resume_new.docx'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Career Objective', href: '#resume' },
  { label: 'Resume', href: '#resume', download: true },
  { label: 'Contact', href: '#contact' },
]

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || ''

function ContactForm({ onSubmitMessage }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  const validateName = (v) => {
    if (!v || v.trim().length < 2) return 'Please enter your name (2+ characters).'
    if (!/^[A-Za-z\s'-]+$/.test(v.trim())) return 'Name may contain letters, spaces, apostrophes or hyphens only.'
    return ''
  }
  const validateEmail = (v) => {
    if (!v) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v)) return 'Please enter a valid email address.'
    return ''
  }
  const validateMessage = (v) => (!v || v.trim().length < 10 ? 'Message should be at least 10 characters.' : '')

  const runValidation = () => {
    const n = validateName(name)
    const e = validateEmail(email)
    const m = validateMessage(message)
    setErrors({ name: n, email: e, message: m })
    return !n && !e && !m
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!runValidation()) {
      setStatus('error')
      setSubmitMessage('Please fill your details in the above section before sending.')
      onSubmitMessage('Please fill your details in the above section before sending.', 'error')
      return
    }

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`)
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
      window.location.href = `mailto:sathemahesh8459@gmail.com?subject=${subject}&body=${body}`
      onSubmitMessage('Message ready to send via email.', 'success')
      return
    }
    setStatus('sending')
    setSubmitMessage('')
    onSubmitMessage('', '')
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name, email, message }) })
      if (res.ok) {
        setStatus('success')
        setSubmitMessage('Thanks — message sent.')
        onSubmitMessage('Thanks — message sent.', 'success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
        setSubmitMessage('Error sending message. Please try again.')
        onSubmitMessage('Error sending message. Please try again.', 'error')
      }
    } catch (err) {
      setStatus('error')
      setSubmitMessage('Error sending message. Please try again.')
      onSubmitMessage('Error sending message. Please try again.', 'error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-group">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => setErrors(s => ({ ...s, name: validateName(e.target.value) }))} className={errors.name ? 'error' : ''} placeholder="Your name" />
        {errors.name && <div className="field-error">{errors.name}</div>}
      </div>
      <div className="field-group">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => setErrors(s => ({ ...s, email: validateEmail(e.target.value) }))} className={errors.email ? 'error' : ''} placeholder="you@example.com" />
        {errors.email && <div className="field-error">{errors.email}</div>}
      </div>
      <div className="field-group">
        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} onBlur={(e) => setErrors(s => ({ ...s, message: validateMessage(e.target.value) }))} className={errors.message ? 'error' : ''} rows={5} placeholder="Tell me about your project" />
        {errors.message && <div className="field-error">{errors.message}</div>}
      </div>
      <button type="submit" className="primary-button">{status === 'sending' ? 'Sending...' : 'Send message'}</button>
      {submitMessage && (
        <div className={`notice ${status === 'success' ? 'success' : 'error'}`}>
          {submitMessage}
        </div>
      )}
    </form>
  )
}

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0].id)
  const [footerMessage, setFooterMessage] = useState('')
  const [footerMessageType, setFooterMessageType] = useState('')

  return (
    <div className="page-shell">
      <header className="topbar">
        <span className="brand" aria-label="Mahesh Sathe"><span className="brand-primary">Mahesh</span> <span className="brand-secondary">Sathe</span></span>
        <nav className="top-nav" aria-label="Primary">
          {navItems.map(i => (
            i.download ? (
              <button
                key={i.label}
                type="button"
                className="nav-link nav-button"
                onClick={() => {
                  const password = window.prompt('Enter the resume download password:');
                  if (password === 'Resume2026') {
                    const link = document.createElement('a')
                    link.href = resumeDownloadUrl
                    link.download = 'Mahesh_Sathe_Resume_new.docx'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  } else if (password !== null) {
                    window.alert('Incorrect password. Please contact Mahesh for access.');
                  }
                }}
              >
                <span className="nav-link-text">{i.label}</span>
              </button>
            ) : (
              <a key={i.label} href={i.href} className="nav-link"><span className="nav-link-text">{i.label}</span></a>
            )
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Full-stack developer • React • Next.js • AI/ML</span>
            <h1><span className="hero-name">Mahesh Sathe</span> builds <span className="gradient-text">full-stack products</span></h1>
            <p className="hero-text">I work across React.js, Next.js, Python, Java, Spring Boot, DevOps, GCP, and AI/ML.</p>
            <div className="hero-actions">
              <a href="#work" className="primary-button">See projects <span aria-hidden="true">→</span></a>
              <a href="#certifications-title" className="ghost-button">View gallery</a>
            </div>
            <ul className="service-list" id="services">
              {services.map(s => (
                <li key={s.title} className="service-card"><s.Icon className="service-icon" /><div><strong>{s.title}</strong><p>{s.detail}</p></div></li>
              ))}
            </ul>
          </div>
          <aside className="hero-panel">
            <div className="profile-card">
              <img src="/Mahesh_sathe_image_new.jpg" alt="Mahesh Sathe" className="profile-photo" />
              <div className="profile-caption">Mahesh Sathe • Full-stack developer</div>
            </div>
            <div className="hero-centerpiece">
              <div className="hero-center-header">
                <div>
                  <span>FEATURED PROJECT</span>
                  <strong>Full-stack, stable, and responsive web platforms</strong>
                </div>
              </div>
              <div className="hero-flow">
                <span>Code to cloud workflow</span>
                <span>React built interface</span>
                <span>Deploy at scale</span>
              </div>
            </div>
            <div className="hero-tags">
              <i>React</i>
              <i>Node.js</i>
              <i>Docker</i>
              <i>GCP</i>
            </div>
          </aside>
        </section>

        <section className="resume-section" id="resume">
          <div className="section-heading">
            <span className="eyebrow">Career Objective</span>
            <h2>Focused on building efficient software solutions in dynamic teams.</h2>
          </div>
          <div className="resume-row">
            <div className="resume-copy">
              <p className="resume-text">{careerObjective}</p>
            </div>
            <div className="resume-image-card">
              <img
                src="https://res.cloudinary.com/dthpnue1d/image/upload/v1762772845/AWS_Vs_Azure_Vs_GCP_Which_Cloud_Platform_is_Right_for_Your_Enterprise_Image_1_de19aafdbe.webp"
                alt="Cloud platform comparison"
                className="resume-banner-image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="skills-summary">
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-group">
                <strong>{category.title}</strong>
                <div className="skill-tag-list">
                  {category.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="certifications-section" aria-labelledby="certifications-title">
          <div className="section-heading">
            <span className="eyebrow">Certifications</span>
            <h2 id="certifications-title">Certificates and badges that support my learning track.</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map(c => (
              <article key={c.title} className="certificate-card"><img src={c.image} alt={c.title} className="certificate-image" loading="lazy" /><div className="certificate-copy"><span>{c.issuer}</span><strong>{c.title}</strong><p>{c.note}</p></div></article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Practical projects built with real-world technologies.</h2>
          </div>
          <div className="project-list">
            {projectEntries.map((project) => (
              <article key={project.title} className="project-card">
                <strong>{project.title}</strong>
                <p>{project.summary}</p>
                <span className="project-meta">Tech: {project.tech}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="section-heading">
            <span className="eyebrow">Internships</span>
            <h2>Work experience through hands-on development roles.</h2>
          </div>
          <div className="project-list">
            {internships.map((item) => (
              <article key={item.title} className="project-card">
                <span>{item.location} • {item.period}</span>
                <strong>{item.role} at {item.title}</strong>
                <ul>
                  {item.bullets.map((bullet) => (<li key={bullet}>{bullet}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="publications-section">
          <div className="section-heading">
            <span className="eyebrow">Publications</span>
            <h2>Research and published work.</h2>
          </div>
          <div className="publications-list">
            {publications.map((pub) => (
              <article key={pub.title} className="publication-card">
                <span>{pub.publisher} • {pub.date}</span>
                <h3>{pub.title}</h3>
                <strong>Paper ID: {pub.id}</strong>
                <p>{pub.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy-block">
            <span className="eyebrow">Let’s build</span>
            <h2>Want a React, Next.js, backend, or AI-powered project built with clean execution?</h2>
            <p className="contact-copy">Available for freelance work, internships, and full-stack collaboration. Reach out below.</p>
            <div className="contact-links">
              {socialLinks.map(s => (<a key={s.label} href={s.href} target="_blank" rel="noreferrer"><s.Icon /> <span>{s.label}</span></a>))}
            </div>
          </div>
          <div className="contact-form-section">
            <ContactForm onSubmitMessage={(message, type) => {
              setFooterMessage(message)
              setFooterMessageType(type)
            }} />
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-copy">
            <span className="eyebrow">Stay connected</span>
            <h2>Let’s make your next project the best one yet.</h2>
            <p>For new opportunities, freelance work, or a quick chat, email <a href="mailto:sathemahesh8459@gmail.com">sathemahesh8459@gmail.com</a> or use the form above.</p>
          </div>
          <div className="footer-actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setFooterMessage('Please fill your details in the above section before sending.')
                setFooterMessageType('error')
                window.location.href = 'mailto:sathemahesh8459@gmail.com'
              }}
            >
              Send Email
            </button>
            <a className="ghost-button" href="https://github.com/Sathe-mahesh" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
          {footerMessage && (
            <div className={`footer-notice ${footerMessageType === 'success' ? 'success' : 'error'}`}>
              {footerMessage}
            </div>
          )}
        </footer>
      </main>
    </div>
  )
}

export default App