import moon from './assets/destination/image-moon.png';
import mars from './assets/destination/image-mars.png';
import europa from './assets/destination/image-europa.png';
import titan from './assets/destination/image-titan.png';
import josephCooper from './assets/crew/joseph-cooper.png';
import ameliaBrand from './assets/crew/amelia-brand.png';
import doyleBowman from './assets/crew/doyle-bowman.png';
import anoushehAnsari from './assets/crew/image-anousheh-ansari.png';
import launchVehiclePortrait from './assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from './assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportPortrait from './assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from './assets/technology/image-spaceport-landscape.jpg';
import spaceCapsulePortrait from './assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from './assets/technology/image-space-capsule-landscape.jpg';



export const data = {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": moon
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": mars
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": europa
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": titan
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
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
      "bio": "Doyle Bowman is a geographer and astronaut, he is a valuable member of the Lazarus space mission. His expertise in cartography and dedication to planet exploration make him a crucial element of the team. Outside of his scientific work, Doyle enjoys activities such as surfing and spending time at the beach. His passion for science drove him to join this mission in search of a new home for humanity."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": anoushehAnsari
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": launchVehiclePortrait,
        "landscape": launchVehicleLandscape
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": spaceportPortrait,
        "landscape": spaceportLandscape
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": spaceCapsulePortrait,
        "landscape": spaceCapsuleLandscape
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}