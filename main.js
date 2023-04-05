let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f08db1;">Soy estudiante de ingeniería en mecatrónica</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
