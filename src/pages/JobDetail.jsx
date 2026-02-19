import { useParams, useNavigate } from 'react-router-dom'
import { JOBS } from './Experience'

export default function JobDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const job = JOBS.find((j) => j.id === id)

    if (!job) {
        return (
            <div className="page" style={{ textAlign: 'center', paddingTop: '8rem' }}>
                <h2 style={{ color: 'var(--color-muted)' }}>Job not found.</h2>
                <button className="job-detail__back" onClick={() => navigate('/experience')} style={{ margin: '1.5rem auto' }}>
                    ← Back to Experience
                </button>
            </div>
        )
    }

    return (
        <div className="page">
            <div className="job-detail">
                {/* Back button */}
                <button id="btn-back-experience" className="job-detail__back" onClick={() => navigate('/experience')}>
                    ← Back to Experience
                </button>

                {/* Header */}
                <div className="job-detail__header">
                    <div className="job-detail__company">{job.company}</div>
                    <div className="job-detail__meta">
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {job.start} &mdash; {job.end}
                        </span>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            {job.location}
                        </span>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            {job.role}
                        </span>
                    </div>

                    {/* Tech stack pills */}
                    <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                        {job.tech.map((t) => (
                            <span key={t} style={{
                                padding: '.25rem .75rem',
                                borderRadius: '99px',
                                fontSize: '.78rem',
                                fontWeight: 600,
                                background: 'rgba(13,148,136,.15)',
                                border: '1px solid rgba(13,148,136,.35)',
                                color: 'var(--color-teal-light)',
                            }}>{t}</span>
                        ))}
                    </div>
                </div>

                {/* Responsibilities */}
                <div className="job-detail__section">
                    <h3>Key Responsibilities</h3>
                    <div className="job-detail__bullets">
                        {job.responsibilities.map((item, i) => (
                            <div key={i} className="job-detail__bullet">{item}</div>
                        ))}
                    </div>
                </div>

                {/* Achievements placeholder */}
                {/* <div className="job-detail__section">
                    <h3>Achievements & Impact</h3>
                    <div className="job-detail__bullets">
                        <div className="job-detail__bullet">[ Add your key achievement or award here ]</div>
                        <div className="job-detail__bullet">[ Add a quantified outcome, e.g. "Increased sales by X%" ]</div>
                        <div className="job-detail__bullet">[ Add a recognition or promotion detail ]</div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}
