import { Link } from "react-router-dom";
import "./Card.css";

export default function ProductServiceCard({ data }) {
    return (
        <div className="product-card">
            <img src={data.image} alt={data.name} className="product-card-image" />
            
            <div className="product-card-content">
                <h3 className="product-card-name">{data.name}</h3>

                <div className="product-card-vendor-rating">
                    <span className="product-card-vendor">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        {data.vendor}
                    </span>
                    <span className="product-card-rating-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        {data.rating?.toFixed(1)} ({data.reviews})
                    </span>
                </div>

                <div className="product-card-badges">
                    {data.badges?.map((badge, idx) => (
                        <span key={idx} className="product-badge">
                            <img src={badge.img} alt={badge.label} />
                            {badge.label}
                        </span>
                    ))}
                </div>

                <div className="product-card-spacer"></div>
                <div className="product-card-divider"></div>

                <div className="product-card-price-moq">
                    <div className="product-card-price-info">
                        <span className="product-price-label">GIÁ THAM KHẢO</span>
                        <span className="product-price-value">{data.price}</span>
                    </div>
                    <span className="product-moq-value">MOQ: {data.moq}</span>
                </div>

                <div className="product-card-actions">
                    <Link className="btn-profile" to={data.link || ""}>
                        CHI TIẾT 
                        <svg className="btn-profile-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
