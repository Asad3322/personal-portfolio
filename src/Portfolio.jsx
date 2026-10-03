import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiArrowRight, FiCode, FiLayers, FiCpu } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb } from 'react-icons/si';
import portrait from './components/assets/asad-portrait.png';
import { projects, categories } from './data/projects';
import { linkedInUrl } from './data/profile';
import useSectionReveals from './useSectionReveals';
import './portfolio.css';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Asad3322', Icon: FaGithub },
  { name: 'LinkedIn', href: linkedInUrl, Icon: FaLinkedinIn },
];

function SocialLinks() {
  return <div className="social-links">{socialLinks.map(({ name, href, Icon }) =>
    <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /></a>
  )}</div>;
}

function Hero() {
  const technologies = [['React', FaReact], ['Next.js', SiNextdotjs], ['Node.js', FaNodeJs], ['TypeScript', SiTypescript], ['MongoDB', SiMongodb]];
  return <>
    <section className="section hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">MUHAMMAD ASAD</p>
        <h1>Hi! I’m<br />Muhammad Asad.</h1>
        <h2>Full-Stack Developer</h2>
        <p className="hero-description">I build websites, business apps, SaaS products, and AI integrations. Thoughtful interfaces, practical features, and the systems that bring them together.</p>
        <div className="actions">
          <a className="button primary" href="#projects">Explore my work ↗</a>
          <SocialLinks />
        </div>
      </div>
      <div className="hero-portrait">
        <div className="stripe-disc" aria-hidden="true" />
        <span className="orb orb-one" aria-hidden="true" />
        <span className="orb orb-two" aria-hidden="true" />
        <img src={portrait} alt="Muhammad Asad" width="427" height="585" fetchPriority="high" />
      </div>
    </section>
    <div className="technology-band" aria-label="Technologies I work with">
      <div>{technologies.map(([name, Icon]) => <span key={name}><Icon aria-hidden="true" />{name}</span>)}</div>
    </div>
  </>;
}

function About() {
  return <section className="section about-section" id="about">
    <div className="about-visual">
      <span className="decorative-ring" aria-hidden="true" />
      <div className="about-portrait"><img src={portrait} alt="Muhammad Asad — Full-Stack Developer" width="427" height="585" loading="lazy" /></div>
    </div>
    <div className="about-copy">
      <p className="eyebrow">ABOUT ME</p>
      <h2>From your idea to<br /><span>a working product.</span></h2>
      <p>I’m Muhammad Asad, a Full-Stack Developer based in Kasur, Punjab. I work across React interfaces, Node.js APIs, and data-driven applications.</p>
      <p>My public work spans ecommerce, point of sale, dispatch operations, and AI chat interfaces. I enjoy turning a practical idea into a clear, usable experience.</p>
      <div className="capabilities" aria-label="Development focus">
        <div><FiCode aria-hidden="true" /><strong>Websites</strong><span>Frontend experiences</span></div>
        <div><FiLayers aria-hidden="true" /><strong>Business apps</strong><span>Full-stack workflows</span></div>
        <div><FiCpu aria-hidden="true" /><strong>AI integrations</strong><span>Connected interfaces</span></div>
      </div>
      <a className="button primary" href="/#contact">Get in touch <FiArrowRight aria-hidden="true" /></a>
      <a className="about-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
    </div>
    <span className="about-ring" aria-hidden="true" />
  </section>;
}

function ProjectSection() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter(p => filter === 'All' || p.category === filter);
  return <div className="project-background"><section className="section" id="projects">
    <div className="section-heading">
      <div><p className="eyebrow">MY WORK</p><h2>Recent <span>projects.</span></h2></div>
      <p>Business tools, web experiences,<br />and experiments along the way.</p>
    </div>
    <div className="filters" aria-label="Project categories">{categories.map(c =>
      <button key={c} aria-pressed={c === filter} onClick={() => setFilter(c)}>{c}</button>
    )}</div>
    <p className="project-count" role="status">{visible.length} projects · {filter}</p>
    <div className="project-grid" key={filter}>{visible.map((p, i) => <article className="project-card" key={p.id}>
      <div className={`thumbnail tone-${i % 4}`}>
        {p.image ? <img src={p.image} alt={`${p.name} application screenshot`} loading="lazy" /> : <>
          <span>{p.category.toUpperCase()} / {p.stack[0].toUpperCase()}</span>
          <strong>{p.name}</strong>
          <div>{p.features[0]} <FiArrowUpRight aria-hidden="true" /></div>
        </>}
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{p.category}</span><span>{p.status}</span></div>
        <h3>{p.name}</h3><p>{p.description}</p>
        <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
        <details className="project-details"><summary>Features & project notes</summary>
          <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
          {p.note && <p className="project-note">{p.note}</p>}
        </details>
        <div className="project-links">
          <a href={p.github} target="_blank" rel="noopener noreferrer">Source code ↗</a>
          {p.relatedGithub && <a href={p.relatedGithub} target="_blank" rel="noopener noreferrer">Backend ↗</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
        </div>
      </div>
    </article>)}</div>
  </section></div>;
}

