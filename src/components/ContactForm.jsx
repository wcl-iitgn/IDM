import React, { useState } from 'react';

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwNp0t5c-FmGAdD-jTdzQxOdgvP4Afj2PV09RcH6Fd8E2RhAr6Hwg3Zw1ntg3SK7_SM/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await fetch(scriptURL, { method: 'POST', body: new FormData(e.target) });
            setMessage('Your Response has been sent successfully!');
            setTimeout(() => {
                setMessage('');
            }, 4000);
            e.target.reset();
        } catch (error) {
            console.error('Error!', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form name="submit-to-google-sheet" className="contact-us-form" data-form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" className="form-control" name="Name" required /> <br />
                <input type="text" placeholder="Email" className="form-control" name="Email" required /><br />
                <textarea placeholder="Type your message here..." className="form-control" rows="9" name="Message"
                    required></textarea><br />
                <button className="submit-button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send message'}
                </button>

            </form>
            <span id="message" className="success-message">{message}</span>
        </div>
    )
}

export default ContactForm