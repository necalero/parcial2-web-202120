import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { FormattedMessage } from 'react-intl';
import { getProductsService } from '../services/product';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  const [searchKeyState, setSearchkeyState] = useState({searchKeyN:searchKey});
  const URL = 'http://localhost:3001/api/products?q='+searchKeyState.searchKeyN;
  console.log(searchKey);
  console.log(URL);
  useEffect( () => {
    async function fetchData(){
      const productsFetch = await getProductsService(searchKey);
      setProducts(productsFetch);
    }
    fetchData();
  }, [searchKey]);

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
