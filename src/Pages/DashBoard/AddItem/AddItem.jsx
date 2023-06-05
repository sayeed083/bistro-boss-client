import { useForm } from "react-hook-form";




const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {


        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageURL = imageResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imageURL }
                    console.log(newItem);
                }
            })




    }


    return (
        <div>
            <h2 className="text-5xl text-center">Add An Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Recipie Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                {/* category */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select defaultValue="Pick one" {...register("category", { required: true })} className="select select-bordered">
                        <option disabled>Pick one</option>
                        <option>salad</option>
                        <option>dessert</option>
                        <option>pizza</option>
                        <option>soup</option>
                        <option>drinks</option>
                    </select>

                </div>

                {/* price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>


                {/* Recipie Details */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Bio"></textarea>
                </div>

                {/* File Input */}
                
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>

                <input className="btn btn-outline btn-error" type="submit" value="Add Item" />


            </form>
        </div>
    );
};

export default AddItem;