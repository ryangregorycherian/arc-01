/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { resources, topics } from '../data/resources'

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedTopic = searchParams.get('topic') ?? 'All'
  const [query, setQuery] = useState('')

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return resources.filter((resource) => {
      const matchesTopic = selectedTopic === 'All' || resource.topic === selectedTopic
      const matchesQuery = !normalizedQuery
        || resource.title.toLowerCase().includes(normalizedQuery)
        || resource.summary.toLowerCase().includes(normalizedQuery)

      return matchesTopic && matchesQuery
    })
  }, [query, selectedTopic])

  function selectTopic(topic: string) {
    if (topic === 'All') {
      setSearchParams({})
      return
    }

    setSearchParams({ topic })
  }

  return (
    <>
      <article className="archive-post">
        <p className="post-meta">Filed under: Archive notices · Entry 001</p>
        <h1>The archive is open.</h1>
        <p className="lead">
          Five beginner-friendly technical guides are filed below. Search the index,
          open a drawer, and download a plain-text copy for later.
        </p>
        <p>
          Every resource uses fictional examples and works without an account, payment,
          or external service.
        </p>
      </article>

      <section id="catalog" className="catalog" aria-labelledby="catalog-title">
        <div className="section-heading">
          <h2 id="catalog-title">Resource index</h2>
          <span>{visibleResources.length} of {resources.length} guides</span>
        </div>

        <div className="catalog-tools">
          <label className="search-field">
            <span>Search the catalogue</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try debugging"
            />
          </label>

          <div className="topic-filter" aria-label="Filter resources by topic">
            {topics.map((topic) => (
              <button
                type="button"
                key={topic}
                className={selectedTopic === topic ? 'is-selected' : undefined}
                onClick={() => selectTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {visibleResources.length > 0 ? (
          <ol className="resource-list">
            {visibleResources.map((resource) => (
              <li className="resource-entry" key={resource.slug}>
                <p className="resource-meta">
                  {resource.topic} · {resource.level} · {resource.duration}
                </p>
                <h3>
                  <Link to={`/resource/${resource.slug}`}>
                    {resource.title}
                  </Link>
                </h3>
                <p>{resource.summary}</p>
                <Link className="read-link" to={`/resource/${resource.slug}`}>
                  Open drawer →
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="empty-result">No filed guide matches that search.</p>
        )}
      </section>

      <section id="notes" className="notice-board" aria-labelledby="notice-title">
        <h2 id="notice-title">Field notes</h2>
        <ul>
          <li><strong>Start small:</strong> one guide is enough for a useful session.</li>
          <li><strong>Keep evidence:</strong> write down what you tried and observed.</li>
          <li><strong>House rule:</strong> useful beats impressive.</li>
        </ul>
      </section>
    </>
  )
}

export default HomePage
