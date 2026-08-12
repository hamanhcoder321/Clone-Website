import { Link } from "react-router-dom"
import DragonPearlCave from "../assets/img/T-v5AqsiPgV_LJHwQewMn.jpg"
import VinhVerseConcert from "../assets/img/QbNXGvnDxmj3QlhB5qxXL.jpg"
import GREENSOUNDGROUP from "../assets/img/7V8x2bD7Aakl3H2xRKqiN.jpg"
import Homies from "../assets/img/MvCYhCVJYG6eqHtb9ex3g.jpg"

export default function FeaturedProjects() {
    return (
        <div className="view-width">
            <div className="product-section-header">
                <div>
                    <h2 className="page-title">Dự án nổi bật</h2>
                    <p className="home-subtitle-product">Khám phá các dự án nổi bật từ mạng lưới đối tác tổ chức sự kiện uy tín</p>
                </div>
                <span className="show-views">Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </div>

            <div className="product-grid">
                {/* khối product 1 */}
                <div className="product-card">
                    <span className="product-image-label">VĂN HÓA - GIẢI TRÍ</span>
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
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
                    <span className="product-image-label">VĂN HÓA - GIẢI TRÍ</span>
                    <img src={VinhVerseConcert} alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">VinhVerse Concert 2026</h3>

                        {/* Company + Date + Location + Guests */}
                        <div className="product-card-custome">
                            <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]"><path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="custome">CÔNG TY TNHH THƯƠNG MẠI - TỔ CHỨC SỰ KIỆN THÀNH HOÀNG</span>
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
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
                            TKK đồng hành với vai trò nhà cung cấp chính thiết bị và vật liệu kỹ thuật cho VINHVERSE CONCERT – đại nhạc hội kết hợp trình diễn thời trang quy mô lớn lần đầu tiên 
                            tổ chức tại TP. Vinh. Với hệ thống màn hình LED, ánh sáng và thiết bị sự kiện chuyên dụng, TKK góp phần kiến tạo không gian "vũ trụ trải nghiệm" hoành tráng, 
                            nơi âm nhạc hiện đại, thời trang đỉnh cao và văn hóa bản địa hòa quyện trong từng khoảnh khắc trình diễn. Sự kiện có sự góp mặt 
                            của các nghệ sĩ Quang Hùng MasterD, Rhyder, 24K.Right, CôngB, Hiền Hồ cùng dàn hoa hậu, á hậu, hứa hẹn một đêm diễn bùng nổ và giàu cảm xúc.
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
                    <span className="product-image-label">GALA DINNER</span>
                    <img src={GREENSOUNDGROUP} alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Đam mê & Hội tụ</h3>

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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
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
                            Không chỉ là một buổi setup thông thường, đây là nơi G.Sound cùng những người anh em trong nghề tổ chức sự kiện hội tụ, cùng nhau dựng lên một không gian hoành tráng từ con số 0. Từng giàn truss được lắp dựng tỉ mỉ, màn hình LED khổng lồ sáng rực giữa nền trời, tất cả là kết tinh của đam mê và tinh thần "làm nghề bằng cả trái tim".
                            Đây không đơn thuần là công việc — đó là sân chơi để những người làm sự kiện thể hiện bản lĩnh, kỹ thuật và sự gắn kết. G.Sound tự hào là một phần trong hành trình ấy, mang đến những trải nghiệm sân khấu đỉnh cao, nơi mọi chi tiết đều được chăm chút để tạo nên một sự kiện đáng nhớ.
                            🔥 G.Sound – Đồng hành cùng đam mê, kiến tạo những khoảnh khắc bùng nổ!
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
                    <span className="product-image-label">TIỆC CƯỚI</span>
                    <img src={Homies} alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Báu vật miền nhiệt đới</h3>

                        {/* Company + Date + Location + Guests */}
                        <div className="product-card-custome">
                            <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]"><path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="custome">CÔNG TY CỔ PHẦN DELAVU HOLDING</span>
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                <span>2500 khách mời</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '2px', width: '55%' }}>
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
                            Siêu đám cưới gây chấn động truyền thông tại Diễn Châu, Nghệ An với tổng mức đầu tư trang trí và tổ chức lên tới 5 tỷ đồng. Dự án được Delavu Event lên ý tưởng, thiết kế kỹ lưỡng trong suốt 3 tháng và hiện thực hóa trọn gói ngay tại không gian tư gia của khách hàng. Lấy cảm hứng từ tình yêu thiên nhiên, cây cỏ của cặp đôi, Delavu Event đã mang đến một concept độc bản mang tên “Báu vật miền nhiệt đới”, biến toàn bộ không gian tiệc cưới thành một khu rừng thực thụ
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