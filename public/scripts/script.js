

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
  console.log("loading");
  const loadingContainer = document.getElementById("loading-container");
  loadingContainer.style.display = "flex";
}

function hideLoading() {
  console.log("Not loading");
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

const predict = "https://f3a0-49-36-16-97.ngrok-free.app/";

searchIcon.addEventListener("click", (e) => {
  localStorage.setItem("bool", "true");
  console.log("Clicked");
  searchTitle = searchText.value;
  searchText.value = "";
  console.log(searchTitle);
  localStorage.setItem("heading", searchTitle);
  location.assign("/search")
});

let bool = localStorage.getItem("bool");

function courseSearch() {
  localStorage.setItem("bool", "false");
  console.log("ssds");
  const searchResults = document.querySelector(".searchResults");

  const heading = document.querySelector(".heading");
  heading.innerHTML = `Search results for "${localStorage.getItem("heading")}"`;
  let course = localStorage.getItem("heading");

  let predictUrl = new URL(`${predict}predict?title=${course}`);
  let predictImgUrl = new URL(`${predict}predictImg?title=${course}`);
  let predictRatingUrl = new URL(`${predict}predictRating?title=${course}`);
  async function fetchSearchData() {
    const response = await fetch(predictUrl, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).catch((err)=>{
      alert("Server is down, please try again later");
      location.assign("/");
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
      const container = document.querySelector(".container");
      container.addEventListener("click", () => {
        location.assign("/lectureScreen");
      });
    }
  }

  fetchSearchData();

  simulateAsyncTask();
}

if (bool == "true") {
  courseSearch();
}

//Intern page

const form = document.querySelector("form");
const cardContainer = document.querySelector(".cardContainer");
let internSearchTitle;
const searchIcon2 = document.querySelector("#internSearchIcon");
const internSearch = document.querySelector("#internSearch");
searchIcon2.addEventListener("click", (e) => {
  console.log("Clicked");
  internSearchTitle = internSearch.value;
  console.log(internSearchTitle);
  localStorage.setItem("internDomain", internSearchTitle);
  cardContainer.innerHTML = "";
  internPage();
});

function internPage() {
  console.log("inside internpage1");

  let domain = localStorage.getItem("internDomain");

  let internDomain = new URL(`${predict}intern?domain=${domain}`);
  let internComapany = new URL(`${predict}internCompany?domain=${domain}`);
  let internLocation = new URL(`${predict}internLocation?domain=${domain}`);
  let internDuration = new URL(`${predict}internDuration?domain=${domain}`);
  let internStipend = new URL(`${predict}internStipend?domain=${domain}`);

  async function fetchSearchData() {
    simulateAsyncTask();
    const response = await fetch(internDomain, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).catch((err)=>{
      alert("Server is down, please try again later");
      location.assign("/");
    });
    const data = await response.json();
    console.log(data);
    const response2 = await fetch(internComapany, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).catch((err)=>{
      alert("Server is down, please try again later");
      location.assign("/");
    });
    const data2 = await response2.json();
    console.log(data2);
    const response3 = await fetch(internLocation, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).catch((err)=>{
      alert("Server is down, please try again later");
      location.assign("/");
    });
    const data3 = await response3.json();
    console.log(data3);
    const response4 = await fetch(internDuration, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).catch((err)=>{
      alert("Server is down, please try again later");
      location.assign("/");
    });
    const data4 = await response4.json();
    console.log(data4);
    const response5 = await fetch(internStipend, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).catch((err)=>{
      alert("Server is down, please try again later");
      location.assign("/");
    });
    const data5 = await response5.json();
    console.log(data5);
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      card.classList = "card";
      const image = document.createElement("div");
      image.classList = "image";
      const imgSrc = document.createElement("img");
      imgSrc.src = "../assets/11c5a6feba3335c47804cedb68b69dbd.jpg";
      imgSrc.alt = "intern image";
      const cardContent = document.createElement("div");
      cardContent.classList = "card-content";
      const h2 = document.createElement("h2");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const a1 = document.createElement("a");
      a1.classList = "apply-button";
      const a2 = document.createElement("a");
      a2.classList = "learn-more-button";
      h2.innerHTML = data[i];
      p1.innerHTML = data2[i];
      p2.innerHTML = `Location:${data3[i]}`;
      p3.innerHTML = `Duration:${data4[i]}`;
      p4.innerHTML = `Stipend:${data5[i]}`;
      a1.innerHTML = "Apply Now";
      a2.innerHTML = "Learn More";
      cardContent.appendChild(h2);
      cardContent.appendChild(p1);
      cardContent.appendChild(p2);
      cardContent.appendChild(p3);
      cardContent.appendChild(p4);
      cardContent.appendChild(a1);
      cardContent.appendChild(a2);
      image.appendChild(imgSrc);
      card.appendChild(image);
      card.appendChild(cardContent);
      cardContainer.appendChild(card);
    }
  }

  fetchSearchData();
}

// lecture screen
