import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";


const OrderCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddtoCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItems = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }

    }
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddtoCart(item)} className="btn btn-primary">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;