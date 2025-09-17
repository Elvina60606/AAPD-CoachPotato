import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

// 上方按鈕切換 active 狀態
document.addEventListener("DOMContentLoaded", function () {
  const navPills = document.querySelector(".nav-pills");

  navPills.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-link")) {
      // 移除所有 active 狀態
      navPills.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });

      // 為點擊的按鈕加上 active 狀態
      e.target.classList.add("active");

      // 可以在這裡加上資料切換邏輯
      const filterType = e.target.dataset.filter;
      console.log("選擇了:", filterType);
    }
  });
});

// 底部導航切換
document.addEventListener("DOMContentLoaded", function () {
  // 頁面載入時回到頂部
  window.scrollTo(0, 0);

  const bottomNav = document.querySelector("nav.fixed-bottom");
  console.log("bottomNav found:", bottomNav);

  if (!bottomNav) {
    console.error("找不到 bottom nav 元素");
    return;
  }

  bottomNav.addEventListener("click", function (e) {
    e.preventDefault();

    const clickedLink = e.target.closest(".nav-link");
    if (clickedLink) {
      bottomNav.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });

      clickedLink.classList.add("active");
    }
  });
});
