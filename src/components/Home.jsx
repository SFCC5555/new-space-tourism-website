import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  return (
    <section className='home absolute top-0 h-screen px-5 pt-28 pb-16 flex flex-col items-center text-center gap-12 sm:flex-row sm:justify-between sm:gap-2 sm:px-14 lg:px-32'>
        <section className='flex flex-col items-center gap-5 sm:w-1/2 sm:items-start sm:text-left' >
            <h3 className='font4 colorLight sm:text-2xl' >SO, YOU WANT TO ESCAPE FROM EARTH</h3>
            <h1 className='text-7xl font1 md:text-8xl' >  LAZARUS</h1>
            <p className='font2 colorLight sm:text-xl' >
The Lazarus Project is a critical interstellar mission in search of a new home for humanity. Brave astronauts explore potential planets to ensure our survival. Lazarus embodies hope for a sustainable future beyond Earth, our mission is to save you.</p>
        </section>
        <div className='flex items-center justify-center w-52 h-52 md:w-64 md:h-64 relative' >
          <div className='absolute exploreButtonContainer flex items-center justify-center w-32 h-32 sm:w-48 sm:h-48 rounded-full'>
            <Link to={'/DESTINATION'} >
              <div className='flex items-center justify-center text-2xl md:text-3xl font1 w-32 h-32 sm:w-48 sm:h-48 bg-white colorDark rounded-full cursor-pointer'>
                EXPLORE
              </div>
            </Link>
          </div>
        </div>

    </section>
  )
}

export {Home};