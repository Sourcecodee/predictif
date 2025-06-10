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
    bg?: string
}

const Card = ({textOne, textTwo, bg, width, height, border, flex, justify, items, gap, vBoder, sizeOne}: CardProps) => {
  return (
    <div className={`flex justify-center items-center p-6 rounded-lg w-[${width}] h-[${height}] ${flex} ${justify} ${items} ${vBoder} gap-[${gap}] border-[${border}]`} style={{background: bg}}>

        <div className='flex items-start justify-between flex-col gap-8'>
            <div className= {'font-bold leading-[45px]'} style={{fontSize: sizeOne}}>{textOne}</div>
            <div className='text-[16px] leading-[27.2px] font-[Roboto]'>{textTwo}</div>
        </div>

    </div>
  )
}

export default Card