import React from 'react';
import { connect } from 'react-redux';

const Mentors = props => {
  return <p>Mentees will be mapped here</p>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Mentors);
