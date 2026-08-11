import { Link } from "react-router-dom"
import weddingitems from "../assets/img/aFtXE3fzempyFekt1PfPF.png"
import SOUNDLIGHTING from "../assets/img/mDsqS1h16oKSSlMDQ1Dcn.png"
import GREENSOUNDGROUP from "../assets/img/BWTHxvc5zEIo5hrp3GaYl.jpg"
import Homies from "../assets/img/QKc6coSH6Nu7FGb_5ykNE.png"

export default function Product() {
    return (
        <>
            <div className="view-width">
                <div className="product-section-header">
                    <div>
                        <h2 className="page-title">Nhà cung cấp đã xác thực</h2>
                        <p className="home-subtitle-product">Đối tác chuyên nghiệp được Wedtech thẩm định năng lực.</p>
                    </div>
                    <span className="show-views">Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                </div>

                <div className="product-grid">
                    {/* khối product 1 */}
                    <div className="product-card">
                        <img src={weddingitems} alt="Lại Phương Hiền" className="product-card-image" />
                        <div className="product-card-content">
                            <h3 className="product-card-name">Lại Phương Hiền (Kho Đồ Cưới)</h3>

                            {/* Rating + Location */}
                            <div className="product-card-meta">
                                <span className="product-card-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>10.0 (0)</span>
                                </span>
                                <span className="product-card-location">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Hà Nội</span>
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="product-card-badges">
                                <span className="product-badge">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                                    TRANG PHỤC &amp; LÀM ĐẸP
                                </span>
                                {/* Thẻ rỗng */}
                                <span className="product-badge" style={{ visibility: "hidden" }}>
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" alt="hidden" />
                                    Ẩn
                                </span>
                            </div>

                            {/* Description */}
                            <p className="product-card-desc">
                                Lại Phương Hiền (Kho Đồ Cưới) là đơn vị uy tín chuyên bán sỉ và lẻ các loại đồ dùng, phụ kiện trang trí tiệc cưới và sự kiện chấ...
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
                    <div className="product-card">
                        <img src={SOUNDLIGHTING} alt="Lại Phương Hiền" className="product-card-image" />
                        <div className="product-card-content">
                            <h3 className="product-card-name">Công ty TNHH CÔNG NGHỆ ÂM THANH ÁNH SÁNG H&A VIỆT NAM</h3>

                            {/* Rating + Location */}
                            <div className="product-card-meta">
                                <span className="product-card-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>10.0 (0)</span>
                                </span>
                                <span className="product-card-location">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Hà Nội</span>
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="product-card-badges">
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg" />
                                    HOA & DECOR
                                </span>
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" />
                                    GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN
                                </span>
                            </div>

                            {/* Description */}
                            <p className="product-card-desc">
                                Với hơn 10 năm kinh nghiệm trong lĩnh vực sản xuất loa, Fill Acoustic tự hào là đơn vị hàng đầu chuyên...
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
                    {/* khối product 3 */}
                    <div className="product-card">
                        <img src={GREENSOUNDGROUP} alt="Lại Phương Hiền" className="product-card-image" />
                        <div className="product-card-content">
                            <h3 className="product-card-name">CÔNG TY TNHH GREEN SOUND GROUP</h3>

                            {/* Rating + Location */}
                            <div className="product-card-meta">
                                <span className="product-card-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>10.0 (0)</span>
                                </span>
                                <span className="product-card-location">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Hồ Chí Minh</span>
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="product-card-badges">
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg" />
                                    HOA & DECOR
                                </span>
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" />
                                    GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN
                                </span>
                            </div>

                            {/* Description */}
                            <p className="product-card-desc">
                                G.Sound cung cấp các sản phẩm âm thanh chuyên nghiệp, đáp ứng đa dạng nhu cầu từ sự kiện nhỏ
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
                    {/* khối product 4 */}
                    <div className="product-card">
                        <img src={Homies} alt="Lại Phương Hiền" className="product-card-image" />
                        <div className="product-card-content">
                            <h3 className="product-card-name">Công ty TNHH Homies Live Viet Nam</h3>

                            {/* Rating + Location */}
                            <div className="product-card-meta">
                                <span className="product-card-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <span>10.0 (0)</span>
                                </span>
                                <span className="product-card-location">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Hải Phòng</span>
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="product-card-badges">
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg" />
                                    HOA & DECOR
                                </span>
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/to-chuc-su-kien-wedding.svg" />
                                    TỔ CHỨC SỰ KIỆN & WEDDING
                                </span>
                            </div>

                            {/* Description */}
                            <p className="product-card-desc">
                                Homies Live Việt Nam chuyên cung cấp các loại đèn LED trang trí dành cho nội thất và công...
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