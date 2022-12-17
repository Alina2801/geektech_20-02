// Задание 1

const box = document.getElementsByClassName("box");

let positionX = 0;
let positionY = 0;

const move = () => {
  if (positionX <= 440 && positionY === 0) {
    positionX += 16;
    box[0].style.left = `${positionX}px`;
    setTimeout(move, 100);
  } else if (positionX >= 440 && positionY <= 440) {
    positionY += 16;
    box[0].style.top = `${positionY}px`;
    setTimeout(move, 100);
  } else if (positionX >= 0 && positionY >= 440) {
    positionX -= 10;
    box[0].style.left = `${positionX}px`;
    setTimeout(move, 100);
  } else if (positionX <= 440 && positionY >= 0) {
    positionY -= 10;
    box[0].style.top = `${positionY}px`;
    setTimeout(move, 100);
  }
};
  move();

//Задание 2

let interVall = 0;
function see (){
  interVall++;
  console.log(interVall + " сек.");
  if(interVall === 60){
    clearInterval(id);
  }
}
id = setInterval(see,1000);

