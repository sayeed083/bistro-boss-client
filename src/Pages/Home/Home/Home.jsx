import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularMenus from "../PopularMenus/PopularMenus";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Category></Category>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
        </div>
    );
};

export default Home;