import Guys from '../assets/Frame 4763.png';
import Payment from '../assets/payment-1.png';

const Enhance = () => {
  return (
    <div className='flex gap-3 h-[780px] justify-center items-center relative top-10 mt-16 text-[#0101018F]'>
        
        <div className="flex items-center justify-center w-1/2">
            <img src={Guys} alt="Guys" className="w-[572px] h-[661px]" />
        </div>

        <div className='w-1/2 flex flex-col items-center justify-center gap-10'>
            
            <div className='flex items-center justify-start flex-col gap-4 w-[70%]'>
                <div className='font-bold leading-[45px] text-[45px]'>Enhance Shop Management Smoother and More Efficient</div>
                <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
             
            <div className='flex justify-between items-center w-[70%]'>

                <div className='flex flex-col items-start justify-center'>
                    
                    <div className="flex flex-row items-center justify-center gap-3 text-[#001A32] bg-[#97060B] p-2 py-1 rounded-2xl font-[Roboto] text-[14px]">
                        <img src={Payment} alt="Payment" className="w-[45px] h-[45px]" />
                    </div>

                    <div className='flex items-start justify-center flex-col gap-4'>
                        <div className='font-bold leading-[30.8px] text-[22px]'>Smooth Payments</div>
                        <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Duis aute irure dolor in velit reprehenderit in voluptate</div>
                    </div>

                </div>

                <div className='flex flex-col items-start justify-center'>
                    
                    <div className="flex flex-row items-center justify-center gap-3 text-[#001A32] bg-[#97060B] p-2 py-1 rounded-2xl font-[Roboto] text-[14px]">
                        <img src={Payment} alt="Payment" className="w-[45px] h-[45px]" />
                    </div>

                    <div className='flex items-start justify-center flex-col gap-4'>
                        <div className='font-bold leading-[30.8px] text-[22px]'>Convenient shopping</div>
                        <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Duis aute irure dolor in velit reprehenderit in voluptate</div>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Enhance