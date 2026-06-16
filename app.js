// ============================================================================
// MOCK DATABASE & CONSTANTS
// ============================================================================

// Farmer Reference Location (Center of Makham Luang subdistrict)
const FARMER_COORDS = { lat: 18.6186, lng: 98.8893 };

// Mock data for Lhong (Longan Buying Points)
let lhongs = [
    {
        id: "lhong-1",
        name: "ล้งเจริญการค้า (ม.3 มะขามหลวง)",
        village: "หมู่ 3 บ้านมะขามหลวง",
        lat: 18.6192,
        lng: 98.8881,
        prices: { AA: 33.0, A: 24.5, B: 15.0, C: 6.0 },
        status: "open",
        phone: "081-234-5678",
        pin: "1234",
        promo: "วันนี้เกรด AA ตึงสวย คัดเกรดให้ราคาสูงเป็นพิเศษ!"
    },
    {
        id: "lhong-2",
        name: "ล้งรุ่งเรืองมะขามหลวง (ม.1 บ้านป่าเหียง)",
        village: "หมู่ 1 บ้านป่าเหียง",
        lat: 18.6135,
        lng: 98.8812,
        prices: { AA: 32.5, A: 25.0, B: 14.5, C: 5.5 },
        status: "open",
        phone: "089-876-5432",
        pin: "1234",
        promo: "ด่วน! ต้องการเกรด AA และ A ไม่จำกัดจำนวนสำหรับส่งออกจีน"
    },
    {
        id: "lhong-3",
        name: "ล้งสันป่าเลียงเกษตร (ม.9 บ้านสันป่าเลียง)",
        village: "หมู่ 9 บ้านสันป่าเลียง",
        lat: 18.6251,
        lng: 98.8954,
        prices: { AA: 31.0, A: 23.0, B: 15.0, C: 6.0 },
        status: "open",
        phone: "084-555-6677",
        pin: "1234",
        promo: ""
    },
    {
        id: "lhong-4",
        name: "ล้งป้าดีผลไม้ (ม.5 บ้านร่องน้ำ)",
        village: "หมู่ 5 บ้านร่องน้ำ",
        lat: 18.6154,
        lng: 98.8981,
        prices: { AA: 32.0, A: 24.0, B: 14.0, C: 5.0 },
        status: "open",
        phone: "086-444-2211",
        pin: "1234",
        promo: ""
    },
    {
        id: "lhong-5",
        name: "ล้งกำนันหมาย (ม.4 บ้านท่าช้าง)",
        village: "หมู่ 4 บ้านท่าช้าง",
        lat: 18.6087,
        lng: 98.8782,
        prices: { AA: 31.5, A: 23.5, B: 13.5, C: 5.0 },
        status: "closed",
        phone: "082-111-9988",
        pin: "1234",
        promo: ""
    },
    {
        id: "lhong-6",
        name: "ล้งต้นแก้วรุ่งโรจน์ (ม.7 บ้านต้นแก้ว)",
        village: "หมู่ 7 บ้านต้นแก้ว",
        lat: 18.6284,
        lng: 98.8851,
        prices: { AA: 33.5, A: 24.0, B: 13.0, C: 4.5 },
        status: "open",
        phone: "085-777-3344",
        pin: "1234",
        promo: "เกรด C วันนี้เต็มตู้แล้ว ของดรับเกรด C ชั่วคราวครับ"
    }
];

// 9 villages of Makham Luang subdistrict
const villages = [
    { name: "หมู่ 1 บ้านป่าเหียง", lat: 18.613, lng: 98.883 },
    { name: "หมู่ 2 บ้านกิ่วกิ้ว", lat: 18.621, lng: 98.875 },
    { name: "หมู่ 3 บ้านมะขามหลวง", lat: 18.619, lng: 98.888 },
    { name: "หมู่ 4 บ้านท่าช้าง", lat: 18.609, lng: 98.879 },
    { name: "หมู่ 5 บ้านร่องน้ำ", lat: 18.616, lng: 98.898 },
    { name: "หมู่ 6 บ้านดอนปิน", lat: 18.624, lng: 98.882 },
    { name: "หมู่ 7 บ้านต้นแก้ว", lat: 18.628, lng: 98.885 },
    { name: "หมู่ 8 บ้านเกาะ", lat: 18.614, lng: 98.892 },
    { name: "หมู่ 9 บ้านสันป่าเลียง", lat: 18.625, lng: 98.895 }
];

// ============================================================================
// STATE MANAGEMENT
// ============================================================================
let activeTab = "prices";
let currentTheme = "dark";
let map = null;
let mapMarkers = [];
let mapCircles = [];
let priceChart = null;
let currentForecastGrade = "AA";
let loggedInLhong = null;

