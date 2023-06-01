import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            { title && <Cover image={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 my-5">Order Your Favourite now</button></Link>  

        </div>
    );
};

export default MenuCategory;