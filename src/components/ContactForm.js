import React from 'react';

function ContactForm() {
return (
<section className="contact-form">
<h2>Contact Us</h2>
<form>
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<textarea placeholder="Message"></textarea>
<button type="submit">Send</button>
</form>
</section>
);
}

export default ContactForm;