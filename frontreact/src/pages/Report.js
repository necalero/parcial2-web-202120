import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

export const Report = () => {
  const [products, setProducts] = useState([]);

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="stock"/></h1>
        <p>Show here the graph</p>
      </div>
    </section>
  );
};
