// app.js - 영화관 명당 찾기 SPA 핵심 비즈니스 로직 및 이벤트 핸들링

import { BRANDS, BRANCHES, SCREENS, MOVIE_TYPES, DEFAULT_REVIEWS, evaluateSeat, getScreensForBranch } from './data.js';

// 1. 애플리케이션 상태 관리
const state = {
  currentStep: 1,
  selectedBrand: null,     // cgv, megabox, lotte, others
  selectedBranch: null,    // branch object
  selectedScreen: null,    // screen object
  selectedMovieType: 'domestic', // domestic, foreign, musical
  selectedSeat: null,      // coordinate string (e.g. 'H14')
  activeRatingInput: 5     // review form active star rating
};

// 2. DOM 요소 선택
const els = {
  // Breadcrumbs
  breadcrumbs: document.querySelectorAll('.breadcrumbs .breadcrumb-item'),
  btnBack: document.getElementById('btn-back'),
  btnHome: document.getElementById('btn-home'),

  // Sections
  steps: {
    1: document.getElementById('step-brand'),
    2: document.getElementById('step-branch'),
    3: document.getElementById('step-screen'),
    4: document.getElementById('step-detail')
  },

  // Containers
  brandContainer: document.getElementById('brand-cards-container'),
  branchContainer: document.getElementById('branch-list-container'),
  screenContainer: document.getElementById('screen-list-container'),
  seatGrid: document.getElementById('seat-grid'),
  movieChips: document.getElementById('movie-type-chips'),

  // Search & Filter
  branchSearch: document.getElementById('branch-search-input'),
  regionTabs: document.getElementById('region-filter-tabs'),
  branchSubtitle: document.getElementById('branch-subtitle-brand'),

  // Seat Detail Sidebar
  seatTitle: document.getElementById('seat-view-title'),
  badgeScreenType: document.getElementById('badge-screen-type'),
  badgeSeatCount: document.getElementById('badge-seat-count'),
  sidebarEmpty: document.getElementById('seat-sidebar-empty'),
  sidebarContent: document.getElementById('seat-sidebar-content'),
  sidebarSeatCoord: document.getElementById('sidebar-seat-coord'),
  sidebarSeatQuality: document.getElementById('sidebar-seat-quality'),
  sidebarSeatDesc: document.getElementById('sidebar-seat-desc'),
  sidebarSeatScore: document.getElementById('sidebar-seat-score'),
  sidebarSeatType: document.getElementById('sidebar-seat-type'),
  virtualScreen: document.getElementById('virtual-screen'),
  reviewsCount: document.getElementById('sidebar-reviews-count'),
  reviewsList: document.getElementById('sidebar-reviews-list'),
  
  // Review Form
  reviewForm: document.getElementById('review-submit-form'),
  starRating: document.getElementById('form-star-rating'),
  reviewComment: document.getElementById('form-review-comment')
};

// 3. 페이지 전환 및 브레드크럼 라우팅 로직
function goToStep(step) {
  state.currentStep = step;

  // 1. 섹션 컨테이너 토글
  Object.keys(els.steps).forEach(s => {
    if (parseInt(s) === step) {
      els.steps[s].classList.add('active');
    } else {
      els.steps[s].classList.remove('active');
    }
  });

  // 2. 상단 헤더 뒤로가기 버튼 유무
  if (step > 1) {
    els.btnBack.classList.remove('hidden');
  } else {
    els.btnBack.classList.add('hidden');
  }

  // 3. 네비게이션 브레드크럼 하이라이트
  els.breadcrumbs.forEach(item => {
    const itemStep = parseInt(item.getAttribute('data-step'));
    item.classList.remove('active', 'completed');

    if (itemStep === step) {
      item.classList.add('active');
    } else if (itemStep < step) {
      item.classList.add('completed');
    }
  });

  // 4. 화면 리셋/초기 스크롤
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 5. 단계별 초기 렌더링 호출
  if (step === 2) {
    els.branchSearch.value = '';
    renderBranches();
  } else if (step === 3) {
    renderScreens();
  }
}

