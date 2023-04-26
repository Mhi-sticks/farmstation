// products
const product = [
  {
    id: 0,
    image: "images/beet.png",
    title: "Beet",
    price: 349.0,
  },
  {
    id: 1,
    image: "images/broccoli.png",
    title: "Broccoli",
    price: 349.0,
  },
  {
    id: 2,
    image: "images/cabbage.png",
    title: "Cabbage",
    price: 349.0,
  },
  {
    id: 3,
    image: "images/carrot.png",
    title: "Carrot",
    price: 349.0,
  },
  {
    id: 4,
    image: "images/cock.png",
    title: "Cock",
    price: 349.0,
  },
  {
    id: 5,
    image: "images/corn.png",
    title: "Corn",
    price: 349.0,
  },
  {
    id: 6,
    image: "images/cow.png",
    title: "Cow",
    price: 349.0,
  },
  {
    id: 7,
    image: "images/cucumber.png",
    title: "Cucumber",
    price: 349.0,
  },
  {
    id: 8,
    image: "images/dog_food.png",
    title: "Dog Food",
    price: 349.0,
  },
  {
    id: 9,
    image: "images/cowboy_hat.png",
    title: "Cowboy Hat",
    price: 349.0,
  },
  {
    id: 10,
    image: "images/dog.png",
    title: "Dogs",
    price: 349.0,
  },
  {
    id: 11,
    image: "images/egg.png",
    title: "Eggs",
    price: 349.0,
  },
  {
    id: 12,
    image: "images/fish.png",
    title: "Fish",
    price: 349.0,
  },
  {
    id: 13,
    image: "images/garlic.png",
    title: "Garlic",
    price: 349.0,
  },
  {
    id: 14,
    image: "images/german_shepherd.png",
    title: "German Shepherd",
    price: 349.0,
  },
  {
    id: 15,
    image: "images/ginger.png",
    title: "Ginger",
    price: 349.0,
  },
  {
    id: 16,
    image: "images/mushroom.png",
    title: "Mushroom",
    price: 349.0,
  },
  {
    id: 17,
    image: "images/onion.png",
    title: "Onion",
    price: 349.0,
  },
  {
    id: 18,
    image: "images/palm_tree.png",
    title: "Palm Tree",
    price: 349.0,
  },
  {
    id: 19,
    image: "images/pepper.jpg",
    title: "Pepper",
    price: 349.0,
  },
  {
    id: 20,
    image: "images/pig.png",
    title: "Pig",
    price: 349.0,
  },
  {
    id: 21,
    image: "images/shotgun.png",
    title: "Shot Gun",
    price: 349.0,
  },
  {
    id: 22,
    image: "images/shrimps.png",
    title: "Shrimps",
    price: 349.0,
  },
  {
    id: 23,
    image: "images/tomatoes.png",
    title: "Tomatoes",
    price: 349.0,
  },
  {
    id: 24,
    image: "images/turkey.png",
    title: "Turkey",
    price: 349.0,
  },
  {
    id: 25,
    image: "images/wheat.png",
    title: "Wheat",
    price: 349.0,
  },
  {
    id: 26,
    image: "images/mushroom.png",
    title: "Mushroom",
    price: 349.0,
  },
  {
    id: 27,
    image: "images/carrot.png",
    title: "Carrot",
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
      return `<div class="card-5 itemcent">
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
