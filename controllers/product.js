const data = require('../assets/data');

function getProducts(query) {
  console.log('entra');
  
  
  if(query)
  {
    let dataToReturn = data.filter(function (product){
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
    console.log(dataToReturn);
    return dataToReturn;
  }
  else{
    console.log('else');
    return data;
  }
}

module.exports = { getProducts };
