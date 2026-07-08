'use client'

import { useState, useEffect } from 'react'

const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact']

const skills = [
  { name: 'Microsoft Excel', level: 95 },
  { name: 'SQL', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Power BI', level: 92 },
  { name: 'Tableau', level: 88 },
  { name: 'Data Cleaning', level: 90 },
  { name: 'Data Visualization', level: 93 },
  { name: 'Data Modeling', level: 85 },
  { name: 'Dashboard Development', level: 91 },
]

const projects = [
  { title: 'Sales Dashboard', desc: 'Interactive Power BI dashboard tracking $2.4M in revenue across 12 regions with YoY comparison and forecasting.', tags: ['Power BI', 'SQL', 'Excel'] },
  { title: 'HR Analytics', desc: 'Employee attrition analysis identifying key drivers of turnover, saving $180K annually in recruitment costs.', tags: ['Python', 'Tableau', 'SQL'] },
  { title: 'Customer Segmentation', desc: 'RFM-based customer clustering for targeted marketing, increasing campaign ROI by 34%.', tags: ['Python', 'SQL', 'Power BI'] },
  { title: 'Financial Analysis', desc: 'Automated financial reporting pipeline processing 50K+ transactions monthly with anomaly detection.', tags: ['Excel', 'Python', 'Power BI'] },
  { title: 'E-commerce Analytics', desc: 'Full-funnel conversion analysis from traffic to purchase, identifying $2.1M in upsell opportunities.', tags: ['SQL', 'Tableau', 'Python'] },
  { title: 'Supply Chain Dashboard', desc: 'Real-time supply chain monitoring dashboard reducing delivery delays by 28% across 200+ suppliers.', tags: ['Power BI', 'SQL', 'Excel'] },
]

const certifications = [
  { name: 'Google Data Analytics Professional', issuer: 'Google / Coursera' },
  { name: 'Microsoft Certified: Data Analyst Associate', issuer: 'Microsoft' },
  { name: 'IBM Data Science Professional', issuer: 'IBM / Coursera' },
  { name: 'Tableau Desktop Specialist', issuer: 'Tableau' },
  { name: 'Power BI Data Analyst (PL-300)', issuer: 'Microsoft' },
  { name: 'SQL Advanced Certificate', issuer: 'LinkedIn Learning' },
]

const experiences = [
  { role: 'Senior Data Analyst', company: 'TechCorp Solutions', period: '2024 - Present', desc: 'Lead analytics team of 5. Built automated reporting infrastructure serving 20+ stakeholders. Reduced reporting time by 60%.' },
  { role: 'Data Analyst', company: 'DataFlow Inc', period: '2022 - 2024', desc: 'Developed dashboards tracking $50M+ in operations. Improved data quality processes reducing errors by 45%.' },
  { role: 'Junior Data Analyst', company: 'StartupHub', period: '2021 - 2022', desc: 'Created first analytics framework. Built customer insights pipeline increasing retention by 22%.' },
]

const testimonials = [
  { text: 'The dashboard transformed how we track our KPIs. Clean, intuitive, and insightful.', name: 'Sarah Chen', role: 'VP of Operations, TechCorp' },
  { text: 'Best data professional I\'ve worked with. Delivered complex analysis ahead of schedule.', name: 'Marcus Johnson', role: 'CTO, DataFlow Inc' },
  { text: 'The customer segmentation project alone paid for itself within the first quarter.', name: 'Priya Sharma', role: 'Marketing Director, RetailMax' },
]

export default function Portfolio() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
    if (prefersDark) document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id))
        }
      })
    }, { threshold: 0.1 })

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isVisible = (id: string) => visibleSections.has(id)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('home')} className="text-xl font-bold tracking-tight">
            <span style={{ color: 'var(--primary)' }}>DA</span>
            <span className="ml-1">Portfolio</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {sections.slice(1).map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="capitalize transition-colors hover:" style={{ color: 'var(--muted)' }}>
                {s}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
              style={{ background: 'var(--border)' }}
              aria-label="Toggle dark mode"
            >
              {dark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full"
              style={{ background: 'var(--border)' }}
            >
              <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
            <div className="flex flex-col px-4 py-3 gap-3">
              {sections.slice(1).map(s => (
                <button key={s} onClick={() => scrollTo(s)} className="text-left py-1 capitalize text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, var(--primary) 1px, transparent 0)', backgroundSize: '50px 50px' }} />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-up" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              Data Analyst &mdash; Turning Data into Decisions
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${isVisible('home') ? 'animate-fade-up' : 'opacity-0'}`}>
              Hi, I'm <span style={{ color: 'var(--primary)' }}>Alex Rivera</span>
              <br />Data Analyst
            </h1>
            <p className={`mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed ${isVisible('home') ? 'animate-fade-up' : 'opacity-0'}`} style={{ color: 'var(--muted)', animationDelay: '0.1s' }}>
              I help businesses make smarter decisions through data. 
              Expert in SQL, Python, Power BI, and Tableau. 
              $2.4M+ in identified revenue opportunities.
            </p>
            <div className={`flex flex-wrap gap-4 mt-10 ${isVisible('home') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-105" style={{ background: 'var(--primary)' }}>
                Hire Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-all hover:scale-105" style={{ border: '1px solid var(--border)', color: 'var(--fg)' }}>
                View Projects
              </a>
            </div>
            <div className={`flex items-center gap-8 mt-12 text-sm ${isVisible('home') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s', color: 'var(--muted)' }}>
              <span>📊 6+ years experience</span>
              <span>🏆 50+ projects delivered</span>
              <span>⭐ 98% client satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className={`max-w-3xl ${isVisible('about') ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>About Me</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Data-driven professional with a passion for insights</h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              I'm a Senior Data Analyst with 6+ years of experience transforming raw data into actionable business intelligence. 
              I specialize in building end-to-end analytics solutions — from data extraction and cleaning to visualization and reporting.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              My work has directly contributed to $2.4M+ in identified revenue opportunities, 34% improvement in marketing ROI, 
              and 28% reduction in supply chain delays. I believe every dataset tells a story — my job is to find it.
            </p>
          </div>
          <div className={`grid sm:grid-cols-3 gap-6 mt-12 ${isVisible('about') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {[
              { label: 'Years Experience', value: '6+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '40+' },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-6 text-center" style={{ background: 'var(--primary-light)', border: '1px solid', borderColor: 'var(--primary)' }}>
                <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>{s.value}</div>
                <div className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 sm:py-32 border-t" style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--primary) 3%, var(--bg))' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className={`text-center max-w-2xl mx-auto ${isVisible('skills') ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>Skills</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Tools & Technologies</h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--muted)' }}>Proven expertise across the data analytics stack</p>
          </div>
          <div className={`grid sm:grid-cols-2 gap-x-12 gap-y-6 mt-12 ${isVisible('skills') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {skills.map(s => (
              <div key={s.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">{s.name}</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--primary)' }}>{s.level}%</span>
                </div>
                <div className="progress-bar" style={{ '--progress': `${s.level}%` } as React.CSSProperties} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 sm:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className={`text-center max-w-2xl mx-auto ${isVisible('portfolio') ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>Portfolio</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--muted)' }}>Real projects with measurable business impact</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className={`rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-lg ${isVisible('portfolio') ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ border: '1px solid var(--border)', background: 'var(--bg)', animationDelay: `${0.1 * i}s` }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 sm:py-32 border-t" style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--primary) 3%, var(--bg))' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className={`text-center max-w-2xl mx-auto ${isVisible('experience') ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>Experience</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Professional Journey</h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--muted)' }}>Climbing the data ladder, one insight at a time</p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'var(--border)' }} />
            <div className="space-y-12">
              {experiences.map((e, i) => (
                <div key={e.role} className={`relative pl-12 ${isVisible('experience') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${0.15 * i}s` }}>
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full border-2" style={{ background: 'var(--bg)', borderColor: 'var(--primary)' }} />
                  <div className="rounded-2xl p-6" style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{e.role}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>{e.period}</span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>{e.company}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`mt-12 ${isVisible('experience') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold tracking-tight mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map(c => (
                <div key={c.name} className="flex items-start gap-3 rounded-xl p-4" style={{ border: '1px solid var(--border)' }}>
                  <span className="text-lg shrink-0 mt-0.5">📜</span>
                  <div>
                    <p className="text-sm font-semibold">{c.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 sm:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className={`text-center max-w-2xl mx-auto ${isVisible('testimonials') ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>Testimonials</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">What People Say</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`rounded-2xl p-6 ${isVisible('testimonials') ? 'animate-scale-in' : 'opacity-0'}`} style={{ border: '1px solid var(--border)', background: 'var(--bg)', animationDelay: `${0.1 * i}s` }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>"{t.text}"</p>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className={`text-center max-w-2xl mx-auto ${isVisible('contact') ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>Contact</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Let's Work Together</h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--muted)' }}>Have a project in mind? Let's turn your data into decisions.</p>
          </div>
          <form
            action="https://formsubmit.co/notyet@yetindustry.online"
            method="POST"
            className={`max-w-xl mx-auto mt-12 space-y-5 ${isVisible('contact') ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <input type="hidden" name="_subject" value="New Data Analytics Project Inquiry" />
            <input type="hidden" name="_next" value="https://yetindustry.online/thankyou.html" />
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" name="name" placeholder="Your Name" required
                className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2"
                style={{ border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--fg)' }} />
              <input type="email" name="email" placeholder="Your Email" required
                className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2"
                style={{ border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--fg)' }} />
            </div>
            <select name="service"
              className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2"
              style={{ border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--fg)' }}>
              <option value="">What do you need?</option>
              <option>Dashboard Development</option>
              <option>Data Analysis & Reporting</option>
              <option>Data Cleaning & Preparation</option>
              <option>Business Intelligence Setup</option>
              <option>Analytics Consulting</option>
              <option>Something else</option>
            </select>
            <textarea name="message" placeholder="Tell me about your project..." rows={4} required
              className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all focus:ring-2 resize-y"
              style={{ border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--fg)' }} />
            <button type="submit"
              className="w-full rounded-full py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: 'var(--primary)' }}>
              Send Message
            </button>
          </form>
          <div className={`text-center mt-8 text-sm ${isVisible('contact') ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', color: 'var(--muted)' }}>
            Or email directly — <a href="mailto:notyet@yetindustry.online" className="font-medium underline underline-offset-2" style={{ color: 'var(--primary)' }}>notyet@yetindustry.online</a>
          </div>
        </div>
      </section>

      <footer className="border-t py-12" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-6 text-sm mb-6">
            <a href="mailto:notyet@yetindustry.online" style={{ color: 'var(--muted)' }} className="hover:" style={{ color: 'var(--primary)' }}>📧 Email</a>
            <a href="https://linkedin.com" target="_blank" style={{ color: 'var(--muted)' }} className="hover:" style={{ color: 'var(--primary)' }}>🔗 LinkedIn</a>
            <a href="https://github.com/notyetbhai" target="_blank" style={{ color: 'var(--muted)' }} className="hover:" style={{ color: 'var(--primary)' }}>💻 GitHub</a>
          </div>
          <p className="text-xl font-bold tracking-tight">
            <span style={{ color: 'var(--primary)' }}>DA</span>
            <span className="ml-1">Portfolio</span>
          </p>
          <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Turning data into decisions, one insight at a time.</p>
          <p className="mt-6 text-xs" style={{ color: 'var(--muted)' }}>&copy; {new Date().getFullYear()} Built by YetIndustry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
