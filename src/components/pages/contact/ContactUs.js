import React from 'react';
import './ContactUs.css';
import FeatureItem from '../homePagesComponents/FeatureItem';
import Header from '../homePagesComponents/Header';

const ContactUs = () => {

  return (
    <><Header />
    <section id="login-page">
      <div className="container">
        <div className="row pr-4 mr-4">
          <FeatureItem
            extraClass="home-location"
            icon="location_on"
            title="Visit Our Location"
            subTitle="27-6-76/1, 3RD STREET AC Nagar, Nellore, Andhra Pradesh 524002"
            subTitleHref="https://goo.gl/maps/uB8dcQ41GaQJNi2RA" />
          <FeatureItem
            extraClass="home-primary"
            icon="add_ic_call"
            title="Contact Us Now"
            subTitle="+91-9900442195"
            subTitleHref="tel:+91-9900442195" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="sign-in-container">
              <div className="signUp-form shadow">
                <h2 className="text-center pb-4">Contact Us</h2>
                <form autoComplete="off" className="mt-4">
                  <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" className="form-control" id="Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">E-mail</label>
                    <input type="text" className="form-control" id="E-mail" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Contact Number</label>
                    <input type="text" className="form-control" id="Contact Number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Message</label>
                    <input type="text" className="form-control" id="Message" required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn sign-in-btn w-100 text-white">Contact Us</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default ContactUs;