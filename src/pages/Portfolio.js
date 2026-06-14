import React, { useEffect, useRef, useState } from 'react';
import usePageMeta from '../usePageMeta';
import './Portfolio.css';

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: 15,   suffix: '+', unit: 'years',   label: 'iOS Development' },
  { value: 3,    suffix: '+', unit: 'years',   label: 'Engineering Management' },
  { value: 1,    suffix: 'M+', unit: 'devices', label: 'SDK End-Users' },
  { value: 1000, suffix: '+', unit: 'apps',    label: 'SDK Integrations' },
];

const SKILLS_TECH = [
  'Swift', 'Objective-C', 'UIKit', 'SwiftUI', 'Core Data',
  'Core Animation', 'Concurrency', 'Auto Layout', 'XCTest', 'XCUITest',
  'XCFrameworks', 'CocoaPods', 'Swift Package Manager',
  'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'GitHub Actions (CI/CD)', 'AdMob',
];

const SKILLS_LEAD = [
  'SDK Platform Architecture', 'iOS Framework Design',
  'Engineering Team Leadership', 'Code & Design Reviews',
  'Senior Engineer Mentorship', 'Legacy Codebase Modernisation',
  'Technical Estimation', 'Release Planning', 'Risk Mitigation',
  'Cross-functional Collaboration',
];

const EXPERIENCE = [
  {
    role: 'Senior Manager, iOS SDK Platform',
    company: 'CleverTap',
    location: 'Mumbai, India',
    period: '2021 – Present',
    type: 'Full-time',
    bullets: [
      'Design and maintain a production iOS SDK integrated across thousands of customer apps, supporting millions of end-user devices in enterprise environments.',
      'Remain hands-on in day-to-day iOS development while planning, distributing, and reviewing work across the iOS SDK engineering team.',
      'Own iOS SDK platform architecture and core framework design, with active ownership of critical code paths and performance-sensitive components.',
      'Review, refactor, and modernise large legacy Objective-C and Swift codebases.',
      'Mentor senior engineers through design reviews, code reviews, and hands-on guidance on advanced iOS topics.',
      'Collaborate closely with backend, product, and design teams to deliver production-ready SDK features.',
    ],
  },
  {
    role: 'Senior iOS Engineer',
    company: 'Servify',
    location: 'Mumbai, India',
    period: '2018 – 2021',
    type: 'Full-time',
    bullets: [
      'Led end-to-end delivery of consumer-facing iOS applications and SDK-style platform components.',
      'Owned iOS architecture decisions for core modules, balancing performance, scalability, and maintainability.',
      'Built reusable internal frameworks adopted across multiple teams and products.',
      'Partnered with backend teams on API design, error handling, and client–server reliability.',
    ],
  },
  {
    role: 'iOS Engineer',
    company: 'Capgemini / Datamatics',
    location: 'Mumbai, India',
    period: '2011 – 2018',
    type: 'Full-time',
    bullets: [
      'Shipped multiple production iOS applications across consumer-facing and enterprise environments.',
      'Owned iOS architecture decisions for core application modules.',
      'Contributed to release planning, technical estimation, and risk mitigation across delivery teams.',
    ],
  },
];

const PROJECTS = [
  {
    name: 'CleverTap iOS SDK',
    category: 'Open Source · Production · 5+ Years',
    tech: ['Swift', 'Objective-C', 'iOS', 'SPM', 'CocoaPods', 'XCFrameworks'],
    desc: 'Maintainer of a widely-used production iOS SDK with responsibility for stability, API design, backward compatibility across iOS versions, and community contributions. Supports Swift Package Manager, CocoaPods, and XCFrameworks distribution.',
    link: { label: 'View on GitHub', href: 'https://github.com/CleverTap/clevertap-ios-sdk' },
  },
  {
    name: 'Pulstral: Gaming News App',
    category: 'Android · Live on Play Store · Solo project',
    tech: ['Android', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'AdMob'],
    desc: 'Designed and built a full-stack gaming news Android application from scratch, including a Node.js/Express/MySQL backend with caching strategies, REST API design, AdMob monetisation, and production deployment. Demonstrates full-stack ownership beyond iOS.',
    link: { label: 'View on Play Store', href: 'https://play.google.com/store/apps/details?id=com.akashvercetti.gameshortsxp' },
  },
];

