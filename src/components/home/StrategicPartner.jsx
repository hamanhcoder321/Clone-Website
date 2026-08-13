import styles from "./StrategicPartner.module.css";
import SectionWrapper from "../common/SectionWrapper.jsx";

export default function StrategicPartner() {
    return (
        <SectionWrapper>
            <div className="view-width">
                <div className={styles['strategic-partner-banner']}>
                    <div className={styles['strategic-partner-content']}>
                        <h2 className={styles['strategic-partner-title']}>Tìm đối tác phù hợp cho dự án<br />tiếp theo?</h2>
                        <p className={styles['strategic-partner-subtitle']}>
                            Hãy để chúng tôi giúp bạn kết nối với những đối tác uy tín nhất dựa trên nhu cầu và<br />ngân sách của bạn.
                        </p>
                        
                        <div className={styles['strategic-partner-actions']}>
                            <button className={styles['btn-find-partner']}>
                                Tìm kiếm nhà cung cấp /<br />đơn vị sự kiện
                            </button>
                            <button className={styles['btn-explore-projects']}>
                                Khám phá danh sách dự<br />án / Sản phẩm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}