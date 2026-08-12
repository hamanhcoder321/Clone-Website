import "./Categories.css";

const categoriesData = [
    { title: "Hoa & Decor", slug: "hoa-decor", color: "#ffe6ea" },
    { title: "Vật tư & Vật liệu", slug: "vat-tu-vat-lieu", color: "#e6f2ff" },
    { title: "Nhà rạp & Kết cấu", slug: "nha-rap-ket-cau", color: "#fff3d6" },
    { title: "Nội thất sự kiện", slug: "noi-that-su-kien", color: "#e6ffe6" },
    { title: "LED & Trình chiếu", slug: "led-trinh-chieu", color: "#f2e6ff" },
    { title: "Âm thanh", slug: "am-thanh", color: "#e6e6ff" },
    { title: "Ánh sáng & Hiệu ứng", slug: "anh-sang-hieu-ung", color: "#fff0e6" },
    { title: "In ấn & Quảng cáo", slug: "in-an-quang-cao", color: "#ffe6e6" },
    { title: "Media & Studio", slug: "media-studio", color: "#e6ecef" },
    { title: "Giải trí & Nhân sự biểu diễn", slug: "giai-tri-nhan-su-bieu-dien", color: "#f9e6ff" },
    { title: "Trang phục & Làm đẹp", slug: "trang-phuc-lam-dep", color: "#ffe6f2" },
    { title: "Tiệc & Địa điểm", slug: "tiec-dia-diem", color: "#fff3e6" },
    { title: "Tổ chức sự kiện & Wedding", slug: "to-chuc-su-kien-wedding", color: "#ffe6ec" },
    { title: "Hậu cần & Vận hành", slug: "hau-can-van-hanh", color: "#e6ffe6" },
    { title: "Công nghệ", slug: "cong-nghe", color: "#e6f7ff" },
    { title: "Đào tạo & Phát triển", slug: "dao-tao-phat-trien", color: "#f2ebe6" }
];

export function Categories() {
    return(
        <div className="view-width categories-wrapper">
            <div className="categories-header">
                <h2 className="page-Categories">Danh mục ngành</h2>
                <p className="home-subtitle-product">Mọi mắt xích của ngành cưới và sự kiện đều được kết nối tại một nền tảng.</p>
            </div>

            <div className="categories-grid">
                {categoriesData.map((item, index) => (
                    <div key={index} className="category-card">
                        <div className="category-icon-wrapper" style={{ backgroundColor: item.color }}>
                            <img 
                                src={`https://media.wedtech.vn/wedtech/public/categories/${item.slug}.svg`} 
                                alt={item.title} 
                                className="category-icon"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<span style="font-size: 20px; font-weight: bold; color: #555;">${item.title.charAt(0)}</span>`;
                                }}
                            />
                        </div>
                        <span className="category-title">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}