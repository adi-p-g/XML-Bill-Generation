// Object to hold the price of menu items
let prices = {
  coffee: 25,
  tea: 15,
  soda: 17,
  sandwich: 55,
  salad: 42,
  pie: 35,
};

let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateBill);

function generateBill() {
  console.log("Inside the function");
  // Get the number of each item ordered
  let coffee = document.getElementById("coffee").value;
  let tea = document.getElementById("tea").value;
  let soda = document.getElementById("soda").value;
  let sandwich = document.getElementById("sandwich").value;
  let salad = document.getElementById("salad").value;
  let pie = document.getElementById("pie").value;

  // Calculate the Total Bill
  let total =
    coffee * prices.coffee +
    tea * prices.tea +
    soda * prices.soda +
    sandwich * prices.sandwich +
    salad * prices.salad +
    pie * prices.pie;

  document.getElementById("total").innerHTML = "Rs " + total.toFixed(2);

  //   Serialize the data in JSON Format
  let data = JSON.stringify({
    coffee: coffee,
    tea: tea,
    soda: soda,
    sandwich: sandwich,
    salad: salad,
    pie: pie,
    total: total,
  });

  //Send the data to the server
  let xhr = new XMLHttpRequest();
  xhr.open("POST","http://localhost:3000/submit-bill", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  document.getElementById("form").reset();
}
