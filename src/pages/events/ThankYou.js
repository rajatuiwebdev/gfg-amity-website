import React from 'react';
import transition from '../../transition';
import { Navigate } from 'react-router-dom';

const ThankYou = () => {
  // Check if chatbot is true in localStorage
  const isFormSubmitted = localStorage.getItem('chatbot') === 'true';

  // Only show the ThankYou component if chatbot is true
  if (!isFormSubmitted) {
    return <Navigate replace to="/events/chatbot-construction-101/" />;
  }

  return (
    <div className='ty-page'>
      <header class="site-header ty" id="header">
        <h1 class="site-header__title" data-lead-id="ty-title">THANK YOU!</h1>
      </header>
      <div class="main-content">
        <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
        <p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! You'll get the event details soon either in your email or in the event-only WhatsApp group.</p>
      </div>
    </div>
  );
};

export default transition(ThankYou);
