import React , { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactMe = _ => {
    const form = useRef();
    // sendEmail funksiyasinin yaradilmasi
    const sendEmail = (e) => {
        e.preventDefault();
        const serviceID = 'service_c7zfo0v';
        const templateID = 'template_grt3l1t';
        const userID = 'user_1SWZaJzd3oDeIPZuKxwX8'
    
        emailjs.sendForm(serviceID, templateID, form.current, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        //inputlara data daxil edilib submit edildikden sonra inputlarin sifirlanmasi ucun bu koddan ist. edilir.
          form.current.reset()

    };
    return (
        <div id='contactme' className="contact">
        <div className="container">
            <h3 className="contact-title">Contact me</h3>
            <p className="contact-text">Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
            <form ref={form} onSubmit={sendEmail} className="row jc-center" autoComplete='off'>
                <div className="col-10 col-lg-6 mb-5 mb-lg-0">
                    <div className="input-data">
                        <input type="text" id='name' name='name' placeholder="Name"/>
                        <div className="underline"></div> 
                    </div>
                   <div className="input-data">
                       <input type="tel" id='tel' name='tel' placeholder="Phone Number"/>
                       <div className="underline"></div>
                   </div>
                    <div className="input-data">
                        <input type="email" id='email' name='email' placeholder="Email"/>
                        <div className="underline"></div>
                    </div>
                   <div className="input-data">
                       <input type="text" id='subject' name='subject' placeholder="Subject"/>
                       <div className="underline"></div>
                   </div>
                </div>
                <div className="col-10 col-lg-6">
                    <div className="textarea-data pt-3">
                        <textarea id='message' name='message' cols="30" rows="10" placeholder="Please describe shortly you project..."></textarea>
                        <div className="underline"></div>
                    </div>
                    <input type="submit" value="Contact me"/>
                </div>
            </form>
        </div>
    </div>
    )
}

export default ContactMe
