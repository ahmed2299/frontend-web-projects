productNameInfo = document.getElementById("productName");
productPriceInfo = document.getElementById("productPrice");
productCategoryInfo = document.getElementById("productCategory");
productDescriptionInfo = document.getElementById("productDescription");

productDisplay = document.getElementById("product");

deleteButton = document.getElementById("deleteButton");

productSearch = document.getElementById("search");
displaySearch = document.getElementById('displaySearch');

addProductButton=document.getElementById('addProductButton');

editProductButton= document.getElementById('editProductButton');

var productList = [];
var idx=0
if (localStorage.getItem("products") != null) {
  productList = JSON.parse(localStorage.getItem("products"));
  displayProduct();
}

function addProduct() {
  product = {
    name: productNameInfo.value,
    price: productPriceInfo.value,
    category: productCategoryInfo.value,
    description: productDescriptionInfo.value,
  };
  productList.push(product);
  console.log(productList);
  localStorage.setItem("products", JSON.stringify(productList));
  productList = JSON.parse(localStorage.getItem("products"));
  displayProduct();
}

function displayProduct() {
  var temp = "";
  for (var i = 0; i < productList.length; i++) {
    temp += `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td><button class="btn btn-warning" onclick="updateProduct(${i})" id="updateButton">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})" id="deleteButton">Delete</button></td>
    </tr>`;
  }
  productDisplay.innerHTML = temp;
}

function deleteProduct(i) {
  productList.splice(i, 1);
  var temp = "";
  for (var i = 0; i < productList.length; i++) {
    temp += `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td><button class="btn btn-warning" onclick="updateProduct(${i})" id="updateButton">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})" id="deleteButton">Delete</button></td>
    </tr>`;
  }
  productDisplay.innerHTML = temp;
  localStorage.setItem("products", JSON.stringify(productList));

}

function clearForm() {
  productNameInfo.value = "";
  productPriceInfo.value = "";
  productCategoryInfo.value = "";
  productDescriptionInfo.value = "";
}

function search() {
    var temp = "";
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(productSearch.value.toLowerCase())) {
      temp += `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td><button class="btn btn-warning" onclick="updateProduct(${i})" id="updateButton">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})" id="deleteButton">Delete</button></td>
    </tr>`;
    }
  }
  displaySearch.innerHTML = temp;
}

function updateProduct(i){
    productNameInfo.value=productList[i].name
    productPriceInfo.value=productList[i].price
    productCategoryInfo.value=productList[i].category
    productDescriptionInfo.value=productList[i].description
    addProductButton.style.display='none'
    editProductButton.style.display='inline-block'
    idx=i
}

function editProduct(){
    productList[idx].name=productNameInfo.value
    productList[idx].price=productPriceInfo.value
    productList[idx].category=productCategoryInfo.value
    productList[idx].description=productDescriptionInfo.value
    displayProduct()
    localStorage.setItem("products", JSON.stringify(productList));
    addProductButton.style.display='inline-block'
    editProductButton.style.display='none'
    clearForm()
}