import React, { useState } from 'react';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import crossIcon from './crossIcon.png';
import { useFormContext } from './FormContext.jsx';

function EnquiryForm({ onClose }) {
    const { showForm, setShowForm } = useFormContext();
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
        <div style={{ display: showForm ? 'block' : 'none' }} className={styles.Main}>
            <div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.cross} onClick={() => setShowForm(false)}>
                        <img src={crossIcon} alt="" />
                    </div>
                    <h1>ENQUIRY FORM</h1>
                    <h2>THE CAREER ZONE</h2>
                    <div className={styles.inputBox}>
                        <div className={styles.nameDiv}>
                            <input
                                className={styles.name}
                                type="text"
                                placeholder="Full Name"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>

                        <div className={styles.phoneDiv}>
                            <input
                                className={styles.phone}
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

                        <div className={styles.EmailDiv}>
                            <input
                                className={styles.email}
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

                        <div className={styles.messageDiv}>
                            <textarea
                                className={styles.message}
                                placeholder="Message"
                                {...register('message', { required: 'message is required' })}
                            />
                            {errors.message && <span>{errors.message.message}</span>}
                        </div>
                    </div>

                    <div className={styles.btnDiv}>
                        <button className={styles.btn} type="submit">SEND ENQUIRY</button>
                    </div>

                    {isSubmitted && <p className={styles.successMessage}>Thanks! Your enquiry has been submitted successfully.</p>}
                </form>
            </div>
        </div>
    );
}

export default EnquiryForm;