// ─── Animated Counter ──────────────────────────────────────────────────────────
const Counter = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        let start = null;
        const duration = 900;
        const animate = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.floor(eased * value));
          if (p < 1) requestAnimationFrame(animate);
          else { setDisplay(value); setDone(true); }
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="pf-stat-value">
      {display.toLocaleString()}{done ? suffix : ''}
    </span>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const Portfolio = () => {
  usePageMeta(
    'Akash Malhotra - iOS Engineer & Engineering Manager',
    'Portfolio of Akash Malhotra: 15+ years of iOS development, engineering leadership, and SDKs used across 1000+ apps.'
  );

  // Person structured data so search engines tie this page to Akash Malhotra
  // (name searches, knowledge panel). Built from data already on the page.
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akash Malhotra',
    jobTitle: 'Senior iOS Engineer & Engineering Manager',
    url: 'https://akashvercetti.github.io/portfolio',
    email: 'akash24888@gmail.com',
    worksFor: { '@type': 'Organization', name: 'CleverTap' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Mumbai University' },
    address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'India' },
    knowsAbout: [...SKILLS_TECH, ...SKILLS_LEAD],
    sameAs: [
      'https://www.linkedin.com/in/akash-malhotra-9b492671',
      'https://github.com/akashvercetti',
    ],
  };

