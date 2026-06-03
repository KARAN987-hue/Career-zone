import React from 'react'
import image from './TittleContainerBG.jpg'
import logo from './careerzone.png'
import Header from './Header'
import styles from './AboutUs.module.css'
import ParaTiles from './ParaTiles'

function AboutUs() {
    return (
        <div>
            <Header tittle={"About Us"} BGimage={image} />
            <div className={styles.body} >
                <div className={styles.LeftSection} >
                    <img src={logo} alt="" />
                    <div className={styles.deatils} >
                        <h1>OUR ADDRESS</h1>
                        <p>511, 5 Floor,Ashiana tower, Exhibition Rd, near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001</p>
                        <div className={styles.number} >+91 93043 65563</div>
                        <div className={styles.mail} >info@thecareeezone.co.in</div>
                    </div>
                </div>
                <div className={styles.RightSection} >
                    <h1>About The Career Zone</h1>
                    <h2>
                        Welcome to THE CAREER ZONE – your trusted partner in educational guidance and career consultancy for over two decades.
                    </h2>
                    <h2>Founded with a vision to empower students and bridge the gap between ambition and opportunity, THE CAREER ZONE has been at the forefront of admission consultancy services in India for the last 20+ years. With a proven track record of guiding over 5000+ students into prestigious institutions across the country, we take immense pride in being one of the most reliable names in the education consultancy domain.</h2>
                    <h2>At THE CAREER ZONE, we believe that every student deserves the right guidance to unlock their full potential. Whether you aspire to pursue Engineering, Medical, Law, Management, or any other field, we are here to help you make informed decisions and choose the right academic path that aligns with your goals.</h2>
                    <h2>Our consultancy provides access to a wide range of undergraduate, postgraduate, diploma, and professional courses across all states and cities of India. We have established strong affiliations with reputed universities and colleges, ensuring that our students receive the best admission support and career advice tailored to their aspirations and academic background.</h2>
                    <h2>What sets us apart is our student-first approach, personalized counseling sessions, and complete transparency throughout the admission process. From selecting the right course and college to handling documentation, applications, and final enrollment — we take care of everything, making the journey smooth and stress-free for students and their families.</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
