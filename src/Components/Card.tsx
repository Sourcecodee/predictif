interface CardProps {
  textOne: string;
  textTwo: string;
  width?: string;
  height?: string;
    border?: string;
    flex?: string;
    justify?: string;
    items?: string;
    gap?: string;
    vBoder?: string;
    sizeOne: string;
}

const Card = ({textOne, textTwo, width, height, border, flex, justify, items, gap, vBoder, sizeOne}: CardProps) => {
  return (
    <div className={`flex justify-center items-center p-6 rounded-lg w-[${width}] h-[${height}] ${flex} ${justify} ${items} ${vBoder} gap-[${gap}] border-[${border}]`}>

        <div className='flex items-start justify-between flex-col gap-12'>
            <div className= 'font-bold leading-[45px] text-[54px] text-[#001A32]'>{textOne}</div>
            <div className='text-[16px] leading-[27.2px] font-[Roboto]'>{textTwo}</div>
        </div>

    </div>
  )
}

export default Card