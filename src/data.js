import miller from './assets/destination/image-miller.png';
import mann from './assets/destination/image-mann.png';
import edmund from './assets/destination/image-edmund.png';
import josephCooper from './assets/crew/joseph-cooper.png';
import ameliaBrand from './assets/crew/amelia-brand.png';
import doyleBowman from './assets/crew/doyle-bowman.png';
import hughMann from './assets/crew/hugh-mann.png';
import romillyPoole from './assets/crew/romilly-poole.png';
import endurancePortrait from './assets/technology/image-endurance-portrait.jpg';
import enduranceLandscape from './assets/technology/image-endurance-landscape.jpg';
import rangerPortrait from './assets/technology/image-ranger-portrait.jpg';
import rangerLandscape from './assets/technology/image-ranger-landscape.jpg';
import tarsAndCasePortrait from './assets/technology/image-tarsAndCase-portrait.jpg';
import tarsAndCaseLandscape from './assets/technology/image-tarsAndCase-landscape.jpg';



export const data = {
  "destinations": [
    {
      "name": "Miller",
      "images": {
        "png": miller
      },
      "description": "Miller's Planet, named in honor of astronaut and scientist Dr. Miller, is a world with extreme gravity near the black hole Gargantua. Time passes faster on its surface. It features beautiful seas, perfect for ocean lovers and exploration.",
      "distance": "1.047 bil. km",
      "travel": "5 years"
    },
    {
      "name": "Mann",
      "images": {
        "png": mann
      },
      "description": "Named after astronaut Dr. Mann, Mann's Planet is a promising world in the star system. It boasts grand mountain ranges and snowy landscapes, with a climate resembling Earth's Nordic countries. Dr. Mann's reports indicate a chilly half-year, followed by a delightful and pleasant climate.",
      "distance": "837 mil. km",
      "travel": "4 years"
    },
    {
      "name": "Edmund",
      "images": {
        "png": edmund
      },
      "description": "Named in honor of astronaut Dr. Edmunds, this planet is regarded by Dr. Brand as the optimal choice for a new home. Despite being the farthest one, it is portrayed as a potentially habitable world, offering humanity's best chance for survival.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Joseph Cooper",
      "images": {
        "png": josephCooper
      },
      "role": "Commander / Pilot",
      "bio": "Joseph A. Cooper, a trained NASA pilot with an engineering background, leads the interstellar expedition as its pilot. An experienced and courageous astronaut, he was selected for his flight expertise. Driven by his passion for science and his dedication as a father, he seeks a new home for humanity."
    },
    {
      "name": "Amelia Brand",
      "images": {
        "png": ameliaBrand
      },
      "role": "Chief Scientist / Biologist",
      "bio": "Dr. Amelia Brand is the chief scientist and biologist of the expedition, entrusted with the mission to find a new home for humanity. Her expertise and dedication are crucial in the endeavor to relocate the human race. Her unwavering passion for exploration and unwavering commitment to humanity are truly inspiring."
    },
    {
      "name": "Doyle Bowman",
      "images": {
        "png": doyleBowman
      },
      "role": "Geographer",
      "bio": "Doyle Bowman is a geographer and astronaut, his expertise in cartography and dedication to planet exploration make him a crucial element of the team. Outside of his scientific work, Doyle enjoys activities such as surfing and spending time at the beach. His passion for science drove him to join this mission in search of a new home for humanity."
    },
    {
      "name": "Romilly Poole",
      "images": {
        "png": romillyPoole
      },
      "role": "Flight Engineer",
      "bio": "Romilly Poole is an astronaut, physicist, and flight engineer of the Lazarus mission. He will be in charge of ensuring that everything goes well aboard the Endurance spacecraft. He enjoys and appreciates spending time alone, finding serenity in the solitude of space."
    },
    {
      "name": "Hugh Mann",
      "images": {
        "png": hughMann
      },
      "role": "Astrophysicist",
      "bio": "Dr. Hugh Mann is an outstanding astrophysicist who has discovered promising prospects of habitable planets. Known for being the first man to reach Mars, as well as his intelligence and scientific achievements, he has become a point of reference for the team. As the first explorer to arrive, Dr. Mann will await us with a warm welcome on the chosen planet."
    }

  ],
  "technology": [
    {
      "name": "Endurance",
      "images": {
        "portrait": endurancePortrait,
        "landscape": enduranceLandscape
      },
      "description": "The Endurance is an exploration and colonization spacecraft designed for interstellar travel. The Endurance is used by astronauts to journey through the wormhole and explore planets in search of a new home for humanity."
    },
    {
      "name": "Ranger",
      "images": {
        "portrait": rangerPortrait,
        "landscape": rangerLandscape
      },
      "description": "The Ranger is a multipurpose spacecraft used both on Earth and other planets. Rangers are smaller ships deployed from the mother ship, the Endurance, to perform specific tasks such as reconnaissance, data collection, and transportation of people and resources."
    },
    {
      "name": "TARS & CASE",
      "images": {
        "portrait": tarsAndCasePortrait,
        "landscape": tarsAndCaseLandscape
      },
      "description": "TARS and CASE are two of the four former tactical robots of the U.S. Marine Corps. TARS stands out for its high mobility, while CASE exhibits maneuvering abilities. Both feature a vocal interface and unique personalities, providing companionship and technical support to the crew and passengers."
    }
  ]
}