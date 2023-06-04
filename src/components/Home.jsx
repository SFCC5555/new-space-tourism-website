import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home absolute top-0 h-screen px-5 pt-32 flex flex-col items-center text-center gap-20'>
        <section>
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className='text-8xl' >SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </section>
        <div className='flex items-center justify-center w-80 h-80 rounded-full bg-white/0 hover:w-80 hover:h-80 hover:bg-white/50 transition duration-1000'>
          <div className='flex items-center justify-center w-60 h-60 bg-white text-black rounded-full cursor-pointer'>
              <Link to={'/DESTINATION'} >EXPLORE</Link>
          </div>
        </div>

    </section>
  )
}

export {Home};