import { useNavigate } from 'react-router-dom'

// Shared job data — import from a single source so Experience & JobDetail stay in sync
export const JOBS = [
    {
        id: 'oracle-oci',
        company: 'ORACLE - OCI',
        role: 'Senior Member Technical Staff',
        start: 'May 2025',
        end: 'Present',
        location: 'Bangalore, India',
        responsibilities: [
            'As a member of OCI Build Service Team, actively contributing to build and enhance the developer experience.',
            'Designed, developed and integrated real time customer log refresh to view build logs.The service handles almost 600GB to 1TB of log data daily.',
            'Automated security findings report generation to identify teams using deprecated versions of build tools using pub - sub and distributed locking mechanisms.',
            'Other tasks include, migrating the codebase to use latest library versions.',
            'Tookover UI ownership and implemented various UI features to ease the customer experience.'
        ],
        tech: ['Cloud Computing', 'Java', 'React', 'Node.js', 'SQL', 'Docker', 'GitHub Actions'],
    },
    {
        id: 'oracle-fusion',
        company: 'Oracle - Fusion',
        role: 'Senior Member Technical Staff',
        start: 'Apr 2022',
        end: 'Apr 2025',
        location: 'Bangalore, India',
        responsibilities: [
            'As member of FAaaS Org\'s Patching Data Plane team, actively contributed in migration of Enterprise FUSION applications to OCI infrastructure and developing features to bring down the patching activity downtime from an average 5-6 hours to less than 30 minutes.',
            'Integrated  APEX, Fusion23Ai platforms for Enterprise customers.',
            'Involved in various stages of project lifecycle includes Defining use-cases, Design, Development, Testing and Support.',
            'Promoted to Senior Software Engineer in Sep23',
            'Took over the ownership of ControlPlane and implemented various features to ease the customer experience.',
        ],
        tech: ['Java', 'MySQL'],
    },
    {
        id: 'jpmc',
        company: 'JP Morgan Chase & Co',
        role: 'Associate Software Engineer',
        start: 'Jun 2019',
        end: 'Apr 2022',
        location: 'Bangalore, India',
        responsibilities: [
            'Actively contributed to Investment Proposal project which is responsible for Portfolio Mapping, a Wealth management initiative for revamping the client on-boarding process, reducing the time of the whole process from months to 2-3 days saving millions.',
            'Application is designed to generate detailed investment options that an investor can invest in depending on various parameters like investment amount, time period, growth strategy also providing the real-time metrics of the performance of the strategies with refresh rate every 24 hours.',
            'Worked with a third-party vendor Morning Star to utilize their APIs which fetch the real-time data of the market performance.',
            'Apart from developing the features for the Investment Proposal application, also have worked on migrating legacy codes to use newer versions of Java 11 and SpringBoot 2.5+.',
            'Promoted to SE-II in Jan-21 and to Associate in Jan-22'
        ],
        tech: ['React', 'Java', 'Spring Boot', 'MySQL'],
    },
]

export default function Experience() {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="experience-page">
                {/* Heading */}
                <h2 className="section-heading">Experience</h2>
                <div className="section-divider" />

                {/* Career Objective */}
                <div className="objective-card">
                    <h3>Career Objective</h3>
                    <p>
                        Software Developer with 6+ years of experience building scalable, high-performance applications across diverse technology stacks. Proficient in Java, Spring, C++, Python, Groovy, and Shell scripting, with strong expertise in cloud platforms and CI/CD architecture. Adept at designing robust systems grounded in solid Data Structures and Algorithms, consistently improving performance, efficiency, and reliability.
                    </p>
                    <p>
                        <br />
                        Experienced in leveraging modern AI-assisted development tools such as GitHub Copilot and Cline to accelerate delivery while maintaining high code quality. Currently pursuing an M.Tech in Data Science from BITS Pilani (Work Integrated Learning Program), expanding expertise in advanced analytics and machine learning.
                    </p>
                </div>

                {/* Company Cards */}
                <div className="exp-cards">
                    {JOBS.map((job) => (
                        <div
                            key={job.id}
                            id={`exp-${job.id}`}
                            className="exp-card"
                            onClick={() => navigate(`/experience/${job.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && navigate(`/experience/${job.id}`)}
                        >
                            <span className="exp-card__arrow">→</span>
                            <div className="exp-card__company">{job.company}</div>
                            <div className="exp-card__role">{job.role}</div>
                            <div className="exp-card__dates">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                {job.start} &mdash; {job.end}
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                {job.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
