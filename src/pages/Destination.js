import Planet from "../components/Planet";
import PageTitle from "../components/PageTitle";

import '../css/pages.css'

const Destination = () => {
    console.log(window.document.body.offsetHeight);
    return (
        <div className="destination">
            <PageTitle><span className="pagetitle__heading--dark">01</span> Pick your destination</PageTitle>
            <Planet />
        </div>
    )
}

export default Destination;