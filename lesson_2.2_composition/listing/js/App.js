"use strict";

const ColorItem = ({item}) => {
  const color = {
    unisex: "black",
    male: "blue",
    female: "orange"
  };
  const colorProp = color[item.type] ? color[item.type] : 'black';
  return <Item color={colorProp} item={item} />;
};

const App = ({ items }) => (
  <main>
    {items.map(item => {
     return <ColorItem item={item}/>
    })}
  </main>
);
