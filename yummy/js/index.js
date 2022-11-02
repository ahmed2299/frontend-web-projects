$(document).ready(function () {
  $(".loading-screen").fadeOut(100, function () {
    $(".loading-container").css({ opacity: "0", display: "none" });
  });
  startScreen();
});

$(".strip-toggel-menu").click(function () {
  if ($(".strip-header-nav").css("left") == "0px") {
    $(".strip-header-nav").css("left", "240px");
    $(".strip-toggel-menu i").attr("class", "fa fa-align-justify fa-times");
    $("#nav-menu").attr("class", "nav-tab-menu open-menu");
    $(".nav-tab-menu ul li").animate(
      { opacity: "1", "padding-top": "25px" },
      1000
    );
  } else {
    $(".strip-header-nav").css("left", "0px");
    $(".strip-toggel-menu i").attr("class", "fa-solid fa-align-justify");
    $("#nav-menu").attr("class", "nav-tab-menu close-menu");
    $(".nav-tab-menu ul li").css({ opacity: "0", "padding-top": "250px" });
  }
});

async function startScreen() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let myText = await response.json();
  displayMeals(myText.meals);
}

function displayMeals(meals) {
  let temp = "";
  if(meals!=null){
  for (let i = 0; i < meals.length; i++) {
    temp += `<div class="col-md-6 col-lg-3 my-3 myM  shadow">
        <div onclick='getMeal(${meals[i].idMeal})' class="movie shadow rounded position-relative">
            <div class="post">
                <img src="${meals[i].strMealThumb}" class="w-100 rounded">
                <div class="layer d-flex align-items-center">
                    <div class="info p-2">
                        <h2>${meals[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  }
  document.getElementById("rowData").innerHTML = temp;
  $(".loading-screen").fadeOut(100);
}
    else{
        $(".loading-screen").fadeIn(100,function(){
            search()
        });
    }
}

async function getMeal(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let myText = await response.json();

  temp = `<div class="col-md-4 myM text-white">
    <img class="w-100" src="${myText.meals[0].strMealThumb}">
    <br>
    <h1>${myText.meals[0].strMeal}</h1>
</div>
<div class="col-md-8 myM text-white text-start">
    <h2>Instructions</h2>
    <p>${myText.meals[0].strInstructions}</p>

        <p>
            <b class="fw-bolder">Area :</b>
            ${myText.meals[0].strArea}
        </p>
        <p>
            <b class="fw-bolder">Category :</b>
            ${myText.meals[0].strCategory}
        </p>

        <h3>Recipes :</h3>

        <ul class="d-flex flex-wrap px-0" id="recipes">
        </ul>

        <h3 class="my-2 mx-1 p-1">Tags :</h3>

        <ul class="d-flex px-0" id="tags">
        </ul>

        <a class="btn btn-success text-white" target="_blank" href="${myText.meals[0].strSource}">Source</a>

        <a class="btn youtube text-white" target="_blank" href="${myText.meals[0].strYoutube}">Youtube</a>

</div> `;

  document.getElementById("rowData").innerHTML = temp;

  temp = "";

  for (let i = 1; i <= 20; i++) {
    let measure = myText.meals[0][`strMeasure${i}`];
    let ingredient = myText.meals[0][`strIngredient${i}`];
    if (ingredient != "") {
      temp += `<li class="my-3 mx-1 p-1 alert alert-success rounded">${measure} ${ingredient}</li>`;
    }
  }
  document.getElementById("recipes").innerHTML = temp;

  if (myText.meals[0].strTags == null) {
    document.getElementById("tags").innerHTML = "";
  } else {
    splt = myText.meals[0].strTags.split(",");
    temp = "";
    for (let i = 0; i < splt.length; i++) {
      temp += `<li class="my-3 mx-1 p-1 alert alert-danger rounded">${splt[i]}</li>`;
    }

    document.getElementById("tags").innerHTML = temp;
  }
}


$('.nav-category').click(function(){

    if($(this).attr('data-list')=='search'){
        search()
    }

    if($(this).attr('data-list')=='categories'){
      categories()
    }

    if($(this).attr('data-list')=='a'){
      area()
    }

    if($(this).attr('data-list')=='i'){
      ingredients()
    }

    if($(this).attr('data-list')=='contact'){
      contact()
    }

    $(".strip-header-nav").css("left", "0px");
    $(".strip-toggel-menu i").attr("class", "fa-solid fa-align-justify");
    $("#nav-menu").attr("class", "nav-tab-menu close-menu");
    $(".nav-tab-menu ul li").css({ opacity: "0", "padding-top": "250px" });
})

async function search(){
    document.getElementById("rowData").innerHTML = '';

    document.getElementById('search-container').innerHTML=`<div class="row">
    <div class="col-md-6">
        <input type="text" id="searchInput" class="form-control mb-2" placeholder="Search By Name">
    </div>
    <div class="col-md-6">
        <input type="text" id="letter" maxlength="1" class="form-control mb-2" placeholder="search By First Letter...">
    </div>
</div>`

    $('#searchInput').keyup(function(e){
        searchInput(e.target.value)

    })

    $('#letter').keyup(function(e){
        searchLetter(e.target.value)
    })

    $('#letter').on("input", function () {
        if (this.value.length > 1)
            this.value = this.value.slice(0, 1);
    });

}

async function searchInput(q){
    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
      );
      let myText = await response.json();
      displayMeals(myText.meals)
}

async function searchLetter(q){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${q}`);
      let myText = await response.json();
      displayMeals(myText.meals)

}

async function categories(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let myText = await response.json();
  displayCategories(myText.categories)
}

function displayCategories(categories){
  let temp=''
  for(let i=0;i<categories.length;i++){
    temp+=`<div class="col-md-6 col-lg-3 my-3 myM shadow">
    <div class="movie shadow rounded position-relative">
        <div onclick="filterByCategory('${categories[i].strCategory}')" class="post">
            <img src="${categories[i].strCategoryThumb}" class="w-100 rounded" alt="">
            <div class="layer d-flex align-items-center">
                <div class="info p-2">
                    <h2>${categories[i].strCategory}</h2>
                    <p class=" overflow-hidden">${categories[i].strCategoryDescription.split(' ').slice(0, 15).join(" ")}</p>
                </div>
            </div>
        </div>
    </div>
</div>`
  }
  document.getElementById('search-container').innerHTML=''
  document.getElementById("rowData").innerHTML = temp;

}

async function filterByCategory(category){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  let myText = await response.json();
  displayMeals(myText.meals)
}


async function area(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  let myText = await response.json();
  displayArea(myText.meals)
}

function displayArea(areas){
  let temp=''
  for(let i=0;i<areas.length;i++){
    temp+=`<div class="col-md-6 col-lg-3 my-3 myM  shadow">
    <div class="movie shadow rounded position-relative">
        <div onclick="filterByArea('${areas[i].strArea}')" class="post">
            <i class="fa-solid fa-city fa-3x"></i>
            <h2 class="text-white">
                ${areas[i].strArea}
            </h2>
        </div>
    </div>
</div>`
  }
  document.getElementById('search-container').innerHTML=''
  document.getElementById("rowData").innerHTML = temp;
}

async function filterByArea(area){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  let myText = await response.json();
  displayMeals(myText.meals)
}

async function ingredients(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let myText = await response.json();
  displayIngredients(myText.meals)
}

function displayIngredients(ingredients){
  let temp=''
  for(let i=0;i<30;i++){
    if (ingredients[i].strDescription!=null && ingredients[i].strDescription!=""){
      temp+=`<div class="col-md-6 col-lg-3 my-3 myM  shadow">
      <div onclick="getMainIngredient('${ingredients[i].strIngredient}')" class="movie shadow rounded position-relative">
          <div class="post">
              <i class="fa-solid fa-bowl-food fa-3x"></i>
              <h2 class="text-white">
                  ${ingredients[i].strIngredient}
              </h2>
              <p class="text-white">${ingredients[i].strDescription.split(' ').slice(0, 20).join(" ")}</p>
          </div>
      </div>
  </div>`
    }
  }
  document.getElementById('search-container').innerHTML=''
  document.getElementById("rowData").innerHTML = temp;

}

async function getMainIngredient(ingredient){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  let myText = await response.json();
  document.getElementById('search-container').innerHTML=''
  displayMeals(myText.meals)

}

function contact(){
  let temp=`<section id="contact" class="container myM w-75 mx-auto mb-5 ">
  <div class="p-2">
      <h2 class="text-light mb-5">ContacUs...</h2>

      <div class="row mb-3">
          <div class="col-md-6">
              <div class="form-group">
                  <input type="text" class="form-control shadow is-valid" onkeyup="validation()" id="name" placeholder="Enter Your Name">
                  <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
                      Special Characters and Numbers not allowed
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <input type="text" class="form-control shadow is-valid" onkeyup="validation()" id="email" placeholder="Enter Email">
                  <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
        Enter valid email. *Ex: xxx@yyy.zzz
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <input class="form-control shadow is-valid" onkeyup="validation()" id="phone" placeholder="Enter phone">
                  <div class="alert mt-1 alert-danger d-none" id="phonealert" role="alert">   
        Enter valid Phone Number
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <input type="text" class="form-control shadow is-valid" onkeyup="validation()" id="age" placeholder="Enter Age">
                  <div class="alert mt-1 alert-danger d-none" id="agealert" role="alert">
                      Enter Valid Age
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <input type="text" class="form-control shadow is-valid" onkeyup="validation()" type="password" id="password" placeholder="Enter Password">
                  <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
                      Enter valid password *Minimum eight characters, at least one letter and one number:*
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <input type="text" class="form-control shadow is-valid" onkeyup="reValidation()" type="password" id="rePassword" placeholder="Enter RePassword">
                  <div class="alert mt-1 alert-danger d-none" id="repasswordalert" role="alert">  
Enter valid Repassword
                  </div>
              </div>
          </div>
      </div>

      <button type="submit" disabled id="submitBtn" class="btn btn-outline-danger" >Submit</button>

  </div>

</section>`

document.getElementById('search-container').innerHTML=''
document.getElementById("rowData").innerHTML = temp;

  
}

let pass=''

function validation(){
  $('#name').keyup(function(e){
    let regEx=/^[a-zA-Z ]+$/
    if(!regEx.test(e.target.value)){
      $('#name').attr('class','form-control shadow is-invalid')
      $('#namealert').attr('class','alert mt-1 alert-danger d-block')
    }
    else{
      $('#name').attr('class','form-control shadow is-valid')
      $('#namealert').attr('class','alert mt-1 alert-danger d-none')
    }
  })

  $('#email').keyup(function(e){
    let regEx=/^[a-zA-Z][A-Za-z0-9_.]*@[a-zA-Z]+.com$/
    if(!regEx.test(e.target.value)){
      $('#email').attr('class','form-control shadow is-invalid')
      $('#emailalert').attr('class','alert mt-1 alert-danger d-block')
    }
    else{
      $('#email').attr('class','form-control shadow is-valid')
      $('#emailalert').attr('class','alert mt-1 alert-danger d-none')
    }
  })

  $('#phone').keyup(function(e){
    let regEx=/^01(0|1|2)[0-9]{8}$/
    if(!regEx.test(e.target.value)){
      $('#phone').attr('class','form-control shadow is-invalid')
      $('#phonealert').attr('class','alert mt-1 alert-danger d-block')
    }
    else{
      $('#phone').attr('class','form-control shadow is-valid')
      $('#phonealert').attr('class','alert mt-1 alert-danger d-none')
    }
  })

  $('#age').keyup(function(e){
    let regEx=/^[1-9]+[0-9]*$/
    if(!regEx.test(e.target.value)){
      $('#age').attr('class','form-control shadow is-invalid')
      $('#agealert').attr('class','alert mt-1 alert-danger d-block')
    }
    else{
      $('#age').attr('class','form-control shadow is-valid')
      $('#agealert').attr('class','alert mt-1 alert-danger d-none')
    }
  })


  $('#password').keyup(function(e){
    let regEx=/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/
    if(!regEx.test(e.target.value)){
      $('#password').attr('class','form-control shadow is-invalid')
      $('#passwordalert').attr('class','alert mt-1 alert-danger d-block')
      pass=e.target.value
    }
    else{
      $('#password').attr('class','form-control shadow is-valid')
      $('#passwordalert').attr('class','alert mt-1 alert-danger d-none')
      pass=e.target.value
    }
  })

}


function reValidation(){
  $('#rePassword').keyup(function(e){
    let regEx=/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/
    if(!regEx.test(e.target.value)||pass!=e.target.value){
      $('#rePassword').attr('class','form-control shadow is-invalid')
      $('#repasswordalert').attr('class','alert mt-1 alert-danger d-block')
    }
    else{
      $('#rePassword').attr('class','form-control shadow is-valid')
      $('#repasswordalert').attr('class','alert mt-1 alert-danger d-none')
    }
  })
}