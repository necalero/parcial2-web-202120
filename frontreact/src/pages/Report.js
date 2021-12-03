import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { getProductsService } from "../services/product";
import { Chart } from "../components/Chart";

export const Report = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const productsFetch = await getProductsService();
      setProducts(productsFetch);
    }
    fetchData();
  }, []);

 

  return (
    <section id="report">
      <div className="report-container">
        <h1>
          <FormattedMessage id="stock" />
        </h1>
        <Chart data={products}/>
      </div>
    </section>
  );
};
