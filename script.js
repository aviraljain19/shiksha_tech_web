function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getStars(rating) {
  rating = Math.round(rating * 2) / 2;
  let output = [];

  for (var i = rating; i >= 1; i--)
    output.push(
      '<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  if (i == 0.5)
    output.push(
      '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  for (let i = 5 - rating; i >= 1; i--)
    output.push(
      '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  return output.join("");
}

const star = document.querySelectorAll(".star");

for (let i = 0; i < star.length; i++) {
  star[i].innerHTML = getStars(3.4);
}

function showLoading() {
  const loadingContainer = document.getElementById("loading-container");
  loadingContainer.style.display = "flex";
}

function hideLoading() {
  const loadingContainer = document.getElementById("loading-container");
  loadingContainer.style.display = "none";
}

function simulateAsyncTask() {
  showLoading();

  setTimeout(() => {
    hideLoading();
  }, 3000);
}

const searchIcon = document.querySelector("#searchIcon");
const coursesSection = document.querySelector(".coursesSection");
const categories = document.querySelector(".categories");
const about = document.querySelector(".about");
const footer = document.querySelector("footer");
const searchText = document.querySelector(".searchText");
const title = document.querySelector(".newCourses h2");
let searchTitle;


const predict = "https://4f1e-49-43-40-65.ngrok-free.app/";

searchIcon.addEventListener("click", (e) => {
  localStorage.setItem("bool", "true");
  console.log("Clicked");
  searchTitle = searchText.value;
  searchText.value = "";
  console.log(searchTitle);
  localStorage.setItem("heading", searchTitle);
  location.assign("./search.html");
});

let bool = localStorage.getItem("bool");

function courseSearch() {
  localStorage.setItem("bool","false")
  console.log("ssds");
  const searchResults = document.querySelector(".searchResults");

  const heading = document.querySelector(".heading");
  heading.innerHTML = `Search results for "${localStorage.getItem("heading")}"`;

  let predictUrl = new URL(`${predict}predict?title=${heading.innerHTML}`);
  let predictImgUrl = new URL(
    `${predict}predictImg?title=${heading.innerHTML}`
  );
  let predictRatingUrl = new URL(
    `${predict}predictRating?title=${heading.innerHTML}`
  );
  async function fetchSearchData() {
    const response = await fetch(predictUrl, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    const data = await response.json();
    console.log(data);
    const response2 = await fetch(predictImgUrl, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    const data2 = await response2.json();
    console.log(data2);
    const response3 = await fetch(predictRatingUrl, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    const data3 = await response3.json();
    console.log(data3);
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      div.classList = "container";
      const ul = document.createElement("ul");
      ul.classList = "courseList";
      const li = document.createElement("li");
      li.innerHTML = `${data[i]}`;
      li.classList = "title";
      const image = document.createElement("img");
      image.src = `${data2[i]}`;
      image.classList = "containerImg";
      const div2 = document.createElement("div");
      div2.classList = "courseInfo";
      const div3 = document.createElement("div");
      div3.classList = "extraInfo";
      const span = document.createElement("span");
      span.classList = "instructor";
      span.innerHTML = `Instructor`;
      const span2 = document.createElement("span");
      span2.classList = "instructor";
      span2.innerHTML = `${getStars(data3[i])}`;
      ul.appendChild(image);
      div2.appendChild(li);
      div3.appendChild(span);
      div3.appendChild(span2);
      div2.appendChild(div3);
      ul.appendChild(div2);
      div.appendChild(ul);
      searchResults.appendChild(div);
    }
  }

  fetchSearchData();
  simulateAsyncTask();
}

if(bool == "true"){
  courseSearch();
}

//Intern page

const form = document.querySelector("form")


let internSearchTitle;
const searchIcon2 = document.querySelector("#internSearchIcon");
const internSearch = document.querySelector("#internSearch");
searchIcon2.addEventListener("click", (e) => {
  console.log("Clicked");
  internSearchTitle = internSearch.value;
  internSearch.value = "";
  console.log(internSearchTitle);
  localStorage.setItem("internDomain", internSearchTitle);
  internPage();
});

function internPage(){
  localStorage.setItem("bool2","false");
  console.log("inside internpage1");
  
}
