'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
  .then(data => data.json())
  .then(items => ReactDOM.render(<Listing items={items} />, document.getElementById('root')))


const Listing = ({ items }) => {

  const itemList = items.map(item => {
    
    const priceShow = (item.currency_code === 'USD' || item.currency_code === 'EUR') ? 
    (item.currency_code === 'USD' ? '$' + item.price : '€' + item.price) :
    item.price + " " + item.currency_code;

    const description = item.title.length > 50 ? item.title.substr(0, 50) + "..." : item.title;

    const quantityClass = item.quantity > 10 ?
      item.quantity > 20 ? 'item-quantity level-high' : 'item-quantity level-medium'
      : 'item-quantity level-low';


    return (
       <div key={item.listing_id} className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
            <p className="item-title">{ description }</p>
            <p className="item-price">{ priceShow }</p>
            <p className={ quantityClass }>{ item.quantity } left</p>
        </div>
      </div>
    )
  })

  return (
    <div className="item-list">
      { itemList }
    </div>
  )
}
