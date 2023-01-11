let outscreen = document.getElementById("output-screen");

function display(num){
    outscreen.value += num;
}
function cl(){
    outscreen.value = "";
    console.log("p");
}
function del(){
    outscreen.value = outscreen.value.slice(0,-1);
}
function calculate(){
    try{
    outscreen.value = eval(outscreen.value);
    }
    catch(err)
    {
        outscreen.value = "Invalid Input!";
    }
}