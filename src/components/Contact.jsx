import React, { useRef } from 'react';
import "./contact.css"
/** import dat pro odeslánní formuláře aby mi zpráva přišla na email */
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zcmerq3', 'template_oteva4o', form.current, 'CzPWpBgyCbB7YX0Ry')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='form-wrapper' id="form-scroll">
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <label>Jméno</label>
                <input className='form-input' type="text" name="from_name" placeholder='např.Karel' />
                <label>E-mail</label>
                <input className='form-input' type="email" name="from_email" placeholder='např.karel.novak@gmail.com' />
                <label>Obsah zprávy</label>
                <textarea className='form-textarea' name="message" placeholder='Dobrý den, rád bych vás kontaktoval ohledně...' />
                <input className='form-btn' type="submit" value="odeslat" />
            </form>
        </div>
    );
};

export default Contact