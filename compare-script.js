// Dữ liệu với cấu trúc mới: GDP, DV Kinh doanh, DV Tiêu dùng, DV Công
const serviceScores = {
    vn: { 
        iso: "vn", name: "Việt Nam", score: 8, intro: "Dịch vụ tiêu dùng mạnh, kinh doanh tăng nhanh.",
        details: [ {l:"Tỉ trọng GDP", v:"41.3%", s:"strong"}, {l:"1. DV Kinh doanh", v:"30% (Tài chính, BĐS)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"45% (Du lịch, Bán lẻ)", s:"strong"}, {l:"3. DV Công", v:"25% (Y tế, GD)", s:"normal"} ]
    },
    la: { 
        iso: "la", name: "Lào", score: 4, intro: "Dịch vụ công chiếm tỷ trọng lớn.",
        details: [ {l:"Tỉ trọng GDP", v:"35.5%", s:"normal"}, {l:"1. DV Kinh doanh", v:"15% (Mới phát triển)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"50% (Sinh thái)", s:"strong"}, {l:"3. DV Công", v:"35% (Hành chính)", s:"normal"} ]
    },
    kh: { 
        iso: "kh", name: "Campuchia", score: 5, intro: "Phụ thuộc vào Du lịch khách sạn.",
        details: [ {l:"Tỉ trọng GDP", v:"40.5%", s:"normal"}, {l:"1. DV Kinh doanh", v:"20% (Bất động sản)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"60% (Du lịch là trụ cột)", s:"strong"}, {l:"3. DV Công", v:"20% (Cơ bản)", s:"normal"} ]
    },
    th: { 
        iso: "th", name: "Thái Lan", score: 9, intro: "Mạnh vượt trội về Du lịch & Y tế.",
        details: [ {l:"Tỉ trọng GDP", v:"53.8%", s:"strong"}, {l:"1. DV Kinh doanh", v:"30% (Logistic)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"50% (Du lịch, Y tế)", s:"strong"}, {l:"3. DV Công", v:"20% (Phúc lợi tốt)", s:"normal"} ]
    },
    mm: { 
        iso: "mm", name: "Myanmar", score: 3, intro: "Dịch vụ công và tiêu dùng truyền thống.",
        details: [ {l:"Tỉ trọng GDP", v:"37.0%", s:"normal"}, {l:"1. DV Kinh doanh", v:"15% (Đang mở cửa)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"50% (Thương mại nhỏ)", s:"strong"}, {l:"3. DV Công", v:"35% (Quản lý)", s:"normal"} ]
    },
    my: { 
        iso: "my", name: "Malaysia", score: 8, intro: "Tài chính Hồi giáo phát triển mạnh.",
        details: [ {l:"Tỉ trọng GDP", v:"57.7%", s:"strong"}, {l:"1. DV Kinh doanh", v:"40% (Tài chính, ICT)", s:"strong"}, {l:"2. DV Tiêu dùng", v:"40% (Du lịch)", s:"strong"}, {l:"3. DV Công", v:"20% (Giáo dục)", s:"normal"} ]
    },
    sg: { 
        iso: "sg", name: "Singapore", score: 10, intro: "Dịch vụ Kinh doanh áp đảo.",
        details: [ {l:"Tỉ trọng GDP", v:"70%+", s:"strong"}, {l:"1. DV Kinh doanh", v:"65% (Tài chính, Hub)", s:"strong"}, {l:"2. DV Tiêu dùng", v:"20% (Cao cấp)", s:"normal"}, {l:"3. DV Công", v:"15% (Chính phủ số)", s:"normal"} ]
    },
    id: { 
        iso: "id", name: "Indonesia", score: 7, intro: "Tiêu dùng nội địa khổng lồ.",
        details: [ {l:"Tỉ trọng GDP", v:"43.5%", s:"normal"}, {l:"1. DV Kinh doanh", v:"25% (Startups)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"55% (Nội địa)", s:"strong"}, {l:"3. DV Công", v:"20% (Hạ tầng)", s:"normal"} ]
    },
    ph: { 
        iso: "ph", name: "Philippines", score: 6, intro: "Động lực chính là BPO (Thuê ngoài).",
        details: [ {l:"Tỉ trọng GDP", v:"59.1%", s:"strong"}, {l:"1. DV Kinh doanh", v:"50% (BPO)", s:"strong"}, {l:"2. DV Tiêu dùng", v:"35% (Bán lẻ)", s:"normal"}, {l:"3. DV Công", v:"15% (Cơ bản)", s:"normal"} ]
    },
    bn: { 
        iso: "bn", name: "Brunei", score: 5, intro: "Dịch vụ Công và Dầu khí.",
        details: [ {l:"Tỉ trọng GDP", v:"48.0%", s:"normal"}, {l:"1. DV Kinh doanh", v:"30% (Dầu khí)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"20% (Nhỏ lẻ)", s:"normal"}, {l:"3. DV Công", v:"50% (Phúc lợi cao)", s:"strong"} ]
    },
    tl: { 
        iso: "tl", name: "Đông Timor", score: 3, intro: "Phụ thuộc vào Dịch vụ Công.",
        details: [ {l:"Tỉ trọng GDP", v:"42.0%", s:"normal"}, {l:"1. DV Kinh doanh", v:"10% (Rất nhỏ)", s:"normal"}, {l:"2. DV Tiêu dùng", v:"30% (Chợ)", s:"normal"}, {l:"3. DV Công", v:"60% (Chính phủ)", s:"strong"} ]
    }
};

const countryFlagsContainer = document.getElementById('countryFlags');
const scaleBeam = document.getElementById('scaleBeam');
const comparisonInfo = document.getElementById('comparisonInfo');
const comparisonDetails = document.getElementById('comparisonDetails');
const leftDetailsDiv = document.getElementById('leftDetails');
const rightDetailsDiv = document.getElementById('rightDetails');
let currentLeftCountry = null, currentRightCountry = null;

function getFlagURL(iso) { return `https://flagcdn.com/w80/${iso}.png`; }

function renderDetailsTable(code, div) {
    if(!code) { div.innerHTML = ''; return; }
    const d = serviceScores[code];
    let barClass = d.score >= 8 ? 'high' : d.score >= 5 ? 'med' : 'low';
    let html = `<div style="text-align:center; margin-bottom:10px;"><img src="${getFlagURL(d.iso)}" class="flag-img" style="width:50px;"><h3 style="margin:5px 0; color:#0277bd;">${d.name}</h3><div style="font-size:0.9rem; font-weight:bold;">Điểm: ${d.score}/10<div class="score-container"><div class="score-bar ${barClass}" style="width:${d.score*10}%"></div></div></div></div><table class="comparison-table">`;
    d.details.forEach(i => html += `<tr><td>${i.l}</td><td class="${i.s === 'strong' ? 'strong' : ''}">${i.v}</td></tr>`);
    html += `</table>`;
    div.innerHTML = html;
}

function initFlags() {
    countryFlagsContainer.innerHTML = '';
    for(const code in serviceScores) {
        const d = serviceScores[code];
        const div = document.createElement('div');
        div.className = 'flag-draggable';
        div.setAttribute('draggable', 'true');
        div.dataset.countryCode = code;
        div.innerHTML = `<img src="${getFlagURL(d.iso)}" alt="${d.name}">`;
        div.ondragstart = drag;
        countryFlagsContainer.appendChild(div);
    }
}

function drag(ev) { ev.dataTransfer.setData("text", ev.target.closest('.flag-draggable').dataset.countryCode); }
function allowDrop(ev) { ev.preventDefault(); const t = ev.target.closest('.scale-pan'); if(t) t.classList.add('drag-over'); }
function dragLeave(ev) { const t = ev.target.closest('.scale-pan'); if(t) t.classList.remove('drag-over'); }

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const source = document.querySelector(`.country-flags .flag-draggable[data-country-code="${data}"]`);
    if (!source) return;
    
    const target = ev.target.closest('.scale-pan');
    if (!target) return;
    target.classList.remove('drag-over');

    const panContent = target.querySelector('.country-on-pan');
    const oldFlag = panContent.querySelector('.flag-draggable');
    if (oldFlag) {
        const oldCode = oldFlag.dataset.countryCode;
        const oldSource = document.querySelector(`.country-flags .flag-draggable[data-country-code="${oldCode}"]`);
        if (oldSource) { oldSource.classList.remove('used'); oldSource.style.display = ''; }
        panContent.innerHTML = '';
    }

    const newFlag = document.createElement('div');
    newFlag.className = 'flag-draggable placed';
    newFlag.dataset.countryCode = data;
    newFlag.innerHTML = `<img src="${getFlagURL(serviceScores[data].iso)}">`;
    panContent.appendChild(newFlag);

    source.classList.add('used'); source.style.display = 'none';

    if (target.id === 'leftPan') currentLeftCountry = data;
    else if (target.id === 'rightPan') currentRightCountry = data;

    updateScale();
}

function updateScale() {
    let lScore = 0, rScore = 0;
    if (currentLeftCountry) lScore = serviceScores[currentLeftCountry].score;
    if (currentRightCountry) rScore = serviceScores[currentRightCountry].score;

    if (currentLeftCountry && currentRightCountry) {
        comparisonDetails.style.display = 'flex';
        let tilt = 0, text = "";
        if (lScore === rScore) { tilt = 0; text = "Tương đương nhau."; }
        else if (lScore > rScore) { tilt = -15; text = `🏆 ${serviceScores[currentLeftCountry].name} mạnh hơn.`; }
        else { tilt = 15; text = `🏆 ${serviceScores[currentRightCountry].name} mạnh hơn.`; }
        scaleBeam.style.transform = `rotate(${tilt}deg)`;
        comparisonInfo.innerHTML = text;
    } else {
        scaleBeam.style.transform = `rotate(0deg)`;
        comparisonDetails.style.display = 'none';
        comparisonInfo.innerHTML = "Kéo cờ vào cán cân.";
    }
    renderDetailsTable(currentLeftCountry, leftDetailsDiv);
    renderDetailsTable(currentRightCountry, rightDetailsDiv);
}

document.querySelectorAll('.scale-pan').forEach(p => { p.ondragover = allowDrop; p.ondragleave = dragLeave; p.ondrop = drop; });
document.addEventListener('DOMContentLoaded', () => { initFlags(); updateScale(); });