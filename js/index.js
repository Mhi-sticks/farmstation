
// products
const product = [
  {
    id: 0,
    image: "images/farm9.jpg",
    title: "pen",
    price: 349.0,
  },
  {
    id: 1,
    image: "images/farm9.jpg",
    title: "farm",
    price: 349.0,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
// search items
document.getElementById("search").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItem(filterData);
});
const displayItem = (items) => {
  document.getElementById("box-5").innerHTML = items
    .map((item) => {
      let { image, title, price } = item;
      return `<div class="card-5">
              <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
              <div class="img-box">
                <img src=${image} class="img-responsive img-fluid" alt="">									
              </div>
              <div class="thumb-content">
                  <h4 class="h4-responsive">${title}</h4>									
                <div class="star-rating">
                  <ul class="list-inline">
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                  </ul>
                </div>
                <p class="item-price"><strike>$369.00</strike> <span>${price}</span></p>
                <a onClick='addToCart("+(i++)+")' href="#" class="btn btn-primary">Add to Cart</a>
                
              </div>						
            </div>`;
    })
    .join("");
};
displayItem(categories);

document.getElementById("box-5").addEventListener("onClick", (e) => {
  e.preventDefault();
  addToCart(e.target);
});

// the layout and display of the product cards
document.getElementById("box-5").innerHTML = categories
  .map((item) => {
    let { image, title, price } = item;
    return `<div class="card-5">
      <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
      <div class="img-box">
        <img src=${image} class="img-responsive img-fluid" alt="">									
      </div>
      <div class="thumb-content">
          <h4 class="h4-responsive">${title}</h4>									
        <div class="star-rating">
          <ul class="list-inline">
            <li class="list-inline-item"><i class="fa fa-star"></i></li>
            <li class="list-inline-item"><i class="fa fa-star"></i></li>
            <li class="list-inline-item"><i class="fa fa-star"></i></li>
            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
          </ul>
        </div>
        <p class="item-price"><strike>$369.00</strike> <span>$${price}</span></p>
        <a onClick='addToCart("+(i++)+")' href="#" class="btn btn-primary">Add to Cart</a>
      </div>						
    </div>`;
  })
  .join("");

let cart = [];

// the add to cart funtion
function addToCart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

// remove element function
function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

// display cart function and layout
function displayCart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cart-container").innerHTML = "Your Cart is Empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cart-container").innerHTML = cart
      .map((items) => {
        let { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + " .00";
        return (
          `<table>
          <thead>
              <tr>
                  <td>Remove</td>
                  <td>Images</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><a href="#"><i class="fas fa-trash-alt" onClick='delElement(" +
                  j++ +
                  ")'></i></a></td>
                  <td><img src=${image} alt=""></td>
                  <td><h5>${title}</h5></td>
                  <td><h5>$${price}</h5></td>
                  <td><input type="number" class="w-25 pl-1" value="1"></td>
                  <td><h5>$780.00</h5></td>
              </tr></tbody>
              </table>` +
          "<i class='fa-solid fa-trash' onClick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
