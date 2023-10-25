import React from 'react'
import { Helmet } from 'react-helmet';
import VimalMishra from '../assets/images/VimalMishra.jpeg'
import SaranAadhar from '../assets/images/SaranAadhar.jpeg'
import RajeshSingh from '../assets/images/RajeshSingh.jpeg'
import AmanChaudhary from '../assets/images/AmanChaudhary.jpg'
import ContactForm from '../components/ContactForm';


const Contact = () => {
    return (
        <div className='page_container'>
            <Helmet>
                <title>Contact Us | India Drought Monitor</title>
            </Helmet>
            <div className='main-container'>
                <div className="section-heading">
                    <h1>
                        Contact Us
                    </h1>
                </div>

                <div className="section">
                    <div className="row">
                        <div className="column-3">
                            <div className="contact-image">
                                <img src={VimalMishra} alt="Vimal Mishra" />
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="contact-image-caption">
                                <p>
                                    <a href="https://scholar.google.co.in/citations?user=wq7CgpUAAAAJ&hl=en" target="_blank" rel="noreferrer noopener"> Dr. Vimal Mishra </a><br />
                                    Professor, Civil Engineering <br />IIT Gandhinagar<br />
                                    email: vmishra@iitgn.ac.in
                                </p>
                            </div>
                        </div>

                        <div className="column-3">
                            <div className="contact-image">
                                <img src={SaranAadhar} alt="Saran Aadhar" />
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="contact-image-caption">
                                <p>
                                    <a href="https://scholar.google.co.in/citations?user=2fmbJF8AAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer noopener">
                                        Dr. Saran Aadhar </a><br />
                                    Assistant Professor, Civil & Infrastructure Engineering, <br />
                                    IIT Jodhpur<br />
                                    email: saran.aadhar@iitj.ac.in
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <div className="contact-image">
                                <img src={RajeshSingh} alt="Rajesh Singh" />
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="contact-image-caption">
                                <p>
                                    <a href="https://vmishra.people.iitgn.ac.in/water&climate/people/rajesh.html" target="_blank" rel="noreferrer noopener">
                                        Rajesh Singh </a><br />
                                    PhD Research Scholar, Civil Engineering, <br />
                                    IIT Gandhinagar<br />
                                    email: rajesh.singh@iitgn.ac.in
                                </p>
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="contact-image">
                                <img src={AmanChaudhary} alt="Aman Chaudhary" />
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="contact-image-caption">
                                <p>
                                    <a href="https://www.linkedin.com/in/aman-chaudhary-4a1716203/" target="_blank" rel="noreferrer noopener">
                                        Aman Chaudhary</a><br />
                                    Junior Undergraduate, IIT Gandhinagar<br />
                                    email: aman.chaudhary@iitgn.ac.in
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="section">
                    <div className="row">
                        <div className="column-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35865.5629622251!2d72.67216585808931!3d23.21341831585334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc447b8706689bc3!2sIndian%20Institute%20Of%20Technology%E2%80%93Gandhinagar%20(IIT%E2%80%93Gandhinagar)!5e0!3m2!1sen!2sin!4v1662577700931!5m2!1sen!2sin"
                                width="100%" height="400" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0}
                                referrerPolicy="no-referrer-when-downgrade" title='Google Map'>
                            </iframe>

                        </div>
                        <div className="column-6">
                            <ContactForm/>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Contact
