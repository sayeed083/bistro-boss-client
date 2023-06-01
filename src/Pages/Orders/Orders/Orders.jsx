import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import CombineOrder from "../CombineOrder/CombineOrder";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Orders = () => {
    const categories = ['dessert', 'soup', 'salad', 'pizza', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [foodIndex, setFoodIndex] = useState(initialIndex)

    const [menu] = useMenu()


    // console.log(category);
    const desserts = menu.filter(foodItem => foodItem.category === 'dessert');
    const soup = menu.filter(foodItem => foodItem.category === 'soup');
    const salad = menu.filter(foodItem => foodItem.category === 'salad');
    const pizza = menu.filter(foodItem => foodItem.category === 'pizza');
    const drinks = menu.filter(foodItem => foodItem.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover image={orderCover} title="Order Food Now"></Cover>
            <Tabs defaultIndex={foodIndex} onSelect={(index) => setFoodIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <CombineOrder items={desserts}></CombineOrder>
                </TabPanel>
                <TabPanel>
                    <CombineOrder items={soup}></CombineOrder>
                </TabPanel>
                <TabPanel>
                    <CombineOrder items={salad}></CombineOrder>
                </TabPanel>
                <TabPanel>
                    <CombineOrder items={pizza}></CombineOrder>
                </TabPanel>
                <TabPanel>
                    <CombineOrder items={drinks}></CombineOrder>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Orders;