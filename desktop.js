// ============================================================================
// MOCK DATABASE & CONSTANTS (DESKTOP VERSION)
// ============================================================================

const GRADE_REASON_VARIATIONS = {
    aa: [
        {
            size: "2.92 ซม.",
            skin: "96% (ผลตึงสวย)",
            flesh: "79% (เนื้อหนามาก)",
            explanation: `ลำไยล็อตนี้มี <span class="ok-success">ผลขนาดใหญ่เฉลี่ย 2.92 ซม.</span> ซึ่งจัดว่าได้มาตรฐานเกรดพรีเมียม (AA) ผลกลมโตสม่ำเสมอดีมาก เปลือกมีสีทองนวลสะดุดตา <span class="ok-success">ไม่มีจุดตำหนิหรือรอยโรคใดๆ บนผิว</span> (พบน้อยกว่า 2%) ผิวตึงสวยไม่ช้ำ อัตราเนื้อหนาแน่นสูงถึง 79% เหมาะสำหรับส่งออกหรือขายให้ได้ราคาแพงที่สุดครับ`
        },
        {
            size: "2.94 ซม.",
            skin: "97% (เปลือกสะอาดทองนวล)",
            flesh: "80% (เนื้อแน่นแห้งกรอบ)",
            explanation: `วิเคราะห์พบ <span class="ok-success">ขนาดผลเฉลี่ยใหญ่พิเศษ 2.94 ซม.</span> ผ่านเกณฑ์เกรดสูงสุด (AA) อย่างยอดเยี่ยม โครงสร้างเปลือกมีความแข็งแรง <span class="ok-success">ไร้รอยช้ำและไม่มีอาการผลแตกช้ำ</span> สภาพผิวเปลือกสะอาดหมดจด อัตราเนื้อหนาเต่งตึง เหมาะสำหรับบรรจุตู้คอนเทนเนอร์ส่งออกทางไกลครับ`
        },
        {
            size: "2.90 ซม.",
            skin: "95% (ผิวตึง ไร้ตำหนิ)",
            flesh: "78% (เนื้อสีขาวใสหนาแน่น)",
            explanation: `ผลมี <span class="ok-success">ขนาดสม่ำเสมอดีมากเฉลี่ย 2.90 ซม.</span> จัดอยู่ในกลุ่มเกรด AA เปลือกสีสว่างสวยนวล <span class="ok-success">ไม่พบอาการผิวลายมังกรหรือจุดช้ำเสียหายบนผิวเปลือก</span> (พบจุดตำหนิจุดจิ๋วไม่เกิน 3% ของผิว) เปอร์เซ็นต์เนื้อสูงและรสหวานจัด คัดส่งตู้ผลไม้สดเกรดสูงสุดได้ทันทีครับ`
        }
    ],
    a: [
        {
            size: "2.65 ซม.",
            skin: "90% (สม่ำเสมอ)",
            flesh: "74% (เนื้อปานกลาง)",
            explanation: `ลำไยล็อตนี้มี <span class="ok-success">ผลขนาดมาตรฐาน 2.65 ซม.</span> ซึ่งตรงตามเกณฑ์ของเกรด A ผลมีความกลมและขนาดสมดุลกันเป็นส่วนใหญ่ <span class="ok-success">ผิวเปลือกมีความสม่ำเสมอดี</span> แต่อาจพบ <span class="defect-warning">รอยด่างหรือจุดกระสีน้ำตาลเล็กน้อยประมาณ 5-10% ของผลทั้งหมด</span> ซึ่งไม่ส่งผลเสียต่อคุณภาพเนื้อลำไยด้านใน โดยรวมจัดเป็นผลผลิตคุณภาพดีตามมาตรฐานตลาดครับ`
        },
        {
            size: "2.70 ซม.",
            skin: "89% (พบจุดด่างประปราย)",
            flesh: "75% (เนื้อสัมผัสดีฉ่ำน้ำ)",
            explanation: `ตรวจวัด <span class="ok-success">ขนาดผลลำไยเฉลี่ยได้ 2.70 ซม.</span> ผ่านมาตรฐานเข้าสู่เกรด A ได้สมบูรณ์ คุณภาพเปลือกมีความเหนียวแข็งแรงดี <span class="defect-warning">พบรอยกระจุดสีเข้มกระจายตัวบางๆ ราว 7% บนเปลือกนอก</span> แต่โครงสร้างเนื้อและรสชาติหวานฉ่ำยังอยู่ในเกณฑ์ดีเยี่ยม สามารถส่งล้งคัดขายเกรด A เพื่อตลาดสดในประเทศได้ครับ`
        },
        {
            size: "2.62 ซม.",
            skin: "91% (ผิวค่อนข้างเรียบ)",
            flesh: "73% (เนื้อหนาได้เกณฑ์)",
            explanation: `ผลมี <span class="ok-success">ขนาดเฉลี่ย 2.62 ซม.</span> อยู่ในขอบเขตมาตรฐานเกรด A ผิวส่วนใหญ่กลมและเรียบตึงดี <span class="defect-warning">มีรอยลายกิ่งไม้ข่วนจางๆ บนผิวเปลือกเล็กน้อย (ไม่เกิน 6%)</span> รสชาติดี มีปริมาณน้ำตาลสูง อัตราเนื้อหนาแน่นอยู่ในเกณฑ์มาตรฐานขายได้ราคากลางปกติครับ`
        }
    ],
    b: [
        {
            size: "2.35 ซม.",
            skin: "81% (มีตำหนิเล็กน้อย)",
            flesh: "69% (เนื้อค่อนข้างบาง)",
            explanation: `ลำไยล็อตนี้ได้เกรด B เนื่องจากมี <span class="defect-warning">ขนาดผลเฉลี่ยอยู่ที่ 2.35 ซม.</span> ซึ่งค่อนข้างเล็กคละกันและไม่ถึงเกณฑ์เกรด A ในด้านผิวพบ <span class="defect-alert">รอยลายกระ รอยช้ำ หรือจุดสีน้ำตาลเข้มประมาณ 15-20% บนผิวของผลผลิต</span> และพบผลลีบเปลือกหนาบางส่วน ส่งผลให้อัตราเนื้อผลเฉลี่ยค่อนข้างบางลงมาอยู่ที่ 69% แต่ยังสามารถส่งขายเข้าโรงงานแปรรูปหรือขายตลาดทั่วไปได้ครับ`
        },
        {
            size: "2.40 ซม.",
            skin: "78% (ผิวมีรอยช้ำและจุดลาย)",
            flesh: "68% (เนื้อปานกลางค่อนไปทางบาง)",
            explanation: `ผลผลิตเฉลี่ย <span class="defect-warning">ขนาดผลอยู่ที่ 2.40 ซม.</span> จัดอยู่ในเกณฑ์เกรด B ลักษณะทางกายภาพภายนอก <span class="defect-alert">พบผิวเปลือกเป็นลายและมีรอยด่างจุดดำสะสมปานกลาง (ร้อยละ 18 ของผิว)</span> บางผลเริ่มมีเปลือกนิ่มยุบตัวเนื่องจากผ่านการเก็บไว้นานเกินไป เปอร์เซ็นต์เนื้ออยู่ในระดับกลางๆ แนะนำให้นำส่งล้งเพื่อนำไปอบแห้งหรือทำลำไยกระป๋องครับ`
        },
        {
            size: "2.30 ซม.",
            skin: "83% (พบรอยโรคพืชเล็กน้อย)",
            flesh: "70% (เนื้อค่อนข้างเกาะแน่น)",
            explanation: `วิเคราะห์พบ <span class="defect-warning">ขนาดผลเฉลี่ยเล็ก 2.30 ซม.</span> ร่วงลงมาอยู่ระดับเกรด B มีผลคละขนาดปนกันเยอะ สภาพผิวเปลือก <span class="defect-alert">มีจุดดำสะสมและคราบรอยโรคพืชเล็กน้อยประมาณ 14% ของจำนวนผล</span> ผิวเปลือกบางส่วนดูหมองคล้ำ แต่เนื้อลำไยยังดีไม่เสีย รสชาติหวานปานกลาง เหมาะสำหรับแปรรูปเชิงอุตสาหกรรมครับ`
        }
    ],
    c: [
        {
            size: "2.05 ซม.",
            skin: "63% (ผิวคล้ำ/แตกกระจัดกระจาย)",
            flesh: "58% (ผลลีบเนื้อบาง)",
            explanation: `ลำไยล็อตนี้ถูกจัดอยู่ในเกรด C เนื่องจากมี <span class="defect-alert">ขนาดผลเล็กเฉลี่ยเพียง 2.05 ซม.</span> นอกจากนี้ยังพบ <span class="defect-alert">จุดตำหนิรุนแรง เช่น ผิวตกสะเก็ด ลายมังกรเข้ม หรือรอยแตกช้ำแตกกิ่งมากถึง 35-40% ของผิวผล</span> ซึ่งเป็นจุดตำหนิหลักที่ทำให้ล้งคัดตกเกรด อัตราส่วนเนื้อต่ำและมีผลร่วงปนมาค่อนข้างมาก แนะนำให้รีบขายเพื่อแปรรูปหรือทำลำไยอบแห้งครับ`
        },
        {
            size: "2.10 ซม.",
            skin: "60% (พบรอยลายมังกรหนาแน่น)",
            flesh: "55% (ผลเนื้อลีบแบน)",
            explanation: `ผลผลิตมี <span class="defect-alert">ขนาดเล็กเฉลี่ย 2.10 ซม.</span> จัดอยู่ในเกรดต่ำสุด (เกรด C) สภาพเปลือกเสียหายชัดเจน <span class="defect-alert">พบอาการผิวลายมังกรเป็นทางยาวและรอยแตกเปลือกปริถึง 42%</span> ทำให้เนื้อข้างในบางผลสัมผัสกับอากาศและดินจนมีสีคล้ำ สัดส่วนเนื้อค่อนข้างลีบแบนและมีปริมาณร่วงเยอะมาก ล้งจะรับซื้อเฉพาะการนำไปอบแห้งรมควันเท่านั้นครับ`
        },
        {
            size: "2.00 ซม.",
            skin: "65% (เปลือกสีดำช้ำเสียหาย)",
            flesh: "56% (อัตราเนื้อน้อยสุด)",
            explanation: `วิเคราะห์ภาพพบ <span class="defect-alert">ขนาดผลเล็กสุดขีดเฉลี่ย 2.00 ซม.</span> ได้เกรด C สภาพภายนอกผลลีบและแบนไม่สมบูรณ์ <span class="defect-alert">ผิวเปลือกมีสีดำหมองคล้ำและพบรอยเน่าช้ำ/ราดำกระจายเกือบครึ่งผล (45%)</span> มีผลแตกค้างจำนวนมาก ไม่สามารถเก็บค้างหรือบรรจุสดได้ แนะนำส่งขายโรงงานอบแห้งสีทองโดยด่วนเพื่อลดการสูญเสียครับ`
        }
    ]
};

