    var values = [0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500];    //values to step to

    var input = document.getElementById("input"),
    output = document.getElementById("output3");

    input.oninput = function(){
        output.innerHTML = values[this.value];
    };
    input.oninput(); //set default value
    