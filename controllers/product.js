const data = require('../assets/data');

function getProducts(query) {
  console.log('entra');
  let dataToReturn = data.filter(function (product){
    return product.name.toLowerCase().includes(query.toLowerCase());
  });
  console.log(dataToReturn);
  if(query===''||query===null)
  {
    return data;
  }
  else{

    return dataToReturn;
  }
}

module.exports = { getProducts };
