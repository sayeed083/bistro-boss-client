import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(foodItem => foodItem.category === 'dessert');
    const soup = menu.filter(foodItem => foodItem.category === 'soup');
    const salad = menu.filter(foodItem => foodItem.category === 'salad');
    const pizza = menu.filter(foodItem => foodItem.category === 'pizza');
    const offered = menu.filter(foodItem => foodItem.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={menuImage} title="Our Menu"></Cover>
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today Offers"
            >  </SectionTitle>

            {/* Offered Items */}
            <MenuCategory
            items={offered}
            ></MenuCategory>

            {/* Desserts */}
            <MenuCategory items={desserts} title="Desserts" coverImg={dessertImage}></MenuCategory>
            {/* Soup */}
            <MenuCategory items={soup} title="soups" coverImg={soupImage}></MenuCategory>
            {/* Salad */}
            <MenuCategory items={salad} title="salads" coverImg={saladImage}></MenuCategory>
            {/* Pizza */}
            <MenuCategory items={pizza} title="pizzas" coverImg={pizzaImage}></MenuCategory>



        </div>
    );
};

export default Menu;