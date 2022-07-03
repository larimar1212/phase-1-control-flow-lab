function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!"
  }


} else if (feet <= 2000) {
  return "That will be twenty bucks."
} else if (2000 < feet && feet <= 2500) {  // && for describing in between
  return "I will gladly take your thirty bucks" 
}else {
  return "No can do.";
}


// use a ternary operator to return the correct response based
// on the desired destination of the passenger 


function ternaryCheckCity(city ){
  return city === "NYC" ? "Ok, sounds good." : "No go";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      case  "not as generous":
        return "Thank you ";
        default:
          return "Bye.";

  }
}
