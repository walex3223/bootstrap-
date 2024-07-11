const clickme=document.querySelector("#clickme")
const wale=document.querySelector("#wale")

clickme.onclick=disp;

wale.style.display="none"
function disp(){
    clickme.style.color="red"
wale.style.color="blue"

if( wale.style.display == "none")

{
        wale.style.display="block";

}
else{
    wale.style.display="none"
}

  console.log("working")
}