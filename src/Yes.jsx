import { useState } from "react";

const Yes = () => {

    const [time, setTime] = useState('');

    function calculateTimeDifference(startDate) {
        const now = new Date();
        let diffInSeconds = Math.floor((now - startDate) / 1000);

        const years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));
        diffInSeconds %= (365 * 24 * 60 * 60);

        const months = Math.floor(diffInSeconds / (30 * 24 * 60 * 60));
        diffInSeconds %= (30 * 24 * 60 * 60);

        const days = Math.floor(diffInSeconds / (24 * 60 * 60));
        diffInSeconds %= (24 * 60 * 60);

        const hours = Math.floor(diffInSeconds / (60 * 60));
        diffInSeconds %= (60 * 60);

        const minutes = Math.floor(diffInSeconds / 60);
        const seconds = diffInSeconds % 60;

        return { years, months, days, hours, minutes, seconds };
    }

    function updateTime() {
        const startDate = new Date("2022-07-22");
        const { years, months, days, hours, minutes, seconds } = calculateTimeDifference(startDate);

        const result = (` 
          ${years} years, ${months} months, ${days} days, 
          ${hours} hours, ${minutes} minutes, ${seconds} seconds
          `);

        setTime(result);

        // Update every 1 second
        setTimeout(updateTime, 1000);
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <span className="relative top-[-50px] z-10 font-semibold">
                Time since I asked you to be my lil Chantal:
            </span>
            <span className="boxShadowTime relative z-10 top-[-50px] font-bold text-center text-xl italic border rounded-md m-3 p-2 ">
                {
                    time ? time : updateTime()
                }
            </span>
            </div>
                <img className="w-40 h-40 relative top-[-40px]" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div>
                <div className="heart relative top-[55%]">
                    <p className="z-10 rotate-45 relative right-0 left-6 text-center w-full lovers-quarrel-regular text-7xl">my forever woman</p>
                    <p className="z-10 rotate-45 relative top-[13px] bottom-[-80px] right-[4rem] text-white text-center w-full font-semibold text-[0.7rem]">I Love You</p>
                </div>

            </div>            
        </div>
    );
};
export default Yes;