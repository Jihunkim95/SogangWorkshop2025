// 금은별장 공간 데이터 정의 (시나리오 기반 - 양방향 자동 연결)
const locations = {
    // 1. 진입로 (시작점)
    'entrance-road': {
        name: '진입로',
        emoji: '🛣️',
        photos: ['images/entrance-road/entrance-road.jpg'],
        hotspots: [
            { label: '🚗 제1 주차장 가는길', target: 'parking-road-1', position: { x: 70, y: 30 } },
            { label: '🌳 금은별장 진입로1', target: 'resort-entrance-1', position: { x: 30, y: 50 } }
        ]
    },

    // 2. 진입로 -> 제1 주차장 가는길 -> 제1 주차장
    'parking-road-1': {
        name: '제1 주차장 가는길',
        emoji: '🛤️',
        photos: ['images/parking-road-1/parking-road-1.jpg'],
        hotspots: [
            { label: '🛣️ 진입로', target: 'entrance-road', position: { x: 30, y: 80 } },
            { label: '🅿️ 제1 주차장', target: 'parking-1', position: { x: 40, y: 50 } }
        ]
    },

    'parking-1': {
        name: '제1 주차장',
        emoji: '🅿️',
        photos: ['images/parking-1/parking-1.jpg'],
        hotspots: [
            { label: '🛤️ 제1 주차장 가는길', target: 'parking-road-1', position: { x: 30, y: 80 } }
        ]
    },

    // 3. 금은별장 진입로1 -> 진입로2 -> 진입로3 -> 금은별장 입구
    'resort-entrance-1': {
        name: '금은별장 진입로1',
        emoji: '🌳',
        photos: ['images/resort-entrance-1/resort-entrance-1.jpg'],
        hotspots: [
            { label: '🛣️ 진입로', target: 'entrance-road', position: { x: 50, y: 85} },
            { label: '🌲 금은별장 진입로2', target: 'resort-entrance-2', position: { x: 50, y: 40 } }
        ]
    },

    'resort-entrance-2': {
        name: '금은별장 진입로2',
        emoji: '🌲',
        photos: ['images/resort-entrance-2/resort-entrance-2.jpg'],
        hotspots: [
            { label: '🌳 금은별장 진입로1', target: 'resort-entrance-1', position: { x: 50, y: 85 } },
            { label: '🌴 금은별장 진입로3', target: 'resort-entrance-3', position: { x: 50, y: 40 } }
        ]
    },

    'resort-entrance-3': {
        name: '금은별장 진입로3',
        emoji: '🌴',
        photos: ['images/resort-entrance-3/resort-entrance-3.jpg'],
        hotspots: [
            { label: '🚗 제2 주차장 가는길', target: 'parking-road-2', position: { x: 40, y: 40 } },
            { label: '🌲 금은별장 진입로2', target: 'resort-entrance-2', position: { x: 50, y: 85 } },
            { label: '🏠 금은별장 입구', target: 'resort-gate', position: { x: 75, y: 45 } }
        ]
    },

    // 금은별장 입구 (중앙 허브)
    'resort-gate': {
        name: '금은별장 입구',
        emoji: '🏠',
        photos: ['images/resort-gate/resort-gate.jpg'],
        hotspots: [
            { label: '🚪 정문', target: 'main-entrance', position: { x: 20, y: 30 } },
            { label: '🌴 금은별장 진입로3', target: 'resort-entrance-3', position: { x: 50, y: 85 } },
            { label: '🚬 흡연장', target: 'smoking-area', position: { x: 60, y: 30 } },
            { label: '⚽ 족구장', target: 'footvolley', position: { x: 20, y: 50 } }
        ]
    },

    // 5. 금은별장 입구 -> 제2 주차장 가는길 -> 제2 주차장
    'parking-road-2': {
        name: '제2 주차장 가는길',
        emoji: '🛤️',
        photos: ['images/parking-road-2/parking-road-2.jpg'],
        hotspots: [
            { label: '🏠 금은별장 입구', target: 'resort-gate', position: { x: 40, y: 80 } },
            { label: '🅿️ 제2 주차장', target: 'parking-2', position: { x: 70, y: 50 } }
        ]
    },

    'parking-2': {
        name: '제2 주차장',
        emoji: '🅿️',
        photos: ['images/parking-2/parking-2.jpg'],
        hotspots: [
            { label: '🛤️ 제2 주차장 가는길', target: 'parking-road-2', position: { x: 40, y: 80 } }
        ]
    },

    // 6. 금은별장 입구 -> 흡연장 -> 바베큐장
    'smoking-area': {
        name: '흡연장',
        emoji: '🚬',
        photos: ['images/smoking-area/smoking-area.jpg'],
        hotspots: [
            { label: '🏠 금은별장 입구', target: 'resort-gate', position: { x: 40, y: 80 } },
            { label: '🍖 바베큐장', target: 'bbq-area', position: { x: 70, y: 50 } }
        ]
    },

    'bbq-area': {
        name: '바베큐장',
        emoji: '🍖',
        photos: ['images/bbq-area/bbq-area.jpg'],
        hotspots: [
            { label: '🚪 정문', target: 'main-entrance', position: { x: 20, y: 50 } },
            { label: '🚬 흡연장', target: 'smoking-area', position: { x: 80, y: 50 } },
            { label: '🌿 테라스1', target: 'terrace-1', position: { x: 50, y: 35 } },

        ]
    },

    // 7. 금은별장 입구 -> 족구장 -> 정문
    'footvolley': {
        name: '족구장',
        emoji: '⚽',
        photos: ['images/footvolley/footvolley.jpg'],
        hotspots: [
            { label: '🏠 금은별장 입구', target: 'resort-gate', position: { x: 30, y: 80 } },
            { label: '🚪 정문', target: 'main-entrance', position: { x: 70, y: 60 } }
        ]
    },

    // 8-10. 정문 -> 화장실1, 화장실2, 거실
    'main-entrance': {
        name: '정문',
        emoji: '🚪',
        photos: ['images/main-entrance/main-entrance.jpg'],
        hotspots: [
            { label: '⚽ 족구장', target: 'footvolley', position: { x: 30, y: 80 } },
            { label: '🚻 화장실1', target: 'bathroom-1', position: { x: 20, y: 50 } },
            { label: '🚻 화장실2', target: 'bathroom-2', position: { x: 20, y: 30 } },
            { label: '🛋️ 거실', target: 'living-room', position: { x: 50, y: 20 } }
        ]
    },

    'bathroom-1': {
        name: '화장실1',
        emoji: '🚻',
        photos: ['images/bathroom-1/bathroom-1.jpg'],
        hotspots: [
            { label: '🚪 정문', target: 'main-entrance', position: { x: 30, y: 80 } }
        ]
    },

    'bathroom-2': {
        name: '화장실2',
        emoji: '🚻',
        photos: ['images/bathroom-2/bathroom-2.jpg'],
        hotspots: [
            { label: '🚪 정문', target: 'main-entrance', position: { x: 30, y: 80 } }
        ]
    },

    // 11. 거실 -> 화장실3, 방1, 계단, 방2, 방3, 테라스1, 주방
    'living-room': {
        name: '거실',
        emoji: '🛋️',
        photos: ['images/living-room/living-room.jpg'],
        hotspots: [
            { label: '🚪 정문', target: 'main-entrance', position: { x: 50, y: 80 } },
            { label: '🚿 화장실3', target: 'bathroom-3', position: { x: 15, y: 80 } },
            { label: '🛏️ 방1', target: 'room-1', position: { x: 15, y: 70 } },
            { label: '🪜 계단', target: 'stairs', position: { x: 15, y: 50 } },
            { label: '🛏️ 방2', target: 'room-2', position: { x: 40, y: 30 } },
            { label: '🛏️ 방3', target: 'room-3', position: { x: 70, y: 30 } },
            { label: '🌿 테라스1', target: 'terrace-1', position: { x: 85, y: 70 } },
            { label: '🍳 주방', target: 'kitchen', position: { x: 15, y: 30 } }
        ]
    },

    'bathroom-3': {
        name: '화장실3',
        emoji: '🚿',
        photos: ['images/bathroom-3/bathroom-3.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 50, y: 80 } }
        ]
    },

    'room-1': {
        name: '방1',
        emoji: '🛏️',
        photos: ['images/room-1/room-1.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 50, y: 80 } }
        ]
    },

    'room-2': {
        name: '방2',
        emoji: '🛏️',
        photos: ['images/room-2/room-2.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 50, y: 80 } }
        ]
    },

    'room-3': {
        name: '방3',
        emoji: '🛏️',
        photos: ['images/room-3/room-3.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 50, y: 80 } }
        ]
    },

    // 12. 테라스1 -> 야외주방
    'terrace-1': {
        name: '테라스1',
        emoji: '🌿',
        photos: ['images/terrace-1/terrace-1.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 20, y: 50 } },
            { label: '🍴 야외주방', target: 'outdoor-kitchen', position: { x: 20, y: 30 } }
        ]
    },

    'outdoor-kitchen': {
        name: '야외주방',
        emoji: '🍴',
        photos: ['images/outdoor-kitchen/outdoor-kitchen.jpg'],
        hotspots: [
            { label: '🌿 테라스1', target: 'terrace-1', position: { x: 30, y: 30 } },
            { label: '🍖 바베큐장', target: 'bbq-area', position: { x: 20, y: 50 } }

        ]
    },

    // 13. 주방 -> 방4 -> 화장실4, 테라스2
    'kitchen': {
        name: '주방',
        emoji: '🍳',
        photos: ['images/kitchen/kitchen.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 20, y: 50 } },
            { label: '🛏️ 방4', target: 'room-4', position: { x: 60, y: 80 } }
        ]
    },

    'room-4': {
        name: '방4',
        emoji: '🛏️',
        photos: ['images/room-4/room-4.jpg'],
        hotspots: [
            { label: '🍳 주방', target: 'kitchen', position: { x: 30, y: 50 } },
            { label: '🚿 화장실4', target: 'bathroom-4', position: { x: 60, y: 40 } },
            { label: '🌿 테라스2', target: 'terrace-2', position: { x: 60, y: 80 } }
        ]
    },

    'bathroom-4': {
        name: '화장실4',
        emoji: '🚿',
        photos: ['images/bathroom-4/bathroom-4.jpg'],
        hotspots: [
            { label: '🛏️ 방4', target: 'room-4', position: { x: 50, y: 80 } }
        ]
    },

    'terrace-2': {
        name: '테라스2',
        emoji: '🌿',
        photos: ['images/terrace-2/terrace-2.jpg'],
        hotspots: [
            { label: '🛏️ 방4', target: 'room-4', position: { x: 30, y: 50 } }
        ]
    },

    // 14. 계단 -> 계단 올라가는길 -> 방5 -> 방6
    'stairs': {
        name: '계단',
        emoji: '🪜',
        photos: ['images/stairs/stairs.jpg'],
        hotspots: [
            { label: '🛋️ 거실', target: 'living-room', position: { x: 70, y: 50 } },
            { label: '⬆️ 계단 올라가는길', target: 'stairs-up', position: { x: 30, y: 50 } }
        ]
    },

    'stairs-up': {
        name: '계단 올라가는길',
        emoji: '⬆️',
        photos: ['images/stairs-up/stairs-up.jpg'],
        hotspots: [
            { label: '🪜 계단', target: 'stairs', position: { x: 70, y: 50 } },
            { label: '🛏️ 방5', target: 'room-5', position: { x: 70, y: 30 } }
        ]
    },

    'room-5': {
        name: '방5',
        emoji: '🛏️',
        photos: ['images/room-5/room-5.jpg'],
        hotspots: [
            { label: '⬆️ 계단 올라가는길', target: 'stairs-up', position: { x: 70, y: 50 } },
            { label: '🛏️ 방6', target: 'room-6', position: { x: 50, y: 50 } }
        ]
    },

    'room-6': {
        name: '방6',
        emoji: '🛏️',
        photos: ['images/room-6/room-6.jpg'],
        hotspots: [
            { label: '🛏️ 방5', target: 'room-5', position: { x: 50, y: 80 } }
        ]
    }
};

