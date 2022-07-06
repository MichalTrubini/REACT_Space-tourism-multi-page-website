import Members from "../components/Members";
import PageTitle from "../components/PageTitle";

import '../css/pages.css'

const Crew = () => {
    console.log(window.document.body.offsetHeight);

    return (
    <div className="crew">
        <PageTitle><span className="pagetitle__heading--dark">02</span> meet your crew</PageTitle>
        <Members />
    </div>
    )
}

export default Crew;