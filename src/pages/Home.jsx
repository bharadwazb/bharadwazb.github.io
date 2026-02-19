import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from '../components/ContactModal'

// Icons (inline SVGs — no external icon library needed)
const IconLeetCode = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style={{ color: '#ffa116' }}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
)

const IconGitHub = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style={{ color: '#e2e8f0' }}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
)

const IconLinkedIn = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style={{ color: '#0a66c2' }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const socialLinks = [
    {
        id: 'leetcode',
        label: 'LeetCode',
        hint: 'View my problem solving',
        url: 'https://leetcode.com/bharadwazb',
        iconClass: 'social-card__icon--leetcode',
        Icon: IconLeetCode,
    },
    {
        id: 'github',
        label: 'GitHub',
        hint: 'Browse my repositories',
        url: 'https://github.com/bharadwazb',
        iconClass: 'social-card__icon--github',
        Icon: IconGitHub,
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        hint: 'Connect with me',
        url: 'https://linkedin.com/in/bharadwazb',
        iconClass: 'social-card__icon--linkedin',
        Icon: IconLinkedIn,
    },
]

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="page">
            {/* ── HERO ── */}
            <section className="hero">
                {/* Profile Picture Placeholder */}
                <div className="hero__avatar" title="Me">
                    <img
                        src={`${import.meta.env.BASE_URL}ghibli_me.png`}
                        alt="Bharadwaz Bhuma"
                        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                    />

                    <span style={{
                        position: 'absolute', bottom: '6px', right: '6px',
                        background: 'var(--color-teal)', color: '#fff',
                        fontSize: '.6rem', fontWeight: 700, padding: '2px 6px',
                        borderRadius: '99px', letterSpacing: '.5px'
                    }}>bharadwaz</span>
                </div>

                <h1 className="hero__name">Bharadwaz Bhuma</h1>
                <p className="hero__designation">Senior Member Technical Staff &nbsp;|&nbsp; Full Stack Developer</p>

                <button className="btn-contact" onClick={() => setShowModal(true)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Contact Me
                </button>
            </section>

            {/* ── SOCIAL LINKS ── */}
            <section className="social-section">
                <h2 className="social-section__title">Find Me Online</h2>
                <p className="social-section__sub">Check out my coding profiles and professional network</p>
                <div className="social-cards">
                    {socialLinks.map(({ id, label, hint, url, iconClass, Icon }) => (
                        <a
                            key={id}
                            id={`social-${id}`}
                            className="social-card"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={`social-card__icon ${iconClass}`}>
                                <Icon />
                            </div>
                            <span className="social-card__label">{label}</span>
                            <span className="social-card__hint">{hint} &rarr;</span>
                        </a>
                    ))}
                </div>
            </section>

            {showModal && <ContactModal onClose={() => setShowModal(false)} />}
        </div>
    )
}
