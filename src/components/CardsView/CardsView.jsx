import { ShopCard } from '../ShopCard/ShopCard'
import '../CardsView/CardsView.css'

export const CardsView = ({cards}) => {
  return (
    <div className="cards-view">
        {cards.map((card, index) => (<ShopCard key={index} card={card} />))}
    </div>
  )
}
