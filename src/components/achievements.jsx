
import hotel from "../assets/hotel.jpg";

function Achievements() {
    return (
        <div className="relative">
            <h1 className="font-bold text-4xl m-3 md:p-5 text-white">---- India's Best Cuisine ----</h1>
            <div className="absolute top-[800px] left-0 w-full grid grid-cols-4 md:gap-5 text-white">
                <div className="col-span-1  m-5 relative group hidden md:block">
                    <p className="text-white absolute bottom-0 h-screen left-0 right-0  md:p-2 bg-black bg-opacity-50 hidden group-hover:block">Ranked as World's Strongest Hotel Brand & India's Strongest Brand in 2024</p>
                    2024
                </div>
                <div className="col-span-1  m-5 relative group hidden md:block">
                    <p className="text-white absolute bottom-0 h-screen left-0 right-0 md:p-2 bg-black bg-opacity-50 hidden group-hover:block">Ranked as India's Strongest Brand in 2023</p>
                    2023
                </div>
                <div className="col-span-1  m-5 relative group hidden md:block">
                    <p className="text-white absolute bottom-0 h-screen left-0 right-0 md:p-2 bg-black bg-opacity-50 hidden group-hover:block">Ranked as World's Strongest Hotel Brand & India's Strongest Brand in 2022</p>
                    2022
                </div>
                <div className="col-span-1 m-5 relative group hidden md:block">
                    <p className="text-white absolute bottom-0 h-screen left-0 right-0 md:p-2 bg-black bg-opacity-50 hidden group-hover:block">Ranked as World's Strongest Hotel Brand in 2021</p>
                    2021
                </div>
            </div>
            <p className="md:absolute m-3 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, cupiditate! Necessitatibus accusamus ratione incidunt doloribus inventore quae et vel, error pariatur. Totam distinctio eos cupiditate atque impedit, dignissimos vitae ab ratione optio?</p>
            <img className="m-5 z-0" src={hotel} alt="" />
        </div>
    );
}

export default Achievements;
