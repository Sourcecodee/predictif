import Guys from '../assets/Frame 4763.png';

const Enhance = () => {
  return (
    <div className='flex gap-3 h-[750px] justify-center items-center mt-16'>
        
        <div className="flex items-center justify-center relative top-12 w-1/2">
            <img src={Guys} alt="Guys" className="w-[572px] h-[661px]" />
        </div>

        <div className='w-1/2'>
            <div className='flex items-center justify-center flex-col gap-4 w-[70%]'>
                <p className='font-bold leading-[45px] text-[45px]'>Enhance Shop Management Smoother and More Efficient</p>
                <div className='text-[16px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
            
            <div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>
  )
}

export default Enhance