export default function Input({
    label,
    value,
    onChange,
    placeholder,
    type="text",
    error,
    name,
}) {
    return (
        <div className="input-group">
            {label && <label className="input-label">{label}</label>}

            <input 
                type={type} 
                className={`input ${error ? "input-error" : ""}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
            />

            {error && <p className="input-error-message">{error}</p>}
        </div>
    )
}