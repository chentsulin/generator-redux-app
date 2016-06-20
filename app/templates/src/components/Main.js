import React, { PropTypes } from 'react';


const Main = ({ children }) => (
  <div>
    {/* this will render the child routes */}
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.any.isRequired,
};


export default Main;
