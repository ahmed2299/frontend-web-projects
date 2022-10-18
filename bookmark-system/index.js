var siteName = document.getElementById("siteName");

var siteUrl = document.getElementById("siteUrl");

var displayList = document.getElementById("bookmarkList");

var bookMarkList = [];

if(localStorage.getItem('bookmark')!=null){
    bookMarkList=JSON.parse(localStorage.getItem('bookmark'))
    display();

}

function submit() {
  var bookMark ={
      name: siteName.value,
      url: siteUrl.value
    };


  bookMarkList.push(bookMark);

  localStorage.setItem('bookmark',JSON.stringify(bookMarkList));

  bookMarkList=JSON.parse(localStorage.getItem('bookmark'));
  display();
}

function display() {
  var temp = "";
  for (var i = 0; i < bookMarkList.length; i++) {
    temp += `<div class="webwell rows" id="${bookMarkList[i].name}">
        <h2>${bookMarkList[i].name}</h2>
        <button class="btn btn-primary"href="${bookMarkList[i].url}" onclick="openWindow('${bookMarkList[i].url}')">Visit</button>
        <button class="btn btn-danger" onclick="deleteBookMark(${i})">Delete</button>
        </div>`;
  }
  displayList.innerHTML=temp
}

function deleteBookMark(i) {
  bookMarkList.splice(i, 1);
  var temp=""
  for (var i = 0; i < bookMarkList.length; i++) {
    temp += `<div class="webwell rows" id="${bookMarkList[i].name}">
        <h2>${bookMarkList[i].name}</h2>
        <button class="btn btn-primary"href="${bookMarkList[i].url}" onclick="openWindow('${bookMarkList[i].url}')">Visit</button>
        <button class="btn btn-danger" onclick="deleteBookMark(${i})">Delete</button>
        </div>`;
  }

  displayList.innerHTML=temp

  localStorage.setItem('bookmark',JSON.stringify(bookMarkList));

}


function openWindow(url){
    window.open(url, "_blank");
}