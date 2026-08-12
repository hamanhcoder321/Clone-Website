export default function StatCard({ icon: Icon, number, title, index }) {
    return (
        <div className={`stat-card stat-card-${index}`}>
            <div className="stat-header">
                <div className="stat-icon">
                    <Icon />
                </div>
                <div className="stat-number">
                    {number}
                </div>
            </div>
            <div className="stat-title">
                {title}
            </div>
        </div>
    );
}
