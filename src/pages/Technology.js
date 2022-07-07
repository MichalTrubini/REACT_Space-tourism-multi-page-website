import PageTitle from "../components/PageTitle";
import Transport from "../components/Transport";
import useWindowDimensions from '../functions/WindowDimensions';

const Technology = () => {

    const { height } = useWindowDimensions();

    return (
        <div className="technology" style={{minHeight:height}}>
            <PageTitle className="pagetitle__heading--fix"><span className="pagetitle__heading--dark">03</span>space launch 101</PageTitle>
            <Transport/>
        </div>
        )
}

export default Technology;