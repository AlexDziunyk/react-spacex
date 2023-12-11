import FavouritesBanner from "../../components/FavouritesBanner/FavouritesBanner"
import FavouritesTours from "../../components/FavouritesTours/FavouritesTours"

const Favourites = () => {
  return (
    <div className='favourites'>
      <FavouritesBanner/>
      <FavouritesTours/>
    </div>
  )
}

export default Favourites