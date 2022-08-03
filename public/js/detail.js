async function malumot2(id, description) {
  try {
    const url = "http://localhost:8000/api/v1/product/" + id + "/review";
    const ress = await axios({
      method: "POST",
      url,
      data: {
        description: description,
        rating: 4,
        
      },
    });
    console.log(ress.status);
    if (ress.status == 201) {
      window.location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

async function malumot(e) {
  e.preventDefault();
  let id = window.location.search.split("=")[1];
  let message = document.querySelector("#message").value;
  malumot2(id, message);
}
document.querySelector(".boss").addEventListener("click", malumot);
