import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [cart, refetch] = useCart()
    //How Does Reduce Work ?
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    
    


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="uppercase font-serif flex justify-evenly items-center h-16">
                <h2 className="text-center text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-center text-3xl">Total Items: ${total}</h2>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto w-[720px]">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th>
                                SI No
                            </th>
                            <th>Food</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) =>
                            <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost text-xl bg-lime-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)}


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default MyCart;