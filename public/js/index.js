document.querySelector(".navbar-nav");
async function enterSystem() {
  try {
    console.log("salom ");
    const ress = await axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/category",
    });

    return ress.data.data;
  } catch (err) {
    console.log(err);
  }
}

async function malumot2() {
  try {
    const ress = await axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/product",
    });
    return ress.data.data;
  } catch (err) {
    console.log(err);
  }
}

async function malumot() {
  const create = document.createElement("a");
  const data = await enterSystem();
  create.classList.add("nav-item");
  create.classList.add("nav-link");
  const category = document.querySelector(".category");
  console.log(data);
  data.forEach((el) => {
    create.innerHTML = el.name;

    category.appendChild(create.cloneNode(true));
  });
  let kattadiv = document.querySelector(".kattadiv");
  data.forEach((el) => {
    let categories = `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <a class="text-decoration-none" href='${el._id}'>
<div class="cat-item d-flex align-items-center mb-4">
  <div class="overflow-hidden" style="width: 100px; height: 100px">
    <img class="img-fluid" src='${el.photo}' alt="">
  </div>
  <div class="flex-fill pl-3">
    <h6>${el.name}</h6>
    <small class="text-body">${el.products.length} Products</small>
  </div>
</div>
</a></div>`;
    kattadiv.innerHTML += categories;
  });

  const products = await malumot2();
  console.log(products);
  let productis = document.querySelector(".products");
  products.forEach((el) => {
    let product = `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div class="product-item bg-light mb-4">
      <div class="product-img position-relative overflow-hidden">
        <img class="img-fluid w-100" src="${el.photo}" alt="">
        <div class="product-action">
          <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
          <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
        </div>
      </div>
      <div class="text-center py-4">
        <a class="h6 text-decoration-none text-truncate" href="/detail.html?${el._id}">${el.name}</a>
        <div class="d-flex align-items-center justify-content-center mt-2">
          <h5>$${el.price}</h5>
          <h6 class="text-muted ml-2"><del>${el.price}</del></h6>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-1">
          <small class="fa fa-star text-primary mr-1"></small>
          <small class="fa fa-star text-primary mr-1"></small>
          <small class="fa fa-star text-primary mr-1"></small>
          <small class="fa fa-star text-primary mr-1"></small>
          <small class="fa fa-star text-primary mr-1"></small>
          <small>(99)</small>
        </div>
      </div>
    </div>
  </div>`;
    productis.innerHTML += product;
  });
}
malumot();
