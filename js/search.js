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
              <a href="#" class="btn btn-primary">Add to Cart</a>
              <button onClick='addToCart("+(i++)+")'><a href="#" class="btn btn-primary">Add to Cart</a></button>
            </div>						
          </div>`;
    })
    .join("");
};
displayItem(categories);
