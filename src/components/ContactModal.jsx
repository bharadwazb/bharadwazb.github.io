import { useState } from 'react'

export default function ContactModal({ onClose }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})

    function validate() {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email.trim()) e.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        const e = validate()
        if (Object.keys(e).length) { setErrors(e); return }

        const subject = encodeURIComponent(`Message from ${form.name}`)
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )
        window.location.href =
            `mailto:bharadwaz3214@gmail.com?subject=${subject}&body=${body}`

        onClose()
    }

    function handleChange(ev) {
        const { name, value } = ev.target
        setForm(f => ({ ...f, [name]: value }))
        if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }))
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={ev => ev.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <div>
                        <h2 className="modal-title">Get In Touch</h2>
                        <p className="modal-sub">Fill in the form — your mail app will open ready to send.</p>
                    </div>
                    <button className="modal-close" onClick={onClose} aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form className="modal-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-name">Your Name</label>
                            <input
                                id="contact-name"
                                className={`form-input${errors.name ? ' form-input--error' : ''}`}
                                type="text"
                                name="name"
                                placeholder="Jane Doe"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-email">Your Email</label>
                            <input
                                id="contact-email"
                                className={`form-input${errors.email ? ' form-input--error' : ''}`}
                                type="email"
                                name="email"
                                placeholder="jane@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="contact-message">Message</label>
                        <textarea
                            id="contact-message"
                            className={`form-textarea${errors.message ? ' form-input--error' : ''}`}
                            name="message"
                            rows={5}
                            placeholder="Hi Bharadwaz, I'd love to connect..."
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn-send">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Open Mail App &amp; Send
                    </button>
                </form>
            </div>
        </div>
    )
}
