
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenus = () => {
    const [menu] = useMenu();
    const popularITems = menu.filter(foodItem => foodItem.category === 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularITems = data.filter(foodItem => foodItem.category === 'popular');
    //             setMenu(popularITems)
    //         })
    // }, [])








    return (
        <section className="mb-12">

            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitle>



            <div className="grid md:grid-cols-2 gap-8">
                {
                    popularITems.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>






        </section>
    );
};

export default PopularMenus;