// 4. STEP 1: 브랜드 렌더링
function renderBrands() {
  els.brandContainer.innerHTML = '';
  BRANDS.forEach(brand => {
    const card = document.createElement('div');
    card.className = 'brand-card card-glass';
    // 호버 시 개별 브랜드 시그니처 색상을 CSS 변수로 주입해 동적 글로우 조명 연출
    card.style.setProperty('--brand-accent', brand.color);
    
    // 브랜드별 적절한 시네마 아이콘
    let iconClass = 'fa-film';
    if (brand.id === 'cgv') iconClass = 'fa-video';
    else if (brand.id === 'megabox') iconClass = 'fa-microphone-lines';
    else if (brand.id === 'lotte') iconClass = 'fa-tv';
    else iconClass = 'fa-ticket';

    card.innerHTML = `
      <div class="brand-icon-wrapper">
        <i class="fa-solid ${iconClass}"></i>
      </div>
      <h3>${brand.name}</h3>
      <p>${brand.desc}</p>
      <div class="brand-action-btn">
        지점 선택하기 <i class="fa-solid fa-arrow-right-long"></i>
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedBrand = brand.id;
      els.branchSubtitle.innerText = `${brand.name}의 전국 지점을 검색하고 탐색합니다.`;
      goToStep(2);
    });

    els.brandContainer.appendChild(card);
  });
}

// 5. STEP 2: 지점 렌더링 (지역 필터 및 실시간 검색 지원)
let currentRegion = 'all';
function renderBranches() {
  els.branchContainer.innerHTML = '';
  const searchVal = els.branchSearch.value.trim().toLowerCase();
  const list = BRANCHES[state.selectedBrand] || [];

  const filteredList = list.filter(branch => {
    // 1. 지역별 그룹 필터링
    if (currentRegion !== 'all') {
      if (currentRegion === '서울' && branch.region !== '서울') {
        return false;
      }
      if (currentRegion === '경기' && branch.region !== '경기' && branch.region !== '인천') {
        return false;
      }
      if (currentRegion === '충청' && ['서울', '경기', '인천'].includes(branch.region)) {
        return false;
      }
    }
    // 2. 검색어 필터링
    if (searchVal && !branch.name.toLowerCase().includes(searchVal)) {
      return false;
    }
    return true;
  });

  if (filteredList.length === 0) {
    els.branchContainer.innerHTML = `
      <div class="card-glass" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-sub);">
        <i class="fa-solid fa-face-frown" style="font-size: 2rem; margin-bottom: 12px; color: var(--text-muted);"></i>
        <p>검색 조건에 맞는 지점이 없습니다. 다른 키워드로 검색해 보세요!</p>
      </div>
    `;
    return;
  }

  filteredList.forEach(branch => {
    const card = document.createElement('div');
    card.className = 'branch-card card-glass';
    card.innerHTML = `
      <div class="branch-info">
        <h3>${branch.name}</h3>
        <span>${branch.region} 지역</span>
      </div>
      <div class="branch-arrow">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedBranch = branch;
      goToStep(3);
    });

    els.branchContainer.appendChild(card);
  });
}

// 6. STEP 3: 상영관 렌더링
function renderScreens() {
  els.screenContainer.innerHTML = '';
  const branch = state.selectedBranch;
  const screens = getScreensForBranch(branch);

  if (screens.length === 0) {
    els.screenContainer.innerHTML = `
      <div class="card-glass" style="padding: 40px; text-align: center; color: var(--text-sub);">
        <p>현재 등록된 상영관 정보가 없습니다.</p>
      </div>
    `;
    return;
  }

  screens.forEach(screen => {
    const card = document.createElement('div');
    card.className = 'screen-card card-glass';
    
    // 관람관 타입에 따른 컬러 배지
    let badgeClass = 'badge-outline';
    if (screen.type === 'IMAX') badgeClass = 'badge-accent';
    else if (screen.type === 'Dolby') badgeClass = 'badge-accent';
    
    card.innerHTML = `
      <div class="screen-main-info">
        <div class="screen-title-area">
          <h3>${screen.name}</h3>
          <span class="badge ${badgeClass}">${screen.type}</span>
          <span class="badge badge-outline">${screen.seatCount}석</span>
        </div>
        <p class="screen-desc">${screen.desc}</p>
      </div>
      <div class="screen-chevron">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    `;

    card.addEventListener('click', () => {
      state.selectedScreen = screen;
      state.selectedSeat = null; // 좌석 초기화
      goToStep(4);
      initSeatView();
    });

    els.screenContainer.appendChild(card);
  });
}

