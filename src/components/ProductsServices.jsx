import DragonPearlCave from "../assets/img/LwKJroO4srXHF_v_bvzj8.jpeg"
import VinhVerseConcert from "../assets/img/h_AlrFY_etA8dQvlSU-Vt.png"
import GREENSOUNDGROUP from "../assets/img/yd5_mThcuXUBVNA2DWOzd.png"
import Homies from "../assets/img/StbqDkgoj62tjiJ4X0COc.png"
import ProductServiceCard from "./ProductServiceCard.jsx"

const projectsData = [
    {
        image: DragonPearlCave,
        name: "Nhà hàng Tự Do - Khách sạn Viễn Đông",
        vendor: "Hotel Grand Saigon",
        rating: 10.0,
        reviews: 0,
        badges: [
            { img: "https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg", label: "HOA & DECOR" },
            { img: "https://media.wedtech.vn/wedtech/public/categories/media-studio.svg", label: "MEDIA & STUDIO" },
            { img: "https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg", label: "GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN" }
        ],
        price: "Từ 5.000.000 VNĐ",
        moq: "1 GÓI"
    },
    {
        image: VinhVerseConcert,
        name: "Bàn Mixer Âm Thanh - Bộ Trộn Tín Hiệu Cao Cấp Fill Acoustic",
        vendor: "Công ty TNHH CÔNG NGHỆ ÂM THANH ÁNH SÁNG H&A VIỆT NAM",
        rating: 10.0,
        reviews: 0,
        badges: [
            { img: "https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg", label: "HOA & DECOR" },
            { img: "https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg", label: "GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN" }
        ],
        price: "Liên hệ",
        moq: "1 BỘ"
    },
    {
        image: GREENSOUNDGROUP,
        name: "BST Cụm Hoa Bụi Trang Trí Chân Sân Khấu & Đường Dẫn",
        vendor: "CÔNG TY CỔ PHẦN DELAVU HOLDING",
        rating: 10.0,
        reviews: 0,
        badges: [
            { img: "https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg", label: "HOA & DECOR" },
            { img: "https://media.wedtech.vn/wedtech/public/categories/tiec-dia-diem.svg", label: "TIỆC & ĐỊA ĐIỂM" }
        ],
        price: "Liên hệ",
        moq: "1 BỘ"
    },
    {
        image: Homies,
        name: "E3 DKF-112",
        vendor: "CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ DỊCH VỤ MINH CHIẾN",
        rating: 10.0,
        reviews: 0,
        badges: [
            { img: "https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg", label: "GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN" }
        ],
        price: "Từ 69.500.000 VNĐ",
        moq: "1 CÁI"
    }
];

export default function ProductsServices() {
    return (
        <div className="view-width">
            <div className="product-section-header">
                <div>
                    <h2 className="page-title">Sản phẩm và dịch vụ tiêu biểu</h2>
                    <p className="home-subtitle-product">Giải pháp trọn gói từ đối tác đã xác thực, tối ưu chi phí cho doanh nghiệp.</p>
                </div>
                <span className="show-views">
                    Xem tất cả
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </span>
            </div>

            <div className="product-grid">
                {projectsData.map((project, index) => (
                    <ProductServiceCard key={index} data={project} />
                ))}
            </div>
        </div>
    )
}