const products = [
  {name:"Cima Half-Sport Junior", category:"goggles", label:"ცურვის სათვალე", price:49, image:"https://goods.am/Content/img/product/loxi_aknoc_sev_china_00208404_1.png", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
  {name:"Cima Half-Sport Junior", category:"goggles", label:"ცურვის სათვალე", price:49, image:"https://goods.am/Content/img/product/loxi_aknoc_china_00208904_21.png", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
  {name:"Speedo Biofuse 2.0 Junior", category:"goggles", label:"ცურვის სათვალე", price:169, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQJ8tY_tTtD8TTa0zKpxfxiIWHw_l1ciGT3hVo2sdHuGUqbI3R1JPnQE&s=10", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
  {name:"Speedo Biofuse 2.0 Junior", category:"goggles", label:"ცურვის სათვალე", price:169, image:"https://facethewater.com/cdn/shop/files/speedo-goggles-fed-red-silver-clear-biofuse-2-0-goggle-8-00233214515-1171742149.png?v=1774672287&width=1080", desc:"მკაფიო ხედვა, კომფორტული მორგება და UV დაცვა."},
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
  {name:"Speedo Tech Pad", category:"fins", label:"ცურვის ლაპი", price:39, image:"https://www.prescription-swimming-goggles.co.uk/cdn/shop/files/sutton-swmwear-trax-paddle-4.jpg?v=1728975539&width=480", desc:"საშუალო ხარისხი, ზომები: S,M,L"},
  {name:"Speedo Tech Pad Pro", category:"fins", label:"ცურვის ლაპი პროფესიონალი", price:54, image:"https://cdn4.volusion.store/yqwmg-gaxbc/v/vspfiles/photos/SPEEDO_7753007-2.jpg?v-cache=1453649683", desc:"საუკეთესო ხარისხი, ზომები: S,M."},
  {name:"Vegastar რეზინა", category:"rubber", label:"ჟგუტი", price:12, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHKyZCDJtfx_3qN73mYpRIi5hAaC4fMfZBQn9PIjO4w&s=10", desc:"სავარჯიშო რეზინა(ჟგუტი). სიმძლავრე:ფერების მიხედვით."},
  {name:"სავარჯიშო რეზინა 3მ", category:"rubber", label:"ჟგუტი", price:39, image:"https://www.needshop.ge/wp-content/uploads/2020/12/f17fbf6091a02096a724d04806af438a.jpg", desc:"სავარჯიშო რეზინა(ჟგუტი). 3მეტრი თხელი, კომფორტული, გამძლე."},
  {name:"Kinesiology Tape", category:"accessories", label:"კინეზიოლოგიური ლენტი", price:29, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6RHyES3fTpK0WXMwE9mPnyraiWnzW2IsvssR58e9JQ&s=10", desc:"კინეზიოლოგიური ლენტი, კუნთის დაჭიმულობისთვის, ფიქსატორი, ფერები:შავი; ლურჯი; მწვანე; იასამნისფერი; ცისფერი; კანისფერი."},
  {name:"Shaker Bottle", category:"accessories", label:"შეიკერი", price:39, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnADwOhs2vHFTmJP94qKHxhEptFlj3ImhaspaQjuZDA&s=10", desc:"პატარა შეიკერი(500მლ), კარგი ხარისხი, პრაქტიკული."},
  {name:"Pull Buoy", category:"accessories", label:"ტივტივა(კალაბაშკა)", price:39, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYktrjHmQKG2uJIkuOEQR4REkxk_HKriZ-DLmAryvxEQ&s=10", desc:"სავარჯიშო ტივტივა(კალაბაშკა), საშუალო ხარისხის პატარა."},
  {name:"Speedo Pull Buoy", category:"accessories", label:"ტივტივა(კალაბაშკა)", price:54, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYEBIdBLxZkvqY5H9Agxi_8roa9KHQJugnCWcuOlJsg&s", desc:"სავარჯიშო ტივტივა(კალაბაშკა), საუკეთესო ხარისხის პატარა."},
  {name:"Arena Pull Buoy", category:"accessories", label:"ტივტივა(კალაბაშკა)", price:64, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4q3AB7iKhXXEzmSgwhrvLRUF-AZz7kOEDHYFHY3DZIA&s=10", desc:"სავარჯიშო ტივტივა(კალაბაშკა), საუკეთესო ხარისხის დიდი."}
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
