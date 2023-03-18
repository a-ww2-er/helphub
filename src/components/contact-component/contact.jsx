import './contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <form className="contact-form">
        <h2>Contact Us</h2>
        <p>Feel free to contact me for any questions or suggestions.</p>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Your message" />
        </div>

        <button>Send</button>
      </form>
    </section>
  );
}
