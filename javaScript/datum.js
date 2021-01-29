let datum =  new Date();
let danas = datum.getDay();
let radnoVreme = document.getElementById("radnoVreme").children;
let radniDan = document.getElementById("radniDan").children;

switch(danas) {
    case 1:
        radniDan[0].style.color = "rgb(190, 10, 10)";
        radnoVreme[0].style.color = "rgb(190, 10, 10)";
        break;
    case 2:
        radniDan[1].style.color = "rgb(190, 10, 10)";
        radnoVreme[1].style.color = "rgb(190, 10, 10)";
      break;
    case 3:
        radniDan[2].style.color = "rgb(190, 10, 10)";
        radnoVreme[2].style.color = "rgb(190, 10, 10)";
      break;
    case 4:
        radniDan[3].style.color = "rgb(190, 10, 10)";
        radnoVreme[3].style.color = "rgb(190, 10, 10)";
        break;
    case 5:
        radniDan[4].style.color = "rgb(190, 10, 10)";
        radnoVreme[4].style.color = "rgb(190, 10, 10)";
        break;
    case 6:
        radniDan[5].style.color = "rgb(190, 10, 10)";
        radnoVreme[5].style.color = "rgb(190, 10, 10)";
        break;
    case 7:
        radniDan[6].style.color = "rgb(190, 10, 10)";
        radnoVreme[6].style.color = "rgb(190, 10, 10)";
        break;
    default:
        window.alert("Došlo je do greške sa datumom!");
  };