// ============================================================================
// APP INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    initTabNavigation();
    initThemeToggle();
    initPricesTab();
    initScannerTab();
    initForecastTab();
    initLhongPortalTab();
    
    // Auto-login helper if PIN stored (optional, skip for demo)
    updateBroadcastBanner();
});

// ============================================================================
// TAB NAVIGATION
// ============================================================================
function initTabNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });
}

function switchTab(tabId) {
    activeTab = tabId;
    
    // Update nav items
    document.querySelectorAll(".nav-item").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update panels
    document.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.id === `tab-${tabId}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });

    // Custom initialization per tab on activation
    if (tabId === "map") {
        setTimeout(initLeafletMap, 100); // Wait for DOM container visibility
    } else if (tabId === "forecast") {
        setTimeout(renderForecastChart, 100);
    }
}

// ============================================================================
// THEME MANAGEMENT (LIGHT / DARK)
// ============================================================================
function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            currentTheme = "light";
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            currentTheme = "dark";
        }
        
        // Update Leaflet Tiles if map exists
        if (map) {
            updateMapTileLayer();
        }
        
        // Update Chart colors if chart exists
        if (priceChart) {
            updateChartTheme();
        }
    });
}

// ============================================================================
// REAL-TIME BROADCASTS & NOTIFICATIONS
// ============================================================================
function updateBroadcastBanner() {
    const banner = document.getElementById("urgent-broadcast");
    const bannerText = document.getElementById("broadcast-text");
    
    // Find all active promotions from open lhongs
    const activePromos = lhongs.filter(l => l.status === "open" && l.promo.trim() !== "");
    
    if (activePromos.length > 0) {
        // Show first promo, or alternate (simple approach: show the first one)
        const selectedPromo = activePromos[0];
        bannerText.innerHTML = `<strong>${selectedPromo.name}:</strong> "${selectedPromo.promo}"`;
        banner.classList.remove("hidden");
    } else {
        banner.classList.add("hidden");
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    toastMessage.textContent = message;
    toast.classList.remove("hidden");
    
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Haversine formula to compute distance in km
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return parseFloat((R * c).toFixed(1));
}

// Calculate dynamic average market prices (from open lhongs only)
function calculateAveragePrices() {
    const openLhongs = lhongs.filter(l => l.status === "open");
    const averages = { AA: 0, A: 0, B: 0, C: 0 };
    
    if (openLhongs.length === 0) return averages;
    
    openLhongs.forEach(lhong => {
        averages.AA += lhong.prices.AA;
        averages.A += lhong.prices.A;
        averages.B += lhong.prices.B;
        averages.C += lhong.prices.C;
    });
    
    averages.AA = (averages.AA / openLhongs.length).toFixed(1);
    averages.A = (averages.A / openLhongs.length).toFixed(1);
    averages.B = (averages.B / openLhongs.length).toFixed(1);
    averages.C = (averages.C / openLhongs.length).toFixed(1);
    
    return averages;
}

// ============================================================================
// PRICES TAB LOGIC
// ============================================================================
function initPricesTab() {
    // Search input event
    document.getElementById("search-lhong").addEventListener("input", filterAndRenderLhongCards);
    // Sort dropdown event
    document.getElementById("sort-select").addEventListener("change", filterAndRenderLhongCards);
    
    renderPricesData();
}

function renderPricesData() {
    // Render dynamic market averages
    const avgs = calculateAveragePrices();
    document.getElementById("avg-aa").textContent = avgs.AA || "--";
    document.getElementById("avg-a").textContent = avgs.A || "--";
    document.getElementById("avg-b").textContent = avgs.B || "--";
    document.getElementById("avg-c").textContent = avgs.C || "--";

    filterAndRenderLhongCards();
}

function filterAndRenderLhongCards() {
    const searchVal = document.getElementById("search-lhong").value.toLowerCase();
    const sortBy = document.getElementById("sort-select").value;
    const container = document.getElementById("lhong-cards-container");
    
    container.innerHTML = "";
    
    // Process distance data for each Lhong
    let processed = lhongs.map(lhong => {
        return {
            ...lhong,
            distance: calculateDistance(FARMER_COORDS.lat, FARMER_COORDS.lng, lhong.lat, lhong.lng)
        };
    });
    
    // Filter
    let filtered = processed.filter(lhong => {
        return lhong.name.toLowerCase().includes(searchVal) || 
               lhong.village.toLowerCase().includes(searchVal);
    });
    
    // Find best AA price to highlight it (Gold border)
    const openLhongs = filtered.filter(l => l.status === "open");
    let maxAAPrice = 0;
    if (openLhongs.length > 0) {
        maxAAPrice = Math.max(...openLhongs.map(l => l.prices.AA));
    }

    // Sorting
    filtered.sort((a, b) => {
        // Closed status always drops to bottom
        if (a.status !== b.status) {
            return a.status === "open" ? -1 : 1;
        }
        
        if (sortBy === "distance") {
            return a.distance - b.distance;
        } else if (sortBy === "price-aa") {
            return b.prices.AA - a.prices.AA;
        } else if (sortBy === "price-a") {
            return b.prices.A - a.prices.A;
        } else if (sortBy === "open-status") {
            return a.status === "open" ? -1 : 1;
        }
        return 0;
    });

    document.getElementById("lhong-count").textContent = `${filtered.length} แห่ง`;
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="placeholder-icon" style="text-align:center; padding: 40px 0; color: var(--text-secondary);">ไม่พบจุดรับซื้อตามที่ค้นหา</div>`;
        return;
    }

    // Render cards
    filtered.forEach(lhong => {
        const isBestDeal = lhong.status === "open" && lhong.prices.AA === maxAAPrice && maxAAPrice > 0;
        const card = document.createElement("div");
        card.className = `lhong-card ${lhong.status === "closed" ? "closed-lhong" : ""} ${isBestDeal ? "best-deal-border" : ""}`;
        
        // Status Badge
        const statusBadge = lhong.status === "open" 
            ? `<span class="badge badge-open">เปิดรับซื้อ</span>` 
            : `<span class="badge badge-closed">ปิดทำการ</span>`;

        // Highlight high prices column helper
        const prices = lhong.prices;
        
        card.innerHTML = `
            <div class="card-top">
                <div class="lhong-meta">
                    <h3>${lhong.name} ${isBestDeal ? '⭐' : ''}</h3>
                    <p>${lhong.village} • ห่างจากคุณ ~${lhong.distance} กม.</p>
                </div>
                ${statusBadge}
            </div>
            
            ${lhong.promo ? `<div class="banner-text" style="color: var(--accent-color); font-size:11px; margin-top:-5px; font-weight:500;">📢 ${lhong.promo}</div>` : ''}
            
            <div class="price-table-grid">
                <div class="grid-col ${isBestDeal ? 'high-price' : ''}">
                    <span class="col-label">เกรด AA</span>
                    <span class="col-val">${lhong.status === 'open' ? prices.AA.toFixed(1) : '-'}</span>
                </div>
                <div class="grid-col">
                    <span class="col-label">เกรด A</span>
                    <span class="col-val">${lhong.status === 'open' ? prices.A.toFixed(1) : '-'}</span>
                </div>
                <div class="grid-col">
                    <span class="col-label">เกรด B</span>
                    <span class="col-val">${lhong.status === 'open' ? prices.B.toFixed(1) : '-'}</span>
                </div>
                <div class="grid-col">
                    <span class="col-label">เกรด C</span>
                    <span class="col-val">${lhong.status === 'open' ? prices.C.toFixed(1) : '-'}</span>
                </div>
            </div>
            
            <div class="card-actions">
                <a href="tel:${lhong.phone}" class="phone-link">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    โทรสอบถาม (${lhong.phone})
                </a>
                <button class="btn-nav-map" onclick="navigateLhongOnMap('${lhong.id}')">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="3 6 3 22 9 18 15 22 21 18 21 2 15 6 9 2 3 6"></polygon>
                    </svg>
                    ดูพิกัด & นำทาง
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Function to route/navigate to Map tab and center on specific Lhong
window.navigateLhongOnMap = function(lhongId) {
    switchTab("map");
    // Center map on this lhong and trigger marker click
    setTimeout(() => {
        const markerObj = mapMarkers.find(m => m.id === lhongId);
        if (markerObj && map) {
            map.setView(markerObj.marker.getLatLng(), 15);
            markerObj.marker.openPopup();
        }
    }, 200);
};

// ============================================================================
// MAP TAB LOGIC (LEAFLET.JS)
// ============================================================================
function initLeafletMap() {
    // Create map object if not exists
    if (map) {
        map.invalidateSize();
        return; 
    }

    map = L.map("map-container", {
        zoomControl: false,
        attributionControl: false
    }).setView([FARMER_COORDS.lat, FARMER_COORDS.lng], 13.5);

    // Initial tile layer
    updateMapTileLayer();

    // Draw village boundary zones (simulated bubbles for visual localization)
    villages.forEach((v, index) => {
        const circle = L.circle([v.lat, v.lng], {
            color: 'var(--accent-color)',
            fillColor: 'var(--accent-color)',
            fillOpacity: 0.03,
            radius: 400,
            weight: 1,
            dashArray: '5, 5'
        }).addTo(map);
        
        // Add village label on hover (Tooltip)
        circle.bindTooltip(v.name, {
            permanent: true,
            direction: 'center',
            className: 'village-map-label'
        });
        
        mapCircles.push(circle);
    });

    // Farmer location marker
    L.marker([FARMER_COORDS.lat, FARMER_COORDS.lng], {
        icon: L.divIcon({
            className: 'custom-farmer-pin',
            html: `<div style="background-color:#2f9e44; width:16px; height:16px; border-radius:50%; border:3px solid #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.5)"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        })
    }).addTo(map).bindPopup("📍 <strong>ตำแหน่งของคุณ</strong><br>ตำบลมะขามหลวง อ.สันป่าตอง");

    // Lhong markers
    updateMapMarkers();
}

