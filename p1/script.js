const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    const color = e.target.id;

    if (color === "grey") 
    {
      body.style.backgroundColor="grey";
    } else if (color === "white") 
    {
      body.style.backgroundColor="white";
    } else if (color === "blue") 
    {
      body.style.backgroundColor="blue";
    } else if (color === "yellow") 
    {
      body.style.backgroundColor = "yellow";
    }
  });
});
