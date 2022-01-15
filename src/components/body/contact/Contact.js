import React from 'react'
import emailjs from 'emailjs-com'
import "./contact.css"
import Separator from "../../../common/Separator/Separator"
import contactImg from "../../Images/Contact-img.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Contact() {


    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm(
            'raviportfolio', 
            'template_raviweb',
            e.target, 
            'user_xLDBfhRx6qP0lu5Z1TmxO').then(res=>{console.log(res); 
                toast.success("Message Sent!",{
                    position: "bottom-right",
                });
            }).catch(err=> {console.log(err)
                toast.error("Message has error!",{
                    position: "bottom-right",
                });
            });

    }

    return (
        <div className="main-contact-container">
        <Separator/>
        <label data-aos="zoom-in" className="section-title">- Contact -</label>
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" class="contact-main-box">

        <div className="contact-sub-box1">
            <div class="contact-sub-box">
                <form className="form-box" onSubmit={sendEmail}>

                        <label className="contact-tag">Name</label> <br/>
                                <input className="contact-input" type="name" name="name" placeholder="Name" required/>
                        <br/>
                        <label className="contact-tag">Email</label> <br/>
                                <input className="contact-input" type="email" name="uemail" placeholder="exampleemail@example.com" required/>
                        <br/>
                        <label className="contact-tag">Message</label> <br/>
                                <textarea className="contact-input-area" type="message" name="message" placeholder="Message" required/>
                        
                        <br/>

                        <button type="submit" value="Submit" className="contact-submitbtn"><i class="fas fa-envelope"></i>&nbsp;  Send</button>
        
                </form>
                
            </div>
            <div className="contact-img-box">
                <img className="contact-img" src={contactImg} />
            </div>
        </div>

        </div>

        <div class="email-box">
            <div class="email-add"><a href='mailto:ravinduonline.mail@gmail.com'><i class="fas fa-envelope"></i>&nbsp;&nbsp;	ravinduonline.mail@gmail.com</a></div>
        </div>

        </div>
    )
}

export default Contact
