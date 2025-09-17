function detectDeviceAndApplyStyles() {
  const isRealMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const isNarrowWindow = window.innerWidth <= 575;
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const statusBar = document.querySelector(".app__status-bar-space");
  const header = document.querySelector(".header-sm-d-none");

  // 只有在真正的手機設備上才調整
  if (isRealMobile && isNarrowWindow && isTouchDevice) {
    // 調整status bar高度為20px
    statusBar.style.height = "20px";
    // 隱藏header
    header.style.display = "none";
  } else {
    // 恢復原始狀態
    statusBar.style.height = "60px";
    header.style.display = "flex";
  }
}

window.addEventListener("load", detectDeviceAndApplyStyles);
window.addEventListener("resize", detectDeviceAndApplyStyles);
