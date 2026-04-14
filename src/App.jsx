import './App.css'

const strengths = [
  {
    title: 'Frontend that feels deliberate',
    text: 'Interfaces with a clear visual voice, responsive behavior, and enough restraint to stay credible.',
  },
  {
    title: 'Practical product thinking',
    text: 'Pages and flows shaped around business goals, not just aesthetics or trends.',
  },
  {
    title: 'Clean delivery',
    text: 'Maintainable code, sensible structure, and deployment paths that do not break the moment a handoff happens.',
  },
]

const featuredWork = [
  {
    eyebrow: 'Case study template',
    title: 'Mission-led Website Refresh',
    summary:
      'A content-heavy website reorganized into clear sections, stronger calls to action, and lighter frontend performance.',
    stack: 'React, Vite, deployment workflow',
    note: 'Swap this card with a real nonprofit or client project once you share the details.',
  },
  {
    eyebrow: 'Case study template',
    title: 'Personal Brand Portfolio',
    summary:
      'A portfolio system designed to present work, capability, and credibility without looking like a generic clone.',
    stack: 'Component design, layout systems, responsive UI',
    note: 'This site can become that live example once we replace the placeholder copy with your real background.',
  },
  {
    eyebrow: 'Case study template',
    title: 'Operations Dashboard Concept',
    summary:
      'A dashboard-style interface focused on clarity, hierarchy, and faster scanning for recurring reporting tasks.',
    stack: 'Information architecture, data UI, interaction design',
    note: 'Use this slot for a product, analytics, or internal tooling project if that fits your work better.',
  },
]

const processSteps = [
  'Frame the problem and decide what the page needs to achieve.',
  'Design a visual direction that supports the message instead of distracting from it.',
  'Build the frontend cleanly, test responsiveness, and keep deployment simple.',
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
            <p className="eyebrow">Portfolio for Richard Hagan</p>
            <h1>Thoughtful digital work with a sharp public face.</h1>
            <p className="hero-text">
              This starter portfolio is built to present you as someone who can
              design, build, and ship work with taste. It is intentionally lean,
              modern, and easy to personalize.
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
              <li>Frontend build</li>
              <li>UI direction</li>
              <li>Content structure</li>
              <li>Deployment ready</li>
            </ul>
          </div>

          <aside className="hero-card">
            <p className="mini-label">Current focus</p>
            <div className="metric-block">
              <strong>Clear websites</strong>
              <span>for people, brands, and mission-led teams</span>
            </div>
            <div className="metric-block">
              <strong>Strong handoff</strong>
              <span>clean code, simple edits, straightforward deployment</span>
            </div>
            <div className="metric-block">
              <strong>Portfolio note</strong>
              <span>Replace the sample sections below with your real wins.</span>
            </div>
          </aside>
        </section>

        <section className="panel reveal" id="strengths">
          <div className="section-heading">
            <p className="eyebrow">What this portfolio signals</p>
            <h2>Credibility before complexity.</h2>
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
            <p className="eyebrow">Selected work</p>
            <h2>Three strong placeholders to replace with real projects.</h2>
            <p>
              For now, these cards act as structure. Once you give me your real
              projects, I can turn this into a proper portfolio instead of a
              polished shell.
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
            <h2>Built to be edited fast.</h2>
          </div>

          <div className="about-copy">
            <p>
              Right now this site avoids fake biography details. That is the
              correct move. A portfolio becomes convincing when the work,
              process, and language are yours, not when it invents a history you
              never had.
            </p>
            <p>
              The structure is already in place: introduction, featured work,
              capability, process, and contact. Once you share your real role,
              tools, links, and project wins, I can make it specific.
            </p>
          </div>
        </section>

        <section className="panel reveal" id="process">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>Simple, direct, and shippable.</h2>
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
            <h2>Ready to turn this into your real portfolio.</h2>
            <p>
              Send your actual bio, project links, CV details, and preferred
              contact method. I will replace the placeholders and push a live
              version to GitHub and Vercel.
            </p>
          </div>

          <a className="button button-primary" href="mailto:hello@example.com">
            Replace with your email
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
