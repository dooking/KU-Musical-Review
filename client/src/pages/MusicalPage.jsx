/* eslint-disable react/prop-types */
import React from 'react';
import Musical from '../components/musical';

function MusicalPage({ match }) {
  return <Musical id={match.params.id} />;
}

export default MusicalPage;
