function receipt() {
    text1 = "";
    text2 = "";
    var sizeArray = document.getElementsByClassName("Size");
    var runningTotal = 0;
    var sizeTotal = 0;
        for (var i=0; i < sizeArray.length; i++ ) {
            if(sizeArray[i].checked) {
                var selectedSize = sizeArray[i].value;
                text1 = text1+selectedSize+"<br>";
            }
        }
        if(selectedSize ==="Personal $6.00") {
            sizeTotal = 6;
            text2=text2+sizeTotal+"<br>";
        }
        else if(selectedSize === "Medium $10.00") {
            sizeTotal = 10;
            text2=text2+sizeTotal+"<br>";
        }
        else if(selectedSize === "Large $14.00") {
            sizeTotal = 14;
            text2=text2+sizeTotal+"<br>";
        }
        else if(selectedSize === "Extra Large $16.00") {
            sizeTotal = 16;
            text2=text2+sizeTotal+"<br>";
        }

        runningTotal = sizeTotal;
       getCrust(runningTotal,text1,text2);
    };

    function getCrust(runningTotal,text1,text2) {
        var crustTotal = 0;
        var runningTotal=runningTotal;
        var selectedCrust;
        var crust = document.getElementsByClassName("crust");
        for (var cr=0;cr<crust.length;cr++) {
            if(crust[cr].checked) {
                selectedCrust=crust[cr].value;
                text1=text1+selectedCrust+"<br>";
            }
            if(selectedCrust === "Cheese Stuffed (+$3.00)" ) {
                crustTotal = 3;
            }
        }
        runningTotal=(runningTotal+crustTotal);
        text2=text2+crustTotal+"<br>";
       
        getCheese(runningTotal,text1,text2);
    };

    function getCheese(runningTotal,text1,text2) {
        var cheeseTotal = 0;
        var selectedCheese;
        var runningTotal = runningTotal;
        var cheese = document.getElementsByClassName("cheese");
        for (var che=0;che<cheese.length;che++) {
            if(cheese[che].checked) {
                selectedCheese=cheese[che].value;
            }
            if(selectedCheese === "Extra Cheese (+$3.00)") {
                cheeseTotal=3;
            }
        }
        text2=text2+cheeseTotal+"<br>";
        text1=text1+selectedCheese+"<br>";
        runningTotal=(runningTotal+cheeseTotal);
        getSauce(runningTotal,text1,text2);
    };

    function getSauce(runningTotal,text1,text2) {
        var sauce = document.getElementsByClassName("sauce");
        var selectedSauce;
        var runningTotal = runningTotal;
        for(var s = 0;s<sauce.length;s++) {
            if(sauce[s].checked){
                selectedSauce=sauce[s].value;
                text1=text1+selectedSauce+"<br>";
            }
        }
        text2 = text2+0+"<br>";
        getMeat(runningTotal,text1,text2);
    };

    function getMeat(runningTotal,text1,text2) {
        var runningTotal = runningTotal;
        var meat = document.getElementsByClassName("meats");
        var selectedMeat = [];
        var meatTotal = 0;
        for(var m = 0; m<meat.length; m++) {
            if(meat[m].checked) {
                selectedMeat.push(meat[m].value);
            }
        }
        var meatCount = selectedMeat.length;
        if(meatCount>1){
            meatTotal=(meatCount-1);}
        else {
            meatTotal=0;
        }
        runningTotal = (runningTotal+meatTotal);
        for(var m = 0; m<selectedMeat.length; m++) {
            text1= text1+selectedMeat[m]+"<br>";
            if(meatCount<= 1) {
                text2 = text2+0+"<br>";
            meatCount = meatCount-1;
        } 
        else if(meatCount == 2) {
            text2 = text2 + 1 +"<br>";
            meatCount=meatCount-1;
        }
        else{
            text2 = text2+1+"<br>";
            meatCount = meatCount-1;
        }
        }
      getVeggie(runningTotal,text1,text2);  
    };
    function getVeggie(runningTotal,text1,text2) {
        var runningTotal = runningTotal;
        var veggie = document.getElementsByClassName("veggie");
        var selectedVeggie = [];
        var veggieTotal = 0;
        for(var v=0; v<veggie.length; v++) {
            if(veggie[v].checked) {
                selectedVeggie.push(veggie[v].value);
            }
        }
        var veggieCount=selectedVeggie.length;
        if(veggieCount >= 2) {
            veggieTotal = (veggieCount-1);
        }
        else{
            veggieTotal=0;
        }
        runningTotal=(runningTotal+veggieTotal);
        for (var v =0; v<selectedVeggie.length;v++) {
            text1=text1+selectedVeggie[v]+"<br>";
            if(veggieCount <=1){
                text2 = text2+0+"<br>";
                veggieCount = veggieCount-1;
            }
        
        else if(veggieCount == 2) {
            text2 = text2+1+"<br>";
            veggieCount=veggieCount-1
        }
        else {
            text2 = text2+1+"<br>";
            veggieCount = veggieCount-1;
           
        }
       
        }
        
        
        document.getElementById("textTotal1").innerHTML=text1;
        document.getElementById("textTotal2").innerHTML=text2;
        document.getElementById("totalPrice2").innerHTML = "<h5>$"+runningTotal+".00"+"</h5>";

        
    };
    
