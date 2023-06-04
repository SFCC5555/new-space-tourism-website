import {data} from  '../data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CrewMembers = ({d}) => {
  return (
    <>
      <h3 className="font4 md:text-2xl sm:self-start" ><span className="colorLight opacity-70" >02</span> MEET YOUR CREW</h3>
      <section className="w-full flex flex-col items-center gap-8 sm:flex-row-reverse sm:h-full sm:justify-between" >
          <div className='w-full borderBottom1px flex items-center justify-center sm:flex-shrink-0 sm:w-auto md:self-end md:items-end sm:h-full ' >
            <img className="h-60 md:h-96 " src={d.images.png} alt={d.name} />
          </div>

          <section className='flex flex-col items-center gap-5 sm:items-start sm:w-3/5 sm:max-w-sm' >
            <section className="flex items-center gap-5 sm:order-1" >
              {data.crew.map(i=><NavLink className={'navLink'} key={i.name} to={'/CREW/'+i.name.replace(' ','-')} />)}
            </section>
            <h3 className='text-sm colorLight font1 sm:text-2xl' >{d.role}</h3>
            <h1 className='text-2xl font1 sm:text-5xl' >{d.name}</h1>
            <p className='font3 sm:text-left sm:mb-20' >{d.bio}</p>

          </section>

      </section>

    </>
  )
}

CrewMembers.propTypes = { d: PropTypes.object }

export {CrewMembers};
