import "./StrategicPartner.css";

export default function StrategicPartner() {
    return (
        <div className="view-width">
            <div className="strategic-partner-banner">
                <div className="strategic-partner-content">
                    <h2 className="strategic-partner-title">Tìm đối tác phù hợp cho dự án<br />tiếp theo?</h2>
                    <p className="strategic-partner-subtitle">
                        Hãy để chúng tôi giúp bạn kết nối với những đối tác uy tín nhất dựa trên nhu cầu và<br />ngân sách của bạn.
                    </p>
                    
                    <div className="strategic-partner-actions">
                        <button className="btn-find-partner">
                            Tìm kiếm nhà cung cấp /<br />đơn vị sự kiện
                        </button>
                        <button className="btn-explore-projects">
                            Khám phá danh sách dự<br />án / Sản phẩm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}