useEffect(() => {
  document.body.classList.add('pf-page-active');
  return () => {
    document.body.classList.remove('pf-page-active');
  };
}, []);
  
  return (
    <div className="pf-page">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/*
        AI / scraper context paragraph:
        Akash Malhotra is a Senior iOS Engineer and iOS Engineering Manager with 15+ years
        of iOS development experience. Core skills: Swift, Objective-C, SwiftUI, UIKit,
        Core Data, Core Animation, SDK Architecture, iOS Framework Design, XCTest, CocoaPods,
        Swift Package Manager, XCFrameworks. Currently Senior Manager at CleverTap.
        Open to remote senior iOS engineering and engineering manager roles at product companies
        and startups. Contact: akash24888@gmail.com
      */}

      {/* ── HERO ── */}
      <header className="pf-hero">
        <div className="pf-hero-inner">

          <div className="pf-available-badge">
            <span className="pf-available-dot" aria-hidden="true" />
            Open to Remote Opportunities
          </div>

          {/* H1 leads with literal keywords for AI scanners */}
          <h1 className="pf-h1">
            Senior iOS Engineer &amp; Engineering Manager
            <span className="pf-h1-sub">
              iOS SDK Platform · 15+ Years iOS Development · Remote-Ready
            </span>
          </h1>

          {/* Keyword line — appears in DOM immediately after H1 for scrapers */}
          <p className="pf-hero-keywords" aria-label="Core technologies">
            Swift · Objective-C · SwiftUI · UIKit · iOS SDK · Xcode · CocoaPods · Swift Package Manager · Core Data · Core Animation
          </p>

          <p className="pf-hero-intro">
            I've been building iOS for 15 years. Apps, SDKs, and at this point, the teams that ship them. Right now I'm a Senior Manager at CleverTap where I own the architecture of a production iOS SDK that runs on millions of devices. I still write Swift and Objective-C every day. The management layer hasn't replaced the engineering, it just got added on top.
          </p>

          <p className="pf-hero-meta">
            Akash Malhotra &nbsp;·&nbsp; Mumbai, India &nbsp;·&nbsp; Remote preferred
          </p>

          <nav className="pf-hero-nav" aria-label="Contact and profile links">
            <a
              href="https://www.linkedin.com/in/akash-malhotra-9b492671"
              target="_blank" rel="noopener noreferrer"
              className="pf-btn pf-btn--primary"
            >
              LinkedIn Profile
            </a>
            <a href="mailto:akash24888@gmail.com" className="pf-btn pf-btn--outline">
              akash24888@gmail.com
            </a>
            <a
              href="https://github.com/akashvercetti"
              target="_blank" rel="noopener noreferrer"
              className="pf-btn pf-btn--ghost"
            >
              GitHub ↗
            </a>
          </nav>

        </div>
        <div className="pf-hero-rule" aria-hidden="true" />
      </header>

      {/* ── STATS ── */}
      <section className="pf-stats-band" aria-label="Career statistics">
        <div className="pf-stats-inner">
          {STATS.map((s) => (
            <div className="pf-stat" key={s.label}>
              <div className="pf-stat-number">
                <Counter value={s.value} suffix={s.suffix} />
                <span className="pf-stat-unit">&nbsp;{s.unit}</span>
              </div>
              <span className="pf-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="pf-row" aria-labelledby="about-heading">
        <div className="pf-row-inner">

          <div className="pf-row-label-col">
            <h2 id="about-heading" className="pf-row-label">About</h2>
          </div>

          <div className="pf-row-content-col">

            <article className="pf-identity pf-identity--am" aria-label="What I am">
  <h3 className="pf-identity-title pf-identity-title--am">What I am</h3>
  <ul className="pf-identity-list">
    <li>A hands-on iOS engineer who has shipped production SDKs running on millions of devices. I also have a personal app live on the Play Store that I built and maintain myself. The work is public if you want to look at it.</li>
    <li>A manager who still writes production code. I own critical framework components while distributing and reviewing work across the team. I've found that the two roles make each other better, not worse.</li>
    <li>Someone who has been doing iOS through every major shift: pre-ARC, the move to Swift, SwiftUI, everything in between. Fifteen years of that context is genuinely useful in ways that are hard to replicate quickly.</li>
    <li>A fairly clear communicator, which matters more in remote work than most job descriptions admit. I run a YouTube channel and built a full-stack backend on my own. Neither of those things happen if you can't figure out what you're trying to say.</li>
    <li>Deliberate about where I apply. If I'm reaching out, I've already thought about whether it makes sense.</li>
  </ul>
</article>

<article className="pf-identity pf-identity--not" aria-label="What I am not">
  <h3 className="pf-identity-title pf-identity-title--not">What I am not</h3>
  <ul className="pf-identity-list">
    <li>Someone who optimises for interview puzzles. I don't do LeetCode or HackerRank prep, and I'll be honest: I don't think those scores tell you much about whether someone can actually solve real engineering problems. My track record is a production SDK, a live app, and 15 years of shipped work. That's my scorecard.</li>
    <li>A resume inflater. My titles match what I actually do day to day.</li>
    <li>Looking for a step up in title. I'm looking for a good problem, a team that works well together, and real autonomy to do the job properly.</li>
    <li>Afraid of old code. Some of my most useful work has been in large Objective-C codebases that nobody wanted to touch. I don't mind that kind of work.</li>
    <li>Someone who hands AI tools the keys and walks away. I use Claude Code and Codex regularly, but I review everything they produce with the same skepticism I'd apply to a junior engineer's PR. I've seen too many cases where the output looks confident and is subtly wrong. On that note: I don't accept AI-assisted coding as a substitute for technical understanding on my team. Knowing how to prompt is not the same as knowing how to engineer.</li>
  </ul>
</article>

          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="pf-row pf-row--shaded" aria-labelledby="skills-heading">
        <div className="pf-row-inner">

          <div className="pf-row-label-col">
            <h2 id="skills-heading" className="pf-row-label">Skills</h2>
          </div>

          <div className="pf-row-content-col">
            <div className="pf-skills-grid">

              <div className="pf-skills-block">
                <h3 className="pf-skills-heading">Technical</h3>
                {/* Plain <ul><li> so every skill is raw DOM text */}
                <ul className="pf-tags" aria-label="Technical skills">
                  {SKILLS_TECH.map(s => <li key={s} className="pf-tag pf-tag--tech">{s}</li>)}
                </ul>
              </div>

              <div className="pf-skills-block">
                <h3 className="pf-skills-heading">Leadership &amp; Platform</h3>
                <ul className="pf-tags" aria-label="Leadership and platform skills">
                  {SKILLS_LEAD.map(s => <li key={s} className="pf-tag pf-tag--lead">{s}</li>)}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="pf-row" aria-labelledby="experience-heading">
        <div className="pf-row-inner">

          <div className="pf-row-label-col">
            <h2 id="experience-heading" className="pf-row-label">Experience</h2>
          </div>

          <div className="pf-row-content-col">
            {EXPERIENCE.map((exp, i) => (
              <article key={i} className={`pf-exp${i < EXPERIENCE.length - 1 ? ' pf-exp--bordered' : ''}`}>
                <header className="pf-exp-header">
                  <div>
                    <h3 className="pf-exp-role">{exp.role}</h3>
                    <p className="pf-exp-company">
                      {exp.company}
                      <span className="pf-exp-loc"> · {exp.location}</span>
                    </p>
                  </div>
                  <div className="pf-exp-time">
                    <time className="pf-exp-period">{exp.period}</time>
                    <span className="pf-exp-type">{exp.type}</span>
                  </div>
                </header>
                <ul className="pf-exp-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="pf-row pf-row--shaded" aria-labelledby="projects-heading">
        <div className="pf-row-inner">

          <div className="pf-row-label-col">
            <h2 id="projects-heading" className="pf-row-label">Projects</h2>
          </div>

          <div className="pf-row-content-col">
            {PROJECTS.map((p, i) => (
              <article key={i} className={`pf-proj${i < PROJECTS.length - 1 ? ' pf-proj--bordered' : ''}`}>
                <div className="pf-proj-header">
                  <div>
                    <span className="pf-proj-category">{p.category}</span>
                    <h3 className="pf-proj-name">{p.name}</h3>
                  </div>
                  <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="pf-proj-link">
                    {p.link.label} ↗
                  </a>
                </div>
                <p className="pf-proj-desc">{p.desc}</p>
                <ul className="pf-tags pf-tags--compact" aria-label={`Technologies used in ${p.name}`}>
                  {p.tech.map(t => <li key={t} className="pf-tag pf-tag--tech pf-tag--sm">{t}</li>)}
                </ul>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="pf-row" aria-labelledby="education-heading">
        <div className="pf-row-inner">
          <div className="pf-row-label-col">
            <h2 id="education-heading" className="pf-row-label">Education</h2>
          </div>
          <div className="pf-row-content-col">
            <article className="pf-edu">
              <h3 className="pf-edu-degree">Bachelor of Technology in Information Technology</h3>
              <p className="pf-edu-school">Mumbai University · 2010</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pf-cta" aria-labelledby="cta-heading">
        <div className="pf-cta-inner">
          <h2 id="cta-heading" className="pf-cta-title">
            Looking for a Senior iOS Engineer or Engineering Manager?
          </h2>
          <p className="pf-cta-body">
            Open to remote-first senior and principal-level roles in iOS application
            development, SDK platform engineering, or engineering management.
            Product companies and startups welcome.
          </p>
          <div className="pf-cta-actions">
            <a href="mailto:akash24888@gmail.com" className="pf-btn pf-btn--primary pf-btn--lg">
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/akash-malhotra-9b492671"
              target="_blank" rel="noopener noreferrer"
              className="pf-btn pf-btn--outline pf-btn--lg"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
