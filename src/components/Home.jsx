import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  return (
    <section className='home absolute top-0 h-screen px-5 pt-28 flex flex-col items-center text-center gap-12 sm:flex-row sm:justify-between sm:gap-2 sm:px-14 md:px-24'>
        <section className='flex flex-col items-center gap-5 sm:w-1/2 sm:items-start sm:text-left' >
            <h3 className='font2 colorLight sm:text-2xl' >SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className='text-8xl font1 md:text-9xl' >SPACE</h1>
            <p className='font2 colorLight sm:text-xl' >Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </section>
        <div className='flex items-center justify-center w-60 h-60 md:w-72 md:h-72' >
          <div className='exploreButtonContainer flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full' >
          <Link to={'/DESTINATION'} >
            <div className='flex items-center justify-center text-2xl md:text-3xl font1 w-40 h-40 md:w-52 md:h-52 bg-white colorDark rounded-full cursor-pointer'>
              EXPLORE
            </div>
          </Link>
          </div>
        </div>

    </section>
  )
}

export {Home};