import { useRecoilState } from "recoil"
import { toursState } from "../../recoil/toursState";
import TourCard from "../TourCard/TourCard";
import './style.css';
import { useEffect, useState } from "react";

const FavouritesTours = () => {

  
  const [favTours, setFavTours] = useRecoilState(toursState);
  const [cardsArray, setCardsArray] = useState<string[]>([]);

  useEffect(() => {
    if(favTours.length < 3) {
      const arr = Array(3 - favTours.length).fill('card');
      setCardsArray([...arr]);
    }
  }, [favTours])
  
  const favouritesEmptyStyles = {
    height: cardsArray.length === 3 ? "572px" : ''
  };

  return (
    
    <div className="favourites-tours">
      <p onClick={() => setFavTours([])} className="favourites-tours_clear">Clear All</p>
      <div className="favourites-tours__container">
        {favTours.length > 0 && favTours.map(tour => (
          <div key={tour.id} className="favourites-tours__card">
            <TourCard isLike={false} id={tour.id} name={tour.name} description={tour.description} image={tour.image}></TourCard>
          </div>
        ))}
        {cardsArray.map((_: string, index: number) => (
          <div key={index} style={favouritesEmptyStyles} className="favourites-tours__empty"></div>
        ))}
      </div>
    </div>
    
  )
}

export default FavouritesTours