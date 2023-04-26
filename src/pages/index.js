
import React, { useState } from 'react'
import Modal from 'react-modal';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import ContactFrom from '../components/ContactFrom';

const Home = ({ }) => {

  return (
    <div id='content-wrap'>
      <Hero />
      <section className='section section-one'>
        <div className='container'>
          <h2 className='section-title'>GET TO KNOW US BETTER</h2>
          <p> House of Leevean Events is an modern barn event venue and rental that is located in an intimate setting in Texas. House of Leevean Events offers indoor and outdoor venues for every occasion. House of Leevean Events also offers event’s supplies rental. No matter what the occasion,
            House of Leevean Events
            is the perfect place for you.</p>
          <p>House of Leevean was founded by Leevean Fleming-Peters. Initially House of Leevean was only a women’s clothing and accessories line. However in the past ten years Leevean planned several weddings/events for family, friends and organizations to include the NAACP chapter at Penn State University. Leevean quickly realized that events planning is a passion that needed to be further persuaded.</p>
          <p> After several years of studies, training and gaining experience in the field, in 2022 House of Leevean Events was founded. Our goal is to take away all the stress and burdens that come with planning an event from your shoulders and turn it into a pleasantly memorable experience for you and your guests. We look forward to being the destination for all your occasions. </p>
        </div>
      </section>

      <section className='section section-two'>
        <div className='container'>
          <h2 className='section-title'>SERVICES</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>

      <section className='section section-three'>
        <div className='container'>
          <h2 className='section-title'>GALLERY</h2>

        </div>
      </section>
      <section className='section section-four'>
        <div className='container'>
          <h2 className='section-title'>Contact</h2>
          <ContactFrom content='Please fill out this form and we will get in touch with you shortly.' />
        </div>
      </section>
    </div>
  )
}
export default Home;
