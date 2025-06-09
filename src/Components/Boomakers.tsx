import Elipse from '../assets/Ellipse 86.png';
import Macbook from '../assets/Macbbok Air.png';

const Boomakers = () => {
  return (
    <div className="flex-col rounded-3xl h-[935px] mt-4 gap-10 bg-[#EFF7FFB2] flex items-center justify-center [70%]">
        
        <div className="flex mt-24 flex-row items-center justify-center gap-3 text-[#001A32] bg-white p-2 py-1 rounded-2xl font-[Roboto] text-[14px]">
            <img src={Elipse} alt="Elipse" className="w-[10px] h-[10px]" />
            Fully Integrated Point-of-sale System
        </div>
        
        <div className='w-[70%] flex items-center justify-center'>
            <p className='text-[poppins] text-6xl font-semibold text-[#001A32] mt-4 text-center'>
                The Hidden Tool Smart Bettors Use to Outsmart the Bookmakers
            </p>
        </div>
        
        <div className="flex w-[35%] text-center flex-row items-center justify-center gap-3 text-[#0101018F] font-[Roboto] text-[18px]">
            Predictivo™ assists thousands of game-loving bettors and traders in making smarter, data-driven betting decisions every day
        </div>
        
        <div className='flex gap-4 items-center justify-center'>
            
            <div className='flex items-center justify-center bg-[#97060B] w-[137px] h-[47px] mr-8 rounded-md'>
                <p className='text-white'>Login</p>
            </div>

            <div className='flex items-center justify-center bg-[#ffffff] border border-[#00008B] w-[137px] h-[47px] mr-8 rounded-md'>
                <p className='text-[#00008B]'>Login</p>
            </div>

        </div>

        <div className="flex items-center justify-center relative top-12">
            <img src={Macbook} alt="Macbook" className="w-[731px] h-[435.14px]" />
        </div>

    </div>
  )
}

export default Boomakers