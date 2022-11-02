httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");

httpRequest.send();

postsData = [];

data=document.getElementById('postsData')

httpRequest.addEventListener("readystatechange", function () {
  if (this.readyState == 4 && this.status == 200) {
    postsData = JSON.parse(this.response);
    console.log(postsData)
    display();
  }
});

function display() {
  temp = "";
  for (let i = 0; i < postsData.length; i++) {
    temp += `<div class="col-md-4 text-center">
    <h2>${postsData[i]['title']}</h2>
    <p>${postsData[i]['body']}</p>
</div>`;
  }

  data.innerHTML=temp

}
