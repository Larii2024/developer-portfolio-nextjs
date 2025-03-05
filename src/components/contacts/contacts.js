import emailjs from '@emailjs/browser';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/contacts.module.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const form = useRef();
    const { theme } = useContext(ThemeContext);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

   const handleContactForm = (e) => {
       e.preventDefault();

    if (!name || !email || !message) {
        setErrMsg('Please fill in all fields');
        setOpen(true);
        return;
    }

    if (!isEmail(email)) {
        setErrMsg('Invalid email');
        setOpen(true);
        return;
    }
       setLoading(true);
    emailjs.sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY, 
    ).then((result) => {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setErrMsg('Email successfully sent');
        setLoading(false);
        setOpen(true);
    }, (error) => {
        setErrMsg('Failed to send email: ' + error.text);
        setLoading(false);
        setOpen(true);
    });
};

    return (
        <div
            className={styles.contacts}
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className={styles.contactsContainer}>
                <h1 style={{ color: theme.primary }}>Get In Touch</h1>
                <div className={styles.contactsBody}>
                    <div className={styles.contactsForm}>
                        <form ref={form} onSubmit={handleContactForm}>
                            <div className={styles.inputContainer}>
                                <label htmlFor='Name'
                                    className="
                                font-semibold text-[0.9rem] py-0 px-[5px] 
                                inline-flex translate-x-[25px] translate-y-[50%]"
                                    style={{backgroundColor:theme.quaternary, color:theme.tertiary}}
                                >
                                    Name
                                </label>
                              
                                <input
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); setSuccess(false); }}
                                    type='text'
                                    name='user_name'
                                    className={`${styles.formInput}  
                                    border-2 border-[#8B98A5]
                                     text-[#EFF3F4] font-medium transition 
                                     focus:border-[#1D9BF0]`}
                                    style={{ backgroundColor: theme.quaternary }}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label
                                    htmlFor='Email'
                                    className=" 
                                    font-semibold text-[0.9rem] px-[5px] 
                                    inline-flex translate-x-[25px] 
                                    translate-y-[50%]"
                                    style={{backgroundColor:theme.quaternary, color:theme.tertiary}}
                                >
                                    Email
                                </label>
                                <input
                                    placeholder='John@doe.com'
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setSuccess(false); }}
                                    type='email'
                                    name='user_email'
                                    className={`${styles.formInput}  
                                    border-2 border-[#8B98A5] 
                                     text-[#EFF3F4] font-medium transition
                                      focus:border-[#1D9BF0]`}
                                    style={{ backgroundColor: theme.quaternary }}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label
                                    htmlFor='Message'
                                    className="
                                     font-semibold text-[0.9rem] px-[5px] 
                                     inline-flex translate-x-[25px] 
                                     translate-y-[50%]"
                                    style={{backgroundColor:theme.quaternary, color:theme.tertiary}}
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value); setSuccess(false); }}
                                    type='text'
                                    name='message'
                                    className={`${styles.formMessage} 
                                    border-2 border-[#8B98A5] 
                                    focus:border-[#1D9BF0]
                                     text-[#EFF3F4] font-medium transition`}
                                    style={{ backgroundColor: theme.quaternary }}
                                />
                            </div>

                            <div className={styles.submitBtn}>
  <button
    type='submit'
    className="bg-[#1D9BF0] hover:bg-[#8B98A5] text-[#15202B] transition delay-200"
    disabled={loading}
  >
    <p>{loading ? 'Sending...' : success ? 'Sent' : 'Send'}</p>
    <div className={styles.submitIcon}>
      <AiOutlineSend
        className={styles.sendIcon}
        style={{
          animation: !success ? 'initial' : 'fly 0.8s linear both',
          display: !success ? 'inline-flex' : 'none',
        }}
      />
      <AiOutlineCheckCircle
        className={styles.successIcon}
        style={{
          display: !success ? 'none' : 'inline-flex',
          opacity: !success ? '0' : '1',
        }}
      />
    </div>
  </button>
</div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.tertiary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>
                </div>
            </div>
            <Image
                src={theme.contactsimg}
                alt='contacts'
                className={styles.contactsImg}
            />
        </div>
    );
}

export default Contacts;