// 전역 변수
let currentLocation = 'entrance-road'; // 진입로에서 시작
let currentPhotoIndex = 0;
let zoomLevel = 1;

// DOM 요소
const loadingEl = document.getElementById('loading');
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sideMenu = document.getElementById('sideMenu');
const locationNameEl = document.getElementById('locationName');
const navHint = document.getElementById('navHint');
const mainImage = document.getElementById('mainImage');
const hotspotsContainer = document.getElementById('hotspotsContainer');
const prevPhotoBtn = document.getElementById('prevPhoto');
const nextPhotoBtn = document.getElementById('nextPhoto');
const photoIndicator = document.getElementById('photoIndicator');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const zoomResetBtn = document.getElementById('zoomReset');

// 초기화
function init() {
    loadLocation(currentLocation);
    setupEventListeners();

    // 힌트는 5초 후 사라짐
    setTimeout(() => {
        navHint.style.opacity = '0';
        setTimeout(() => navHint.style.display = 'none', 300);
    }, 5000);
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 메뉴 토글
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    sideMenu.addEventListener('click', (e) => {
        if (e.target === sideMenu) {
            sideMenu.classList.remove('active');
        }
    });

    // 위치 버튼
    document.querySelectorAll('.location-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const locationId = btn.dataset.location;
            navigateToLocation(locationId);
        });
    });

    // 사진 네비게이션
    prevPhotoBtn.addEventListener('click', () => changePhoto(-1));
    nextPhotoBtn.addEventListener('click', () => changePhoto(1));

    // 줌 컨트롤
    zoomInBtn.addEventListener('click', () => zoom(0.2));
    zoomOutBtn.addEventListener('click', () => zoom(-0.2));
    zoomResetBtn.addEventListener('click', () => resetZoom());

    // 이미지 드래그 (줌 상태일 때)
    let isDragging = false;
    let startX, startY;
    let scrollLeft, scrollTop;

    mainImage.addEventListener('mousedown', (e) => {
        if (zoomLevel > 1) {
            isDragging = true;
            startX = e.pageX - mainImage.offsetLeft;
            startY = e.pageY - mainImage.offsetTop;
            scrollLeft = mainImage.parentElement.scrollLeft;
            scrollTop = mainImage.parentElement.scrollTop;
        }
    });

    mainImage.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - mainImage.offsetLeft;
        const y = e.pageY - mainImage.offsetTop;
        const walkX = (x - startX) * 2;
        const walkY = (y - startY) * 2;
        mainImage.parentElement.scrollLeft = scrollLeft - walkX;
        mainImage.parentElement.scrollTop = scrollTop - walkY;
    });

    mainImage.addEventListener('mouseup', () => {
        isDragging = false;
    });

    mainImage.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // 터치 이벤트 (모바일)
    let touchStartX = 0;
    let touchEndX = 0;

    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    mainImage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const location = locations[currentLocation];
        if (location.photos.length <= 1) return;

        if (touchEndX < touchStartX - 50) {
            changePhoto(1);
        }
        if (touchEndX > touchStartX + 50) {
            changePhoto(-1);
        }
    }

    // 이미지 로드 완료
    mainImage.addEventListener('load', () => {
        loadingEl.classList.add('hidden');
        // 이미지 로드 후 핫스팟 위치 재조정
        updateHotspotsContainerSize();
    });

    // 이미지 로드 에러
    mainImage.addEventListener('error', () => {
        console.error('이미지 로드 실패:', mainImage.src);
        loadingEl.classList.add('hidden');
        alert('이미지를 불러올 수 없습니다.\n\n실제 사진을 images 폴더에 넣어주세요.\n\n파일명: main.jpg');
    });

    // 화면 크기 변경 시 핫스팟 위치 재조정
    window.addEventListener('resize', () => {
        updateHotspotsContainerSize();
    });
}

