let myChart = null; // Biến lưu trữ biểu đồ hiện tại để xóa trước khi vẽ mới

function drawUserChart() {
    // 1. Lấy dữ liệu từ Input
    const labelsRaw = document.getElementById('labelsInput').value;
    const dataRaw = document.getElementById('dataInput').value;
    const chartTitle = document.getElementById('titleInput').value || "Biểu đồ thống kê";
    const chartType = document.getElementById('chartType').value;
    const errorMsg = document.getElementById('errorMsg');

    // 2. Xử lý dữ liệu (Tách chuỗi thành mảng)
    // Tách bằng dấu phẩy, và loại bỏ khoảng trắng thừa
    const labels = labelsRaw.split(',').map(item => item.trim()).filter(item => item !== "");
    const dataValues = dataRaw.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));

    // 3. Kiểm tra lỗi nhập liệu
    if (labels.length === 0 || dataValues.length === 0) {
        errorMsg.style.display = 'block';
        errorMsg.innerText = "⚠️ Vui lòng nhập đủ tên đối tượng và số liệu!";
        return;
    }

    if (labels.length !== dataValues.length) {
        errorMsg.style.display = 'block';
        errorMsg.innerText = `⚠️ Số lượng không khớp! Bạn nhập ${labels.length} tên nhưng lại có ${dataValues.length} số liệu.`;
        return;
    }

    // Ẩn thông báo lỗi nếu dữ liệu hợp lệ
    errorMsg.style.display = 'none';

    // 4. Cấu hình màu sắc (Tự động sinh màu đẹp cho biểu đồ tròn/cột)
    const backgroundColors = [
        'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
        'rgba(199, 199, 199, 0.6)', 'rgba(83, 102, 255, 0.6)', 'rgba(40, 159, 64, 0.6)',
        'rgba(210, 99, 132, 0.6)', 'rgba(100, 162, 235, 0.6)'
    ];
    const borderColors = backgroundColors.map(color => color.replace('0.6', '1'));

    // 5. Xóa biểu đồ cũ nếu có (để vẽ cái mới đè lên)
    if (myChart) {
        myChart.destroy();
    }

    // 6. Vẽ biểu đồ mới bằng Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Cấu hình dataset tùy theo loại biểu đồ
    let datasetConfig = {
        label: 'Giá trị',
        data: dataValues,
        borderWidth: 2
    };

    // Nếu là biểu đồ đường (Line), chỉ dùng 1 màu chủ đạo
    if (chartType === 'line') {
        datasetConfig.borderColor = 'rgba(54, 162, 235, 1)';
        datasetConfig.backgroundColor = 'rgba(54, 162, 235, 0.2)';
        datasetConfig.fill = true; // Tô màu vùng dưới đường
        datasetConfig.tension = 0.3; // Làm mềm đường cong
    } else {
        // Biểu đồ Cột và Tròn dùng nhiều màu
        datasetConfig.backgroundColor = backgroundColors;
        datasetConfig.borderColor = borderColors;
    }

    myChart = new Chart(ctx, {
        type: chartType, 
        data: {
            labels: labels,
            datasets: [datasetConfig]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Cho phép chỉnh chiều cao theo CSS
            plugins: {
                title: {
                    display: true,
                    text: chartTitle,
                    font: { size: 18, family: "'Segoe UI', sans-serif" },
                    padding: { bottom: 20 }
                },
                legend: {
                    // Ẩn chú thích nếu là Bar/Line (đỡ rối), hiện nếu là Pie
                    display: true, 
                    position: 'bottom'
                }
            },
            // Cấu hình trục (Chỉ áp dụng cho Line và Bar, không áp dụng cho Pie)
            scales: (chartType === 'pie') ? {} : {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}