import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const GigSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#dcdcdc" highlightColor="#c1c1c1">
            <div className="flex flex-col gap-[20px]">
                <div className="w-[276px] h-[165px]">
                    <Skeleton count={1} height={"100%"} width={"100%"} />
                </div>

                <div className="flex justify-start items-start gap-[10px]">
                    <div className="w-[40px] h-[40px] rounded-[50%] ">
                        <Skeleton count={1} height={"100%"} width={"100%"} borderRadius={"50px"} />
                    </div>
                    <div className="w-[70%] h-[15px]">
                        <Skeleton count={1} height={"100%"} width={"100%"} />
                        <Skeleton count={1} height={"100%"} width={"70%"} />
                    </div>
                </div>

                <div className="flex justify-end items-center mt-[15px]">


                    <div className="w-[120px] h-[30px] rounded-full">
                        <Skeleton count={1} height={"100%"} width={"100%"} borderRadius={"50px"} />

                    </div>


                </div>
            </div>

        </SkeletonTheme>
    );
};

export default GigSkeleton;