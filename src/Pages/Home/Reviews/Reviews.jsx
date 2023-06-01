import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


import "swiper/css";
import "swiper/css/navigation";


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <section className="my-20">

            <SectionTitle
                subHeading={"What Our Client Say ?"}
                heading={"Testimonials"}
            ></SectionTitle>


            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                        key={review._id}
                        >
                            <div className="m-24">
                                <p>
                                  {review.details}  
                                </p>
                                <h3 className="text-2xl ">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

            </Swiper>



        </section>
    );
};

export default Reviews;