import { Link } from "react-router-dom"
import TECHSMART from "../assets/img/ivqgKqe_eEds2q8RC6Jrg.jpg"
import Nabigeta from "../assets/img/DcLMhnS45zowHC-SUv6Aq.jpg"
export default function Verified () {
    return(
        <>
            <div className="view-width">
                <div className="product-section-header">
                    <div>
                        <h2 className="page-title">Đơn vị sự kiện chất lượng</h2>
                        <p className="home-subtitle-product">Năng lực triển khai đã được kiểm chứng qua hàng nghìn dự án lớn nhỏ.</p>
                    </div>
                    <span className="show-views">Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                </div>
                <div className="product-grid-2">
                    {/* khối product 1 */}
                    <div className="product-card-2">
                        <img src={TECHSMART} alt="Lại Phương Hiền" className="product-card-image" />
                        <div className="product-card-content-2">
                            <h3 className="product-card-name">CÔNG TY CỔ PHẦN TECHSMART</h3>

                            {/* Rating + Location */}
                            <div className="product-card-meta">
                                <span className="product-card-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>10.0 (0)</span>
                                </span>
                                <span className="product-card-location">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Hà Nội</span>
                                </span>
                                <span className="product-card-projects">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                    <span>0 dự án</span>
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="product-card-badges">
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" />
                                    GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN
                                </span>
                                {/* Thẻ rỗng */}
                                <span className="product-badge" style={{ visibility: "hidden" }}>
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" alt="hidden" />
                                    Ẩn
                                </span>
                            </div>

                            {/* Description */}
                            <p className="product-card-desc">
                                TECHSMART – CHUYÊN CUNG CẤP GIẢI PHÁP LASER & 3D MAPPING CHUYÊN NGHIỆP 🔥
                                ✨ Cung cấp và cho thuê:
                                ✅ Laser (Lazer) hiệu ứng sân khấu
                                ✅ Hệ thống Laser Show công suất cao
                                ✅ Giải pháp 3D Mapping bằng máy chiếu
                                ✅ Tư vấn – Thiết kế – Thi công trọn gói cho sự kiện, lễ hội, khai trương, concert, quảng trường...
                                💯 Cam kết:
                                ✔️ Thiết bị chính hãng, chất lượng cao
                                ✔️ Hiệu ứng đẹp – vận hành ổn định
                                ✔️ Giá cạnh tranh
                                ✔️ Hỗ trợ kỹ thuật nhanh chóng trên toàn quốc
                                📞 Hotline/Zalo: 0988 842 842
                                Techsmart – Biến mọi sân khấu thành trải nghiệm ánh sáng ấn tượng.
                            </p>

                            {/* CTA Button */}
                            <div className="product-card-actions">
                                <Link className="btn-profile" to="">
                                    XEM HỒ SƠ
                                    <svg className="btn-profile-showview" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* khối product 2 */}
                    <div className="product-card-2">
                        <img src={Nabigeta} alt="Lại Phương Hiền" className="product-card-image" />
                        <div className="product-card-content-2">
                            <h3 className="product-card-name">Nabigeta Viet Nam</h3>

                            {/* Rating + Location */}
                            <div className="product-card-meta">
                                <span className="product-card-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>10.0 (0)</span>
                                </span>
                                <span className="product-card-location">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Hà Nội</span>
                                </span>
                                <span className="product-card-projects">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                    <span>0 dự án</span>
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="product-card-badges">
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg" />
                                    HOA & DECOR
                                </span>
                                
                            </div>

                            {/* Description */}
                            <p className="product-card-desc">
                                Nabigeta Việt Nam – Thương hiệu uy tín được chứng thực bởi Tạp chí Sở hữu trí tuệ và Sáng tạo
                                Với mục tiêu "TẤT CẢ các showroom, gian hàng triển lãm tại Việt Nam đều được thiết kế chỉn chu, bắt kịp xu hướng của thế giới" cùng kinh nghiệm hơn 10 năm hoạt động trong lĩnh vực thiết kế, thi công gian hàng triển lãm và showroom, Nabigeta Việt Nam luôn là cái tên đầu tiên được nhắc đến trong danh sách các công ty thiết kế – thi công CHẤT LƯỢNG NHẤT tại Việt Nam.

                                Khách hàng biết đến Nabigeta Việt Nam qua những điểm nhấn ấn tượng trong phong cách thiết kế, thi công độc đáo, khai thác tối đa thông điệp marketing, thu hút sự chú ý của khách tham quan và nâng tầm thương hiệu doanh nghiệp. Bởi lẽ, chúng tôi luôn mang đến những bản thiết kế sáng tạo nhất cùng chất lượng thi công chuẩn mực trong từng công trình.
                            </p>

                            {/* CTA Button */}
                            <div className="product-card-actions">
                                <Link className="btn-profile" to="">
                                    XEM HỒ SƠ
                                    <svg className="btn-profile-showview" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}