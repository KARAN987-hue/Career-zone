import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import { useForm } from 'react-hook-form';

function ContactUs() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000); // Hide success message after 3 seconds
    };

    return (
        <div>
            <div className={styles.Header}>
                <h1>Get in Touch</h1>
                <h2>Have questions about THE CAREER ZONE ? Need help getting started? Our team is here to help you succeed. Reach out to us anytime.</h2>
                <h2>Multiple ways to reach us. Choose what works best for you.</h2>
                <span className={styles.underline}></span>
                <div className={styles.CardContainer}>
                    <div className={styles.card}>
                        <span className={styles.underline}></span>
                        <h1>Experience</h1>
                        <p>20+ Years in Education & Admission Guidance 5000+ Successful Admissions</p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.underline}></span>
                        <h1>Address</h1>
                        <p>Address:511, 5 Floor,Ashiana tower, Exhibition Rd, near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001</p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.underline}></span>
                        <h1>Contact info</h1>
                        <p>Phone: 93043 65563 Email: info@thecareeezone.co.in</p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.underline}></span>
                        <h1>Website</h1>
                        <p>Website: www.thecareerzone .co.in Facebook: Facebook .com/thecareerzone .patna</p>
                    </div>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.RightSection}>
                    <h1>Contact Us</h1>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputBox}>
                            <div>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>

                            <div>
                                <input className={styles.phone}
                                    type="tel"
                                    placeholder="Mobile Number"
                                    {...register('phone', {
                                        required: 'Phone No. is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Phone must be 10 digits',
                                        },
                                    })}
                                />
                                {errors.phone && <span>{errors.phone.message}</span>}
                            </div>

                            <div>
                                <input className={styles.email}
                                    type="email"
                                    placeholder="Email Address"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>

                            <div>
                                <input className={styles.course}
                                    type="text"
                                    placeholder="Course"
                                    {...register('course', { required: 'Course is required' })}
                                />
                                {errors.course && <span>{errors.course.message}</span>}
                            </div>

                            <div>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Education"
                                    {...register('education')}
                                />
                            </div>

                            <div>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Location"
                                    {...register('location')}
                                />
                            </div>
                        </div>

                        <div className={styles.btnDiv}>
                            <button className={styles.btn} type="submit">SUBMIT NOW</button>
                        </div>

                        {isSubmitted && <p className={styles.successMessage}>Thank you! We received your message.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
