import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/js/chart.js";
import "./assets/js/button.js";

console.log("Hello world");

// 定義不同標籤的數據內容（移到最外層，可以被所有函數使用）
const contentData = {
  latest: {
    cards: [
      { title: '體重', value: '57.4', unit: 'kg', status: 'danger', statusText: '偏高', icon: 'ph-smiley-sad' },
      { title: '體脂肪', value: '32', unit: '%', status: 'danger', statusText: '偏高', icon: 'ph-smiley-sad' },
      { title: '內臟脂肪', value: '6', unit: '', status: 'danger', statusText: '偏高', icon: 'ph-smiley-sad' },
      { title: 'BMI', value: '32', unit: '', status: 'danger', statusText: '偏高', icon: 'ph-smiley-sad' },
      { title: '骨骼機率', value: '26.3', unit: '%', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '基礎代謝', value: '1112', unit: 'Kcal', status: 'success', statusText: '標準', icon: 'ph-smiley' }
    ],
    healthSummary: '本週體脂肪率偏高，基礎代謝下降，但均勻體正常範圍。',
    coachTip: '保持規律的運動習慣，如有氧 + 力量訓練，持續努力就會看見成果呦！'
  },
  week: {
    // 本週顯示平均值和趨勢圖
    type: 'chart',
    items: [
      { 
        title: '體重', 
        average: '53.2', 
        unit: 'kg', 
        status: 'standard', 
        statusText: '標準',
        statusLevel: 2,
        totalBars: 4,
        trend: '體重相較上週平均微微上升',
        chartType: 'bar',
        chartData: [51.6, 52.5, 51.5, 51, 52, 53, 52]
      },
      { 
        title: 'BMI', 
        average: '22.0', 
        unit: '', 
        status: 'standard', 
        statusText: '標準',
        statusLevel: 1,
        totalBars: 3,
        trend: '體重相較上週平均微微上升',
        chartType: 'dot',
        chartData: [22, 19, 20, 19, 18, 21, 21.5]
      },
      { 
        title: '體脂肪率', 
        average: '26.2', 
        unit: '%', 
        status: 'high', 
        statusText: '偏高',
        statusLevel: 2,
        totalBars: 3,
        trend: '體重相較上週平均微微上升',
        chartType: "area",
        chartData: [26, 26.5, 26.2, 26.8, 26.3, 26.5, 26.2]
      },
      { 
      title: '內臟脂肪', 
      average: '4', 
      unit: '', 
      status: 'standard', 
      statusText: '標準',
      statusLevel: 1,
      totalBars: 3,
      trend: '內臟脂肪相較上週平均微微上升',
      chartType: 'dot',
      chartData: [25, 26.3, 26.5, 27, 25.8, 26, 26.2]
    },
    { 
      title: '基礎代謝', 
      average: '1428', 
      unit: 'kcal', 
      status: 'standard', 
      statusText: '標準',
      statusLevel: 1,
      totalBars: 3,  // 基礎代謝有3格
      trend: '基礎代謝相較上週平均微微上升',
      chartType: 'bar',
      chartData: [1400, 1428, 1415, 1435, 1420, 1440, 1428]
    },
    { 
      title: '身體年齡', 
      average: '32', 
      unit: '', 
      status: 'none',  // 身體年齡沒有狀態
      statusText: '',
      statusLevel: 0,
      totalBars: 0,  // 身體年齡沒有格子
      trend: '身體年齡相較上週平均微微上升',
      chartType: 'area',  // 身體年齡用面積圖
      chartData: [31, 32, 31.5, 32.5, 32, 33, 32]
    }
    ],
    healthSummary: '本週整體數據穩定，體重略有上升趨勢。',
    coachTip: '建議增加有氧運動頻率，控制飲食熱量攝取！'
  },
  month: {
    cards: [
      { title: '體重', value: '56.8', unit: 'kg', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '體脂肪', value: '30', unit: '%', status: 'danger', statusText: '偏高', icon: 'ph-smiley-sad' },
      { title: '內臟脂肪', value: '5', unit: '', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: 'BMI', value: '28', unit: '', status: 'danger', statusText: '偏高', icon: 'ph-smiley-sad' },
      { title: '骨骼機率', value: '27.1', unit: '%', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '基礎代謝', value: '1150', unit: 'Kcal', status: 'success', statusText: '標準', icon: 'ph-smiley' }
    ],
    healthSummary: '本月數據整體良好，體脂肪有改善趨勢。',
    coachTip: '繼續保持！適度增加蛋白質攝取有助於提升代謝。'
  },
  quarter: {
    cards: [
      { title: '體重', value: '55.2', unit: 'kg', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '體脂肪', value: '28', unit: '%', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '內臟脂肪', value: '4', unit: '', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: 'BMI', value: '25', unit: '', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '骨骼機率', value: '28.5', unit: '%', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '基礎代謝', value: '1200', unit: 'Kcal', status: 'success', statusText: '標準', icon: 'ph-smiley' }
    ],
    healthSummary: '三個月來進步明顯，各項指標都在改善！',
    coachTip: '太棒了！繼續維持這個節奏，你做得很好！'
  },
  all: {
    cards: [
      { title: '體重', value: '54.0', unit: 'kg', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '體脂肪', value: '26', unit: '%', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '內臟脂肪', value: '3', unit: '', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: 'BMI', value: '23', unit: '', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '骨骼機率', value: '29.2', unit: '%', status: 'success', statusText: '標準', icon: 'ph-smiley' },
      { title: '基礎代謝', value: '1250', unit: 'Kcal', status: 'success', statusText: '標準', icon: 'ph-smiley' }
    ],
    healthSummary: '整體健康狀況良好，持續維持健康生活型態。',
    coachTip: '你已經養成了良好的健康習慣，繼續加油！'
  }
};