// 7. STEP 4: 좌석 및 상세 정보 초기화
function initSeatView() {
  const branch = state.selectedBranch;
  const screen = state.selectedScreen;

  // 헤더 및 메타데이터 정보 반영
  els.seatTitle.innerText = `${branch.name} - ${screen.name}`;
  els.badgeScreenType.innerText = screen.type;
  els.badgeSeatCount.innerText = `${screen.seatCount}석`;

  // 영화 종류 칩 렌더링
  renderMovieChips();

  // 좌석 상세 패널 닫기 (초기 상태로 복원)
  closeSidebar();

  // 좌석 그리드 렌더링
  renderSeatGrid();
}

// 영화 특징 필터 칩 렌더링
function renderMovieChips() {
  els.movieChips.innerHTML = '';
  MOVIE_TYPES.forEach(type => {
    const chip = document.createElement('div');
    chip.className = `movie-chip ${state.selectedMovieType === type.id ? 'active' : ''}`;
    chip.innerText = type.name;
    chip.title = type.desc;

    chip.addEventListener('click', () => {
      state.selectedMovieType = type.id;
      // 칩 액티브 클래스 교체
      document.querySelectorAll('.movie-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      // 명당 데이터 실시간 업데이트 (리빌딩 대신 등급 색상/평가만 갱신)
      updateSeatRatings();

      // 현재 선택된 좌석이 있다면 상세 패널도 다시 계산해 리프레시
      if (state.selectedSeat) {
        selectSeat(state.selectedSeat);
      }
    });

    els.movieChips.appendChild(chip);
  });
}

// 8. 인터랙티브 좌석 맵 빌더 (CSS Grid 활용)
function renderSeatGrid() {
  const screen = state.selectedScreen;
  const { rows, cols, aisles, wheelchairs } = screen;
  
  els.seatGrid.innerHTML = '';
  state.selectedSeat = null;

  // CSS Grid Column 개수 산정: (좌 레이블) + (좌석 cols 개수) + (통로 개수) + (우 레이블)
  const totalGridCols = 2 + cols + aisles.length;
  els.seatGrid.style.gridTemplateColumns = `repeat(${totalGridCols}, auto)`;

  rows.forEach(row => {
    // 1. 왼쪽 행 레이블
    const leftLabel = document.createElement('div');
    leftLabel.className = 'seat-row-label';
    leftLabel.innerText = row;
    els.seatGrid.appendChild(leftLabel);

    // 2. 좌석 배치 및 통로 처리
    let currentAisleOffset = 0;
    for (let c = 1; c <= cols; c++) {
      // 통로(Aisle) 체크 및 생성
      if (aisles.includes(c - 1)) {
        const aisle = document.createElement('div');
        aisle.className = 'seat-aisle';
        els.seatGrid.appendChild(aisle);
      }

      const seatCoord = `${row}${c}`;
      const isWheelchair = wheelchairs.includes(seatCoord);

      // 개별 좌석 엘리먼트 생성
      const seat = document.createElement('div');
      seat.className = 'seat-item';
      seat.setAttribute('data-coord', seatCoord);
      seat.setAttribute('data-row', row);
      seat.setAttribute('data-col', c);
      
      if (isWheelchair) {
        seat.classList.add('seat-type-wheelchair');
        seat.innerHTML = '<i class="fa-solid fa-wheelchair"></i>';
        seat.title = `${seatCoord} (휠체어 전용석)`;
      } else {
        // 등급 산출
        const evaluation = evaluateSeat(screen.type, state.selectedMovieType, row, c, rows, cols);
        seat.classList.add(`seat-rating-${evaluation.rating}`);
        seat.innerText = c;
        seat.title = `${seatCoord} - ${evaluation.rating === 'best' ? '명당 (최적)' : evaluation.rating === 'good' ? '추천 (우수)' : evaluation.rating === 'normal' ? '일반 (보통)' : '비추천 (피로)'}`;
      }

      // 클릭 시 해당 좌석 선택 이벤트 바인딩
      seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
          closeSidebar();
        } else {
          document.querySelectorAll('.seat-item').forEach(s => s.classList.remove('selected'));
          seat.classList.add('selected');
          selectSeat(seatCoord);
        }
      });

      els.seatGrid.appendChild(seat);
    }

    // 3. 오른쪽 행 레이블
    const rightLabel = document.createElement('div');
    rightLabel.className = 'seat-row-label';
    rightLabel.innerText = row;
    els.seatGrid.appendChild(rightLabel);
  });
}

