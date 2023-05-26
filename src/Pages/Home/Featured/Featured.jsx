import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import "./Featured.css"


const Featured = () => {
    return (
        <div className="featured-background bg-fixed text-white pt-8 my-20">

            <SectionTitle
                subHeading={"Check it Out"}
                heading={"Featured Items"}
            ></SectionTitle>

            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-8 px-16">
                <div>
                    <img src={featuredImage} alt="" />

                </div>
                <div className="md:ml-10">
                    <p>Augest 20, 2023</p>
                    <p className="uppercase">Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa earum doloribus quo dolor eum deleniti asperiores temporibus nam officia nobis. Eligendi soluta quo asperiores, sed aperiam sint neque officia inventore ratione quibusdam magni praesentium tempore perspiciatis ipsum rerum nobis mollitia.</p>
                    <button className="btn btn-outline border-0 border-b-4 my-5">Order now</button>
                </div>
            </div>















        </div>
    );
};

export default Featured;