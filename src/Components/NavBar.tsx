import Logo from '../assets//7dee8f47f3105ee71915d5fe41d1436ea9788a62.png';

const NavBar = () => {
  return (
    
    <div className="flex container justify-between items-center p-2">
        
        <div className='w-[302px] h-[112px] ml-[48px] flex items-center justify-center'>
            <img src={Logo} alt="logo" className="w-30 h-30" />
        </div>
        
        <div className='ml-20 flex items-center justify-center'>
            <ul className='flex gap-16 text-black font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Feature</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='flex items-center justify-center bg-[#00008B] w-[137px] h-[47px] mr-8 rounded-md'>
            <p className='text-white'>Login</p>
        </div>
    </div>
    
  )
}

export default NavBar