import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/others/authentication.png"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updatedUserInfo } = useContext(AuthContext)

    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const createdTheUser = result.user;
                console.log(createdTheUser);
                updatedUserInfo(data.name, data.photoURL)
                    .then(() => {

                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {

                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-start",
                                        icon: "success",
                                        title: "Created and Updated User",
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }


                            })


                    })
                    .catch(error => console.log(error))
            })

    };

    return (
        <>
            <div>
                <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("${image}")` }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })}
                                        name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500 mt-2">You Must Give A Name</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URl</span>
                                    </label>
                                    <input type="text" {...register("photoURL")}
                                        name="name" placeholder="Photo URL" className="input input-bordered" />
                                    {/* {errors.photoURL && <span className="text-red-500 mt-2">You Must Give A photo</span>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500 mt-2">Email is Required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="password" className="input input-bordered" />

                                    {/* {errors.password && <span className=" mt-2 text-rose-300">Password must be 6 digit</span>} */}
                                    {errors.password?.type === 'minLength' && <p className=" mt-2 text-rose-300">Password must be 6 digit</p>}
                                    {errors.password?.type === 'required' && <p className=" text-red-500">Password is required</p>}
                                    {errors.password?.type === 'pattern' && <p className=" text-red-500">Password must have captial small letter </p>}
                                    <label className="label">


                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                                <p><small>Already Have An Account? <Link to="/login">Please Login</Link></small></p>
                                <SocialLogin></SocialLogin>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Register;