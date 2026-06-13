import React from 'react';

import FacilityList from '../components/FacilityList';
import Footer from '../components/Footer';

const Facility = () => {
  return (
    <>
      <div className="pages fac">
        <h1 className="title">Our Facilities</h1>
      </div>
      <FacilityList />
      <Footer />
    </>
  )
}

export default Facility