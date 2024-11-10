// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Log each name and each province
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));

// Log each name with its matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Use map to create a new array of province names in all uppercase.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

//Create a new array using map that contains the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//Use sort to alphabetically sort the provinces.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

//Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

//Create a boolean array using map and some to determine if a name contains the letter 'S'.
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

//const nameProvinceMapping = names.reduce((acc, name, index) => {
  const nameProvinceMapping = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});
  console.log(nameProvinceMapping);
  
//Advanced Exercises
//Log Products
console.log(products.map(product => product.product).join(", "));

//Filter by Name Length
console.log(products.filter(product => product.product.length <= 5).map(product => product.product).join(", "));

//Price Manipulation:
console.log(products.filter(product => product.price !== '' && product.price !== ' ').map(product => ({
  ...product, 
  price: Number(product.price)
})).reduce((total, product) => total + product.price, 0));

//Concatenate Product Names
console.log(products.reduce((acc, product) => acc + product.product, ""));

// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y.
console.log(products.filter(product => product.price !== '' && product.price !== ' ').map(product => ({
  ...product, 
  price: Number(product.price)
})).reduce((acc, product) => {
  if (!acc.highest || product.price > acc.highest.price) acc.highest = product;
  if (!acc.lowest || product.price < acc.lowest.price) acc.lowest = product;
  return acc;
}, {}).highest.product + " " + "Highest: " + acc.highest.price + " Lowest: " + acc.lowest.price);

//Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values
console.log(products.reduce((acc, { product, price }) => {
  acc.push({ name: product, cost: price });
  return acc;
}, []));
