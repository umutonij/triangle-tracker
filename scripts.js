var sidesOfTriangle=["side1", "side2", "side3"];
function getResult(){
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);

    if(side1 === side2 && side2 === side3){
        alert("This is an Equilateral triangle");
        window.location.href="eqltrl.html";
    }
    else if(side1 === side2 || side1 === side3 || side2 === side3){
        alert("This is an Isosceles Triangle");
        window.location.href="isosceles.html";
    }
    else if((side1+side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
        alert("Not a definite Triangle");
    }
    else {
        alert("This is a Scalene Triangle");
        window.location.href="scalene.html";
    }
}