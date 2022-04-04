import Nav from './Nav.js';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faTelegram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'main_template', form.current, 'uy3Nd21jdtd4-SF1A')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    };

    return (
        <div className="contact" id="contact">
            <Nav />
            <h1 className="contact__title">Contact me</h1>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__div">
                    <input type="text" name="first_name" placeholder="First name" required className="contact__inputFirstName"/>
                    <span className="red">*</span>
                    <input type="text" name="last_name" placeholder="Last name" className="contact__inputLastName"/>
                </div>
                <div className="contact__div">
                    <input type="email" name="user__email" placeholder="Email" required className="contact__email"/>
                    <span className="red">*</span>
                </div>
                <div className="contact__div">
                    <textarea placeholder="Message" required name="message" className="contact__message"></textarea>
                    <span className="red">*</span>
                </div>
                <div className="contact__div">
                    <input type="submit" text="Send" className="contact__submit"/>
                </div>
            </form>
            <div className="icons">
                <Link href="https://www.instagram.com/_tikyeritsyan_/"><a target="_blank" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></Link>
                <Link href="https://twitter.com/tikyeritsyan"><a target="_blank" className="icon"><FontAwesomeIcon icon={faTwitter} /></a></Link>
                <Link href="https://t.me/TigranYeritsyan"><a target="_blank" className="icon"><FontAwesomeIcon icon={faTelegram} /></a></Link>
                <Link href="https://github.com/tigran-ericyan"><a target="_blank" className="icon"><FontAwesomeIcon icon={faGithub} /></a></Link>
                <Link href="https://stackoverflow.com/users/17871584/tigran"><a target="_blank" className="icon"><FontAwesomeIcon icon={faStackOverflow} /></a></Link>
            </div>
        </div>
    )
}