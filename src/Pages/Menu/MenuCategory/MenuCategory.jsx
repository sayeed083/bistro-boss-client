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

        </div>
    );
};

export default MenuCategory;