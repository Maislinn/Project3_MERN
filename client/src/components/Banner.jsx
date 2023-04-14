import React from "react";

function ImageCard(props) {
    return (
        <div className="[width:33%] flex flex-row items-center gap-2">
            <div className="[width:50%]">
                <img
                    className="rounded "
                    src={props.img}
                    alt="icon"
                />
            </div>
            <div className="h-max rounded [color:#9c9897]">
                <p className="">{props.title}</p>
                <small>{props.description}</small>
            </div>
        </div>
    );
}

function Banner() {
    return (
        <div className="relative w-screen pt-10">
            <div className="flex justify-center">
                <img
                    className=" w-screen z-0 "
                    src="/imgs/Couple-with-Cat.png"
                    alt="couple with cat"
                />
            </div>
            <div className="absolute flex flex-row text-left top-5 p-4 [width:100%] h-30 z-10 rounded">
                <div className="[width:50%] flex flex-row ml-5">
                    {/* <p className="[font-size:4.2vw] [color:rgba(242,241,233)]">
                        Pet Pal
                    </p> */}
                </div>
            </div>
            {/* <div className="absolute  opacity-70 gap-3 flex flex-row text-left -bottom-0  p-4 [background-color:rgba(242,241,233)] [width:100%] [height:90px] z-10 rounded ">
                <ImageCard
                    img=""
                    title=""
                    description=""
                />
                <ImageCard
                    img=""
                    title=""
                    description=""
                />
                <ImageCard
                    img=""
                    title=""
                    description=""
                />
            </div> */}
        </div>
    );
}

export default Banner;
