import { ShopItem } from '../ShopItem/ShopItem';
import '../ListView/ListView.css'

export const ListView = ({items}) => {
  return (
    <div className="list-view">
        {items.map((item, index) => (<ShopItem key={index} item={item} />))}
    </div>
  )
}
