var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"]

for(var i=0; i<animals.length; i++){
 createText(animals[i]);
}

function createText(animal){
    var ele = document.createElement("div");
 
  if(animal==="dog"){
  ele.innerHTML="borf borf";

  }else if(animal==="cat"){
  ele.innerHTML="I am a cat";

}else{
    ele.innerHTML="I'm an animal";
}

  wrapperEle.appendChild(ele);
}