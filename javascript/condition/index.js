const products = [
  {
    type: "shoes",
    color: "red",
    size: [38, 39, 40],
    brand: "Adidas",
  },
  {
    type: "shoes",
    color: "black",
    size: [36, 38],
    brand: "Adidas",
  },
  {
    type: "shoes",
    color: "gray",
    size: [40, 41],
    brand: "Nike",
  },
  {
    type: "bag",
    color: "black",
    size: null,
    brand: "Prada",
  },
  {
    type: "bag",
    color: "yellow",
    size: [30],
    brand: "Hermes",
  },
  {
    type: "bag",
    color: "brown",
    size: [30, 35, 40],
    brand: "Hermes",
  },
  {
    type: "jacket",
    color: "white",
    size: ["S", "M"],
    brand: "Chanel",
  },
];

const obj = {
    apagitu: 'ya gitulah'
}

console.log('obj', obj.apagitu);

const bags = products.filter((product) => {
//   Return only bags
  if(!product.type === 'bag') {
      return product
  }
});

console.log('bags', bags);

const bagJacket = products.filter((product) => {
  // Return bag and jacket
  if(product.type === 'bag' || product.type === 'jacket') {
      return product
  }
});

console.log('bag and jacket', bagJacket);

// {
//     type: "jacket",
//     color: "white",
//     size: ["S", "M"],
//     brand: "Chanel",
//   },

const redShoes = products.filter((product) => {
  // Return shoes with color red
  if(product.color === 'red' && product.type === 'shoes') {
      return product
  }
});

console.log('red shoes', redShoes);

const shoesSize40 = products.filter((product) => {
  // Return shoes with size 40
  if(product.size) {
    for (let i = 0; i < product.size.length; i++) {
        if(product.size[i] === 40 &&  product.type === 'shoes' ) {
            return product
        }
      }
  }
});

console.log('shoes size 40', shoesSize40);

// Return bag with brand Hermes size 35.
// If any also show chanel jacket
// If not show all hermes
const hermesBag = products.filter((product) => {

});

const productRecomendation = // write your code here

console.log('Hermes bag', hermesBag);

console.log('product recomendation', productRecomendation);
