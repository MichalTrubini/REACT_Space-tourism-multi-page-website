import Members from "../components/Members";
import PageTitle from "../components/PageTitle";
import useWindowDimensions from '../functions/WindowDimensions';

import '../css/pages.css'

const Crew = () => {

    const { height } = useWindowDimensions();
    
    return (
    <div className="crew"  style={{minHeight:height}}>
        <PageTitle><span className="pagetitle__heading--dark">02</span> meet your crew</PageTitle>
        <Members />
    </div>
    )
}

export default Crew;