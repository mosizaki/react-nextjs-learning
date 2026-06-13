import Button from './Button'

function Card ({title, description, buttonText}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <Button text={buttonText}/>

            <Button text="Save" type="primary" />
            <Button text="Cancel" type="secondary" />
            <Button text="Delete" type="danger" />
        </div>
    )
}

export default Card