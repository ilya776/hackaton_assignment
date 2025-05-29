import img from '@/assets/banner.jpg'

const MainBanner = () => {
    return <div className={'w-[45vw] mt-10 h-[50vh] rounded-[10px] bg-white'}>
        <img src={img} className='oject-cover rounded-[10px] w-full h-full'/>
    </div>
}

export default MainBanner;