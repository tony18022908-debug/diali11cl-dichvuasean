// DỮ LIỆU 11 NƯỚC ĐÔNG NAM Á (Cập nhật chi tiết & chuyên sâu)
const db = {
    vn: {
        flag: "🇻🇳", 
        name: "Việt Nam", 
        intro: "Nền kinh tế năng động với tốc độ tăng trưởng dịch vụ ấn tượng. Là cửa ngõ giao thương quan trọng ra biển Đông của khu vực, thu hút mạnh vốn đầu tư FDI.",
        trans: "Hệ thống giao thông phát triển mạnh theo hướng Bắc - Nam. Các cảng biển lớn: Hải Phòng, Cát Lái, Cái Mép - Thị Vải. Sân bay quốc tế: Nội Bài, Tân Sơn Nhất. Tuyến đường bộ xuyên Á kết nối với Lào và Campuchia.",
        trade: "Là một trong những nền kinh tế mở nhất khu vực. Xuất khẩu chủ lực: Điện thoại & linh kiện, hàng dệt may, nông sản (gạo, cà phê, thủy sản). Đối tác lớn: Mỹ, Trung Quốc, EU, ASEAN.",
        tour: "Điểm đến hấp dẫn toàn cầu với các di sản UNESCO (Vịnh Hạ Long, Phố cổ Hội An, Phong Nha). Du lịch biển đảo (Phú Quốc, Nha Trang) và văn hóa ẩm thực là thế mạnh tuyệt đối."
    },
    la: {
        flag: "🇱🇦", 
        name: "Lào", 
        intro: "Quốc gia duy nhất không giáp biển ở ĐNA, đang chuyển mình thành 'viên pin năng lượng' của khu vực và trung tâm kết nối logistics trên bộ.",
        trans: "Đột phá với tuyến đường sắt cao tốc Lào - Trung (Vientiane - Boten). Đang phát triển các tuyến đường bộ Đông - Tây để kết nối ra cảng biển Vũng Áng (Việt Nam).",
        trade: "Quy mô thương mại nhỏ nhưng tăng trưởng ổn định. Xuất khẩu chính: Điện năng (thủy điện), khoáng sản (đồng, vàng), gỗ và sản phẩm gỗ, nông sản.",
        tour: "Nổi tiếng với du lịch văn hóa, Phật giáo và sinh thái yên bình. Điểm đến tiêu biểu: Cố đô Luang Prabang (Di sản thế giới), Vang Vieng, Thạt Luổng."
    },
    kh: {
        flag: "🇰🇭", 
        name: "Campuchia", 
        intro: "Kinh tế tăng trưởng nhanh dựa vào du lịch và xuất khẩu hàng may mặc. Đang tích cực cải thiện cơ sở hạ tầng để hội nhập sâu rộng.",
        trans: "Cảng Sihanoukville là cửa ngõ biển quan trọng nhất. Hệ thống đường bộ và đường cao tốc (Phnom Penh - Sihanoukville) đang được nâng cấp mạnh mẽ.",
        trade: "Phụ thuộc nhiều vào xuất khẩu hàng dệt may, giày dép và nông sản (gạo, cao su). Trung Quốc và Mỹ là các đối tác thương mại quan trọng.",
        tour: "Du lịch văn hóa - lịch sử là trụ cột kinh tế. Quần thể Angkor Wat là biểu tượng toàn cầu. Ngoài ra còn phát triển du lịch biển tại Sihanoukville và các đảo."
    },
    th: {
        flag: "🇹🇭", 
        name: "Thái Lan", 
        intro: "Nền kinh tế lớn thứ hai ĐNA. Là trung tâm sản xuất ô tô, logistics và du lịch hàng đầu khu vực với cơ sở hạ tầng hiện đại.",
        trans: "Bangkok là trung tâm hàng không khu vực (Sân bay Suvarnabhumi). Hệ thống đường bộ cao tốc và đường sắt kết nối tốt với các nước Đông Dương.",
        trade: "Cường quốc xuất khẩu: Ô tô & linh kiện, máy tính, mạch điện tử, lúa gạo, cao su. Nền thương mại nội địa và quốc tế rất sôi động.",
        tour: "Dẫn đầu ASEAN về lượng khách quốc tế. Nổi tiếng với du lịch nghỉ dưỡng (Phuket, Pattaya), du lịch y tế, mua sắm và ẩm thực đường phố."
    },
    mm: {
        flag: "🇲🇲", 
        name: "Myanmar", 
        intro: "Vùng đất giàu tài nguyên và tiềm năng, đóng vai trò cầu nối giữa Đông Nam Á với Nam Á (Ấn Độ, Bangladesh).",
        trans: "Đang nỗ lực nâng cấp hệ thống giao thông đường bộ và đường sắt. Cảng Yangon là cảng biển chính. Tuyến đường bộ kết nối Trung Quốc và Ấn Độ đang được chú trọng.",
        trade: "Thương mại biên giới phát triển. Xuất khẩu chủ yếu: Khí đốt tự nhiên, đá quý (ngọc bích), gạo, đậu và các sản phẩm may mặc.",
        tour: "Sở hữu di sản văn hóa Phật giáo đồ sộ và nguyên sơ. Điểm đến nổi tiếng: Cố đô Bagan với hàng nghìn ngôi chùa, Chùa Vàng Shwedagon, Hồ Inle."
    },
    my: {
        flag: "🇲🇾", 
        name: "Malaysia", 
        intro: "Nền kinh tế phát triển ở mức cao, cơ cấu đa dạng từ sản xuất công nghệ cao đến tài chính và du lịch.",
        trans: "Hệ thống đường cao tốc Bắc - Nam hiện đại nhất nhì khu vực. Cảng Klang và Tanjung Pelepas nằm trong top cảng bận rộn thế giới. Sân bay KLIA là hub lớn.",
        trade: "Xuất khẩu hàng đầu về thiết bị điện tử, vi mạch, dầu cọ và dầu khí (Petronas). Là mắt xích quan trọng trong chuỗi cung ứng công nghệ toàn cầu.",
        tour: "Du lịch đa dạng bản sắc (Malay, Hoa, Ấn). Điểm đến: Tháp đôi Petronas, cao nguyên Cameron, đảo Langkawi, thành phố di sản Penang."
    },
    sg: {
        flag: "🇸🇬", 
        name: "Singapore", 
        intro: "Con rồng Châu Á, quốc gia phát triển nhất khu vực. Là trung tâm tài chính, thương mại và dịch vụ logistics toàn cầu.",
        trans: "Sở hữu cảng biển trung chuyển container lớn nhất thế giới và sân bay Changi tốt nhất thế giới. Đầu mối giao thông huyết mạch của các tuyến hàng hải quốc tế.",
        trade: "Kinh tế dựa trên tái xuất khẩu và dịch vụ giá trị cao. Xuất khẩu: Máy móc, thiết bị điện tử, dược phẩm, sản phẩm lọc dầu. Trung tâm Fintech của Châu Á.",
        tour: "Du lịch đô thị cao cấp, mua sắm và giải trí. Điểm đến: Marina Bay Sands, Gardens by the Bay, Đảo Sentosa. Trung tâm du lịch MICE (hội nghị) hàng đầu."
    },
    id: {
        flag: "🇮🇩", 
        name: "Indonesia", 
        intro: "Quốc gia vạn đảo, nền kinh tế lớn nhất Đông Nam Á, thành viên G20. Có thị trường tiêu thụ nội địa khổng lồ và giàu tài nguyên.",
        trans: "Chú trọng phát triển vận tải biển ('Trục hàng hải toàn cầu') và hàng không để kết nối hàng nghìn đảo. Vừa khánh thành đường sắt cao tốc Jakarta - Bandung.",
        trade: "Xuất khẩu tài nguyên thô lớn nhất thế giới: Than đá, dầu cọ, niken, khí tự nhiên. Đang chuyển dịch sang xuất khẩu sản phẩm chế biến (pin xe điện).",
        tour: "Bali là thương hiệu du lịch toàn cầu. Đang phát triển thêm '10 Bali mới' (như hồ Toba, Labuan Bajo) để đa dạng hóa điểm đến."
    },
    ph: {
        flag: "🇵🇭", 
        name: "Philippines", 
        intro: "Quốc gia quần đảo với nền kinh tế dịch vụ chiếm tỷ trọng cao, đặc biệt là lợi thế về nguồn nhân lực tiếng Anh.",
        trans: "Vận tải biển và hàng không đóng vai trò huyết mạch kết nối hơn 7.000 hòn đảo. Giao thông đô thị tại Manila đang được hiện đại hóa.",
        trade: "Dẫn đầu thế giới về xuất khẩu dịch vụ BPO (Thuê ngoài quy trình kinh doanh - Call Center). Xuất khẩu hàng hóa: Vi mạch, thiết bị điện tử, nông sản.",
        tour: "Thế mạnh tuyệt đối về du lịch biển đảo, lặn biển và sinh thái. Các điểm đến nổi tiếng: Boracay, Palawan, Cebu, Chocolate Hills."
    },
    bn: {
        flag: "🇧🇳", 
        name: "Brunei", 
        intro: "Vương quốc thịnh vượng với thu nhập bình quân đầu người cao, nền kinh tế dựa nhiều vào nguồn tài nguyên năng lượng.",
        trans: "Hệ thống giao thông quy mô nhỏ nhưng hiện đại. Cầu Temburong dài nhất Đông Nam Á (30km) nối liền hai phần lãnh thổ.",
        trade: "Kinh tế phụ thuộc gần như hoàn toàn vào xuất khẩu dầu thô và khí đốt tự nhiên (chiếm hơn 90% kim ngạch). Đang nỗ lực đa dạng hóa kinh tế.",
        tour: "Phát triển du lịch 'Hồi giáo xanh', du lịch sinh thái bảo tồn rừng nhiệt đới nguyên sinh (Ulu Temburong) và văn hóa hoàng gia sang trọng."
    },
    tl: {
        flag: "🇹🇱", 
        name: "Đông Timor", 
        intro: "Quốc gia non trẻ nhất khu vực, đang trong quá trình xây dựng và tái thiết nền kinh tế, phụ thuộc nhiều vào hỗ trợ quốc tế.",
        trans: "Cơ sở hạ tầng giao thông còn nhiều hạn chế. Đang nâng cấp cảng biển Dili và sân bay quốc tế để tăng cường kết nối.",
        trade: "Quy mô thương mại nhỏ. Mặt hàng xuất khẩu chủ lực là cà phê hữu cơ và tiềm năng từ dầu khí trong tương lai.",
        tour: "Tiềm năng lớn về du lịch sinh thái, lặn biển ngắm san hô và du lịch mạo hiểm nhờ vẻ đẹp hoang sơ chưa bị khai phá nhiều."
    }
};

/**
 * Hiển thị dữ liệu của quốc gia được chọn vào panel thông tin.
 * @param {string} code - Mã quốc gia (ví dụ: 'vn', 'la').
 */
function showData(code) {
    const data = db[code];
    if(data) {
        // 1. Ẩn màn hình chờ, hiện nội dung
        document.getElementById('waiting').style.display = 'none';
        document.getElementById('info-content').style.display = 'block';
        
        // 2. Điền dữ liệu văn bản chi tiết
        document.getElementById('c-flag').innerText = data.flag;
        document.getElementById('c-name').innerText = data.name;
        document.getElementById('c-intro').innerText = data.intro;
        document.getElementById('c-trans').innerText = data.trans;
        document.getElementById('c-trade').innerText = data.trade;
        document.getElementById('c-tour').innerText = data.tour;

        // 3. Hiệu ứng Active trên bản đồ
        document.querySelectorAll('.country-group').forEach(el => el.classList.remove('active'));
        const activeGroup = document.getElementById(code);
        if (activeGroup) {
            activeGroup.classList.add('active');
        }
    }
}