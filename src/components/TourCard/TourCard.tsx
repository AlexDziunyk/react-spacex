import { useRecoilState } from 'recoil';
import { BlueButton } from '../Buttons/BlueButton';
import { DeleteButton, LikeButton } from '../Buttons/GreyButtons';
import './style.css';
import { toursState } from '../../recoil/toursState';

interface TourCardProps {
  id: string;
  isLike: boolean;
  image: string;
  name: string;
  description: string;
}


const TourCard = ({id, isLike, image, name, description}: TourCardProps) => {
  const [favTours, setFavTours] = useRecoilState(toursState);

  const likeTour = () => {
    
    if(!favTours.some(item => item.id === id))  {
      setFavTours(prev => [{id, image, name, description}, ...prev]);
      
    }
  }

  const deleteTour = () => {
    setFavTours(prev => prev.filter(item => item.id !== id))
  }


  return (
    <div className='tour-card'>
      <div className='tour-card__top'>
        <img className='tour-card__img' src={image} alt='img'></img>
        <div className='tour-card__text'>
          <p className='tour-card__name'>{name}</p>
          <p className='tour-card__description'>{description}</p>
        </div>
      </div>
      <div className='tour-card__buttons'>
        <BlueButton $big>Buy</BlueButton>
        {isLike ? <LikeButton onClick={likeTour}></LikeButton>
        :
        <DeleteButton onClick={deleteTour}></DeleteButton>}
      </div>
     
    </div>
  )
}

export default TourCard