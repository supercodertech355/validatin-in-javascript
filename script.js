function clearScreen(){
    document.getElementById("result").value = "";
}
function setScreenValue(value){
    const r = document.getElementById("result");
    if (r.value==="Enter an expression" || r.value==="invalid"){
        r.value="";
    
    }
    r.value+=value;
    
}
function calculateResult(){
    const resultelement = document.getElementById("result");
    const expression = resultelement.value.trim();
    if (expression===""){
        resultelement.value="enter an exprresion";
        return;
    }
    try{
        resultelement.value=eval(expression);
    } catch(e){
        resultelement.value="invalid expession";
    }
}