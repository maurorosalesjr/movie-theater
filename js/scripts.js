function Movie (title, age, time) {
  this.title = title;
  this.age = age
  this.time = time;
}
function Human (humanAge, watchTime) {
  this.humanAge = humanAge;
  this.watchTime = watchTime;
}



Human.prototype.ticketPrice = function () {
    let ticketPrice = 10;
  if(this.watchTime >= 6 && this.humanAge < 12) { //children discount
    ticketPrice -= 2
} else if (this.watchTime >= 6 && this.humanAge > 65) { //senior discount
    ticketPrice -= 2
} else if (this.watchTime < 6) { //matinee
    ticketPrice -= 3
} console.log(ticketPrice);
}


Movie.prototype.movieDetails = function () {
  return this.title + " " + this.time;
  console.log(movieDetails)
};



const humanAge = $("input#userAge").val();
const humWantsToWatchTime = $("input#watchTime").val()