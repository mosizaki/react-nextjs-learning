export default function Card({ children, title, subtitle}) {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
            <div className="card-content">{children}</div>
        </div>
    )
}