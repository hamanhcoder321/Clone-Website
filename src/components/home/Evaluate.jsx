import styles from "./Evaluate.module.css";
import cardStyles from "../cards/Card.module.css";
import SectionWrapper from "../common/SectionWrapper.jsx";
export default function Evaluate() {
    return (
        <SectionWrapper bgColor="#F1F3F5">
            <div className={`${cardStyles['view-width']}`}>
                <h2 className={styles['evaluate-partner-title']}>Đánh giá từ khách hàng & đối tác</h2>
                <div className={styles['evaluate-partner-banner']}>
                    <div className={styles['evaluate-partner-content']}>

                        <div className={styles['evaluate-partner-actions']}>
                            <h2>Chưa có đánh giá nào</h2>
                            <span>Hệ thống chưa nhận được đánh giá nào từ khách hàng & đối tác.</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}