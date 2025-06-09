import Card from './Card'


const Powerful = () => {
  return (
    <div className='flex flex-col gap-3 h-[780px] justify-center items-center mt-20 text-[#0101018F]'>

        <div className='flex items-center justify-between text-center flex-col gap-12 w-[50%]'>
            <div className='font-bold leading-[45px] text-[45px] text-[#001A32]'>A powerful betting tool to gain an edge over the bookmakers</div>
            <div className='text-[16px] leading-[27.2px] font-[Roboto]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</div>
        </div>

        <Card
            textOne="Data-Driven Decision-Making"
            textTwo="Created by football bettors for football bettors, Footy Amigo is packed with everything you will ever need to win! PreMatch & InPlay Alerts, 15+ years historical football stats and data from 1500+ leagues, Arfiticial Intelligence and Machine Learning algorthims, Highly profitable daily matches, Value bets and Bet Builder, The Footy Amigos Community and much more!"
            border="#001A32"
            vBoder='border'
            width="50%"
            sizeOne={56}
        />

    </div>
  )
}

export default Powerful