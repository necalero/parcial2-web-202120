import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  const [searchKeyState, setSearchkeyState] = useState({searchKeyN:searchKey});
  const URL = 'http://localhost:3001/api/products?q='+searchKeyState.searchKeyN;
  console.log(searchKey);
  console.log(URL);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setProducts((res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id='gallery'/></h1>
        <div className='home-card'>
        {products
              .map((product) => (
                <Card name={product.name} picture={product.picture} price={product.price} isActive={product.isActive}/>
                
              ))}
        </div>
      </div>
    </section>
  );
};
