import '../styles/Crew.css';
import { Outlet } from 'react-router-dom';

const Crew = () => {
  return (
    <section className='crew w-full absolute top-0 sm:h-screen px-5 pt-28 pb-16 sm:pb-0 flex flex-col items-center text-center gap-12 sm:px-14 md:px-20'>
      <Outlet />
    </section>
  )
}

export {Crew};