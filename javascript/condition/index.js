const products = [
    {
        type: 'shoes',
        color: 'red',
        size: [38, 39, 40],
        brand: 'Adidas',
    },
    {
        type: 'shoes',
        color: 'black',
        size: [36, 38],
        brand: 'Adidas'
    },
    {
        type: 'shoes',
        color: 'gray',
        size: [40, 41],
        brand: 'Nike'
    },
    {
        type: 'bag',
        color: 'black',
        size: null,
        brand: 'Prada'
    },
    {
        type: 'bag',
        color: 'yellow',
        size: [30],
        brand: 'Hermes'
    },
    {
        type: 'bag',
        color: 'brown',
        size: [30, 35, 40],
        brand: 'Hermes'
    },
    {
        type: 'jacket',
        color: 'white',
        size: ['S', 'M'],
        brand: 'Chanel'
    }
]

const bags = products.filter(product => {
    // Return only shoes
    // if() {
    //     return product
    // }
})

console.log(bags);


const shoesJacket = products.filter(product => {
    // Return bag and jacket
    // if() {
    //     return product
    // }
})

console.log(shoesJacket);

const redShoes = products.filter(product => {
    // Return shoes with color red
    // if() {
    //     return product
    // }
})

console.log(redShoes)

const shoesSize40 = products.filter(product => {
    // Return shoes with size 40
    // if() {
    //     return product
    // }
})

console.log(shoesSize40)

// Return bag with brand Hermes size 35. 
    // If any also show chanel jacket
    // If not show all hermes
const productRecomendation = //write code here

console.log(productRecomendation)



