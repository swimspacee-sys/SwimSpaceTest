const products = [
  {name:"Speedo Biofuse 2.0 Junior", category:"goggles", label:"ცურვის სათვალე", price:159, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQJ8tY_tTtD8TTa0zKpxfxiIWHw_l1ciGT3hVo2sdHuGUqbI3R1JPnQE&s=10", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
  {name:"Speedo Biofuse 2.0 Junior", category:"goggles", label:"ცურვის სათვალე", price:159, image:"https://facethewater.com/cdn/shop/files/speedo-goggles-fed-red-silver-clear-biofuse-2-0-goggle-8-00233214515-1171742149.png?v=1774672287&width=1080", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
  {name:"Speedo Fastskin Hyper Elite Mirrored", category:"goggles", label:"ცურვის სათვალე", price:229, image:"https://i.ebayimg.com/images/g/O8YAAeSwCqtqjFJi/s-l1600.webp", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
  {name:"Arena Classic Silicone White", category:"caps", label:"ცურვის ქუდი", price:29, image:"https://aldokana.com/wp-content/uploads/2025/09/BR-SWMARWHT-400x457.webp", desc:"100% სილიკონი, კომფორტული და ელასტიური მასალა."},
  {name:"Arena Classic Silicone Blue", category:"caps", label:"ცურვის ქუდი", price:29, image:"https://aldokana.com/wp-content/uploads/2025/09/BR-SWMARBLU.webp", desc:"100% სილიკონი, კომფორტული და ელასტიური მასალა."},
  {name:"Arena Classic Silicone Black", category:"caps", label:"ცურვის ქუდი", price:29, image:"https://down-ph.img.susercontent.com/file/ph-11134207-81ztm-mmbohm2xeiv592", desc:"100% სილიკონი, კომფორტული და ელასტიური მასალა."},
  {name:"Arena 3D Ultra Blue M", category:"caps", label:"ცურვის ქუდი", price:49, image:"https://www.arenaswimuk.com/wp-content/uploads/2021/02/91656-074.jpg", desc:"100% სილიკონი, კომფორტული და სქელი, პროფესიონალებისთვის."},
  {name:"Arena 3D Ultra White M", category:"caps", label:"ცურვის ქუდი", price:49, image:"https://www.swim2000.com/cdn/shop/products/14177-thickbox_default.jpg?crop=center&format=webp&height=2048&quality=70&v=1694204735&width=2048", desc:"100% სილიკონი, კომფორტული და სქელი, პროფესიონალებისთვის.."},
  {name:"Arena 3D Ultra Black M", category:"caps", label:"ცურვის ქუდი", price:49, image:"https://www.arenaswimuk.com/wp-content/uploads/2021/02/91656-054.jpg", desc:"100% სილიკონი, კომფორტული და სქელი, პროფესიონალებისთვის."},
  {name:"Arena Powerfin Pro II Black", category:"fins", label:"ცურვის ლასტი პროფესიონალი", price:179, image:"https://www.sunparadise.my/image/cache/data/theme/products/AS5SAZ32UZ-BKGD/as5saz32u-bkgd-100_240725172934-601x601_0.jpg", desc:"100% სილიკონი, საუკეთესო ხარისხი, ბოლო მოდელი."},
  {name:"Arena Powerfin Pro II Blue", category:"fins", label:"ცურვის ლასტი პროფესინალი", price:169, image:"https://www.arenaswimuk.com/wp-content/uploads/2024/02/006151-110-POWERFIN-PRO-II-005-F-S.jpg", desc:"100% სილიკონი, საუკეთესო ხარისხი, ბოლო მოდელი."},
  {name:"Arena Fins Blue", category:"fins", label:"ცურვის ლასტი დამწყებთათვის", price:79, image:"https://m.media-amazon.com/images/I/51DeablQPyL.jpg", desc:"100% სილიკონი, საუკეთესო ხარისხი, დამწყებთათვის."},
  {name:"Arena Fins Black", category:"fins", label:"ცურვის ლასტი დამწყებთათვის", price:84, image:"https://i.ebayimg.com/images/g/Fw4AAeSwi29pQqMQ/s-l1600.webp", desc:"100% სილიკონი, საუკეთესო ხარისხი, დამწყებთათვის."},
  {name:"Speedo Eco Endurance+", category:"swimsuits", label:"კოსტიუმი", price:129, image:"https://images.unsplash.com/photo-1600965962102-9d260a71890d?auto=format&fit=crop&w=900&q=80", desc:"ქალის პროფესიონალური კოსტიუმი, გამძლე ქსოვილით."},
  {name:"Pull Kickboard", category:"accessories", label:"აქსესუარები", price:45, image:"https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=900&q=80", desc:"სავარჯიშო დაფა ტექნიკისა და მოძრაობის გასაუმჯობესებლად."},
  {name:"Zoggs Swim Fins", category:"accessories", label:"აქსესუარები", price:79, image:"https://images.unsplash.com/photo-1600965962102-9d260a71890d?auto=format&fit=crop&w=900&q=80", desc:"მოკლე ფარფლები, იდეალური ტექნიკისა და სისწრაფისთვის."},
  {name:"TYR Alliance Backpack", category:"accessories", label:"აქსესუარები", price:185, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80", desc:"ტევადი და კომფორტული ზურგჩანთა ყოველდღიური ვარჯიშისთვის."},
  {name:"Speedo Ear Plugs", category:"accessories", label:"აქსესუარები", price:15, image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80", desc:"რბილი სილიკონი, წყლისგან დაცვისთვის და კომფორტული მორგება."},
  {name:"Garmin Swim 2", category:"accessories", label:"აქსესუარები", price:599, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80", desc:"წყალგამძლე სპორტული საათი, ვარჯიშის დეტალური მონიტორინგით."}
];

const grid = document.getElementById("productGrid");
const empty = document.getElementById("emptyState");
const sortSelect = document.getElementById("sortSelect");
let currentFilter = "all";

function render() {
  let list = products.filter(p => currentFilter === "all" || p.category === currentFilter);
  const sort = sortSelect.value;
  if (sort === "low") list.sort((a,b) => a.price - b.price);
  if (sort === "high") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button class="heart" aria-label="${p.name}-ის ფავორიტებში დამატება">♡</button>
      </div>
      <div class="card-body">
        <div class="category">${p.label}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">${p.price.toFixed(2)} <span>₾</span></div>
      </div>
    </article>
  `).join("");

  empty.classList.toggle("hidden", list.length !== 0);
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

sortSelect.addEventListener("change", render);

document.querySelectorAll(".dot").forEach((dot, i, dots) => {
  dot.addEventListener("click", () => {
    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"));
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("heart")) {
    e.target.textContent = e.target.textContent === "♡" ? "♥" : "♡";
  }
});

render();


// Dark mode
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("swimmer-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButton() {
  const dark = document.body.classList.contains("dark");
  themeToggle.querySelector(".theme-icon").textContent = dark ? "☀" : "☾";
  themeToggle.querySelector(".theme-label").textContent = dark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", dark ? "Light mode-ზე გადართვა" : "Dark mode-ზე გადართვა");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "swimmer-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  updateThemeButton();
});

updateThemeButton();
