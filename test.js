const axios = require('axios');
const URL = 'https://dog.ceo/api/breeds/list';
const tempArrBreeds= [];


axios
  .get(URL) 
  .then((r) => {
    r.data.message.forEach(element => {
      tempArrBreeds.push(axios.get(`https://dog.ceo/api/breed/${element}/images/random`));
    }); 
    console.log(tempArrBreeds)
    Promise.all(tempArrBreeds)
      .then((r) => {
         const tempArrImg = r.map((el) => {
         return el.data.message;
      })
    console.log(tempArrImg)
    })
  })
  .catch((err) => console.log(err.stack));
