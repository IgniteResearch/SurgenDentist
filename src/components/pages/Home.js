import React from 'react';
import Header from './homePagesComponents/Header';
import FeatureItem from './homePagesComponents/FeatureItem';
import './Home.css';

const Home = () => {
  return (
    <div id="main-home-page">
      <Header />
      <section className="header-bottom-content-aria">
        <div className="container">
          <div className="row pr-4 mr-4">
            <FeatureItem
              icon="query_builder"
              title="Opening Hours"
              extraClass="home-primary"
              subTitle="24X7 Dental Emergency Services are availble "
              subTitleHref="" />
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
      </section>
    </div>
  );
};

export default Home;