// 영화 종류 필터 갱신 시 등급 실시간 리프레시 함수
function updateSeatRatings() {
  const screen = state.selectedScreen;
  const { rows, cols, wheelchairs } = screen;

  document.querySelectorAll('.seat-item').forEach(seat => {
    const seatCoord = seat.getAttribute('data-coord');
    if (wheelchairs.includes(seatCoord)) return; // 휠체어석 보존

    const row = seat.getAttribute('data-row');
    const col = parseInt(seat.getAttribute('data-col'));

    // 클래스 클리닝
    seat.className = 'seat-item';
    if (state.selectedSeat === seatCoord) {
      seat.classList.add('selected');
    }

    // 재평가
    const evaluation = evaluateSeat(screen.type, state.selectedMovieType, row, col, rows, cols);
    seat.classList.add(`seat-rating-${evaluation.rating}`);
    seat.title = `${seatCoord} - ${evaluation.rating === 'best' ? '명당 (최적)' : evaluation.rating === 'good' ? '추천 (우수)' : evaluation.rating === 'normal' ? '일반 (보통)' : '비추천 (피로)'}`;
  });
}

// 9. 특정 좌석 선택 시 상세 정보 및 3D 입체 왜곡 연출
function selectSeat(coord) {
  state.selectedSeat = coord;
  const screen = state.selectedScreen;
  const row = coord.match(/[A-Z]+/)[0];
  const col = parseInt(coord.match(/\d+/)[0]);

  // 좌석 분석 알고리즘 가동
  const evalResult = evaluateSeat(screen.type, state.selectedMovieType, row, col, screen.rows, screen.cols);

  // 1. 기본 UI 정보 바인딩
  els.sidebarSeatCoord.innerText = coord;
  els.sidebarSeatDesc.innerText = evalResult.desc;
  
  // 평점 가산 (자연스럽게 보정된 최종 점수 노출)
  let userRatingAvg = getAverageUserRating(screen.id, coord);
  let finalScore = userRatingAvg ? ((evalResult.score + userRatingAvg) / 2).toFixed(1) : evalResult.score.toFixed(1);
  els.sidebarSeatScore.innerText = `${finalScore} / 5.0`;

  // 명당 퀄리티 텍스트 & 뱃지 색상 클래스 적용
  const qBadge = els.sidebarSeatQuality;
  qBadge.className = 'seat-quality-badge'; // 리셋
  
  if (evalResult.rating === 'best') {
    qBadge.innerText = '명당 (최적)';
    qBadge.classList.add('quality-best');
  } else if (evalResult.rating === 'good') {
    qBadge.innerText = '추천 (우수)';
    qBadge.classList.add('quality-good');
  } else if (evalResult.rating === 'normal') {
    qBadge.innerText = '일반 (보통)';
    qBadge.classList.add('quality-normal');
  } else {
    qBadge.innerText = '비추천 (피로)';
    qBadge.classList.add('quality-avoid');
  }

  const isWheelchair = screen.wheelchairs.includes(coord);
  els.sidebarSeatType.innerText = isWheelchair ? '휠체어석' : '일반석';

  // 2. 가상 시야 3D Perspective 시뮬레이터 왜곡 계산
  const rowIndex = screen.rows.indexOf(row);
  const totalRows = screen.rows.length;
  const colIndex = col - 1;
  const midCol = (screen.cols - 1) / 2;

  // 거리 비율 (0 = 맨앞, 1 = 맨뒤)
  const rowRatio = rowIndex / (totalRows - 1 || 1);
  // 중심으로부터 편차 비율 (-1 = 맨왼쪽, 0 = 정중앙, 1 = 맨오른쪽)
  const colOffsetRatio = (colIndex - midCol) / (midCol || 1);

  // 3D Matrix 변형 상수값
  // 1. 크기(scale): 앞일수록(rowRatio 가 0에 가까울수록) 스크린이 비대하게 꽉 찬 시야. 뒤로 갈수록 시야가 작아짐.
  const scaleVal = 1.3 - (rowRatio * 0.65); // 1.3(맨앞) ~ 0.65(맨뒤)
  
  // 2. 회전각(rotateY): 좌우 사이드로 갈수록 반대 방향으로 스크린 왜곡이 생김 (최대 16도)
  const rotateYVal = colOffsetRatio * 16; 
  
  // 3. 고개 각도(rotateX): 앞열일수록 스크린을 과도하게 올려다봄(rotateX 음수 각도로 경사 발생)
  const rotateXVal = -12 + (rowRatio * 10); // -12도(맨앞) ~ -2도(맨뒤)

  // 3D Transform 문자열 조합
  els.virtualScreen.style.transform = `rotateX(${rotateXVal}deg) rotateY(${rotateYVal}deg) scale(${scaleVal})`;
  
  // 스크린의 선명도도 거리/각도에 따라 조도 조절
  const brightness = 100 - (rowRatio * 30) - (Math.abs(colOffsetRatio) * 15);
  els.virtualScreen.style.filter = `brightness(${brightness}%)`;

  // 3. 후기 렌더링 호출
  renderReviews(screen.id, coord);

  // 4. 사이드바 활성화
  els.sidebarEmpty.classList.add('hidden');
  els.sidebarContent.classList.remove('hidden');
}

