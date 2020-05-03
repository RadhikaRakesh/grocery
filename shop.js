var jp=""
    
var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function()
        {
            if(this.readyState==4&&this.status==200)
            {
               var res =JSON.parse(this.responseText);
                jp=res.grocery;
              // console.log(res);
               addelements();
               
            }        
    // Now, add the newly created table with json data, to a container.
   
            }        
xhttp.open("GET","ajx.json",true);
xhttp.send();
            
function shop(){
     var table= createtable(jp);
    var divShowData = document.getElementById('list');
    divShowData.style.display="block";
    document.getElementById("veglist").style.display="none";
    document.getElementById("grains").style.display="none";
    document.getElementById("condiment").style.display="none";
    document.getElementById("others").style.display="none";
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}
function searchveg()
{
   let k=0,r="";
var out=[];
// add json data to the table as rows.
for (var i = 0; i < jp.length; i++)
 { 
        if(jp[i].department=="Vegetable")
       {  out[k] = jp[i];k++;
        //console.log(out);

       }
    }

  var tab=createtable(out);
          var veg=document.getElementById("veglist");
          veg.style.display="block";
          document.getElementById("list").style.display="none";
          document.getElementById("grains").style.display="none";
          document.getElementById("condiment").style.display="none";
          document.getElementById("others").style.display="none";
          veg.innerHTML="";
          veg.appendChild(tab);
 } 
 function condiments()
{
   let k=0,r="";
var out=[];
// add json data to the table as rows.
for (var i = 0; i < jp.length; i++)
 { 
        if(jp[i].department=="Condiments")
       {  out[k] = jp[i];k++;
        //console.log(out);

       }
    }

  var tab=createtable(out);
          var veg=document.getElementById("condiment");
          veg.style.display="block";
          document.getElementById("veglist").style.display="none";
          document.getElementById("list").style.display="none";
          document.getElementById("grains").style.display="none";
          document.getElementById("others").style.display="none";
          veg.innerHTML="";
          veg.appendChild(tab);
 } 
 function others()
{
   let k=0,r="";
var out=[];
// add json data to the table as rows.
for (var i = 0; i < jp.length; i++)
 { 
        if(jp[i].department=="Oil/fat"||jp[i].department=="Beauty"||jp[i].department=="Cleaner")
       {  out[k] = jp[i];k++;
        //console.log(out);

       }
    }

  var tab=createtable(out);
          var veg=document.getElementById("others");
          veg.style.display="block";
          document.getElementById("condiment").style.display="none";
          document.getElementById("veglist").style.display="none";
          document.getElementById("list").style.display="none";
          document.getElementById("grains").style.display="none";
          
          veg.innerHTML="";
          veg.appendChild(tab);
 } 

 function grain(){
            let k=0,r="";
            var out=[];
    for (var i = 0; i < jp.length; i++) {
    // for (var j = 0; j < jp.length; j++)
      //{
    if(jp[i].department=="Grain")
       {  out[k] = jp[i];k++;
        console.log(out);
       }
    
}
document.getElementById("others").style.display="none";
document.getElementById("condiment").style.display="none";
document.getElementById("veglist").style.display="none";
document.getElementById("list").style.display="none";
   var gr=createtable(out); 
  var gra=document.getElementById("grains");
  gra.style.display="block";
    gra.innerHTML = "";
    gra.appendChild(gr);
 }

//add elements to json file
function addelements()
{
            jp.push({"serialNo":"103","name":"Sugar","quantity":"1","unit":"kg","department":"Condiments","notes":"Sweetners"});
            jp.push({"serialNo":"104","name":"Rice Flour","quantity":"2","unit":"kg","department":"Grain","notes":"Ponkathir"});
            jp.push({"serialNo":"105","name":"Ragi","quantity":"1","unit":"kg","department":"Grain","notes":"Eastern"});
            jp.push({"serialNo":"106","name":"Red chilli","quantity":"500","unit":"gm","department":"Condiments","notes":"Nirapara"});
            jp.push({"serialNo":"107","name":"Turmeric","quantity":"500","unit":"gm","department":"Condiments","notes":"Nirapara"});
            jp.push({"serialNo":"108","name":"Onion","quantity":"1","unit":"kg","department":"Vegetable","notes":"Medium size"});
            jp.push({"serialNo":"109","name":"Coconut oil","quantity":"1","unit":"kg","department":"Oil/fat","notes":"Virgin Coconut oil"});
            jp.push({"serialNo":"110","name":"Atta","quantity":"2","unit":"kg","department":"Grain","notes":"Aasirvaad wheat flour"});
            jp.push({"serialNo":"111","name":"Tomato","quantity":"500","unit":"gm","department":"Vegetable","notes":"Fresh and Medium size"});
            jp.push({"serialNo":"112","name":" Shampoo","quantity":"1","unit":"Number","department":"Beauty","notes":"Dove"});
            jp.push({"serialNo":"113","name":"Toothpaste","quantity":"1","unit":"kg","department":"Beauty","notes":"LeverAyush"});
            jp.push({"serialNo":"114","name":"Cumin","quantity":"250","unit":"gm","department":"Condiments","notes":"Nirapara"});
            jp.push({"serialNo":"115","name":"Mustard","quantity":"100","unit":"gm","department":"Condiments","notes":"Nirapara"});
            jp.push({"serialNo":"116","name":"Carrot","quantity":"500","unit":"gm","department":"Vegetable","notes":"Fresh and medium size"});
            jp.push({"serialNo":"117","name":"Ghee","quantity":"1","unit":"kg","department":"Oil/fat","notes":"Amul ghee"});
            jp.push({"serialNo":"118","name":"Soap","quantity":"5","unit":"Number","department":"Beauty","notes":"Lifebuoy"});
            jp.push({"serialNo":"119","name":"Dish wash bar","quantity":"1","unit":"Number","department":"Cleaner","notes":"Vim liquid"});
            jp.push({"serialNo":"120","name":"Floor cleaner","quantity":"1","unit":"Number","department":"Cleaner","notes":"Lizol"});

}
//createing table
function createtable(jp)
{
    
              var col=[];
              for (var i = 0; i < jp.length; i++) {
                for (var key in jp[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
    var table = document.createElement("table");
    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   
    
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    
    // add json data to the table as rows.
    for (var i = 0; i < jp.length; i++) {
    
        tr = table.insertRow(-1);
    
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jp[i][col[j]];
        }
    }
    
    
}
return table;
}