import React from "react";
import { carouselData } from "./CarouselData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Reviews() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div className="mt-20 mb-20 relative  [color:#979291]">
            <Carousel
                swipeable ={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                //   removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {carouselData.map((data) => {
                    return (
                        <div className="card p-5 [background-color:#f5bcb1] h-full m-1 rounded">
                            <img className=" rounded-md" src={data.image} alt="customer's trees" />
                            <p className="pt-5">{data.text}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default Reviews;
