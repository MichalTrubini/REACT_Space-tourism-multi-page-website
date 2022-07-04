import '../css/home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home__intro">
                <p className="home__subheading">So, you want to travel to</p>
                <h1 className="home__heading">Space</h1>
                <p className="home__about">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home__link-container">
                <a href="something" className="home__link">Explore</a>
            </div>
        </div>
    )
}

export default Home;