import { Link } from "react-router-dom";
import image from "../../assets/others/authentication.png"
import { useForm } from "react-hook-form";

const Register = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { console.log(data) };

    return (
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
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500 mt-2">You Must Give A Name</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500 mt-2">Email is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="Password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: / (?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />

                                {/* {errors.password && <span className=" mt-2 text-rose-300">Password must be 6 digit</span>} */}
                                {errors.password?.type === 'minLength' && <p className=" mt-2 text-rose-300">Password must be 6 digit</p>}
                                {errors.password?.type === 'required' && <p className=" text-red-500">Password is required</p>}
                                {errors.password?.type === 'pattern' && <p className=" text-red-500">Password must have captial small letter </p>}
                                <label className="label">


                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="REgister" />
                            </div>
                            <p><small>Already Have An Account? <Link to="/login">Please Login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;