const FARMER_COORDS = { lat: 18.6186, lng: 98.8893 };

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
let activeTab = "dashboard";
let currentTheme = "dark";
let map = null;
let mapMarkers = [];
let mapCircles = [];
let priceChart = null;
let currentForecastGrade = "AA";
let loggedInLhong = null;
let isLonganDetectedMode = true;

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
    initSecretToggle();
    
    // Initial Render of Price boards
    renderPricesData();
    updateBroadcastBanner();
    
    // Initialize map immediately since it is visible in default tab
    setTimeout(initLeafletMap, 200);
});

function initSecretToggle() {
    const globe = document.getElementById("secret-globe-toggle");
    if (globe) {
        globe.style.cursor = "default";
    }
}

function toggleSecretMode() {
    isLonganDetectedMode = !isLonganDetectedMode;
    const logoIcon = document.querySelector(".logo-icon");
    if (logoIcon) {
        if (isLonganDetectedMode) {
            logoIcon.style.transform = "none";
        } else {
            logoIcon.style.transform = "scaleX(-1)";
        }
    }
}

// ============================================================================
// TAB NAVIGATION
// ============================================================================
function initTabNavigation() {
    const menuItems = document.querySelectorAll(".sidebar-menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.getAttribute("data-tab");
            
            // Toggle secret mode on double click scanner
            if (targetTab === "scanner" && activeTab === "scanner") {
                toggleSecretMode();
            } else {
                switchTab(targetTab);
            }
        });
    });
}

