import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImage from '../../../../mobile-site/assets/menu/banner3.jpg'
import desertImage from '../../../../mobile-site/assets/menu/dessert-bg.jpeg'
import saladImage from '../../../../mobile-site/assets/menu/salad-bg.jpg'
import soupImage from '../../../../mobile-site/assets/menu/soup-bg.jpg'
import pizzaImage from '../../../../mobile-site/assets/menu/pizza-bg.jpg'
import UseMenu from "../../Hocks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Home/Catagory/MenuCategory";



const Menu = () => {
    const [menu]= UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Misam kitchen | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our Menu"></Cover>
            {/* Main cover */}
          <SectionTitle
          subHeading={"Don't Miss"} heading={"Today's Offer"}
          ></SectionTitle>
          {/* Offered Menu items */}
          <MenuCategory items={offered}></MenuCategory>
          {/* Deserts Menu item */}
          
          <MenuCategory
           items={dessert} title={"Dessert"} coverImg={desertImage}
           ></MenuCategory>

          <MenuCategory
           items={salad} title={"Salad"} coverImg={saladImage}
           ></MenuCategory>

          <MenuCategory
           items={soup} title={"Soup"} coverImg={soupImage}
           ></MenuCategory>

          <MenuCategory
           items={pizza} title={"Pizza Menu"} coverImg={pizzaImage}
           ></MenuCategory>


        </div>
    );
};

export default Menu;