import Planet from "../components/Planet";

import '../css/destination.css'

const Destination = () => {
    return (
        <div className="destination">
            <h1 className="destination__heading"><span className="destination__heading--dark">01</span> Pick your destination</h1>
            <Planet />
        </div>
    )
}

export default Destination;