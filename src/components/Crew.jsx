import '../styles/Crew.css';
import { Outlet } from 'react-router-dom';

const Crew = () => {
  return (
    <section className='crew w-full absolute top-0 min-h-screen sm:h-screen px-5 pt-36 pb-16 sm:pb-0 flex flex-col items-center text-center gap-12 sm:gap-6 sm:px-14 lg:px-36'>
      <Outlet />
    </section>
  )
}

export {Crew};