import Product from "../components/Product";
import { UsersIcon, StarIcon, CalendarIcon, MapIcon } from "../components/Icon.jsx";
import "./Home.css";
import Verified from "../components/Verified.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import StatCard from "../components/StatCard.jsx";
import ProductsServices from "../components/ProductsServices.jsx";
import { Categories } from "../components/Categories.jsx";
import StrategicPartner from "../components/StrategicPartner.jsx";


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
                            {["Hoa & Decor", "Vật tư & Vật liệu", "Nhà rạp & Kết cấu", "Nội thất sự kiện", "LED & Trình chiếu"].map((cat, idx) => (
                                <span key={idx} className="hero-category-tag">{cat}</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="home-hero-stats">
                    <div className="stats-grid">
                        <StatCard icon={UsersIcon} number="2.500+" title="Nhà cung cấp đã xác thực" index={1} />
                        <StatCard icon={StarIcon} number="850" title="Đơn vị đã xác thực" index={2} />
                        <StatCard icon={CalendarIcon} number="12.000+" title="Sự kiện thành công" index={3} />
                        <StatCard icon={MapIcon} number="34" title="Tỉnh thành toàn quốc" index={4} />
                    </div>
                </div>
            </div>

            <SectionWrapper>
                <Product/>
            </SectionWrapper>

            <SectionWrapper variant={2}>
                <Verified/>
            </SectionWrapper>

            <SectionWrapper>
                <FeaturedProjects />
            </SectionWrapper>

            <SectionWrapper>
                <ProductsServices />
            </SectionWrapper>

            <SectionWrapper>
                <Categories />
            </SectionWrapper>
            
            <SectionWrapper>
                <StrategicPartner />
            </SectionWrapper>
        </div>
    )
}