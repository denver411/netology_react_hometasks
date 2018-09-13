'use strict';

function Stars({count}) {      
  const starQuantity = [];
  if ( typeof(count) === 'number' && count > 0 && count <= 5 ) {
    for (let i = 0; i < count; i++){
      starQuantity.push(<li><Star /></li>);
    }  
  } 
  return (
    <ul className="card-body-stars u-clearfix">
      {starQuantity}
    </ul>
  );
}