function updateMapTileLayer() {
    // Remove existing tile layers
    map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    // Dark tiles vs light tiles matching app theme
    let tileUrl = "";
    if (currentTheme === "dark") {
        tileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
    } else {
        tileUrl = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
    }

    L.tileLayer(tileUrl, {
        maxZoom: 19
    }).addTo(map);
}

function updateMapMarkers() {
    // Clear old markers
    mapMarkers.forEach(m => map.removeLayer(m.marker));
    mapMarkers = [];

    // Find best AA price to give Golden Pin
    const openLhongs = lhongs.filter(l => l.status === "open");
    let maxAAPrice = 0;
    if (openLhongs.length > 0) {
        maxAAPrice = Math.max(...openLhongs.map(l => l.prices.AA));
    }

    lhongs.forEach(lhong => {
        let pinColor = "var(--green-color)"; // Default Open
        let isBest = false;
        
        if (lhong.status === "closed") {
            pinColor = "var(--red-color)";
        } else if (lhong.prices.AA === maxAAPrice && maxAAPrice > 0) {
            pinColor = "var(--accent-color)"; // Gold Best Price
            isBest = true;
        }

        const markerHtml = `
            <div style="
                background-color: ${pinColor};
                width: 22px; 
                height: 22px; 
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 2px solid #ffffff;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: -11px;
                margin-left: -11px;
            ">
                <div style="
                    background: #ffffff;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                "></div>
            </div>
        `;

        const customIcon = L.divIcon({
            className: "custom-lhong-pin",
            html: markerHtml,
            iconSize: [22, 22],
            iconAnchor: [11, 22],
            popupAnchor: [0, -22]
        });

        const popupHtml = `
            <div class="popup-lhong-title">
                <strong>${lhong.name}</strong>
                <span class="badge ${lhong.status === 'open' ? 'badge-open' : 'badge-closed'}" style="margin-left:5px">
                    ${lhong.status === 'open' ? 'เปิด' : 'ปิด'}
                </span>
            </div>
            <p style="font-size:10px; color:var(--text-secondary)">${lhong.village}</p>
            ${lhong.status === 'open' ? `
                <div class="popup-price-list">
                    <div>เกรด AA: <span>${lhong.prices.AA.toFixed(1)}</span></div>
                    <div>เกรด A: <span>${lhong.prices.A.toFixed(1)}</span></div>
                    <div>เกรด B: <span>${lhong.prices.B.toFixed(1)}</span></div>
                    <div>เกรด C: <span>${lhong.prices.C.toFixed(1)}</span></div>
                </div>
            ` : `<p style="font-size:11px; color:var(--red-color); margin: 6px 0;">งดรับซื้อลำไยชั่วคราว</p>`}
            
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lhong.lat},${lhong.lng}" target="_blank" class="popup-btn-nav">
                🚗 นำทาง (Google Maps)
            </a>
        `;

        const marker = L.marker([lhong.lat, lhong.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(popupHtml);

        mapMarkers.push({
            id: lhong.id,
            marker: marker
        });
    });
}

// ============================================================================
// AI SCANNER LOGIC
// ============================================================================
function initScannerTab() {
    const demoBtns = document.querySelectorAll(".demo-img-btn");
    
    demoBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove previous selections
            demoBtns.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            
            const imgPath = btn.getAttribute("data-img");
            const grade = btn.getAttribute("data-grade");
            
            startScanningSimulation(imgPath, grade);
        });
    });

    // File selection triggers
    const cameraInput = document.getElementById("scanner-camera-input");
    const fileInput = document.getElementById("scanner-file-input");
    
    document.getElementById("btn-trigger-camera").addEventListener("click", () => {
        cameraInput.click();
    });
    
    document.getElementById("btn-trigger-gallery").addEventListener("click", () => {
        fileInput.click();
    });
    
    // File change handlers
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Deselect demo buttons
            demoBtns.forEach(b => b.classList.remove("selected"));
            
            const reader = new FileReader();
            reader.onload = function(e) {
                // Determine a pseudo-random grade for the user uploaded image
                const grades = ["aa", "a", "b", "c"];
                const randomGrade = grades[Math.floor(Math.random() * grades.length)];
                
                startScanningSimulation(e.target.result, randomGrade, true);
            };
            reader.readAsDataURL(file);
        }
    };
    
    cameraInput.addEventListener("change", handleFileSelect);
    fileInput.addEventListener("change", handleFileSelect);

    document.getElementById("btn-find-best-deal").addEventListener("click", () => {
        const predictedGrade = document.getElementById("result-grade-title").textContent.replace("เกรดแนะนำ: ", "").replace(" (ภาพของคุณ)", "").trim();
        
        // Select sorting in Prices tab based on grade
        const sortSelect = document.getElementById("sort-select");
        if (predictedGrade === "AA") {
            sortSelect.value = "price-aa";
        } else if (predictedGrade === "A") {
            sortSelect.value = "price-a";
        } else {
            // Default sorting for other grades
            sortSelect.value = "open-status";
        }
        
        switchTab("prices");
        filterAndRenderLhongCards();
        
        // Scroll to container
        document.getElementById("lhong-cards-container").scrollIntoView({ behavior: 'smooth' });
    });
}

