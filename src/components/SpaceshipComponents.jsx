import {data} from  '../data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SpaceshipComponents = ({d}) => {
  return (
    <>
      <h3 className="font4 md:text-2xl sm:self-start" ><span className="colorLight opacity-70" >03</span> SPACE LAUNCH 101</h3>
      <section className="w-full flex flex-col items-center gap-8 sm:flex-row-reverse sm:h-full sm:justify-between sm:items-center" >
          <picture className='w-full flex items-center justify-center sm:flex-shrink-0 sm:w-auto sm:h-full ' >
            <source media="(min-width: 640px)" srcSet={d.images.portrait} />
            <img className=" sm:h-60 md:h-96 " src={d.images.landscape} alt={d.name} />
          </picture>

          <section className='flex flex-col items-center gap-5 md:gap-12 sm:w-3/5 sm:max-w-md sm:flex-row' >
            <section className="flex items-center gap-5 sm:flex-col" >
              {data.technology.map((i,j)=><NavLink className={'navLink'} key={i.name} to={'/TECHNOLOGY/'+i.name.replace(' ','-')}>{j+1}</NavLink>)}
            </section>
            <div className='flex flex-col items-center gap-5 sm:items-start sm:text-left' >
                <h3 className='text-sm colorLight font1' >THE TERMINOLOGY...</h3>
                <h1 className='text-2xl font1 sm:text-5xl' >{d.name}</h1>
                <p className='font3 px-5 sm:px-0 sm:text-left colorLight' >{d.description}</p>
            </div>


          </section>

      </section>

    </>
  )
}

SpaceshipComponents.propTypes = { d: PropTypes.object }

export { SpaceshipComponents };