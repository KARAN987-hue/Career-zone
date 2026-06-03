import React, { useState } from 'react';
import styles from './MainBodyFormContainer.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import bulbImg from './bulb.png';

function MainBodyFormContainer() {
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
        }, 3000);
    };

    return (
        <div>
            <div className={styles.Contaner}>
                <div className={styles.LeftSection}>
                    <h1>THE CAREER ZONE: Your Gateway to Success - The Best Admission Consultancy in Patna, Guiding Students Nationwide for a Bright Future.</h1>
                    <h2>093043 65563</h2>
                    <div className={styles.icon}>&gt;</div>
                </div>
                <div className={styles.RightSection}>
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

                        {isSubmitted && <p className={styles.successMessage}>Thank you! We have received your details.</p>}
                    </form>
                </div>
            </div>

            <div className={styles.Bottom}>
                <img src={bulbImg} alt="" />
                <h1>Best Educational Consultancy in Patna</h1>
                <button>Apply For Admission 2023</button>
            </div>
        </div>
    );
}

export default MainBodyFormContainer;