function switchTab(tabId) {
    activeTab = tabId;
    
    // Update sidebar layout active menu items
    document.querySelectorAll(".sidebar-menu-item").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update main panels
    document.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.id === `tab-${tabId}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });

    // Sub-module activation callbacks
    if (tabId === "dashboard") {
        if (map) {
            setTimeout(() => { map.invalidateSize(); }, 100);
        } else {
            setTimeout(initLeafletMap, 100);
        }
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
        
        // Update Leaflet Tile styles
        if (map) {
            updateMapTileLayer();
        }
        
        // Update Chartjs colors
        if (priceChart) {
            updateChartTheme();
        }
    });
}

// ============================================================================
// BROADCASTS & TOAST NOTIFICATION
// ============================================================================
function updateBroadcastBanner() {
    const banner = document.getElementById("urgent-broadcast");
    const bannerText = document.getElementById("broadcast-text");
    
    const activePromos = lhongs.filter(l => l.status === "open" && l.promo.trim() !== "");
    
    if (activePromos.length > 0) {
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
// MATH & AGGREGATE UTILITIES
// ============================================================================
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
    document.getElementById("search-lhong").addEventListener("input", filterAndRenderLhongCards);
    document.getElementById("sort-select").addEventListener("change", filterAndRenderLhongCards);
}

function renderPricesData() {
    const avgs = calculateAveragePrices();
    
    // Update Average price labels on left sidebar quick stats widget
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
    
    let processed = lhongs.map(lhong => {
        return {
            ...lhong,
            distance: calculateDistance(FARMER_COORDS.lat, FARMER_COORDS.lng, lhong.lat, lhong.lng)
        };
    });
    
    let filtered = processed.filter(lhong => {
        return lhong.name.toLowerCase().includes(searchVal) || 
               lhong.village.toLowerCase().includes(searchVal);
    });
    
    const openLhongs = filtered.filter(l => l.status === "open");
    let maxAAPrice = 0;
    if (openLhongs.length > 0) {
        maxAAPrice = Math.max(...openLhongs.map(l => l.prices.AA));
    }

    filtered.sort((a, b) => {
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
        container.innerHTML = `<div style="text-align:center; padding: 40px 0; color: var(--text-secondary); font-size:13px;">ไม่พบจุดรับซื้อตามที่ค้นหา</div>`;
        return;
    }

    filtered.forEach(lhong => {
        const isBestDeal = lhong.status === "open" && lhong.prices.AA === maxAAPrice && maxAAPrice > 0;
        const card = document.createElement("div");
        card.id = `card-${lhong.id}`;
        card.className = `lhong-card ${lhong.status === "closed" ? "closed-lhong" : ""} ${isBestDeal ? "best-deal-border" : ""}`;
        
        const statusBadge = lhong.status === "open" 
            ? `<span class="badge badge-open">เปิดรับซื้อปกติ</span>` 
            : `<span class="badge badge-closed">ปิดทำการ</span>`;

        const prices = lhong.prices;
        
        card.innerHTML = `
            <div class="card-top">
                <div class="lhong-meta">
                    <h3>${lhong.name} ${isBestDeal ? '⭐' : ''}</h3>
                    <p>${lhong.village} • ห่างจากจุดอ้างอิง ~${lhong.distance} กม.</p>
                </div>
                ${statusBadge}
            </div>
            
            ${lhong.promo ? `<div style="color: var(--accent-color); font-size:12px; margin-top:-5px; font-weight:600;">📢 ${lhong.promo}</div>` : ''}
            
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
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:4px;">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    โทรติดต่อล้ง (${lhong.phone})
                </a>
                <button class="btn-nav-map" onclick="navigateLhongOnMap('${lhong.id}')">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:4px;">
                        <polygon points="3 6 3 22 9 18 15 22 21 18 21 2 15 6 9 2 3 6"></polygon>
                    </svg>
                    ดูพิกัด & นำทางบนแผนที่
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Center map on Lhong marker and open popup from cards click trigger
window.navigateLhongOnMap = function(lhongId) {
    const markerObj = mapMarkers.find(m => m.id === lhongId);
    if (markerObj && map) {
        map.setView(markerObj.marker.getLatLng(), 15.5);
        markerObj.marker.openPopup();
    }
};

// ============================================================================
// MAP TAB LOGIC (LEAFLET.JS)
// ============================================================================
function initLeafletMap() {
    if (map) {
        map.invalidateSize();
        return; 
    }

    const container = document.getElementById("map-container");
    if (!container) return;

    map = L.map("map-container", {
        zoomControl: true,
        attributionControl: false
    }).setView([FARMER_COORDS.lat, FARMER_COORDS.lng], 13.5);

    updateMapTileLayer();

    // Villages overlays
    villages.forEach((v, index) => {
        const circle = L.circle([v.lat, v.lng], {
            color: 'var(--accent-color)',
            fillColor: 'var(--accent-color)',
            fillOpacity: 0.03,
            radius: 400,
            weight: 1,
            dashArray: '5, 5'
        }).addTo(map);
        
        circle.bindTooltip(v.name, {
            permanent: true,
            direction: 'center',
            className: 'village-map-label'
        });
        
        mapCircles.push(circle);
    });

    // Center Farmer Location
    L.marker([FARMER_COORDS.lat, FARMER_COORDS.lng], {
        icon: L.divIcon({
            className: 'custom-farmer-pin',
            html: `<div style="background-color:#2f9e44; width:16px; height:16px; border-radius:50%; border:3px solid #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.5)"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        })
    }).addTo(map).bindPopup("📍 <strong>ตำแหน่งฟาร์มของคุณ</strong><br>ต.มะขามหลวง อ.สันป่าตอง");

    updateMapMarkers();
}

function updateMapTileLayer() {
    map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

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
    mapMarkers.forEach(m => map.removeLayer(m.marker));
    mapMarkers = [];

    const openLhongs = lhongs.filter(l => l.status === "open");
    let maxAAPrice = 0;
    if (openLhongs.length > 0) {
        maxAAPrice = Math.max(...openLhongs.map(l => l.prices.AA));
    }

    lhongs.forEach(lhong => {
        let pinColor = "var(--green-color)"; // Default Open
        
        if (lhong.status === "closed") {
            pinColor = "var(--red-color)";
        } else if (lhong.prices.AA === maxAAPrice && maxAAPrice > 0) {
            pinColor = "var(--accent-color)"; // Golden Best Price
        }

        const markerHtml = `
            <div style="
                background-color: ${pinColor};
                width: 24px; 
                height: 24px; 
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 2px solid #ffffff;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: -12px;
                margin-left: -12px;
            ">
                <div style="
                    background: #ffffff;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                "></div>
            </div>
        `;

        const customIcon = L.divIcon({
            className: "custom-lhong-pin",
            html: markerHtml,
            iconSize: [24, 24],
            iconAnchor: [12, 24],
            popupAnchor: [0, -24]
        });

        const popupHtml = `
            <div class="popup-lhong-title">
                <strong>${lhong.name}</strong>
                <span class="badge ${lhong.status === 'open' ? 'badge-open' : 'badge-closed'}" style="margin-left:8px; font-size:9px; padding: 2px 6px;">
                    ${lhong.status === 'open' ? 'เปิดรับซื้อ' : 'ปิดทำการ'}
                </span>
            </div>
            <p style="font-size:11px; color:var(--text-secondary)">${lhong.village}</p>
            ${lhong.status === 'open' ? `
                <div class="popup-price-list">
                    <div>เกรด AA: <span>${lhong.prices.AA.toFixed(1)}</span></div>
                    <div>เกรด A: <span>${lhong.prices.A.toFixed(1)}</span></div>
                    <div>เกรด B: <span>${lhong.prices.B.toFixed(1)}</span></div>
                    <div>เกรด C: <span>${lhong.prices.C.toFixed(1)}</span></div>
                </div>
            ` : `<p style="font-size:11px; color:var(--red-color); margin: 6px 0;">งดรับซื้อลำไยชั่วคราว</p>`}
            
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lhong.lat},${lhong.lng}" target="_blank" class="popup-btn-nav">
                🚗 นำทางผ่าน Google Maps
            </a>
        `;

        const marker = L.marker([lhong.lat, lhong.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(popupHtml);

        // Marker click triggers scrolling the sidebar card into view and highlights it
        marker.on('click', () => {
            const cardEl = document.getElementById(`card-${lhong.id}`);
            if (cardEl) {
                // Remove existing highlights
                document.querySelectorAll('.lhong-card').forEach(c => c.style.borderColor = '');
                // Highlight and scroll
                cardEl.style.borderColor = 'var(--accent-color)';
                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

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
            demoBtns.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            
            const imgPath = btn.getAttribute("data-img");
            const grade = btn.getAttribute("data-grade");
            
            startScanningSimulation(imgPath, grade);
        });
    });

    const cameraInput = document.getElementById("scanner-camera-input");
    const fileInput = document.getElementById("scanner-file-input");
    
    document.getElementById("btn-trigger-camera").addEventListener("click", () => {
        cameraInput.click();
    });
    
    document.getElementById("btn-trigger-gallery").addEventListener("click", () => {
        fileInput.click();
    });
    
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            demoBtns.forEach(b => b.classList.remove("selected"));
            
            const reader = new FileReader();
            reader.onload = function(e) {
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
        
        const sortSelect = document.getElementById("sort-select");
        if (predictedGrade === "AA") {
            sortSelect.value = "price-aa";
        } else if (predictedGrade === "A") {
            sortSelect.value = "price-a";
        } else {
            sortSelect.value = "open-status";
        }
        
        switchTab("dashboard");
        filterAndRenderLhongCards();
        
        document.getElementById("lhong-cards-container").scrollIntoView({ behavior: 'smooth' });
    });
}

function startScanningSimulation(imgPath, grade, isUserUploaded = false) {
    const previewImg = document.getElementById("scanner-preview-img");
    const placeholder = document.getElementById("scanner-placeholder");
    const overlay = document.getElementById("scanner-overlay");
    const resultPanel = document.getElementById("scanner-result-panel");
    const helpGuide = document.getElementById("scanner-help-guide");
    
    resultPanel.classList.add("hidden");
    placeholder.classList.add("hidden");
    if (helpGuide) helpGuide.classList.add("hidden");
    
    previewImg.src = imgPath;
    previewImg.classList.remove("hidden");
    overlay.classList.remove("hidden");
    
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
    const explanationText = document.getElementById("result-explanation-text");
    
    const resultMetrics = document.getElementById("result-metrics");
    const priceEstimateBox = document.getElementById("price-estimate-box");
    const resultActions = document.getElementById("result-actions");
    const resultBadge = document.querySelector(".result-badge");

    resultPanel.classList.remove("hidden");
    
    const userLabel = isUserUploaded ? " (ภาพของคุณ)" : "";

    if (!isLonganDetectedMode) {
        resultBadge.textContent = "การวิเคราะห์ผลผลิตล้มเหลว";
        gradeTitle.textContent = "❌ ไม่ตรวจพบลำไยในรูปภาพ";
        
        if (resultMetrics) resultMetrics.classList.add("hidden");
        if (priceEstimateBox) priceEstimateBox.classList.add("hidden");
        if (resultActions) resultActions.classList.add("hidden");
        
        explanationText.innerHTML = `คำแนะนำ: ระบบปัญญาประดิษฐ์ตรวจสอบไม่พบผลลำไยในรูปภาพที่ส่งเข้ามาวิเคราะห์ กรุณาตรวจสอบว่ารูปภาพของคุณเป็นผลลำไยจริงหรือไม่ และถ่ายภาพในที่ที่มีแสงสว่างเพียงพอ โดยถือกล้องระยะใกล้พอเหมาะและหลีกเลี่ยงไม่ให้มีใบไม้หรือวัตถุอื่นบดบังผลลำไย เพื่อให้ระบบสามารถสแกนคัดเกรดได้ครับ`;
    } else {
        if (resultMetrics) resultMetrics.classList.remove("hidden");
        if (priceEstimateBox) priceEstimateBox.classList.remove("hidden");
        if (resultActions) resultActions.classList.remove("hidden");

        const badgeText = isUserUploaded ? "วิเคราะห์รูปภาพของคุณเสร็จสมบูรณ์" : "ผลลัพธ์การคัดเกรดโดย AI";
        resultBadge.textContent = badgeText;
        
        const gradeKey = grade.toLowerCase();
        const variations = GRADE_REASON_VARIATIONS[gradeKey] || GRADE_REASON_VARIATIONS["a"];
        const randomIndex = Math.floor(Math.random() * variations.length);
        const selectedVar = variations[randomIndex];

        const openLhongs = lhongs.filter(l => l.status === "open");
        let maxAA = 33.0, maxA = 25.0, maxB = 15.0, maxC = 6.0;
        
        if (openLhongs.length > 0) {
            maxAA = Math.max(...openLhongs.map(l => l.prices.AA));
            maxA = Math.max(...openLhongs.map(l => l.prices.A));
            maxB = Math.max(...openLhongs.map(l => l.prices.B));
            maxC = Math.max(...openLhongs.map(l => l.prices.C));
        }

        gradeTitle.textContent = "เกรดแนะนำ: " + grade.toUpperCase() + userLabel;
        metricSize.textContent = selectedVar.size;
        metricSkin.textContent = selectedVar.skin;
        metricFlesh.textContent = selectedVar.flesh;
        explanationText.innerHTML = selectedVar.explanation;

        if (gradeKey === "aa") {
            estPriceEl.textContent = `${(maxAA - 1.5).toFixed(1)} - ${maxAA.toFixed(1)}`;
        } else if (gradeKey === "a") {
            estPriceEl.textContent = `${(maxA - 1.5).toFixed(1)} - ${maxA.toFixed(1)}`;
        } else if (gradeKey === "b") {
            estPriceEl.textContent = `${(maxB - 1.0).toFixed(1)} - ${maxB.toFixed(1)}`;
        } else if (gradeKey === "c") {
            estPriceEl.textContent = `${(maxC - 1.0).toFixed(1)} - ${maxC.toFixed(1)}`;
        }
    }
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

function generateSimulatedData(grade) {
    let basePrice = 30.0;
    
    if (grade === "AA") basePrice = 32.5;
    else if (grade === "A") basePrice = 24.0;
    else if (grade === "B") basePrice = 14.0;
    else if (grade === "C") basePrice = 5.5;

    const history = [];
    for (let i = 0; i < 30; i++) {
        const noise = Math.sin(i / 3) * 1.5 + (Math.random() - 0.5) * 0.8;
        history.push(parseFloat((basePrice - 2.5 + (i * 0.08) + noise).toFixed(1)));
    }
    
    const currentPrice = history[history.length - 1];
    const forecast = [currentPrice];
    let trendDirection = "stable";
    
    if (grade === "AA") {
        forecast.push(parseFloat((currentPrice + 0.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.3).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.7).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 1.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 1.5).toFixed(1)));
        trendDirection = "down";
    } else if (grade === "A") {
        forecast.push(parseFloat((currentPrice + 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice - 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.1).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.2).toFixed(1)));
        trendDirection = "stable";
    } else if (grade === "B") {
        forecast.push(parseFloat((currentPrice + 0.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.5).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.7).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 0.9).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 1.2).toFixed(1)));
        forecast.push(parseFloat((currentPrice + 1.5).toFixed(1)));
        trendDirection = "up";
    } else {
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

    const dataSet = generateSimulatedData(currentForecastGrade);
    
    // Desktop fits 14 days cleanly (8 days history + 6 days forecast)
    const allLabels = getDatesArray(7, 6);
    const historySubset = dataSet.history.slice(-8);
    const forecastData = dataSet.forecast.slice(1);
    
    const plotHistory = [...historySubset];
    for(let i=0; i<forecastData.length; i++) {
        plotHistory.push(null);
    }
    
    const plotForecast = [];
    for(let i=0; i<historySubset.length - 1; i++) {
        plotForecast.push(null);
    }
    plotForecast.push(historySubset[historySubset.length - 1]);
    plotForecast.push(...forecastData);

    const isDark = currentTheme === "dark";
    const textThemeColor = isDark ? "#adb5bd" : "#5a6578";
    const gridThemeColor = isDark ? "#2d3748" : "#dbe2eb";

    document.getElementById("chart-title").textContent = `แนวโน้มราคารับซื้อเกรด ${currentForecastGrade} (ย้อนหลัง 7 วัน & พยากรณ์ล่วงหน้า 6 วัน)`;

    if (priceChart) {
        priceChart.destroy();
    }

    priceChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: allLabels,
            datasets: [
                {
                    label: 'ราคารับซื้อจริง (Market Price)',
                    data: plotHistory,
                    borderColor: 'var(--accent-color)',
                    borderWidth: 3,
                    backgroundColor: 'rgba(245, 159, 0, 0.1)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 5,
                    pointBackgroundColor: 'var(--accent-color)'
                },
                {
                    label: 'ราคารับซื้อคาดการณ์ (AI Forecast)',
                    data: plotForecast,
                    borderColor: '#8e9aa8',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 5,
                    pointBackgroundColor: '#8e9aa8'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: textThemeColor,
                        font: { family: 'Prompt', size: 11, weight: '500' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ราคากลาง: ${context.raw} บาท/กก.`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: { color: gridThemeColor },
                    ticks: {
                        color: textThemeColor,
                        font: { family: 'Prompt', size: 11 }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: textThemeColor,
                        font: { family: 'Prompt', size: 11 }
                    }
                }
            }
        }
    });

    updateForecastMetadata();
}

