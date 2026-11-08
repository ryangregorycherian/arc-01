/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { topics } from '../data/resources'

function SiteLayout() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) return
    document.getElementById(location.hash.slice(1))?.scrollIntoView()
  }, [location])
  return (
    <div className="page-background">
      <p className="utility-line">ARC-01 / PUBLIC RESOURCE DESK / BANANA EDITION</p>

      <div className="site-frame">
        <header className="site-header">
          <div className="masthead">
            <Link className="site-title" to="/">The Lantern Archive</Link>
            <p>Small technical guides, filed by hand.</p>
          </div>
          <div className="banana-stamp" aria-label="Banana archive edition">
            <span aria-hidden="true">BANANA</span>
            <strong>01</strong>
          </div>
        </header>

        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/" end>Home</NavLink>
          <Link to="/#catalog">Resource index</Link>
          <Link to="/#notes">Field notes</Link>
          <Link to="/#about">About</Link>
        </nav>

        <div className="content-layout">
          <main id="main-content" className="main-column">
            <Outlet />
          </main>

          <aside className="sidebar" aria-label="Archive sidebar">
            <section className="widget">
              <h2>Archive status</h2>
              <p><strong>Open for reading</strong></p>
              <p>{topics.length - 1} shelves · 5 filed guides</p>
            </section>

            <section className="widget">
              <h2>Shelves</h2>
              <ul className="link-list">
                {topics.slice(1).map((topic) => (
                  <li key={topic}>
                    <Link to={`/?topic=${topic === 'Safety' ? 'Safety' : topic}#catalog`}>{topic}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section id="about" className="widget widget-dark">
              <h2>About ARC-01</h2>
              <p>Audit · Repair · Contribute</p>
              <p>A technical recruitment project maintained by CSI VIT Chennai.</p>
            </section>
          </aside>
        </div>

        <footer className="site-footer">
          <span>ARC-01 · The Lantern Archive</span>
          <span>Maintained by the CSI VIT Chennai Technical Team</span>
          <span aria-hidden="true">TElHSFQtMDI=</span>
        </footer>
      </div>
    </div>
  )
}

export default SiteLayout
