function formMorph(){

    // Gets the value of selector
    var selector = document.getElementById("selector").value;

    // Gets all abuseformobj elements and sends to array
    var abuseElements = document.getElementsByClassName("abuseformobj");
    var abuseArr = Array.from(abuseElements);

    // Gets all techformobj elements and sends to array
    var techElements = document.getElementsByClassName("techformobj");
    var techArr = Array.from(techElements);

    // Gets all formobjects  elements and sends to array
    var formObjects = document.getElementsByClassName("formobj");
    var objArr = Array.from(formObjects);


    if (selector == "techdelay") {
        // hide abuse info
        abuseArr.forEach(function(item){
            item.style.display = "none";
        });
        // show tech delay info
        techArr.forEach(function(item){
            item.style.display = "block";
        });
        objArr.forEach(function(item){
            item.disabled = false;
        });
    } else if (selector == "abuse") {
        // show abuse info
        abuseArr.forEach(function(item){
            item.style.display = "block";
        });
        // hide tech delay info
        techArr.forEach(function(item){
            item.style.display = "none";
        });
        objArr.forEach(function(item){
            item.disabled = false;
        });
    } else {
        alert("Please select a category!");
    }  
}

function initialize(){
    // Gets all formobjects  elements and sends to array
    var formObjects = document.getElementsByClassName("formobj");
    var objArr = Array.from(formObjects);

    // Gets all abuseformobj elements and sends to array
    var abuseElements = document.getElementsByClassName("abuseformobj");
    var abuseArr = Array.from(abuseElements);

    // Gets all techformobj elements and sends to array
    var techElements = document.getElementsByClassName("techformobj");
    var techArr = Array.from(techElements);

    objArr.forEach(function(item){
        item.disabled = true;
    });

    // hide tech delay info
    techArr.forEach(function(item){
        item.style.display = "none";
    });

    // hide abuse info
    abuseArr.forEach(function(item){
        item.style.display = "none";
    });
}

