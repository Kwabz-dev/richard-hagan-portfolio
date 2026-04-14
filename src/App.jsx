import './App.css'

const strengths = [
  {
    title: 'Website development',
    text: 'Built and maintained company websites with attention to responsiveness, usability, and clear presentation.',
  },
  {
    title: 'Technical support and systems work',
    text: 'Supports day-to-day IT operations while contributing to practical internal systems that improve workflow.',
  },
  {
    title: 'Cloud and CRM foundation',
    text: 'Salesforce Administrator certified, with growing interest in cloud technologies, cybersecurity, and distributed systems.',
  },
]

const featuredWork = [
  {
    eyebrow: 'Asabea Engineering Limited',
    title: 'Company Website Design and Development',
    summary:
      'Designed and developed the company’s official website, shaping its digital identity and online presence through consultation, implementation, and responsive design decisions.',
    stack: 'Web development, responsive design, stakeholder consultation',
    note: 'Role: Web Developer | February 2024',
  },
  {
    eyebrow: 'Asabea Engineering Limited',
    title: 'Construction Management System',
    summary:
      'Currently contributing to the development of a construction management system while also handling website updates and feature improvements.',
    stack: 'System support, feature development, internal tooling',
    note: 'Role: Tech Support | March 2025 to Present',
  },
  {
    eyebrow: 'GIT Plus',
    title: 'Junior Developer Internship',
    summary:
      'Contributed to testing, documentation, feature refinement, and technical research to support ongoing internal and client-facing development work.',
    stack: 'Testing, documentation, tool research',
    note: 'Role: Junior Developer Intern | October 2022 to December 2022',
  },
]

const processSteps = [
  'Understand the technical requirement through consultation and clear problem framing.',
  'Build or improve the solution with attention to usability, responsiveness, and maintainability.',
  'Support the final system through updates, documentation, and practical operational follow-through.',
]

function App() {
  return (
    <div className="site-shell">
      <div className="background-orb background-orb-left" aria-hidden="true" />
      <div className="background-orb background-orb-right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Richard Hagan home">
          <span className="brand-mark">RH</span>
          <span className="brand-text">Richard Hagan</span>
        </a>

        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero panel reveal" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Richard Antwi Hagan</p>
            <h1>Software developer with a practical systems mindset.</h1>
            <p className="hero-text">
              Motivated and adaptable Computer Science graduate with experience
              in software development, website delivery, technical support, and
              systems thinking. Passionate about cybersecurity, cloud
              computing, and advanced distributed systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work
              </a>
              <a className="button button-secondary" href="#contact">
                Start a conversation
              </a>
            </div>

            <ul className="hero-tags" aria-label="Core strengths">
              <li>Software development</li>
              <li>Website delivery</li>
              <li>IT operations</li>
              <li>Salesforce Admin</li>
            </ul>
          </div>

          <aside className="hero-card">
            <p className="mini-label">Current focus</p>
            <div className="metric-block">
              <strong>Current role</strong>
              <span>Tech Support at Asabea Engineering Limited, Accra</span>
            </div>
            <div className="metric-block">
              <strong>Education</strong>
              <span>BTech and HND in Computer Science from Accra Technical University</span>
            </div>
            <div className="metric-block">
              <strong>Certification</strong>
              <span>Salesforce Administrator with hands-on interest in cloud and CRM systems</span>
            </div>
          </aside>
        </section>

        <section className="panel reveal" id="strengths">
          <div className="section-heading">
            <p className="eyebrow">Core strengths</p>
            <h2>Work grounded in real delivery.</h2>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="work">
          <div className="section-heading">
            <p className="eyebrow">Experience highlights</p>
            <h2>Recent work across web delivery and technical support.</h2>
            <p>
              These highlights are based directly on your CV and show the type
              of responsibility you have already handled in live environments.
            </p>
          </div>

          <div className="project-grid">
            {featuredWork.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-stack">{project.stack}</p>
                <p className="project-note">{project.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel split-panel reveal" id="about">
          <div>
            <p className="eyebrow">About</p>
            <h2>Computer Science graduate building practical digital solutions.</h2>
          </div>

          <div className="about-copy">
            <p>
              I am a motivated and adaptable software developer with a strong
              foundation in analytical problem-solving, software development,
              and systems thinking. My work so far has combined web delivery,
              internal support, and technical collaboration.
            </p>
            <p>
              I earned an HND in Computer Science from Accra Technical
              University between 2020 and 2023 and completed a BTech in
              Computer Science there from 2023 to 2025. I also volunteered at
              West Africa Dreaming in Accra in 2025, supporting event
              coordination and participant assistance in a technology-driven
              community event.
            </p>
          </div>
        </section>

        <section className="panel reveal" id="process">
          <div className="section-heading">
            <p className="eyebrow">Working style</p>
            <h2>Clear, practical, and team-oriented.</h2>
          </div>

          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="panel contact-panel reveal" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to software and technology opportunities.</h2>
            <p>
              Email me at haganrichard42@gmail.com or call +233597330503. If
              you want, I can also add your LinkedIn profile and any project
              links once you send them.
            </p>
          </div>

          <a className="button button-primary" href="mailto:haganrichard42@gmail.com">
            Email Richard
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
