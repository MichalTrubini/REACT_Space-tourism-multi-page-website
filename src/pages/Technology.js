import PageTitle from "../components/PageTitle";
import Transport from "../components/Transport";

const Technology = () => {
    console.log(window.innerHeight);

    const height = window.innerHeight;

    return (
        <div className="technology" style={{minHeight:height}}>
            <PageTitle><span className="pagetitle__heading--dark">03</span>space launch 101</PageTitle>
            <Transport/>
        </div>
        )
}

export default Technology;