function startScanningSimulation(imgPath, grade, isUserUploaded = false) {
    const previewImg = document.getElementById("scanner-preview-img");
    const placeholder = document.getElementById("scanner-placeholder");
    const overlay = document.getElementById("scanner-overlay");
    const resultPanel = document.getElementById("scanner-result-panel");
    
    // Reset views
    resultPanel.classList.add("hidden");
    placeholder.classList.add("hidden");
    
    // Set image path and display
    previewImg.src = imgPath;
    previewImg.classList.remove("hidden");
    
    // Show scanning laser overlay
    overlay.classList.remove("hidden");
    
    // Simulate AI computing process with scanning line
    setTimeout(() => {
        overlay.classList.add("hidden");
        showScannerResults(grade, isUserUploaded);
    }, 2500);
}

function showScannerResults(grade, isUserUploaded = false) {
    const resultPanel = document.getElementById("scanner-result-panel");
    const gradeTitle = document.getElementById("result-grade-title");
    const metricSize = document.getElementById("metric-size");
    const metricSkin = document.getElementById("metric-skin");
    const metricFlesh = document.getElementById("metric-flesh");
    const estPriceEl = document.getElementById("result-est-price");
    
    // Get highest price for each grade in market currently
    const openLhongs = lhongs.filter(l => l.status === "open");
    let maxAA = 33.0, maxA = 25.0, maxB = 15.0, maxC = 6.0;
    
    if (openLhongs.length > 0) {
        maxAA = Math.max(...openLhongs.map(l => l.prices.AA));
        maxA = Math.max(...openLhongs.map(l => l.prices.A));
        maxB = Math.max(...openLhongs.map(l => l.prices.B));
        maxC = Math.max(...openLhongs.map(l => l.prices.C));
    }

    resultPanel.classList.remove("hidden");
    
    const userLabel = isUserUploaded ? " (ภาพของคุณ)" : "";
    const badgeText = isUserUploaded ? "วิเคราะห์รูปภาพของคุณเสร็จสมบูรณ์" : "ผลลัพธ์การคัดเกรดโดย AI";
    document.querySelector(".result-badge").textContent = badgeText;
    
    if (grade === "aa") {
        gradeTitle.textContent = "เกรดแนะนำ: AA" + userLabel;
        metricSize.textContent = "2.92 ซม.";
        metricSkin.textContent = "96% (ผลตึงสวย)";
        metricFlesh.textContent = "79% (เนื้อหนามาก)";
        estPriceEl.textContent = `${(maxAA - 1.5).toFixed(1)} - ${maxAA.toFixed(1)}`;
    } else if (grade === "a") {
        gradeTitle.textContent = "เกรดแนะนำ: A" + userLabel;
        metricSize.textContent = "2.65 ซม.";
        metricSkin.textContent = "90% (สม่ำเสมอ)";
        metricFlesh.textContent = "74% (เนื้อปานกลาง)";
        estPriceEl.textContent = `${(maxA - 1.5).toFixed(1)} - ${maxA.toFixed(1)}`;
    } else if (grade === "b") {
        gradeTitle.textContent = "เกรดแนะนำ: B" + userLabel;
        metricSize.textContent = "2.35 ซม.";
        metricSkin.textContent = "81% (มีตำหนิเล็กน้อย)";
        metricFlesh.textContent = "69% (เนื้อค่อนข้างบาง)";
        estPriceEl.textContent = `${(maxB - 1.0).toFixed(1)} - ${maxB.toFixed(1)}`;
    } else if (grade === "c") {
        gradeTitle.textContent = "เกรดแนะนำ: C" + userLabel;
        metricSize.textContent = "2.05 ซม.";
        metricSkin.textContent = "63% (ผิวคล้ำ/แตกกระจัดกระจาย)";
        metricFlesh.textContent = "58% (ผลลีบเนื้อบาง)";
        estPriceEl.textContent = `${(maxC - 1.0).toFixed(1)} - ${maxC.toFixed(1)}`;
    }
    
    // Smooth scroll down to result card
    resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================================
// AI FORECAST LOGIC (CHART.JS)
// ============================================================================
function initForecastTab() {
    const forecastBtns = document.querySelectorAll(".grade-toggle-btn");
    
    forecastBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            forecastBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            currentForecastGrade = btn.getAttribute("data-forecast-grade");
            renderForecastChart();
        });
    });
}

