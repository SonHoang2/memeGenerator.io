export default function Card (props) {
    return (
        <div className="card">
            <div className="card-container--img">
                <img className="card--img" src={props.imageUrl}/>
            </div>
            <div className="card-content">
                <div className="card-location">
                    <img src="/location-dot-solid.svg" className="card-l--icon" />
                    <p className="card-l--country">{props.location}</p>
                    <a href={props.googleMapsUrl} className="card-l--link" target='_blank'>View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <h4 className="card-date">{props.startDate} - {props.endDate}</h4>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}