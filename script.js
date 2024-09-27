let divcontainer = document.getElementById("container");
let searchInput = document.getElementById("searchInput");
let productsData = [];

let product = async () => {
  let data = await fetch("https://dummyjson.com/products/search?q=phone");
  let finaldata = await data.json();
  productsData = finaldata.products;
  displayProducts(productsData);
};

let displayProducts = (products) => {
  divcontainer.innerHTML = "";
  products.forEach(({ title, thumbnail, price, brand }) => {
    divcontainer.innerHTML += `
          <div class="card">
          <img src="${thumbnail}" alt="${title}">
          <h2>${title}</h2>
          <p>$${price}</p>
          <p>Brand: ${brand}</p>
        </div>
        `;
  });
};

searchInput.addEventListener('input',()=>{
    let searchValue=searchInput.value.toLowerCase()
    let filteredProducts=productsData.filter((product)=>
        product.brand.toLowerCase().includes(searchValue)
    )
    displayProducts(filteredProducts)
})

product();