// Helper to generate dates (Thai short format)
function getDatesArray(daysAgo, daysAhead) {
    const dates = [];
    const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    
    for (let i = -daysAgo; i <= daysAhead; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        dates.push(`${d.getDate()} ${months[d.getMonth()]}`);
    }
    return dates;
}

// Generate base price lines based on grade (simulated historical + forecast)
function generateSimulatedData(grade) {
    let basePrice = 30.0;
    
    if (grade === "AA") basePrice = 32.5;
    else if (grade === "A") basePrice = 24.0;
    else if (grade === "B") basePrice = 14.0;
    else if (grade === "C") basePrice = 5.5;

    // Build 30 days historical (slightly fluctuating with a general upward trend recently)
    const history = [];
    for (let i = 0; i < 30; i++) {
        const noise = Math.sin(i / 3) * 1.5 + (Math.random() - 0.5) * 0.8;
        history.push(parseFloat((basePrice - 2.5 + (i * 0.08) + noise).toFixed(1)));
    }
    
    // Last history point is the current price
    const currentPrice = history[history.length - 1];
    
    // Build 7 days forecast (first 2 days steady, then drop/rise depending on supply simulation)
    const forecast = [currentPrice];
    let trendDirection = "stable"; // Default
    
    if (grade === "AA") {
        // AA will slightly drop on week 4 due to peak season harvesting
        forecast.push(parseFloat((currentPrice + 0.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.3).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.7).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 1.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 1.5).toFixed(1)));
        trendDirection = "down";
    } else if (grade === "A") {
        // A will stay stable
        forecast.push(parseFloat((currentPrice + 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.2).toFixed(1)));
        trendDirection = "stable";
    } else if (grade === "B") {
        // B will rise slightly due to processing plant demand
        forecast.push(parseFloat((currentPrice + 0.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.5).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.7).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.9).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 1.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 1.5).toFixed(1)));
        trendDirection = "up";
    } else {
        // C drops due to low quality oversupply
        forecast.push(parseFloat((currentPrice - 0.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.4).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.5).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.8).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 1.0).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 1.2).toFixed(1)));
        trendDirection = "down";
    }

    return { history, forecast, trendDirection };
}

