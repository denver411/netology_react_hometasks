'use strict';

function MessageHistory({ list }) {

  const messages = list.map(item => {
    return (
      (item.type === 'message' && <Message key={item.id} from={item.from} message={item} />) ||
      (item.type === 'response' && <Response key={item.id} from={item.from} message={item} />) ||
      (item.type === 'typing' && <Typing key={item.id} from={item.from} message={item} />)
    )
  })
  
  return (
    <ul>
      {messages};
    </ul>
  )
}
