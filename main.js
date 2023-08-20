import "./styles.scss";

document.querySelector("#app").innerHTML = `
<div class="landing">
<div class="nav-and-search">
  <div class="navbar" id="navbar">
    <nav class="navbar">
      <ul class="nav-list">
        <li class="item">
          <i class="fa-solid fa-desktop"></i> Pc
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li class="item">
          <i class="fa-brands fa-playstation"></i> Playstation
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li class="item">
          <i class="fa-brands fa-xbox"></i> Xbox
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li class="item">
          <i class="fa-solid fa-gamepad"></i> Nintando
          <i class="fa-solid fa-chevron-down"></i>
        </li>
      </ul>
      <i
        class="fa-solid fa-magnifying-glass search-icon"
        id="searchIcon"
      ></i>
    </nav>
  </div>
  <div class="search-container">
    <input
      type="text"
      class="search-bar"
      id="searchBar"
      placeholder="Minecraft, RPG, Multiplayer..."
    />
  </div>
  <i class="fa-solid fa-xmark fa-lg close-icon" id="closeIcon"></i>
</div>
<div class="modal" id="modal">
  <div class="modal-content">
    <div class="category-view">
      Platforms<button class="category-btn">View all</button>
    </div>
    <div class="grid-container">
      <div class="grid-item">
        <img src="images/logo/steam.png" class="icon-img" />
        Steam
      </div>
      <div class="grid-item">
        <img src="images/logo/steam.png" class="icon-img" />
        Ubisoft Connect
      </div>
      <div class="grid-item">
        <img src="images/logo/ea.png" class="icon-img" />
        EA App
      </div>
      <div class="grid-item">
        <img src="images/logo/ea.png" class="icon-img" />
        EA App
      </div>
      <div class="grid-item">
        <img src="images/logo/rockstar.png" class="icon-img" />
        Rockstar
      </div>
      <div class="grid-item">
        <img src="images/logo/steam.png" class="icon-img" />
        GOG.com
      </div>
      <div class="grid-item">
        <img src="images/logo/rockstar.png" class="icon-img" />
        Rockstar
      </div>
      <div class="grid-item">
        <img src="images/logo/steam.png" class="icon-img" />
        Steam
      </div>
    </div>
    <div class="category-view">
      Platforms<button class="category-btn">View all</button>
    </div>
    <div class="grid-container">
      <div class="card-item">
        <img src="images/logo/steam.png" class="card-img" />
        <p>Steam Gift Cards</p>
      </div>
      <div class="card-item">
        <img src="images/logo/rockstar.png" class="card-img" />
        <p>Ubisoft Connect</p>
      </div>
      <div class="card-item">
        <img src="images/logo/ea.png" class="card-img" />
        <p>EA App</p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="trending">
<div class="trending-text">Trending</div>
<div class="view-all">
  <button class="view-all-button">View all</button>
</div>
</div>
<div class="card-container">
<div class="card">
  <div class="badge">-25%</div>
  <img src="images/cover1.jpg" alt="Product 1" />
</div>
<div class="card">
  <div class="badge">-23%</div>
  <img src="images/cover2.jpg" alt="Product 1" />
</div>
<div class="card">
  <div class="badge">-30%</div>
  <img src="images/cover3.jpg" alt="Product 1" />
</div>
</div>
`;

const navbar = document.getElementById("navbar");
const searchbar = document.getElementById("searchBar");
const searchIcon = document.getElementById("searchIcon");
const closeIcon = document.getElementById("closeIcon");
const navItems = document.querySelectorAll(".nav-list li");
const modal = document.getElementById("modal");

searchIcon.addEventListener("click", () => {
  navbar.style.display = "none";
  searchbar.style.display = "block";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navbar.style.display = "block";
  searchbar.style.display = "none";
  closeIcon.style.display = "none";
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.backgroundColor = rgba(0, 0, 0, 0.5);
  });
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