function updateChartTheme() {
    if (!priceChart) return;
    const isDark = currentTheme === "dark";
    const textThemeColor = isDark ? "#adb5bd" : "#5a6578";
    const gridThemeColor = isDark ? "#2d3748" : "#dbe2eb";
    
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
    
    const aaData = generateSimulatedData("AA");
    const aData = generateSimulatedData("A");
    const bData = generateSimulatedData("B");
    const cData = generateSimulatedData("C");
    
    const dates = getDatesArray(0, 6);
    
    if (currentForecastGrade === "AA") {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด AA:</strong> แนวโน้มราคากำลังมีทิศทาง **ลดลงเล็กน้อย (~1-2 บ.)** ในอีก 3-4 วันข้างหน้า เนื่องจากปริมาณผลผลิตในอำเภอสันป่าตองเริ่มออกสู่ตลาดหนาแน่นขึ้นในสัปดาห์นี้ <span style="color:var(--accent-color)">แนะนำให้เร่งเด็ดและเก็บขายภายใน 1-2 วันนี้</span> เพื่อให้ได้ราคากลางสูงสุด (32-33 บาท) ก่อนที่ราคาจะอ่อนตัวลง`;
    } else if (currentForecastGrade === "A") {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด A:</strong> ราคาระดับเกรด A มีความมั่นคงสูง คาดว่าราคาจะแกว่งตัวในกรอบแคบ **24.0 - 24.5 บาท** ตลอดทั้งสัปดาห์ ท่านสามารถทยอยเก็บเกี่ยวได้ตามแผนปกติโดยไม่ต้องเร่งรีบเนื่องจากความต้องการตลาดยังสมดุลดี`;
    } else if (currentForecastGrade === "B") {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด B:</strong> คาดการณ์ราคาเกรด B **กำลังขยับตัวสูงขึ้น (+1.0 บ.)** ในช่วงปลายสัปดาห์นี้ เนื่องจากโรงงานแปรรูป (ลำไยอบแห้งสีทอง) เพิ่มโควตาการรับซื้อจำนวนมาก หากผลผลิตของท่านเป็นเกรด B <span style="color:var(--green-color)">แนะนำให้ชะลอการเก็บเกี่ยวไปอีก 3 วัน</span> เพื่อรอขายในราคาที่ดีขึ้น`;
    } else {
        recText.innerHTML = `<strong>แนะนำสำหรับเกรด C:</strong> ราคาเกรด C มีแนวโน้ม **ปรับตัวลดลงเรื่อยๆ** เนื่องจากมีสัดส่วนลำไยร่วงเข้าสู่ตลาดมากเกินโควตาโรงงาน แนะนำให้รีบเก็บขายทันทีเมื่อผลสุกเพื่อป้องกันความเสี่ยงด้านราคาดิ่งตัว`;
    }

    for (let i = 0; i < 7; i++) {
        const dateLabel = i === 0 ? "วันนี้ (ปัจจุบัน)" : dates[i];
        const aaVal = aaData.forecast[i];
        const aVal = aData.forecast[i];
        const bVal = bData.forecast[i];
        const cVal = cData.forecast[i];
        
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
            <td style="color:var(--accent-color); font-weight:700;">${aaVal.toFixed(1)}</td>
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
    
    lhongs.forEach(lhong => {
        const opt = document.createElement("option");
        opt.value = lhong.id;
        opt.textContent = lhong.name;
        select.appendChild(opt);
    });

    document.getElementById("btn-login-submit").addEventListener("click", () => {
        const lhongId = select.value;
        const pin = document.getElementById("login-pin").value;
        
        if (!lhongId) {
            showToast("กรุณาเลือกจุดรับซื้อ");
            return;
        }
        
        const lhong = lhongs.find(l => l.id === lhongId);
        
        if (pin === lhong.pin) {
            loggedInLhong = lhong;
            showToast(`ยินดีต้อนรับ เข้าสู่แผงจัดการล้ง`);
            renderLhongManagementForm();
        } else {
            showToast("รหัส PIN ไม่ถูกต้อง กรุณาลองอีกครั้ง");
        }
    });

    document.getElementById("btn-lhong-logout").addEventListener("click", () => {
        loggedInLhong = null;
        document.getElementById("login-pin").value = "";
        document.getElementById("lhong-auth-card").classList.remove("hidden");
        const placeholderEl = document.getElementById("lhong-portal-placeholder");
        if (placeholderEl) placeholderEl.classList.remove("hidden");
        document.getElementById("lhong-manage-card").classList.add("hidden");
        showToast("ออกจากระบบแล้ว");
    });

    document.getElementById("btn-save-lhong-changes").addEventListener("click", saveLhongControlChanges);

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
    const placeholderEl = document.getElementById("lhong-portal-placeholder");
    
    authCard.classList.add("hidden");
    if (placeholderEl) placeholderEl.classList.add("hidden");
    manageCard.classList.remove("hidden");
    
    document.getElementById("manage-lhong-name").textContent = loggedInLhong.name;
    document.getElementById("manage-lhong-village").textContent = loggedInLhong.village;
    
    document.getElementById("price-input-aa").value = loggedInLhong.prices.AA;
    document.getElementById("price-input-a").value = loggedInLhong.prices.A;
    document.getElementById("price-input-b").value = loggedInLhong.prices.B;
    document.getElementById("price-input-c").value = loggedInLhong.prices.C;
    document.getElementById("lhong-promo-input").value = loggedInLhong.promo;
    
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
    
    const aaPrice = parseFloat(document.getElementById("price-input-aa").value);
    const aPrice = parseFloat(document.getElementById("price-input-a").value);
    const bPrice = parseFloat(document.getElementById("price-input-b").value);
    const cPrice = parseFloat(document.getElementById("price-input-c").value);
    const promoText = document.getElementById("lhong-promo-input").value;
    
    const activeStatusBtn = document.querySelector(".status-btn.active");
    const status = activeStatusBtn ? activeStatusBtn.getAttribute("data-status") : "open";
    
    if (isNaN(aaPrice) || isNaN(aPrice) || isNaN(bPrice) || isNaN(cPrice)) {
        showToast("กรุณากรอกราคาให้ครบถ้วนและถูกต้อง");
        return;
    }

    loggedInLhong.prices.AA = aaPrice;
    loggedInLhong.prices.A = aPrice;
    loggedInLhong.prices.B = bPrice;
    loggedInLhong.prices.C = cPrice;
    loggedInLhong.status = status;
    loggedInLhong.promo = promoText.trim();
    
    renderPricesData();
    updateBroadcastBanner();
    
    if (map) {
        updateMapMarkers();
    }
    
    showToast("บันทึกข้อมูลและอัปเดตระบบเรียลไทม์แล้ว");
    renderLhongManagementForm();
}
