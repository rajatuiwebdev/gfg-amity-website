import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import transition from '../../transition';

const DSADiariesRegister = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [classSection, setClassSection] = useState('');
  const [consent, setConsent] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleClassSectionChange = (e) => {
    setClassSection(e.target.value);
  };

  const handleConsentClick = (value) => {
    setConsent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('department', department);
      formData.append('classSection', classSection);
      formData.append('consent', consent);

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwCCh-jDKnkQ5WGKOMWyDlOThIXvL7h7rRZqQMOYjYWeNNSAGdBrKJlVm7RkH5eZxY/exec', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Form data submitted successfully!');
          setIsFormSubmitted(true);
          localStorage.setItem('chatbot', true);
        } else {
          console.error('Failed to submit form data.');
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }

      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!fullName.trim()) {
      alert('Please enter your full name.');
      return false;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    if (!department.trim()) {
      alert('Please enter your department.');
      return false;
    }

    if (!classSection.trim()) {
      alert('Please enter your class and section.');
      return false;
    }

    if (!consent) {
      alert('Please select your consent.');
      return false;
    }

    return true;
  };
  useEffect(() => {
    const isFormSubmitted = localStorage.getItem('chatbot') === 'true';
    if (isFormSubmitted) {
      setIsFormSubmitted(true);
    }
  }, []);
  return (
    <div>
      <div className="form-logo-img-div text-center">
        <img src="gfg (1) 1.png" className="img-fluid form-logo-img" alt="" />
      </div>
      <div className="form-box-div text-center">
        <div className="form-box" id="form-box-1">
          <div className="form-elements text-start">
            <h3 className="form-text">Register For ChatBot Construction 101</h3>
            <p className="form-white-text mb-4">Fill in the data given below to register for the event.</p>
            <form autoComplete='off' className="form-requires-validation" noValidate onSubmit={handleSubmit}>
              <div className="col-md-12 form-box">
                <input
                  className="form-control"
                  type="text"
                  name="form-full-name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              <div className="col-md-12 form-box">
                <input
                  className="form-control"
                  type="email"
                  name="form-email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="col-md-12 form-box">
                <input
                  className="form-control"
                  type="number"
                  name="form-phone-number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
              <div className="col-md-12 form-box">
                <input
                  className="form-control"
                  type="text"
                  name="form-name"
                  placeholder="Institution And Department"
                  value={department}
                  onChange={handleDepartmentChange}
                  required
                />
              </div>
              <div className="col-md-12 form-box">
                <input
                  className="form-control"
                  type="text"
                  name="form-class-section"
                  placeholder="Section and Batch"
                  value={classSection}
                  onChange={handleClassSectionChange}
                  required
                />
              </div>
              <div className="col-md-12 mt-3 mb-5">
                <label
                  className="form-mb-3 form-mr-1"
                  htmlFor="form-gender form-white-text"
                  style={{color: "#fff", marginBottom:"10px"}}
                >
                  Consent ? (You consent us to send you emails about the latest newsletter & events published under GFG student Chapter Amity Noida)
                </label>

                <div className="btn-group">
                  <button
                    type="button"
                    className={`btn ${consent === 'Yes' ? 'btn-success' : 'btn-outline-success'}`}
                    onClick={() => handleConsentClick('Yes')}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`btn ${consent === 'No' ? 'btn-success' : 'btn-outline-success'}`}
                    onClick={() => handleConsentClick('No')}
                  >
                    No
                  </button>
                </div>
              </div>
              <div className="form-button mt-2"  >
                <button id="form-submit" type="submit" className="btn btn-success"disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                      <span className="visually-hidden">Loading...</span>
                    </>
                  ) : (
                    'Register'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isFormSubmitted && <Navigate replace to="/events/chatbot-construction-101/thank-you" />}
    </div>
  );
};

export default transition(DSADiariesRegister);