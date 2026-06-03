import React from 'react'
import styles from './Footer.module.css'
import facebookIcon from './facebookIcon.png'
import youtubeIcon from './youtubeIcon.png'
import twitterIcon from './twitterIcon.png'
import instgramIcon from './instagramIcon.png'
import linkedinIcon from './linkedinIcon.png'

function Footer() {
    return (
        <div className={styles.Container} >
            <h1>Top Admission Consultancy in Patna: THE CAREER ZONE</h1>
            <div className={styles.box} >
                <div className={styles.Left} >
                    <h1>THE CAREER ZONE</h1>
                    <p>Your trusted partner in educational guidance and career consultancy for over two decades.</p>
                    <p>Guidance for all major streams – Engineering, Medical, Law, Management, and more</p>
                    <p>One-on-one career counseling sessions</p>
                    <p>Full support from application to admission</p>
                </div>
                <div className={styles.Right} >
                    <h1>Get In Touch</h1>
                    <p> <span>Address:</span>511, 5th Floor, Ashiana Tower,
                        Exhibition Road, near HDFC Bank,
                        Ali Nagar Colony, Salimpur Ahra,
                        Patna, Bihar – 800001
                    </p>
                    <p> <span>Contact:</span>+91 93043 65563</p>
                    <p> <span>Mail:</span>info@thecareeezone.co.in</p>
                </div>
            </div>
            <span className={styles.border} ></span>
            <div className={styles.box2}  >
                <div className={styles.LinksBox} >
                    <h1>We're Social On</h1>
                    <div className={styles.Links} >
                        <a href="https://www.facebook.com/thecareerzone.co.in"><img className={styles.fb} src={facebookIcon} alt="" /></a>
                        <a href="https://x.com/THECAREERZONE3"><img className={styles.tw} src={twitterIcon} alt="" /></a>
                        <a className={styles.aOffb} href="https://www.linkedin.com/in/the-career-zone-786296194/"><img className={styles.ld} src={linkedinIcon} alt="" /></a>
                        <a href="https://www.instagram.com/the_careerzone"><img className={styles.ig} src={instgramIcon} alt="" /></a>
                        <a href="https://www.youtube.com/@thecareerzone6422"><img className={styles.yt} src={youtubeIcon} alt="" /></a>
                    </div>
                </div>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.729934635317!2d85.14159177517797!3d25.61388887744504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5859130f97d5%3A0x1f6f070f24fca97!2sAshiana%20tower!5e0!3m2!1sen!2sin!4v1751087936169!5m2!1sen!2sin"
                        width="400"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer
