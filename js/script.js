const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content1 nav .bx.bx-menu");
const container = document.querySelector("#container");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", (e) => sidebarMenu(e));

const sidebarMenu = (e) => {
  sidebar.classList.toggle("hide");
  container.classList.toggle("hideMain"); //PROPORCIONA MAS MENOS HACIA LA IZQUIERDA
};

// if (window.innerWidth < 768) {
//   sidebar.classList.add("hide");
  
// } else if (window.innerWidth > 576) {
// }

const switchMode = document.getElementById("switch-mode");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  document.body.classList.toggle("dark");
}

switchMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// document.querySelector("#clasa").addEventListener("click", () => {
//   alert("hola mundo");
// });
