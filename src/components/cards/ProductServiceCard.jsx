import { Link } from "react-router-dom";
import styles from "../cards/Card.module.css";

export default function ProductServiceCard({ data }) {
    return (
        <div className={`${styles['product-card']} ${styles['product-service-card']}`}>
            <img src={data.image} alt={data.name} className={`${styles['product-card-image']}`} />
            
            <div className={`${styles['product-card-content']}`}>
                <h3 className={`${styles['product-card-name']}`}>{data.name}</h3>

                <div className={`${styles['product-card-vendor-rating']}`}>
                    <span className={`${styles['product-card-vendor']}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        {data.vendor}
                    </span>
                    <span className={`${styles['product-card-rating-badge']}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        {data.rating?.toFixed(1)} ({data.reviews})
                    </span>
                </div>

                <div className={`${styles['product-card-badges']}`}>
                    {data.badges?.map((badge, idx) => (
                        <span key={idx} className={`${styles['product-badge']}`}>
                            <img src={badge.img} alt={badge.label} />
                            {badge.label}
                        </span>
                    ))}
                </div>

                <div className={`${styles['product-card-spacer']}`}></div>
                <div className={`${styles['product-card-divider']}`}></div>

                <div className={`${styles['product-card-price-moq']}`}>
                    <div className={`${styles['product-card-price-info']}`}>
                        <span className={`${styles['product-price-label']}`}>GIÁ THAM KHẢO</span>
                        <span className={`${styles['product-price-value']}`}>{data.price}</span>
                    </div>
                    <span className={`${styles['product-moq-value']}`}>MOQ: {data.moq}</span>
                </div>

                <div className={`${styles['product-card-actions']}`}>
                    <Link className={`${styles['btn-profile']}`} to={data.link || ""}>
                        CHI TIẾT 
                        <svg className={`${styles['btn-profile-arrow']}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
