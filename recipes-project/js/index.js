displayRecipe = document.getElementById("displayRecipe");

let links = document.querySelectorAll(".nav-link");


let recipeList = [];
let query = "";
let len=0
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    query = e.target.getAttribute("id");
    recipe();
  });
}
recipe();
async function recipe() {
  if (query == "") {
    response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=pizza`
    );
  } else {
    response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
  }
  let recipe = await response.json();

  len=await recipe.count

  console.log(recipe.count)
  recipeList = recipe.recipes;
  display();
  console.log(recipeList);
}

function display() {
  temp = "";
  for (let i = 0; i < recipeList.length; i++) {
    temp += `            <div class="col-md-3">
    <img class="w-100" src=${recipeList[i]["image_url"]}>
    <h5>Publisher: ${recipeList[i]["publisher"]}</h5>
    <button type="button" onclick="displayTitle(${i})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        title
    </button>
    <div class="modal fade" id="staticBackdrop">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">title</h1>
                </div>
                <div class="modal-body"  id="modalTitle">
                </div>
            </div>
        </div>
    </div>
</div>`;
  }
  displayRecipe.innerHTML = temp;
}


async function displayTitle(x){
    if (query == "") {
        response = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=pizza`
        );
      } else {
        response = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${query}`
        );
      }

      let recipe = await response.json();


      document.getElementById('modalTitle').innerHTML=`<p>${recipe.recipes[x]['title']}</p>`
}