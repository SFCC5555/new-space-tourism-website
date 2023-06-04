import { NavLink } from "react-router-dom";
import {data} from  '../data';
import PropTypes from 'prop-types';

const DestinationPlaces = ({d}) => {
  return (
    <>
        <section className="flex flex-col items-center sm:items-start gap-12 flex-shrink-0" >
            <h3 className="font4 md:text-2xl" ><span className="colorLight opacity-70" >01</span> PICK YOUR DESTINATION</h3>
            <img className="w-40 h-40 sm:w-60 sm:h-60  md:w-80 md:h-80" src={d.images.png} alt={d.name} />
        </section>

        <section className="flex flex-col items-center sm:items-start gap-5 sm:w-1/2 sm:max-w-sm" >
            <section className="flex items-center gap-5" >
              {data.destinations.map(i=><NavLink className={'navLink font2'} key={i.name} to={'/DESTINATION/'+i.name.toUpperCase()} >{i.name.toUpperCase()}</NavLink>)}
            </section>
            <h1 className="text-5xl font1 sm:text-7xl" >{d.name.toUpperCase()}</h1>
            <p className="font3 borderBottom1px pb-5 sm:text-left" >{d.description}</p>
            <div className="flex flex-col w-full items-center gap-5 font4 sm:flex-row sm:justify-between" >
              <div className="flex flex-col items-center sm:items-start gap-5" >
                <h3 className="text-sm sm:text-xs md:text-sm" >AVG. DISTANCE</h3>
                <div className="text-2xl sm:text-base md:text-2xl font1" >{d.distance.toUpperCase()}</div>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-5" > 
                <h3 className="text-sm sm:text-xs md:text-sm" >EST. TRAVEL TIME</h3>
                <div className="text-2xl sm:text-base md:text-2xl font1" >{d.travel.toUpperCase()}</div>
              </div>
            </div>
        </section>

    </>
  )
}

DestinationPlaces.propTypes = { d: PropTypes.object }

export {DestinationPlaces};