import { Link } from "react-router-dom";
import "./Card.css";

export default function ProjectCard({ data }) {
    return (
        <div className="product-card">
            <span className="product-image-label">{data.imageLabel}</span>
            <img src={data.image} alt={data.name} className="product-card-image" />
            
            <div className="product-card-content">
                <h3 className="product-card-name">{data.name}</h3>

                {/* Company Name */}
                <div className="product-card-custome">
                    <svg width="30" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[14px] stroke-[#4A4A4A] shrink-0 relative -top-[0.5px]">
                        <path d="M13.125 14.625V13.125C13.125 12.3293 12.8089 11.5663 12.2463 11.0037C11.6837 10.4411 10.9206 10.125 10.125 10.125H4.125C3.32935 10.125 2.56629 10.4411 2.00368 11.0037C1.44107 11.5663 1.125 12.3293 1.125 13.125V14.625M10.125 4.125C10.125 5.78185 8.78185 7.125 7.125 7.125C5.46815 7.125 4.125 5.78185 4.125 4.125C4.125 2.46815 5.46815 1.125 7.125 1.125C8.78185 1.125 10.125 2.46815 10.125 4.125Z" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className="custome">{data.customerName}</span>
                </div>
                
                {/* Meta Information (Date, Location, Guests) */}
                <div className="product-card-meta">
                    <span className="product-card-date">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        <span>{data.date}</span>
                    </span>
                    <span className="product-card-location">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        <span>{data.location}</span>
                    </span>
                    <span className="product-card-guests">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        <span>{data.guests}</span>
                    </span>
                </div>

                {/* Category Badges */}
                <div className="product-card-badges">
                    {data.badges?.map((badgeItem, idx) => {
                        if (Array.isArray(badgeItem)) {
                            return (
                                <div key={idx} style={{ display: 'flex', flexWrap: 'nowrap', gap: '2px', width: '55%' }}>
                                    {badgeItem.map((bage, i) => (
                                        <span key={i} className="product-badge">
                                            <img src={bage.img} alt={bage.label} />
                                            {bage.label}
                                        </span>
                                    ))}
                                </div>
                            );
                        }
                        return (
                            <span key={idx} className="product-badge">
                                <img src={badgeItem.img} alt={badgeItem.label} />
                                {badgeItem.label}
                            </span>
                        );
                    })}
                </div>

                {/* Description */}
                <p className="product-card-desc">
                    {data.description}
                </p>

                {/* Call to Action */}
                <div className="product-card-actions">
                    <Link className="btn-profile" to={data.link || ""}>
                        XEM CHI TIẾT
                    </Link>
                </div>
            </div>
        </div>
    );
}

