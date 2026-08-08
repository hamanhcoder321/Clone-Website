const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4"/>
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

export default function Home() {
    return (
        <div className="page">
            <div className="home-hero">
                <div className="home-hero-content">
                    <h1 className="home-title">Nền tảng B2B <span className="home-title-2">ĐÁNG TIN CẬY</span> dành 
                        cho doanh nghiệp <span className="home-title-2">NGÀNH CƯỚI & SỰ KIỆN</span></h1>
                    <p className="home-subtitle">
                        Tìm kiếm, so sánh và đặt lịch với hơn 2.500 nhà cung cấp dịch vụ ngành cưới và sự kiện đã chứng minh được năng lực
                    </p>

                    {/* Search Bar */}
                    <div className="hero-search">
                        <div className="hero-search-box">
                            <svg className="hero-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                className="hero-search-input"
                                placeholder="Bạn đang tìm kiếm gì?"
                            />
                        <button className="hero-search-btn">Tìm kiếm</button>
                        </div>
                    </div>

                    {/* Popular Categories */}
                    <div className="hero-categories">
                        <span className="hero-categories-label">Phổ biến:</span>
                        <div className="hero-categories-list">
                            <span className="hero-category-tag">Hoa & Decor</span>
                            <span className="hero-category-tag">Vật tư & Vật liệu</span>
                            <span className="hero-category-tag">Nhà rạp & Kết cấu</span>
                            <span className="hero-category-tag">Nội thất sự kiện</span>
                            <span className="hero-category-tag">LED & Trình chiếu</span>
                        </div>
                    </div>
                </div>
                
                <div className="home-hero-stats">
                    <div className="stats-grid">
                        <div className="stat-card stat-card-1">
                            <div className="stat-header">
                                <div className="stat-icon">
                                    <UsersIcon />
                                </div>
                                <div className="stat-number">
                                    2.500+
                                </div>
                            </div>
                            <div className="stat-title">
                                Nhà cung cấp đã xác thực
                            </div>
                        </div>

                        <div className="stat-card stat-card-2">
                            <div className="stat-header">
                                <div className="stat-icon">
                                    <StarIcon />
                                </div>
                                <div className="stat-number">
                                    850
                                </div>
                            </div>
                            <div className="stat-title">
                                Đơn vị đã xác thực
                            </div>
                        </div>

                        <div className="stat-card stat-card-3">
                            <div className="stat-header">
                                <div className="stat-icon">
                                    <CalendarIcon />
                                </div>
                                <div className="stat-number">
                                    12.000+
                                </div>
                            </div>
                            <div className="stat-title">
                                Sự kiện thành công
                            </div>
                        </div>

                        <div className="stat-card stat-card-4">
                            <div className="stat-header">
                                <div className="stat-icon">
                                    <MapIcon />
                                </div>
                                <div className="stat-number">
                                    34
                                </div>
                            </div>
                            <div className="stat-title">
                                Tỉnh thành toàn quốc
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="page-title">Các sản phẩm của chúng tôi</h2>
                <div className="product-grid">
                    {/* dùng map lặp ptu và tạo ptu mới */}
                    {/* {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}