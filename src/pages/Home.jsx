import Product from "../components/Product";
import { UsersIcon, StarIcon, CalendarIcon, MapIcon } from "../components/Icon.jsx";
import Verified from "../components/Verified.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";


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

            <div className="product-section-wrapper">
                <Product/>
            </div>

            <div className="product-section-wrapper-2">
                <Verified/>
            </div>

            <div className="product-section-wrapper">
                <FeaturedProjects />
            </div>
        </div>
    )
}