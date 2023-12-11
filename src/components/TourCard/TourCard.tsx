import { BlueButton } from '../Buttons/BlueButton';
import { LikeButton } from '../Buttons/GreyButtons';
import './style.css';

interface TourCardProps {
  image: string;
  name: string;
  description: string;
}

const TourCard = ({image, name, description}: TourCardProps) => {
  return (
    <div className='tour-card'>
      <div className='tour-card__img'>
        <img className='tour-card__imgg' src={image} alt='img'></img>
      </div>
      <div className='tour-card__info-container'>
        <div className='tour-card__text'>
          <p className='tour-card__name'>{name}</p>
          <p className='tour-card__description'>{description.length > 200 ? description.slice(0, 200) + "..." : description}</p>
        </div>
        <div className='tour-card__buttons'>
          <BlueButton $big>Buy</BlueButton>
          <LikeButton></LikeButton>
        </div>
      </div>
    </div>
  )
}

export default TourCard