function closeSidebar() {
  state.selectedSeat = null;
  document.querySelectorAll('.seat-item').forEach(s => s.classList.remove('selected'));
  els.sidebarEmpty.classList.remove('hidden');
  els.sidebarContent.classList.add('hidden');
  
  // 3D 시뮬레이터 리셋
  els.virtualScreen.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  els.virtualScreen.style.filter = 'brightness(100%)';
}

// 10. 로컬 스토리지 연계 모의 관람평 시스템
function getReviews(screenId, coord) {
  // 1. 기본 시드 파일 리뷰 수집
  const seedReviews = (DEFAULT_REVIEWS[screenId] && DEFAULT_REVIEWS[screenId][coord]) || [];
  
  // 2. 로컬 스토리지에 저장된 실시간 리뷰 수집
  const localKey = `cinema_reviews_${screenId}_${coord}`;
  const localReviews = JSON.parse(localStorage.getItem(localKey) || '[]');
  
  // 결합하여 최신순 정렬
  return [...localReviews, ...seedReviews];
}

function getAverageUserRating(screenId, coord) {
  const reviews = getReviews(screenId, coord);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  return sum / reviews.length;
}

function renderReviews(screenId, coord) {
  els.reviewsList.innerHTML = '';
  const reviews = getReviews(screenId, coord);
  els.reviewsCount.innerText = `(${reviews.length})`;

  if (reviews.length === 0) {
    els.reviewsList.innerHTML = `<div class="review-empty">등록된 관람평이 없습니다. 첫 평가를 등록해보세요!</div>`;
    return;
  }

  reviews.forEach(review => {
    const item = document.createElement('div');
    item.className = 'review-item';
    
    // 별점 그리기
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
      } else {
        starsHtml += '<i class="fa-regular fa-star"></i>';
      }
    }

    item.innerHTML = `
      <div class="review-header">
        <div class="review-stars">${starsHtml}</div>
        <span class="review-date">${review.date}</span>
      </div>
      <p class="review-comment">${review.comment}</p>
    `;
    els.reviewsList.appendChild(item);
  });
}

