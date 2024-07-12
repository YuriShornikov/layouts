import  '../ShopCard/ShopCard.css'

export const ShopCard = ({card}) => {
  return (
    <div className='view_list'>
        <h3>{card.name}</h3>
        <h6>{card.color}</h6>
        <img src={card.img} alt={card.name} />
        <div className='view_list-bottom'>
          <p>{card.price}</p>
          <button>ADD TO CART</button>
        </div>   
    </div>
  )
}
