function ContactMe() {
    return (
        <div className="contact-card flex-parent-contact">
            <h2>Contact Me</h2>
            <div className="contact-children">
                <img src="/public/images/email_icon.png" title="icon by rukanicon" alt="email envelop icon" />
                <a href="mailto:esstone27@gmail.com">esstone27@gmail.com</a>
            </div>
            <div className="contact-children">
                <img src="/public/images/circle-phone_icon.png" title="icon by UIcons" alt="phone icon" />
                <p>310.710.2087</p>
            </div>
        </div>
    )
}

export default ContactMe;