// 11. 리뷰 등록 폼 핸들링
function handleReviewSubmit(e) {
  e.preventDefault();
  
  if (!state.selectedSeat || !state.selectedScreen) return;
  
  const screenId = state.selectedScreen.id;
  const coord = state.selectedSeat;
  const comment = els.reviewComment.value.trim();
  const rating = state.activeRatingInput;

  if (!comment) return;

  // 새 리뷰 오브젝트 생성
  const today = new Date().toISOString().split('T')[0];
  const newReview = {
    rating,
    comment,
    date: today
  };

  // 로컬 스토리지에 세이브
  const localKey = `cinema_reviews_${screenId}_${coord}`;
  const localReviews = JSON.parse(localStorage.getItem(localKey) || '[]');
  localReviews.unshift(newReview); // 앞에 삽입해 최신순 정렬
  localStorage.setItem(localKey, JSON.stringify(localReviews));

  // 폼 초기화 및 새로고침
  els.reviewComment.value = '';
  state.activeRatingInput = 5;
  updateFormStars(5);

  // 리뷰 리스트 갱신 & 사이드바 평점 갱신
  renderReviews(screenId, coord);
  selectSeat(coord);
}

// 별점 입력 UI 동적 제어
function updateFormStars(rating) {
  state.activeRatingInput = rating;
  const stars = els.starRating.querySelectorAll('.star-btn');
  
  stars.forEach(star => {
    const val = parseInt(star.getAttribute('data-value'));
    // active 클래스를 역행 구조에 맞게 매핑
    if (val <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// 12. 전체 이벤트 바인딩 및 앱 로드
function initApp() {
  // 1. 초기 렌더링 호출
  renderBrands();

  // 2. 홈 로고 클릭 -> Step 1 복원
  els.btnHome.addEventListener('click', () => {
    goToStep(1);
  });

  // 3. 브레드크럼 클릭 이동 이벤트 바인딩
  els.breadcrumbs.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('completed')) {
        const targetStep = parseInt(item.getAttribute('data-step'));
        goToStep(targetStep);
      }
    });
  });

  // 4. 뒤로가기 액션 바인딩
  const backActions = document.querySelectorAll('.btn-back-action, #btn-back');
  backActions.forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.currentStep > 1) {
        goToStep(state.currentStep - 1);
      }
    });
  });

  // 5. 지점 찾기 필터 연동
  els.branchSearch.addEventListener('input', renderBranches);
  
  const regionTabs = els.regionTabs.querySelectorAll('.tab-btn');
  regionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      regionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentRegion = tab.getAttribute('data-region');
      renderBranches();
    });
  });

  // 6. 사이드바 닫기 버튼
  document.getElementById('btn-close-sidebar').addEventListener('click', closeSidebar);

  // 7. 별점 선택 버튼 이벤트
  const formStars = els.starRating.querySelectorAll('.star-btn');
  formStars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-value'));
      updateFormStars(val);
    });
  });

  // 8. 리뷰 제출 폼 연동
  els.reviewForm.addEventListener('submit', handleReviewSubmit);

  // 첫 화면으로 이동
  goToStep(1);
}

// DOMContentLoaded 시점에 구동
document.addEventListener('DOMContentLoaded', initApp);
