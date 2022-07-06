import Planet from "../components/Planet";
import PageTitle from "../components/PageTitle";

import '../css/pages.css'

const Destination = () => {
    console.log(window.document.body.offsetHeight);

    const height = window.innerHeight;

    return (
        <div className="destination" style={{minHeight:height}}>
            <PageTitle><span className="pagetitle__heading--dark">01</span> Pick your destination</PageTitle>
            <Planet />
        </div>
    )
}

export default Destination;