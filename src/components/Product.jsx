import { Link } from "react-router-dom"

export default function Product() {
    return (
        <>
            <div className="product-section-header">
                <div>
                    <h2 className="page-title">Các sản phẩm của chúng tôi</h2>
                    <p className="home-subtitle-product">Đối tác chuyên nghiệp được Wedtech thẩm định năng lực.</p>
                </div>
                <button className="show-views">Xem tất cả</button>
            </div>

            <div className="product-grid">
                {/* khối product 1 */}
                <div className="product-card">
                    <img src="" alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Lại Phương Hiền (Kho Đồ Cưới)</h3>

                        {/* Rating + Location */}
                        <div className="product-card-meta">
                            <span className="product-card-rating">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span>10.0 (0)</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Hà Nội</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <span className="product-badge">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                TRANG PHỤC &amp; LÀM ĐẸP
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* khối product 2 */}
                <div className="product-card">
                    <img src="" alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Lại Phương Hiền (Kho Đồ Cưới)</h3>

                        {/* Rating + Location */}
                        <div className="product-card-meta">
                            <span className="product-card-rating">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span>10.0 (0)</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Hà Nội</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <span className="product-badge">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                TRANG PHỤC &amp; LÀM ĐẸP
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* khối product 3 */}
                <div className="product-card">
                    <img src="" alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Lại Phương Hiền (Kho Đồ Cưới)</h3>

                        {/* Rating + Location */}
                        <div className="product-card-meta">
                            <span className="product-card-rating">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span>10.0 (0)</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Hà Nội</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <span className="product-badge">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                TRANG PHỤC &amp; LÀM ĐẸP
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* khối product 4 */}
                <div className="product-card">
                    <img src="" alt="Lại Phương Hiền" className="product-card-image" />
                    <div className="product-card-content">
                        <h3 className="product-card-name">Lại Phương Hiền (Kho Đồ Cưới)</h3>

                        {/* Rating + Location */}
                        <div className="product-card-meta">
                            <span className="product-card-rating">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span>10.0 (0)</span>
                            </span>
                            <span className="product-card-location">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Hà Nội</span>
                            </span>
                        </div>

                        {/* Category Badge */}
                        <div className="product-card-badges">
                            <span className="product-badge">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                TRANG PHỤC &amp; LÀM ĐẸP
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}