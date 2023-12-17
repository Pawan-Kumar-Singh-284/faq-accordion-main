let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");

let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");

let minus1 = document.getElementById("minus1");
let minus2 = document.getElementById("minus2");
let minus3 = document.getElementById("minus3");
let minus4 = document.getElementById("minus4");

minus1.addEventListener("click", function () {
  minus1.style.display = "none";
  plus1.style.display = "block";
  para1.style.height = "0";
});
minus2.addEventListener("click", function () {
  minus2.style.display = "none";
  plus2.style.display = "block";
  para2.style.height = "0";
});
minus3.addEventListener("click", function () {
  minus3.style.display = "none";
  plus3.style.display = "block";
  para3.style.height = "0";
});
minus4.addEventListener("click", function () {
  minus4.style.display = "none";
  plus4.style.display = "block";
  para4.style.height = "0";
});

plus1.addEventListener("click", function () {
  plus1.style.display = "none";
  minus1.style.display = "block";
  para1.style.height = "10rem";
});

plus2.addEventListener("click", function () {
  plus2.style.display = "none";
  minus2.style.display = "block";
  para2.style.height = "10rem";
});
plus3.addEventListener("click", function () {
  plus3.style.display = "none";
  minus3.style.display = "block";
  para3.style.height = "10rem";
});
plus4.addEventListener("click", function () {
  plus4.style.display = "none";
  minus4.style.display = "block";
  para4.style.height = "10rem";
});
