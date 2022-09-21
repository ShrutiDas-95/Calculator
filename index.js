
var allButtons= document.querySelectorAll(".cal").length;


for(var i=0;i<allButtons;i++){
  document.querySelectorAll(".cal")[i].addEventListener("click",function(){

    var selectName=this.getAttribute("name");

    annimate(selectName);

    var inputValue=this.getAttribute("value");
    displayInput(inputValue);

  })
}

 function displayInput(value){
 document.querySelector("#result").value+=value;
 }


document.querySelector("#output-result").addEventListener("click",function(){
  var equalsTo=this.getAttribute("name");
  annimate(equalsTo);
  var newValue= document.querySelector("#result").value;
  var finalResult= eval(newValue);
  document.querySelector("#result").value="";
  displayInput(finalResult);

});

  document.querySelector("#clear-screen").addEventListener("click",function(){
    var allClear=this.getAttribute("name");
    annimate(allClear);
     document.querySelector("#result").value="";

  })

document.querySelector(".delete").addEventListener("click",function(){
  var one =document.querySelector("#result").value;
  var updateValue=one.slice(0,-1);
   console.log(one);
  document.querySelector("#result").value=updateValue;

})

function annimate(animiName){
  document.querySelector("input[name='"+animiName+"']").classList.add("pressed");
  setTimeout(function(){
    document.querySelector("input[name='"+animiName+"']").classList.remove("pressed");
  },100);
}
