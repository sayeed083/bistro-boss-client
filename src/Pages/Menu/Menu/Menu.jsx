import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg"
import PopularMenus from "../../Home/PopularMenus/PopularMenus";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={menuImage} title="Our Menu"></Cover>

            <PopularMenus></PopularMenus>


        </div>
    );
};

export default Menu;