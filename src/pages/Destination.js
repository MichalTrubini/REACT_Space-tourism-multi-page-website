import Planet from "../components/Planet";
import PageTitle from "../components/PageTitle";
import useWindowDimensions from '../functions/WindowDimensions';

import '../css/pages.css'

const Destination = () => {

    const { height } = useWindowDimensions();

    return (
        <div className="destination" style={{minHeight:height}}>
            <PageTitle><span className="pagetitle__heading--dark">01</span> Pick your destination</PageTitle>
            <Planet />
        </div>
    )
}

export default Destination;