function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const searchIcon = document.querySelector("#searchIcon");
const coursesSection = document.querySelector(".coursesSection");
const categories = document.querySelector(".categories");
const about = document.querySelector(".about");
const footer = document.querySelector("footer");
const searchText = document.querySelector(".searchText");
const title = document.querySelector(".newCourses h2");
let searchTitle;

const predict = "https://4f1e-49-43-40-65.ngrok-free.app/"

searchIcon.addEventListener("click", (e) => {
  console.log("Clicked");
  searchTitle = searchText.value;
  console.log(searchTitle);
  localStorage.setItem("heading", searchTitle);
  location.assign("./search.html");
});

const searchResults = document.querySelector(".searchResults");


const heading = document.querySelector(".heading");
heading.innerHTML = `${localStorage.getItem("heading")}`;

let predictUrl = new URL(`${predict}predict?title=${heading.innerHTML}`);
let predictImgUrl = new URL(`${predict}predictImg?title=${heading.innerHTML}`);
async function fetchData(){
  const response = await fetch(predictUrl,{
    method: "get",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  })
  const data = await response.json();
  console.log(data);
  const response2 = await fetch(predictImgUrl,{
    method: "get",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  })
  const data2 = await response2.json();
  console.log(data2);
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    div.classList = "searchContainer";
    const ul = document.createElement("ul");
    ul.classList = "courseList";
    const li = document.createElement("li");
    li.innerHTML = `${data[i]}`;
    li.classList = "searchList";
    const image = document.createElement("img");
    image.src = `${data2[i]}`;
    image.classList = "searchImage";
    ul.appendChild(image);
    ul.appendChild(li);
    div.appendChild(ul);
    searchResults.appendChild(div);
  }
}

fetchData();
console.log(predictUrl);







