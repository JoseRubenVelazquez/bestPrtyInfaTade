/*Temporizador*/
const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.mensaje-final');

/*Definimos fecha*/
const countdown = new Date('sep 20, 2023 10:20:00').getTime();

let interval = setInterval(function(){
  /*Fecha Actual*/
  const now = new Date().getTime();

  /*Obtener distancia entre ambas fechas*/
  let distance = countdown - now;

  /*Calculos a Dìas-Horas-Minutos-Segundos*/
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  /*Mostrar resultados*/
  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $minutes.innerHTML = minutes;
  $seconds.innerHTML = ('0' + seconds).slice(-2);

  /*Cuando llegue a 0*/
  if(distance < 0){
    clearInterval(interval);
    $finalMessage.style.transform = 'translateY(0)';
  }
}, 1000);
