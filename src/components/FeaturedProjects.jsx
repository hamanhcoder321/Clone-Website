import { Link } from "react-router-dom"
import DragonPearlCave from "../assets/img/T-v5AqsiPgV_LJHwQewMn.jpg"
import SOUNDLIGHTING from "../assets/img/mDsqS1h16oKSSlMDQ1Dcn.png"
import GREENSOUNDGROUP from "../assets/img/BWTHxvc5zEIo5hrp3GaYl.jpg"
import Homies from "../assets/img/QKc6coSH6Nu7FGb_5ykNE.png"

export default function FeaturedProjects() {
    return(
        <div className="view-width">
            <div className="product-section-header">
                <div>
                    <h2 className="page-title">Sản phẩm và dịch vụ tiêu biểu</h2>
                    <p className="home-subtitle-product">Giải pháp trọn gói từ đối tác đã xác thực, tối ưu chi phí cho doanh nghiệp.</p>
                </div>
                <span className="show-views">Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </div>

            <div className="product-grid">
                {/* khối product 1 */}
                <div className="product-card">
                    <img src={DragonPearlCave} alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Công trình Hang Ngọc Rồng</h3>

                        {/* Rating + Location */}
                        <div className="product-card-custome">
                            <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]"><path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="custome">CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ DỊCH VỤ MINH CHIẾN</span>
                        </div>
                        <div className="product-card-meta">
                            <span className="product-card-date">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                <span>09/12/2025</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Quảng Ninh</span>
                            </span>
                            <span className="product-card-guests">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>2500 khách mời</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <span className="product-badge">
                                <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" />
                                GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN
                            </span>

                            <span className="product-badge">
                                <img src="https://media.wedtech.vn/wedtech/public/categories/hau-can-van-hanh.svg" />
                                Hậu cần & Vận hành
                            </span>
                        </div>

                        {/* Description */}
                        <p className="product-card-desc">
                            HANG NGỌC RỒNG – QUẢNG NINH

                            Đồng bộ âm thanh E3 Audio
                            Tọa lạc trong quần thể di tích Vũng Đục, TP. Cẩm Phả, Hang Ngọc Rồng (Hang Dơi) là hang động tự nhiên hơn 150 triệu năm tuổi, sở hữu hệ thống thạch nhũ kỳ vĩ trên diện tích gần 4.000m². Nơi đây mang đến hành trình đa giác quan với show diễn thực cảnh "Đi Tìm Dấu Ngọc" và không gian ẩm thực cao cấp hướng tầm nhìn ra vịnh Bái Tử Long.
                            Toàn bộ hệ thống âm thanh trong hang được đồng bộ thiết bị E3 Audio, do Công ty TNHH TM&DV Minh Anh Âm Thanh Số – nhà phân phối chiến lược của MC2 Group – trực tiếp tư vấn, cung cấp và lắp đặt trọn gói, đảm bảo chất lượng âm thanh chân thực trong điều kiện địa hình hang động đặc thù.
                            Hang Ngọc Rồng – Nơi giao thoa giữa vẻ đẹp vĩnh cửu của tạo hóa và công nghệ trình diễn đỉnh cao.
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

                        {/* Company + Date + Location + Guests */}
                        <div className="product-card-custome">
                            <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]"><path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="custome">CÔNG TY TNHH THƯƠNG MẠI ÁNH SÁNG H&A</span>
                        </div>
                        <div className="product-card-meta">
                            <span className="product-card-date">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                <span>03/05/2026</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Nghệ An</span>
                            </span>
                            <span className="product-card-guests">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>2500 khách mời</span>
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

                        {/* Company + Date + Location + Guests */}
                        <div className="product-card-custome">
                            <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]"><path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="custome">CÔNG TY TNHH GREEN SOUND GROUP</span>
                        </div>
                        <div className="product-card-meta">
                            <span className="product-card-date">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                <span>16/06/2026</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Nghệ An</span>
                            </span>
                            <span className="product-card-guests">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>1000 khách mời</span>
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

                        {/* Company + Date + Location + Guests */}
                        <div className="product-card-custome">
                            <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]"><path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="custome">CÔNG TY CỔ PHẦN DELAVU VIET NAM</span>
                        </div>
                        <div className="product-card-meta">
                            <span className="product-card-date">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                <span>24/06/2025</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Nghệ An</span>
                            </span>
                            <span className="product-card-guests">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>2500 khách mời</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '6px', width: '55%' }}>
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/hoa-decor.svg" />
                                    HOA & DECOR
                                </span>
                                <span className="product-badge">
                                    <img src="https://media.wedtech.vn/wedtech/public/categories/tiec-dia-diem.svg" />
                                    TIỆC & ĐỊA ĐIỂM
                                </span>
                            </div>
                            <span className="product-badge">
                                <img src="https://media.wedtech.vn/wedtech/public/categories/giai-tri-nhan-su-bieu-dien.svg" />
                                GIẢI TRÍ & NHÂN SỰ BIỂU DIỄN
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
    )
}