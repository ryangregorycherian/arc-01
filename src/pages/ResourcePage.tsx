/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
import { Link, useParams } from 'react-router-dom'
import { findResource } from '../data/resources'

function ResourcePage() {
  const { slug } = useParams()
  const resource = findResource(slug)
  if (!resource) {
    return (
      <section className="missing-page">
        <p className="post-meta">Archive lookup</p>
        <h1>That drawer is not in the index.</h1>
        <p>Check the address or return to the complete resource catalogue.</p>
        <Link className="text-button" to="/#catalog">Return to the resource index</Link>
      </section>
    )
  }

  return (
    <article className="resource-page">
      <p className="post-meta">{resource.topic} shelf · {resource.archiveMark}</p>
      <h1>{resource.title}</h1>
      <p className="lead">{resource.summary}</p>
      <p>{resource.description}</p>

      <dl className="resource-facts">
        <div>
          <dt>Level</dt>
          <dd>{resource.level}</dd>
        </div>
        <div>
          <dt>Reading time</dt>
          <dd>{resource.duration}</dd>
        </div>
        <div>
          <dt>Archive mark</dt>
          <dd>{resource.archiveMark}</dd>
        </div>
        <div>
          <dt>Desk checksum</dt>
          <dd>{resource.checksum}</dd>
        </div>
      </dl>

      <div className="download-panel">
        <h2>Take a copy</h2>
        <p>The download is a safe, fictional plain-text guide.</p>
        <a
          className="download-link"
          href={resource.file}
          download
          
        >
          Download {resource.title}
        </a>
      </div>

      <p><Link to="/#catalog">← Return to the resource index</Link></p>
    </article>
  )
}

export default ResourcePage
