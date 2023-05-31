import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularMenus from "../PopularMenus/PopularMenus";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <HomeBanner></HomeBanner>
            <Category></Category>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;