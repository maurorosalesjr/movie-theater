function Movie (title, age, time) {
  this.title = title;
  this.age = age
  this.time = time;
}



Movie.prototype.moviePrice = function () {
  let ticketPrice = 10;
  if(parseInt(this.time) >= 6 &&  parseInt(this.age) < 12) { //children discount
    ticketPrice -= 2;
} else if (parseInt(this.time) >= 6 && parseInt(this.age) > 65) { //senior discount
    ticketPrice -= 2;
} else if (parseInt(this.time) < 6) { //matinee
    ticketPrice -= 3;
}  return ticketPrice;
}


function displayTicketInfo(ticketToDisplay){
  let htmlForTicketInfo = ticketToDisplay.title + " " + ticketToDisplay.time + "pm " + "$" + ticketToDisplay.moviePrice();
  return htmlForTicketInfo;
}

$(document).ready(function() {
  $("form#movieOptions").submit(function(event) {
    event.preventDefault();
    const title = $("#movie").val();
    const time = parseInt($("#movieTime").val());
    const age = $("input#age-input").val();
    let newTicket = new Movie(title,age,time);
    $("p#output").html(displayTicketInfo(newTicket))
  })
})


