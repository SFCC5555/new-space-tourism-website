import '../styles/Destination.css';
import { Outlet } from 'react-router-dom';

const Destination = () => {
  return (
    <section className='destination w-full absolute top-0 min-h-screen sm:h-screen px-5 pt-20 sm:pt-28 pb-16 flex flex-col sm:flex-row items-center text-center sm:text-left gap-12 sm:gap-2 sm:px-14 lg:px-36 sm:justify-between'>
      <Outlet />
    </section>
  )
}

export {Destination};