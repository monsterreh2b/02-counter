const decrease = document.querySelector(".decrease");
console.log(decrease);
const reset = document.querySelector(".reset");
console.log(reset);
const increase = document.querySelector(".increase");
console.log(increase);

renderValue = document.getElementById("value");
console.log(renderValue);


let countValue = 0;






decrease.addEventListener("click", function(){
  countValue--;
  renderValue.innerHTML = countValue;

  if(countValue > 0 ){
    renderValue.style.color = "green";
  }
  else if (countValue < 0) {
      renderValue.style.color = "red";
  }
  else{
      renderValue.style.color = "black";
  }

});

reset.addEventListener("click", function(){
  countValue = 0;
  renderValue.innerHTML = countValue;

  if(countValue > 0 ){
    renderValue.style.color = "green";
  }
  else if (countValue < 0) {
      renderValue.style.color = "red";
  }
  else{
      renderValue.style.color = "black";
  }
});

increase.addEventListener("click", function(){
    countValue++;
    renderValue.innerHTML = countValue;

    if(countValue > 0 ){
        renderValue.style.color = "green";
      }
      else if (countValue < 0) {
          renderValue.style.color = "red";
      }
      else{
          renderValue.style.color = "black";
      }
});



