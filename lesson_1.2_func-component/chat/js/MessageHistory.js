'use strict';

function MessageHistory({ list }) {

  const messages = list.map(item => {
    return (
      (item.type === 'message' && <Message from={item.from} message={item} />) ||
      (item.type === 'response' && <Response from={item.from} message={item} />) ||
      (item.type === 'typing' && <Typing from={item.from} message={item} />)
    )
  })
  
  return (
    <ul>
      {messages};
    </ul>
  )
}
