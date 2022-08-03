async function malumot2(id) {
  try {
    const url = "http://localhost:8000/api/v1/product/" + id;
    const ress = await axios({
      method: "GET",
      url,
    });
    return ress.data.data;
  } catch (err) {
    console.log(err);
  }
}

async function malumot(params) {
  console.log(window.location.search);
  let id = window.location.search.split("?").join("");
  console.log(id);
  const product = await malumot2(id);
  let size = function (data) {
    let size = "";
    data.forEach((el) => {
      let sizes = `<div class="custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input" id="size-1" name="size">
        <label class="custom-control-label" for="size-1">${el.name}</label>
    </div>`;

      size += sizes;
    });
    return size;
  };

  let color = function (data) {
    let color = "";
    data.forEach((el) => {
      let colors = ` <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input" id="color-1" name="color">
      <label class="custom-control-label" for="color-1">${el.name}</label>
  </div>`;

      color += colors;
    });
    return color;
  };

  let reviews = function (reviews) {
    let review = "";

    reviews.forEach((el) => {
      let reviewss = `<div class="media mb-4">
        <img
          src="img/user.jpg"
          alt="Image"
          class="img-fluid mr-3 mt-1"
          style="width: 45px"
        />
        <div class="media-body">
          <h6>
            ${el.user.name}<small> - <i>esdan chiqibdi</i></small>
          </h6>
          <div class="text-primary mb-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>
          <p>
            ${el.description}
          </p>
        </div>
      </div>`;

      review += reviewss;
    });
    return review;
  };
  console.log(product);
  let data = `<div class="row px-xl-5">
    <div class="col-lg-5 mb-30">
    reviews    <div id="product-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner bg-light">
                <div class="carousel-item">
                    <img class="w-100 h-100" src="${product.photo}" alt="Image">
                </div>
                <div class="carousel-item active">
                    <img class="w-100 h-100" src="${product.photo}" alt="Image">
                </div>
                <div class="carousel-item">
                    <img class="w-100 h-100" src="${product.photo}" alt="Image">
                </div>
                <div class="carousel-item">
                    <img class="w-100 h-100" src="${product.photo}" alt="Image">
                </div>
            </div>
            <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                <i class="fa fa-2x fa-angle-left text-dark"></i>
            </a>
            <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                <i class="fa fa-2x fa-angle-right text-dark"></i>
            </a>
        </div>
    </div>

    <div class="col-lg-7 h-auto mb-30">
        <div class="h-100 bg-light p-30">
            <h3>Product Name Goes Here</h3>
            <div class="d-flex mb-3">
                <div class="text-primary mr-2">
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star-half-alt"></small>
                    <small class="far fa-star"></small>
                </div>
                <small class="pt-1">(99 Reviews)</small>
            </div>
            <h3 class="font-weight-semi-bold mb-4">$${product.price}</h3>
            <p class="mb-4">${product.description}</p>
            <div class="d-flex mb-3">
                <strong class="text-dark mr-3">Sizes:</strong>
                <form>
                   ${size(product.size)}
                </form>
            </div>
            <div class="d-flex mb-4">
                <strong class="text-dark mr-3">Colors:</strong>
                <form>
                   ${color(product.color)}
                </form>
            </div>
            <div class="d-flex align-items-center mb-4 pt-2">
                <div class="input-group quantity mr-3" style="width: 130px;">
                    <div class="input-group-btn">
                        <button class="btn btn-primary btn-minus">
                            <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control bg-secondary border-0 text-center" value="1">
                    <div class="input-group-btn">
                        <button class="btn btn-primary btn-plus">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i> Add To
                    Cart</button>
            </div>
            <div class="d-flex pt-2">
                <strong class="text-dark mr-2">Share on:</strong>
                <div class="d-inline-flex">
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>`;
  let kattaqism = document.querySelector(".kattaqism");

  let data2 = `   <div class="row px-xl-5">
  <div class="col">
    <div class="bg-light p-30">
      <div class="nav nav-tabs mb-4">
        <a
          class="nav-item nav-link text-dark active"
          data-toggle="tab"
          href="#tab-pane-1"
          >Description</a
        >
        <a
          class="nav-item nav-link text-dark"
          data-toggle="tab"
          href="#tab-pane-3"
          >Reviews (${product.reviews.length})</a
        >
      </div>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="tab-pane-1">
          <h4 class="mb-3">Product Description</h4>
          <p>
      ${product.description}
          </p>
          
        </div>
        <div class="tab-pane fade" id="tab-pane-3">
          <div class="row">
            <div class="col-md-6">
              <h4 class="mb-4">1 review for "${product.name}</h4>
              ${reviews(product.reviews)}
            </div>
            <div class="col-md-6">
              <h4 class="mb-4">Leave a review</h4>
              <small
                >Your email address will not be published. Required fields
                are marked *</small
              >
              <div class="d-flex my-3">
                <p class="mb-0 mr-2">Your Rating * :</p>
                <div class="text-primary">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
              <form>
                <div class="form-group">
                  <label for="message">Your Review *</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="5"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="name">Your Name *</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="form-group">
                  <label for="email">Your Email *</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group mb-0">
                  <input
                    type="submit"
                    value="Leave Your Review"
                    class="btn btn-primary px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  kattaqism.innerHTML = data + data2;
}

malumot();
