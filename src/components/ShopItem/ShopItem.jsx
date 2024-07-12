import '../ShopItem/ShopItem.css'

export const ShopItem = ({item}) => {
  console.log(item.name)
  return (
    <div className="view_module">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <h6>{item.color}</h6>
        <p>{item.price}</p>
    </div>
  )
}
