// 匯入 Flatpickr CSS 和 JS
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

window.addEventListener("load", () => {
  const birthdayInput = document.getElementById("birthdayInput");
  const birthdayText = document.getElementById("birthdayText");
  const birthdayBtn = document.getElementById("birthdaySelect");

  // 確認元素存在才初始化
  if (!birthdayInput || !birthdayText || !birthdayBtn) return;

  // 初始化 Flatpickr
  const fp = flatpickr(birthdayInput, {
    dateFormat: "Y-m-d",
    appendTo: document.body,   // 日曆附加到 body
    position: "bottom",        // 固定在 input 下方
    disableMobile: true,       // 強制手機也顯示 Flatpickr

    onChange: (selectedDates, dateStr) => {
      birthdayText.textContent = dateStr || "生日"; // 更新按鈕文字
    },
    onReady: function () {
      // 加上自訂 class
      this.calendarContainer.classList.add("my-flatpickr");

      // 可選：微調日曆位置（X, Y）
      const rect = birthdayBtn.getBoundingClientRect();
      this.calendarContainer.style.top = rect.bottom + "px"; 
      this.calendarContainer.style.left = rect.left + "px"; 
    }
  });

  // 點擊按鈕開啟日曆
  birthdayBtn.addEventListener("click", () => {
    fp.open();
  });

  console.log("Birthday Flatpickr initialized successfully.");
});
