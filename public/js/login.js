async function enterSystem(email, password) {
  try {
    console.log("salom ");
    const ress = await axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/user/signin",
      data: {
        email,
        password,
      },
    });
    console.log(ress);
    if (ress.status === 201) {
      alert("siz tizimga muvafaqiyatli kirdingiz");
      window.setTimeout(() => {
        location.assign("/home");
      }, 100);
    }
  } catch (err) {
    console.log(err);
    alert("email ve ya parol noto'g'ri");
  }
}
document.querySelector("#signin").addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("sasasas");
  const email = document.querySelector("#your_name").value;
  const password = document.querySelector("#your_pass").value;
  console.log(email, password);
  await enterSystem(email, password);
});

console.log("dasgjvasbasdsajlhsa");
