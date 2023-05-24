import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-12 my-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           <div className="mx-auto w-2/12">
           <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mb-4 ">Order Now</button>
            </Link>
           </div>
        </div>
    );
};

export default MenuCategory;