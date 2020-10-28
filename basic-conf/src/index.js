import { APP_NAME, hello, Figure } from './myutil';

console.log(APP_NAME);
hello();
// concole.log(Figure.getTriangle(10, 5));
// console.log(process.env.NODE_ENV);

// スタイルの適用
import './style.css';

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');

// 画像ファイルの適用
import pic from './images/person.jpg';

window.addEventListener('DOMContentLoaded', function(){
    let img = new Image();
    img.src = pic;
    document.body.appendChild(img);
  }, false);
  