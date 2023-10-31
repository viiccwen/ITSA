const d = document;

var products = [
    {
        id: 0,
        name: "商品1",
        price: 5000,
        count: 3,
    },
    {
        id: 1,
        name: "商品2",
        price: 200,
        count: 5,
    },
    {
        id: 2,
        name: "商品3",
        price: 2575,
        count: 12,
    },
    {
        id: 3,
        name: "商品4",
        price: 700,
        count: 25,
    },
];

function CalculateTotal() {
    var ProductPrice = 0;
    var ProductTax = 0;
    var TotalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        ProductPrice += products[i].price * products[i].count;
        ProductTax += products[i].price * products[i].count * 0.05;
    }
    TotalPrice += ProductPrice + ProductTax;
    var totalbox = d.querySelector(".total-box");
    totalbox.innerHTML = `
        <div class="product-price">商品售價：${ProductPrice}</div>
        <div class="product-tax">商品稅金(5%)：${ProductTax}</div>
        <div class="delivery-price">運費：100</div>
        <div class="total-price">總金額：${TotalPrice}</div>
        <button class="btn btn-success">結帳</button>
    `;
}

function DisplayProduct() {
    CalculateTotal();

    var tbody = d.querySelector("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        tbody.innerHTML += `
        <tr>
            <td>${products[i].name}</td>
            <td><input type="number" value="${products[i].count}" min="1" data-target="${products[i].id}" onchange="ChangeCount(event)" /></td>
            <td>${products[i].price * products[i].count}</td>
            <td>
              <button class="btn btn-danger" onclick="DeleteItem(event)" data-target="${products[i].id}">刪除</button>
            </td>
        </tr>
        `;
    }
}

function DeleteItem(e) {
    var et = e.target;
    var curId = et.getAttribute("data-target");

    products.splice(products.findIndex(x => x.id == curId), 1);

    DisplayProduct();
}

function ChangeCount(e) {
    var et = e.target;
    var curId = et.getAttribute("data-target");
    var curCount = et.value;


    var index = products.findIndex(x => x.id == curId);
    products[index].count = curCount;
    DisplayProduct();
}

window.onload = function () {
    DisplayProduct();
}