const EDUCATION = [

    {
        level: 'Postgraduate — M.Tech.',
        institution: 'BITS Pilani',
        board: 'Specialisation: Data Science.',
        year: '2024 – 2026',
        grade: '8.81',
        location: 'Bangalore, India',
    },
    {
        level: 'Undergraduate/ B.Tech',
        institution: 'National Institute Of Technology, Warangal',
        board: 'Electronics & Communication Engineering',
        year: '2015 - 2019',
        grade: '8.94',
        location: 'Telanagana, India',
    },
    {
        level: 'Higher Secondary (12th)',
        institution: 'Sri Chaitanya Junior College',
        board: 'State Board — Science Stream',
        year: '2013 – 2015',
        grade: '98.6%',
        location: 'Telangana, India',
    },
    {
        level: 'Primary School',
        institution: 'Gorkey Public School',
        board: 'CBSE',
        year: '2012 – 2013',
        grade: '10.0',
        location: 'Telangana, India',
    },
]





const PUBLICATIONS = [
    {
        title: 'Gesture Controlled Voice pickup - Spy Ear',
        journal: 'IEEE - 01/2020',
        year: '01/2020',
        doi: 'https://ieeexplore.ieee.org/document/8929366',
        abstract:
            'A unique surveillance system to pick up voices is designed using speech processing techniques. Machine Learning models are used to separate different voice signals. This prototype can pick up audio signals within a range of 100 - 200m',
    },
    {
        title: 'Audio surveillance System',
        journal: 'Springer',
        year: '03/2020',
        doi: 'https://link.springer.com/chapter/10.1007/978-981-15-1366-4_28',
        abstract:
            'A unique surveillance system to pick up voices is designed using speech processing techniques. Machine learning models are used to separate different voice signals.',
    },
]

export default function Education() {
    return (
        <div className="page">
            <div className="education-page">

                {/* ── EDUCATION ── */}
                <h2 className="section-heading">Education</h2>
                <div className="section-divider" />

                <div className="edu-timeline">
                    {EDUCATION.map((edu, i) => (
                        <div key={i} className="edu-entry" id={`edu-${i}`}>
                            <div className="edu-entry__level">{edu.level}</div>
                            <div className="edu-entry__institution">{edu.institution}</div>
                            <div className="edu-entry__details">
                                <span>📅 {edu.year}</span>
                                <span>📍 {edu.location}</span>
                                <span>🎓 {edu.board}</span>
                                <span style={{ color: 'var(--color-teal-light)', fontWeight: 600 }}>⭐ {edu.grade}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── PUBLICATIONS ── */}
                <h2 className="section-heading">Publications</h2>
                <div className="section-divider" />

                <div className="pub-cards">
                    {PUBLICATIONS.map((pub, i) => (
                        <div key={i} className="pub-card" id={`pub-${i}`}>
                            <div className="pub-card__title">{pub.title}</div>
                            <div className="pub-card__meta">
                                <span>📰 {pub.journal}</span>
                                <span>📅 {pub.year}</span>
                                <a
                                    href={pub.doi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'var(--color-blue-light)', fontWeight: 600 }}
                                >
                                    View DOI →
                                </a>
                            </div>
                            <div className="pub-card__abstract">{pub.abstract}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
