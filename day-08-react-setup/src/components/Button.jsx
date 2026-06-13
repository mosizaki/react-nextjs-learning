function Button ({text, type}) {
    return <button className={`button ${type}`}>{text}</button>
}

export default Button