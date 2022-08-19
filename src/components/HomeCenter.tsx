
import { withRouter } from "react-router-dom";
import Car from 'images/Car.svg';

function HomeCenter() {
    return (
        <div className="">
            <div className="flex w-[100%] h-[189px] bg-[#123F68] items-center">
                <div className="px-[20px]">
                    <div className="text-white font-normal leading-[23px]">Order your road tax online and we’ll deliver it to you.</div>
                    <div className="text-[#00B0FF] uppercase font-bold leading-[18px] tracking-wider text-xs mt-[12px]">How it works</div>
                </div>
                <img className="h-[165px] w-[50%] self-end" src={Car} alt="car placeholder" />
            </div>
        </div>);
}

export default withRouter(HomeCenter);