// 위치 로드
function loadLocation(locationId, photoIndex = 0) {
    const location = locations[locationId];
    if (!location) {
        console.error('존재하지 않는 위치:', locationId);
        return;
    }

    currentLocation = locationId;
    currentPhotoIndex = photoIndex;

    loadingEl.classList.remove('hidden');

    locationNameEl.textContent = `${location.emoji} ${location.name}`;

    document.querySelectorAll('.location-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.location === locationId) {
            btn.classList.add('active');
        }
    });

    mainImage.src = location.photos[currentPhotoIndex];

    createHotspots(location.hotspots);

    updatePhotoNavigation(location.photos.length);

    resetZoom();

    sideMenu.classList.remove('active');
}

// 위치 이동
function navigateToLocation(locationId) {
    if (currentLocation === locationId) return;
    loadLocation(locationId);
}

// 사진 변경
function changePhoto(direction) {
    const location = locations[currentLocation];
    const totalPhotos = location.photos.length;

    if (totalPhotos <= 1) return;

    currentPhotoIndex = (currentPhotoIndex + direction + totalPhotos) % totalPhotos;

    loadingEl.classList.remove('hidden');
    mainImage.src = location.photos[currentPhotoIndex];
    updatePhotoIndicator();
}

// 사진 네비게이션 업데이트
function updatePhotoNavigation(totalPhotos) {
    if (totalPhotos > 1) {
        prevPhotoBtn.style.display = 'flex';
        nextPhotoBtn.style.display = 'flex';
        createPhotoIndicator(totalPhotos);
    } else {
        prevPhotoBtn.style.display = 'none';
        nextPhotoBtn.style.display = 'none';
        photoIndicator.innerHTML = '';
    }
}

