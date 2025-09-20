const footerBtn = document.getElementById("scrollButton");

// 統一的確認按鈕控制函數
function checkScroll() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  const canScroll = docHeight > windowHeight;

  if (!canScroll) {
    // 頁面無法滾動，直接顯示 footer
    footerBtn.classList.remove("d-none");
    return;
  }

  // 頁面可滾動時，捲到底才顯示 footer
  if (scrollTop + windowHeight >= docHeight - 1) {
    footerBtn.classList.remove("d-none");
  } else {
    footerBtn.classList.add("d-none");
  }
}

// 分頁切換時的檢查函數
function checkScrollOnTabSwitch() {
  // 給一點延遲確保DOM更新完成後再檢查
  setTimeout(() => {
    checkScroll();
  }, 100);
}

// 監聽分頁切換事件（Bootstrap）
document.addEventListener("shown.bs.tab", checkScrollOnTabSwitch);

// 原有的事件監聽器保持不變
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
window.addEventListener("resize", checkScroll);

// 額外添加：DOM內容變化時也檢查（處理動態內容載入的情況）
const observer = new MutationObserver(() => {
  checkScrollOnTabSwitch();
});

// 觀察內容區域的變化
document.addEventListener("DOMContentLoaded", () => {
  const contentArea = document.querySelector(".tab-content") || document.body;
  observer.observe(contentArea, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style"],
  });
});