function Skills() {
  const groups = [
    { title: 'Frontend', Icon: FiCode, text: 'React · Next.js · TypeScript · JavaScript · HTML · CSS · Tailwind CSS · Bootstrap' },
    { title: 'Backend & data', Icon: FiLayers, text: 'Node.js · Express · MongoDB · Mongoose · Supabase · Prisma' },
    { title: 'Integrations & tools', Icon: FiCpu, text: 'Gemini API · Socket.IO · GitHub · Vite · NextAuth' },
  ];
  return <section className="section skills-section" id="skills">
    <div className="section-heading"><div><p className="eyebrow">MY TOOLKIT</p><h2>The skills <span>behind my work.</span></h2></div><span className="section-spark" aria-hidden="true">✦</span></div>
    <p className="section-intro">Technologies used across my public repositories.</p>
    <div className="skill-grid">{groups.map(({ title, text, Icon }, i) => <article key={title}>
      <div className="skill-top"><Icon aria-hidden="true" /><span>0{i + 1}</span></div>
      <h3>{title}</h3><p>{text}</p>
    </article>)}</div>
  </section>;
}

function Contact() {
  return <div className="contact-background"><section className="section contact" id="contact">
    <div><p className="eyebrow">LET’S CONNECT</p><h2>Have an idea?<br /><span>Let’s build it.</span></h2>
      <p>A website, a business tool, or something new.<br />Tell me what you have in mind.</p>
      <a className="email" href="mailto:sheikhasad4045@gmail.com">sheikhasad4045@gmail.com ↗</a>
      <SocialLinks />
    </div>
    <form action="https://formspree.io/f/xblorkza" method="POST">
      <label>Your name<input name="name" autoComplete="name" placeholder="What should I call you?" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label>What are you thinking?<textarea name="message" rows="4" placeholder="A little about your project…" required /></label>
      <button className="button primary" type="submit">Send message <FiArrowRight aria-hidden="true" /></button>
    </form>
  </section></div>;
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  useSectionReveals();
  useEffect(() => {
    // The browser may resolve a cross-page fragment before React mounts its sections.
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, []);
  const page = window.location.pathname.replace(/\/$/, '');
  const isHome = page === '';
  const routeSections = { '/about': <About />, '/skills': <Skills />, '/projects': <ProjectSection />, '/contact': <Contact /> };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><nav aria-label="Main navigation">
      <a className="brand" href="/" aria-label="Muhammad Asad home"><span className="brand-mark">A.</span>ASAD</a>
      <button className="menu-toggle" aria-expanded={menu} aria-controls="nav-links" onClick={() => setMenu(!menu)}>{menu ? 'Close ×' : 'Menu ☰'}</button>
      <div id="nav-links" className={`nav-links ${menu ? 'open' : ''}`}>
        <a href={isHome ? '#home' : '/#home'} onClick={() => setMenu(false)}>Home</a>
        {['About', 'Skills', 'Projects', 'Contact'].map(l => <a href={`${isHome ? '' : '/'}#${l.toLowerCase()}`} key={l} onClick={() => setMenu(false)}>{l}</a>)}
        <a className="button primary nav-cta" href="mailto:sheikhasad4045@gmail.com">Let’s talk</a>
      </div>
    </nav></header>
    <main id="main">{isHome ? <><Hero /><About /><ProjectSection /><Skills /><Contact /></> : routeSections[page] || <section className="section"><h1>Page not found</h1><a href="/">Return home →</a></section>}</main>
    <footer><a className="brand" href="/" aria-label="Muhammad Asad home"><span className="brand-mark">A.</span>ASAD</a><p>© {new Date().getFullYear()} Muhammad Asad</p><a href="#main">Back to top ↑</a></footer>
  </>;
}
