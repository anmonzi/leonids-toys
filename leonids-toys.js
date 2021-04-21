// * Seperate Toy Objects

// const toyCar = {
//     id: 1,
//     name: "Ultra Rage",
//     brand: "Hot Wheels",
//     manufacturer: "Mattel",
//     manufacturerDate: 1982,
//     size: "3 inches",
//     weight: 4.5,
//     color: "Red",
//     price: 5.99
// }

// const dollHouse = {
//     id: 2,
//     name: "Barbie Rainbow Cove Princess Castle Playset",
//     brand: "Barbie",
//     manufacturer: "Mattel",
//     manufacturerDate: 2018,
//     size: 36,
//     weight: 5,
//     color: "Pink",
//     price: 59.99
// }

// const nurfGun = {
//     id: 3,
//     name: "Dinosquad",
//     brand: "Nerf",
//     manufacturer: "Hasbro",
//     manufacturerDate: 2020,
//     size: 12,
//     weight: 2,
//     color: "Green",
//     price: 25.99
// }

// * Toy Array of Objects
const toys = [
  {
    id: 1,
    name: "Ultra Rage",
    brand: "Hot Wheels",
    manufacturer: "Mattel",
    manufacturerDate: 1982,
    size: "3 inches",
    weight: 4.5,
    color: "Red",
    price: 5.99,
  },
  {
    id: 2,
    name: "Barbie Rainbow Cove Princess Castle Playset",
    brand: "Barbie",
    manufacturer: "Mattel",
    manufacturerDate: 2018,
    size: 36,
    weight: 5,
    color: "Pink",
    price: 59.99,
  },
  {
    id: 3,
    name: "Dinosquad",
    brand: "Nerf",
    manufacturer: "Hasbro",
    manufacturerDate: 2020,
    size: 12,
    weight: 2,
    color: "Green",
    price: 25.99,
  },
];

// * Two New Toy Objects to .Push()
const teddyBear = {
  id: 4,
  name: "Good Luck Bear",
  brand: "Care Bears",
  manufacturer: "Cloudco Entertainment",
  manufacturerDate: 2015,
  size: 10,
  weight: 3,
  color: "Green",
  price: 14.99,
};

const powerRangers = {
  id: 5,
  name: "Red Ranger",
  brand: "Power Rangers",
  manufacturer: "Bandai",
  manufacturerDate: 2001,
  size: 9,
  weight: 6,
  color: "Red",
  price: 8.99,
};

toys.push(teddyBear);
toys.push(powerRangers);
// console.log(toys)

// * For..Of Loops

// for (const toy of toys) {
//     console.log(toy.brand);
// }

// for (const toy of toys) {
//     console.log(`The ${toy.color} ${toy.name} costs $${toy.price}`);
// }

// * Increasing Prices with For..of Loop by 5%

// for (const toy of toys) {
//     toy.price = Math.round(toy.price + (.05 * toy.price));

//     console.log(`The ${toy.color} ${toy.name} now costs $${toy.price}`)
// }

// * Using an If statement inside a For..of Loop

// const toyToFind = 4

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = Math.round(toy.price + (.05 * toy.price));
//         console.log(`The ${toy.color} ${toy.name} costs $${toy.price} dollars.`);
//     }
// }

// * Creating a Function to add NEW Toy and placing an ID with it
// New Toy to Add without ID
const lincolnLogs = {
  name: "Lincoln Logs",
  brand: "Lincoln Logs",
  manufacturer: "K'Nex",
  manufacturerDate: 1987,
  size: 10,
  weight: 8,
  color: "Brown",
  price: 49.99,
};

//* Function to Add New Toy
const addToyToInventory = (toyObject) => {
  // Step 1: Get maxium id current in array

  //Get index of last item in array
  const lastIndex = toys.length - 1;

  //Get the last object in the array
  const currentLastToy = toys[lastIndex];

  //Get id property value of last toy
  const maxId = currentLastToy.id;

  //Step 2: Increase the current max id by 1
  const idForNewToy = maxId + 1;

  //Step 3: Add the id property to the toy object
  toyObject.id = idForNewToy;

  //Step 4: Add the toy object to the array
  toys.push(toyObject);
};

// Calling the Function
addToyToInventory(lincolnLogs);

for (const toy of toys) {
  console.log(`The ${toy.name} costs $${toy.price}`);
}


//* Function to Remove a Toy
const removeProduct = (toyId) => {
  if (toys.id === 4) {
    return toyId
  }
}

console.log(removeProduct(4))