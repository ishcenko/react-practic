import React from 'react';
import ReactDOM from 'react-dom';
import painting from './paintings.json';

// const data = paintings[0];
// const data1 = paintings[1];

function Painting(props) {
  console.log(props);
  return (
    <div>
      <img src="" alt="" width="480" />
      <h2></h2>
      <p>Автор: <a href=""></a></p>
      <p>Цена: кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};
const painting = paintings[0];
ReactDOM.render(<Painting url={painting.url} title={painting.title} />, document.querySelector('#root'));


































// const elem1 = <span>Hello</span>
// const elem2 =<span>world</span>

// const element =
//   (<div>
//     {elem1}
//     {elem2}
// </div>)


// console.log(element);
// ReactDOM.render(jsxElement, document.querySelector('#root'));
