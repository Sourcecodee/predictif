import Elipse from '../assets/Ellipse 86.png';

const Boomakers = () => {
  return (
    <div className="flex-col h-[935px] mt-4 bg-[#EFF7FFB2] flex items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-3 text-[#001A32] font-[Roboto] text-[14px]">
            <img src={Elipse} alt="boomakers" className="w-[10px] h-[10px]" />
            Fully Integrated Point-of-sale System
        </div>
        <div className='w-[70%] h-[50%] flex items-center justify-center'>
            <p className='text-[poppins] text-6xl font-semibold text-[#001A32] mt-4 text-center'>
                The Hidden Tool Smart Bettors Use to Outsmart the Bookmakers
            </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 text-[#0101018F] font-[Roboto] text-[18px]">
            Predictivo™ assists thousands of game-loving bettors and traders in making smarter, data-driven betting decisions every day
        </div>
        <div></div>
    </div>
  )
}

export default Boomakers