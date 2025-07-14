import { Element } from "react-scroll";
import ContactForm from "../components/ContactForm";

function ContactMe(){

    return(
        <Element name="contact-element">
            <section id="contact-section">
                <div className="contact-div">
                    <h1>Contact Me!</h1>
                    <ContactForm/>
                </div>
            </section>
        </Element>
    )
}

export default ContactMe;