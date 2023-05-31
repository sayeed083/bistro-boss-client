import OrderCard from "../../../Components/OrderCard/OrderCard";


const CombineOrder = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                        {
                            items.map(item => <OrderCard
                                key={item._id}
                                item={item}
                            ></OrderCard>)
                        }
                    </div>
            
        </div>
    );
};

export default CombineOrder;