function renderForecastChart() {
    const canvas = document.getElementById("priceForecastChart");
    if (!canvas) return;

    // Destructure data
    const dataSet = generateSimulatedData(currentForecastGrade);
    
    // Labels array: last 7 days of history + 7 days forecast (14 labels)
    const allLabels = getDatesArray(7, 6); // 8 labels for history, 6 for forecast
    
    // Crop history data to last 8 days to fit chart beautifully on mobile
    const historySubset = dataSet.history.slice(-8);
    const forecastData = dataSet.forecast.slice(1); // 6 days ahead
    
    // Combine data for plotting:
    // Historical prices line: ends at current day
    const plotHistory = [...historySubset];
    for(let i=0; i<forecastData.length; i++) {
        plotHistory.push(null); // No history values in forecast region
    }
    
    // Forecast prices line: starts at current day (index 7)
    const plotForecast = [];
    for(let i=0; i<historySubset.length - 1; i++) {
        plotForecast.push(null);
    }
    plotForecast.push(historySubset[historySubset.length - 1]); // Anchor point (today)
    plotForecast.push(...forecastData);

    // Chart Theme Styles
    const isDark = currentTheme === "dark";
    const textThemeColor = isDark ? "#adb5bd" : "#495057";
    const gridThemeColor = isDark ? "#2d3545" : "#dee2e6";

    // Update title label text
    document.getElementById("chart-title").textContent = `แนวโน้มราคาเกรด ${currentForecastGrade} (ย้อนหลัง 7 วัน & พยากรณ์ล่วงหน้า 6 วัน)`;

    // Destroy old chart if exists
    if (priceChart) {
        priceChart.destroy();
    }

    // Build Chart.js Object
    priceChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: allLabels,
            datasets: [
                {
                    label: 'ราคารับซื้อจริง',
                    data: plotHistory,
                    borderColor: 'var(--accent-color)',
                    borderWidth: 3,
                    backgroundColor: 'rgba(245, 159, 0, 0.1)',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: 'var(--accent-color)'
                },
                {
                    label: 'พยากรณ์ราคา AI',
                    data: plotForecast,
                    borderColor: '#9e9e9e',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#9e9e9e'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: textThemeColor,
                        font: { family: 'Prompt', size: 10 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ราคา: ${context.raw} บาท/กก.`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: { color: gridThemeColor },
                    ticks: {
                        color: textThemeColor,
                        font: { family: 'Prompt', size: 10 }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: textThemeColor,
                        font: { family: 'Prompt', size: 9 }
                    }
                }
            }
        }
    });

    // Populate recommendation text and forecast table
    updateForecastMetadata();
}

function updateChartTheme() {
    if (!priceChart) return;
    const isDark = currentTheme === "dark";
    const textThemeColor = isDark ? "#adb5bd" : "#495057";
    const gridThemeColor = isDark ? "#2d3545" : "#dee2e6";
    
    priceChart.options.plugins.legend.labels.color = textThemeColor;
    priceChart.options.scales.y.grid.color = gridThemeColor;
    priceChart.options.scales.y.ticks.color = textThemeColor;
    priceChart.options.scales.x.ticks.color = textThemeColor;
    priceChart.update();
}

function updateForecastMetadata() {
    const recText = document.getElementById("forecast-recommendation");
    const tableBody = document.getElementById("forecast-table-body");
    
    tableBody.innerHTML = "";
    
    // Generate simulated forecast for all grades
    const aaData = generateSimulatedData("AA");
    const aData = generateSimulatedData("A");
    const bData = generateSimulatedData("B");
    const cData = generateSimulatedData("C");
    
    const dates = getDatesArray(0, 6); // Today and 6 days ahead (7 days total)
    
    // Update recommendation card text based on active grade forecast
    if (currentForecastGrade === "AA") {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด AA:</strong> แนวโน้มราคากำลังมีทิศทาง **ลดลงเล็กน้อย (~1-2 บ.)** ในอีก 3-4 วันข้างหน้า เนื่องจากปริมาณผลผลิตในอำเภอสันป่าตองเริ่มออกสู่ตลาดหนาแน่นขึ้นในสัปดาห์นี้ <span style="color:var(--accent-color)">แนะนำให้เร่งเด็ดและเก็บขายภายใน 1-2 วันนี้</span> เพื่อให้ได้ราคากลางสูงสุด (32-33 บาท) ก่อนที่ราคาจะอ่อนตัวลง`;
    } else if (currentForecastGrade === "A") {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด A:</strong> ราคาระดับเกรด A มีความมั่นคงสูง คาดว่าราคาจะแกว่งตัวในกรอบแคบ **24.0 - 24.5 บาท** ตลอดทั้งสัปดาห์ ท่านสามารถทยอยเก็บเกี่ยวได้ตามแผนปกติโดยไม่ต้องเร่งรีบเนื่องจากความต้องการตลาดยังสมดุลดี`;
    } else if (currentForecastGrade === "B") {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด B:</strong> คาดการณ์ราคาเกรด B **กำลังขยับตัวสูงขึ้น (+1.0 บ.)** ในช่วงปลายสัปดาห์นี้ เนื่องจากโรงงานแปรรูป (ลำไยอบแห้งสีทอง) เพิ่มโควตาการรับซื้อจำนวนมาก หากผลผลิตของท่านเป็นเกรด B <span style="color:var(--green-color)">แนะนำให้ชะลอการเก็บเกี่ยวไปอีก 3 วัน</span> เพื่อรอขายในราคาที่ดีขึ้น`;
    } else {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด C:</strong> ราคาเกรด C มีแนวโน้ม **ปรับตัวลดลงเรื่อยๆ** เนื่องจากมีสัดส่วนลำไยร่วงเข้าสู่ตลาดมากเกินโควตาโรงงาน แนะนำให้รีบเก็บขายทันทีเมื่อผลสุกเพื่อป้องกันความเสี่ยงด้านราคาดิ่งตัว`;
    }

    // Build the forecast table rows
    for (let i = 0; i < 7; i++) {
        const dateLabel = i === 0 ? "วันนี้ (ปัจจุบัน)" : dates[i];
        const aaVal = aaData.forecast[i];
        const aVal = aData.forecast[i];
        const bVal = bData.forecast[i];
        const cVal = cData.forecast[i];
        
        // Determine trend label and icon based on price change relative to current price
        let trendHtml = "";
        const diff = aaData.forecast[i] - aaData.forecast[0];
        
        if (diff > 0.1) {
            trendHtml = `<span style="color:var(--green-color)">▲ ขยับขึ้น</span>`;
        } else if (diff < -0.1) {
            trendHtml = `<span style="color:var(--red-color)">▼ ปรับลง</span>`;
        } else {
            trendHtml = `<span style="color:var(--text-secondary)">▬ คงที่</span>`;
        }
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${dateLabel}</td>
            <td style="color:var(--accent-color)">${aaVal.toFixed(1)}</td>
            <td>${aVal.toFixed(1)}</td>
            <td>${bVal.toFixed(1)}</td>
            <td>${cVal.toFixed(1)}</td>
            <td>${trendHtml}</td>
        `;
        tableBody.appendChild(row);
    }
}

// ============================================================================
// LHONG PORTAL TAB LOGIC
// ============================================================================
function initLhongPortalTab() {
    const select = document.getElementById("login-lhong-select");
    
    // Populate login options dropdown
    lhongs.forEach(lhong => {
        const opt = document.createElement("option");
        opt.value = lhong.id;
        opt.textContent = lhong.name;
        select.appendChild(opt);
    });

    // Handle Login Submit
    document.getElementById("btn-login-submit").addEventListener("click", () => {
        const lhongId = select.value;
        const pin = document.getElementById("login-pin").value;
        
        if (!lhongId) {
            showToast("กรุณาเลือกจุดรับซื้อ");
            return;
        }
        
        // Find Lhong
        const lhong = lhongs.find(l => l.id === lhongId);
        
        // Check PIN (Default simulated PIN is 1234)
        if (pin === lhong.pin) {
            loggedInLhong = lhong;
            showToast(`ยินดีต้อนรับ เข้าสู่แผงจัดการล้ง`);
            renderLhongManagementForm();
        } else {
            showToast("รหัส PIN ไม่ถูกต้อง กรุณาลองอีกครั้ง");
        }
    });

    // Handle Logout
    document.getElementById("btn-lhong-logout").addEventListener("click", () => {
        loggedInLhong = null;
        document.getElementById("login-pin").value = "";
        document.getElementById("lhong-auth-card").classList.remove("hidden");
        document.getElementById("lhong-manage-card").classList.add("hidden");
        showToast("ออกจากระบบแล้ว");
    });

    // Handle Save Changes
    document.getElementById("btn-save-lhong-changes").addEventListener("click", saveLhongControlChanges);

    // Setup Status selection togglers
    const statusBtns = document.querySelectorAll(".status-btn");
    statusBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            statusBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

function renderLhongManagementForm() {
    const authCard = document.getElementById("lhong-auth-card");
    const manageCard = document.getElementById("lhong-manage-card");
    
    authCard.classList.add("hidden");
    manageCard.classList.remove("hidden");
    
    // Set text details
    document.getElementById("manage-lhong-name").textContent = loggedInLhong.name;
    document.getElementById("manage-lhong-village").textContent = loggedInLhong.village;
    
    // Set input values
    document.getElementById("price-input-aa").value = loggedInLhong.prices.AA;
    document.getElementById("price-input-a").value = loggedInLhong.prices.A;
    document.getElementById("price-input-b").value = loggedInLhong.prices.B;
    document.getElementById("price-input-c").value = loggedInLhong.prices.C;
    document.getElementById("lhong-promo-input").value = loggedInLhong.promo;
    
    // Set status toggle button state
    const statusBtns = document.querySelectorAll(".status-btn");
    statusBtns.forEach(btn => {
        if (btn.getAttribute("data-status") === loggedInLhong.status) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function saveLhongControlChanges() {
    if (!loggedInLhong) return;
    
    // Read input values
    const aaPrice = parseFloat(document.getElementById("price-input-aa").value);
    const aPrice = parseFloat(document.getElementById("price-input-a").value);
    const bPrice = parseFloat(document.getElementById("price-input-b").value);
    const cPrice = parseFloat(document.getElementById("price-input-c").value);
    const promoText = document.getElementById("lhong-promo-input").value;
    
    // Read status from active toggle button
    const activeStatusBtn = document.querySelector(".status-btn.active");
    const status = activeStatusBtn ? activeStatusBtn.getAttribute("data-status") : "open";
    
    // Validation
    if (isNaN(aaPrice) || isNaN(aPrice) || isNaN(bPrice) || isNaN(cPrice)) {
        showToast("กรุณากรอกราคาให้ครบถ้วนและถูกต้อง");
        return;
    }

    // Update in Mock database state
    loggedInLhong.prices.AA = aaPrice;
    loggedInLhong.prices.A = aPrice;
    loggedInLhong.prices.B = bPrice;
    loggedInLhong.prices.C = cPrice;
    loggedInLhong.status = status;
    loggedInLhong.promo = promoText.trim();
    
    // Recalculate average price boards and rebuild price cards list
    renderPricesData();
    updateBroadcastBanner();
    
    // If map is initialized, update pins
    if (map) {
        updateMapMarkers();
    }
    
    showToast("บันทึกข้อมูลและอัปเดตระบบเรียลไทม์แล้ว");
    
    // Keep user logged in but visual confirmation
    renderLhongManagementForm();
}
