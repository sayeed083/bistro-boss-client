import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularMenus from "../PopularMenus/PopularMenus";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Category></Category>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;