// 上方按鈕切換 active 狀態（整合內容切換功能）
document.addEventListener("DOMContentLoaded", function () {
  const navPills = document.querySelector(".nav-pills");
  const dataCardsContainer = document.querySelector('.data-card');
  const coachReminderSection = document.querySelector('.reminder');
  

  // 渲染卡片式內容（用於最新、本月、3個月、全部）
  function renderCards(data) {
    let cardsHTML = '';
    
    data.cards.forEach(card => {
      const statusColor = card.status === 'danger' ? 'text-error-400' : 
                         card.status === 'warning' ? 'text-warning' : 'text-success';
      
      cardsHTML += `
        <div class="col-6">
          <div class="card border-0 rounded-4">
            <div class="card-body py-3 px-4">
              <div class="d-flex justify-content-between">
                <span class="fw-medium">${card.title}</span>
                <div class="d-flex align-items-center">
                  <i class="ph ${card.icon} fs-3 ${statusColor}"></i>
                  <span class="fs-8 px-1 ${statusColor}">${card.statusText}</span>
                </div>
              </div>
              <div class="mt-2 lh-sm">
                <span class="fs-2 fw-bold lh-sm">${card.value}</span>
                ${card.unit ? `<span class="small fw-medium ms-3">${card.unit}</span>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    });
    
    return cardsHTML;
  }

  // 渲染圖表式內容（用於本週）
function renderChartView(data) {
  let chartHTML = '';
  
  data.items.forEach(item => {
    chartHTML += renderWeekCard(item);
  });
  
  return chartHTML;
}

function renderWeekCard(cardData) {
  return `
    <div class="card border-0 rounded-4 mb-3">
      <div class="card-body pt-4 pb-3 px-5">
        <!-- 標題區域 -->
        <div class="d-flex justify-content-between align-items-center mb-5">
          <div class="d-flex align-items-center gap-4">
            <h3 class="fs-3 fw-bold mb-0">${cardData.title}</h3>
            <!-- 狀態進度條 -->
            ${cardData.totalBars > 0 ? generateStatusBarsWithText(cardData) : ''}
          </div>
          <!-- 箭頭按鈕 -->
          <button class="btn arrow-btn border rounded-circle p-1 d-flex align-items-center justify-content-center">
            <i class="ph ph-arrow-right fs-4 text-neutral-400"></i>
          </button>
        </div>
        
        <div class="d-flex justify-content-between mb-3">
          <!-- 數值區域 -->
          <div>
            <p class="text-neutral-500 fs-8">本週平均</p>
            <div class="d-flex align-items-baseline">
              <span class="display-5 fw-bold lh-1">${cardData.average}</span>
              <span class="fs-7 fw-medium ms-2">${cardData.unit}</span>
            </div>
          </div>
          
          <!-- 圖表區域 -->
          ${generateChart(cardData.chartType || 'bar', cardData.chartData)}
        </div>
        
        <!-- 分隔線 -->
        <hr class="my-3 text-neutral-500" />
        
        <!-- 提示訊息 -->
        <div class="d-flex align-items-center">
          <i class="ph ph-warning-circle text-primary me-2 fs-4 align-baseline"></i>
          <p class="fs-7 lh-md">${cardData.trend}</p>
        </div>
      </div>
    </div>
  `;
}

// 新增：生成帶文字定位的狀態進度條
function generateStatusBarsWithText(cardData) {
  // 如果沒有格子，返回空字串
  if (cardData.totalBars === 0 || !cardData.statusText) {
    return '';
  }
  
  const level = cardData.statusLevel || 1;
  const totalBars = cardData.totalBars || 4;
  const statusColor = getStatusColorClass(cardData.status);
  const textColor = getStatusTextColor(cardData.status);
  
  // 建立包含文字和進度條的容器，每個格子都是獨立的 div
  return `
    <div class="status-indicator-wrapper d-flex gap-1 align-items-end">
      ${Array.from({length: totalBars}, (_, i) => {
        const barIndex = i + 1;
        const isActive = barIndex === level;
        const borderColor = isActive ? statusColor : 'border-neutral-200';
        
        return `
          <div class="status-bar-item d-flex flex-column align-items-center position-relative">
            <!-- 文字部分，只在對應的格子顯示 -->
            <div class="status-text-wrapper">
              ${isActive ? `
                <span class="fs-8 ${textColor} text-nowrap d-block text-center">
                  ${getStatusTextByLevel(level, totalBars)}
                </span>
              ` : ''}
            </div>
            <!-- 格子部分，使用 border-bottom 呈現 -->
            <div class="status-bar-line w-100 ${borderColor}"></div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 輔助函數們
function getStatusTextColor(status) {
  switch(status) {
    case 'high': return 'text-error-400';
    case 'warning': return 'text-warning'; 
    case 'standard': return 'text-success';
    default: return 'text-success';
  }
}

function getStatusColor(status) {
  switch(status) {
    case 'high': return 'bg-error-400';
    case 'warning': return 'bg-warning';
    case 'standard': return 'bg-success';
    default: return 'bg-success';
  }
}

// 取得狀態顏色的 border class
function getStatusColorClass(status) {
  switch(status) {
    case 'high': return 'border-error-400';
    case 'warning': return 'border-warning';
    case 'standard': return 'border-success';
    default: return 'border-success';
  }
}

function getStatusTextByLevel(level, totalBars) {
  if (totalBars === 4) {
    // 4格的情況（體重）
    switch(level) {
      case 1: return '偏低';
      case 2: return '標準';
      case 3: return '偏高';
      case 4: return '過高';
      default: return '標準';
    }
  } else if (totalBars === 3) {
    // 3格的情況（BMI、體脂肪率等）
    switch(level) {
      case 1: return '標準';
      case 2: return '偏高';
      case 3: return '過高';
      default: return '標準';
    }
  }
  return '';
}

function generateChart(chartType, data) {
  switch(chartType) {
    case 'bar':
      return generateBarChart(data);
    case 'dot':
      return generateDotChart(data);
    case 'area':
      return generateAreaChart(data);
    default:
      return generateBarChart(data);
  }
}

function generateBarChart(data) {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  
  const dataMin = Math.min(...data);
  const dataMax = Math.max(...data);
  
  // 擴展範圍，讓最高值不會填滿整個背景
  const range = dataMax - dataMin;
  const minRange = dataMin - range * 1;
  const maxRange = dataMax + range * 0.3; // 上方留30%空間
  
  return `
    <div class="chart-container d-flex align-items-end justify-content-between">
      ${data.map((value, index) => {
        const normalizedValue = (value - minRange) / (maxRange - minRange);
        const height = Math.max(5, Math.round(normalizedValue * 48));
        
        return `
          <div class="chart-day d-flex flex-column align-items-center">
            <div class="chart-bar bg-primary-800 rounded-pill" style="height: ${height}px;"></div>
            <small class="chart-label text-neutral-500 mt-2 fw-medium">${days[index]}</small>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 圓點圖背景設定
function generateDotChart(data) {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  
  const dataMin = Math.min(...data);
  const dataMax = Math.max(...data);
  const range = dataMax - dataMin;
  
  // 針對 BMI 這種數值變化很小的資料，使用固定範圍
  let minRange, maxRange, useFixedRange = false;
  
  if (range < 2) {
    // 如果數據範圍很小（如 BMI），使用固定的合理範圍
    const avgValue = (dataMin + dataMax) / 2;
    minRange = avgValue - 1; 
    maxRange = avgValue + 1;
    useFixedRange = true;
  } else {
    // 原本的邏輯，適用於變化較大的數據
    minRange = Math.max(0, dataMin - range * 0.2);
    maxRange = dataMax + range * 0.2;
  }
  
  return `
    <div class="chart-container chart-dot-container d-flex align-items-end justify-content-between">
      ${data.map((value, index) => {
        // 計算標準化值
        const normalizedValue = Math.max(0, Math.min(1, (value - minRange) / (maxRange - minRange)));
        // 將標準化值映射到 15-35 的像素範圍（讓圓點在中間區域移動）
        const dotPosition = Math.round(10 + normalizedValue * 20);
        
        return `
          <div class="chart-day chart-day-dot d-flex flex-column align-items-center">
            <div class="dot-wrapper" data-position="${dotPosition}"></div>
            <small class="chart-label text-neutral-500 mt-2 fw-medium">${days[index]}</small>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 體脂肪率曲線面積圖
function generateAreaChart(data) {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  
  const dataMin = Math.min(...data);
  const dataMax = Math.max(...data);
  const range = dataMax - dataMin;
  
  // 計算適當的顯示範圍
  let minRange, maxRange;
  if (range < 3) {
    // 如果數據變化很小，使用固定範圍
    const avgValue = (dataMin + dataMax) / 2;
    minRange = Math.max(0, avgValue - 3);
    maxRange = avgValue + 3;
  } else {
    minRange = Math.max(0, dataMin - range * 1);
    maxRange = dataMax + range * 0.3;
  }
  
  // 計算每個點的座標
  const chartWidth = 150;
  const chartHeight = 48;
  const pointSpacing = chartWidth / (data.length - 1);
  
  let pathData = '';
  let points = [];
  
  data.forEach((value, index) => {
    const x = index * pointSpacing;
    const normalizedValue = Math.max(0, Math.min(1, (value - minRange) / (maxRange - minRange)));
    const y = chartHeight - (normalizedValue * chartHeight);
    
    points.push({ x, y });
    
    if (index === 0) {
      pathData += `M ${x} ${y}`;
    } else {
      // 使用貝茲曲線創建平滑曲線
      const prevPoint = points[index - 1];
      const controlPoint1X = prevPoint.x + pointSpacing / 3;
      const controlPoint1Y = prevPoint.y;
      const controlPoint2X = x - pointSpacing / 3;
      const controlPoint2Y = y;
      
      pathData += ` C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${x} ${y}`;
    }
  });
  
  // 完成面積路徑（回到底部）
  const areaPath = pathData + ` L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;
  
  return `
    <div class="chart-container chart-area-container d-flex align-items-end justify-content-between">
      <div class="area-chart-wrapper">
        <svg width="150" height="48" viewBox="0 0 150 48" class="area-chart-svg">
          <!-- 漸層定義 -->
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:var(--bs-primary-300);stop-opacity:1" />
              <stop offset="100%" style="stop-color:var(--bs-primary-100);stop-opacity:0.5" />
            </linearGradient>
          </defs>
          
          <!-- 面積 -->
          <path d="${areaPath}" 
                fill="url(#areaGradient)" 
                stroke="none" />
          
          <!-- 曲線 -->
          <path d="${pathData}" 
                fill="none" 
                stroke="var(--bs-primary)" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" />
        </svg>
        
        <!-- 日期標籤 -->
        <div class="area-chart-labels d-flex justify-content-between">
          ${days.map(day => `
            <small class="chart-label text-neutral-500 fw-medium">${day}</small>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


  // 更新教練提醒區域
  function updateCoachReminder(data) {
    if (!coachReminderSection) return;
    
    const healthSummary = document.querySelector('.health-summary');
    const coachTip = document.querySelector('.coach-tip');
    
    if (healthSummary) healthSummary.textContent = data.healthSummary;
    if (coachTip) coachTip.textContent = data.coachTip;
  }

  // 切換內容
  function switchContent(filterType) {
    if (!dataCardsContainer) return;
    
    const data = contentData[filterType];
    if (!data) return;
    
    if (data.type === 'chart') {
      // 本週顯示圖表
      dataCardsContainer.innerHTML = renderChartView(data);
      dataCardsContainer.className = 'mb-5';
    } else {
      // 其他顯示卡片
      dataCardsContainer.innerHTML = renderCards(data);
      dataCardsContainer.className = 'data-card row g-4 mb-5';
    }
    
    // 更新教練提醒
    updateCoachReminder(data);
  }

  // 頁面載入時，初始化顯示「最新」的內容
  switchContent('latest');

  // 綁定點擊事件
  navPills.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-link")) {
      // 移除所有 active 狀態
      navPills.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });

      // 為點擊的按鈕加上 active 狀態
      e.target.classList.add("active");

      // 取得 filter 類型並切換內容
      const filterType = e.target.dataset.filter;
      console.log("選擇了:", filterType);
      
      // 切換內容顯示
      switchContent(filterType);
    }
  });
});
