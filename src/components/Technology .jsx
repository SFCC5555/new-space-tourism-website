import { Outlet } from 'react-router-dom';
import '../styles/Technology.css';

const Technology = () => {
  return (
    <section className='technology w-full absolute top-0 min-h-screen h-screen pt-28 sm:pt-36 pb-16 sm:pb-5 flex flex-col items-center text-center gap-6 sm:gap-2 sm:pl-14 lg:pl-36'>
      <Outlet />
    </section>
  )
}

export {Technology};