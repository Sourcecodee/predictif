import Chart from '../assets/chart-transaction.png';

const Receive = () => {
  return (
    <div className='flex gap-3 h-[780px] justify-center items-center mt-20 text-[#0101018F]'>
        
        <div className='w-1/2 flex flex-col items-center justify-center gap-10'>
            
            <div className='flex items-center justify-between flex-col gap-12 w-[70%]'>
                <div className='font-bold leading-[45px] text-[45px]'>Receive On-Time Match Alerts.</div>
                <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
             
            <div className='flex justify-between items-center w-[70%]'>

                <div className='flex flex-col items-start justify-center'>
                    
                    <div className="flex flex-row items-start justify-center gap-3 text-[#97060B] rounded-2xl font-[Roboto] text-[64px]">
                        25 %
                    </div>

                    <div className='flex items-start justify-center flex-col gap-4'>
                        <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Reduction in inventory holding costs stock management.</div>
                    </div>

                </div>

                <div className='flex flex-col items-start justify-center'>
                    
                    <div className="flex flex-row items-start justify-center gap-3 text-[#97060B] rounded-2xl font-[Roboto] text-[64px]">
                        15 %
                    </div>

                    <div className='flex items-start justify-center flex-col gap-4'>
                        <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Ensuring shorter queues and happier customers.</div>
                    </div>

                </div>

            </div>

        </div>

        <div className="flex items-center justify-center w-1/2 h-[661px] bg-[#D9D9D9]">
            <div>
                <img src={Chart} alt="Chart" />
            </div>
        </div>

    </div>
  )
}

export default Receive