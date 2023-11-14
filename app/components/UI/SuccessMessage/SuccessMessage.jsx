import React, { useEffect, useState } from 'react';
import styles from './SuccessMessage.module.css';


const SuccessMessage = ({ setClose }) =>
{
    useEffect(() =>
    {
        document.body.style.overflow = 'hidden';
    }, [])
    return (
        <div className={styles.window} onClick={() => setClose(false)}>
            <section onClick={(e) => e.stopPropagation()} className={styles.successMessage}>
                {(
                    <section className={styles.animation}>
                        <svg className={styles.animate} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z" stroke="#FFE600" fill="transparent" />
                        </svg>
                    </section>
                )}
                <div className={styles.successText}>We send you a link to follow on your email.</div>
                {/* <button onClick={() => setClose(true)} className={styles.close}>x</button> */}
            </section>
        </div>
    );
};

export default SuccessMessage;