// 사진 인디케이터 생성
function createPhotoIndicator(totalPhotos) {
    photoIndicator.innerHTML = '';
    for (let i = 0; i < totalPhotos; i++) {
        const dot = document.createElement('div');
        dot.className = 'photo-dot';
        if (i === currentPhotoIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentPhotoIndex = i;
            loadingEl.classList.remove('hidden');
            mainImage.src = locations[currentLocation].photos[i];
            updatePhotoIndicator();
        });
        photoIndicator.appendChild(dot);
    }
}

// 사진 인디케이터 업데이트
function updatePhotoIndicator() {
    const dots = photoIndicator.querySelectorAll('.photo-dot');
    dots.forEach((dot, index) => {
        if (index === currentPhotoIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 핫스팟 컨테이너를 이미지 크기에 맞춰 조정
function updateHotspotsContainerSize() {
    const img = mainImage;
    const viewer = document.getElementById('viewer');

    // 이미지의 실제 표시 크기 계산 (object-fit: contain 고려)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const viewerRatio = viewer.clientWidth / viewer.clientHeight;

    let displayWidth, displayHeight;

    if (imgRatio > viewerRatio) {
        // 이미지가 뷰어보다 가로로 더 넓음 (가로 기준)
        displayWidth = viewer.clientWidth;
        displayHeight = viewer.clientWidth / imgRatio;
    } else {
        // 이미지가 뷰어보다 세로로 더 김 (세로 기준)
        displayHeight = viewer.clientHeight;
        displayWidth = viewer.clientHeight * imgRatio;
    }

    hotspotsContainer.style.width = `${displayWidth}px`;
    hotspotsContainer.style.height = `${displayHeight}px`;
}

// 핫스팟 생성
function createHotspots(hotspots) {
    hotspotsContainer.innerHTML = '';

    hotspots.forEach(hotspot => {
        const hotspotEl = document.createElement('div');
        hotspotEl.className = 'hotspot';
        hotspotEl.textContent = hotspot.label;
        hotspotEl.style.left = `${hotspot.position.x}%`;
        hotspotEl.style.top = `${hotspot.position.y}%`;

        hotspotEl.addEventListener('click', () => {
            navigateToLocation(hotspot.target);
        });

        hotspotsContainer.appendChild(hotspotEl);
    });

    // 핫스팟 컨테이너 크기 조정
    updateHotspotsContainerSize();
}

// 줌 기능
function zoom(delta) {
    zoomLevel += delta;
    zoomLevel = Math.max(1, Math.min(3, zoomLevel));
    mainImage.style.transform = `scale(${zoomLevel})`;

    if (zoomLevel > 1) {
        mainImage.style.cursor = 'grab';
    } else {
        mainImage.style.cursor = 'default';
    }
}

function resetZoom() {
    zoomLevel = 1;
    mainImage.style.transform = 'scale(1)';
    mainImage.style.cursor = 'default';
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    init();
});
