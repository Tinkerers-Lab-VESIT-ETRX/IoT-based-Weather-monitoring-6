function myFunction() {
    var selectedDate=document.getElementById("temp_Date").value;
    console.log(selectedDate);
    const Http = new XMLHttpRequest();
    const url='https://th-sen-default-rtdb.firebaseio.com/sensors/users/Temperature.json';
    

    Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
            console.log(Http.responseText);
            var resData=JSON.parse(Http.responseText);
            console.log(resData);
            var i;
            var plotData=[];
            for(i=0;i<resData.length;i++) {
                var y=resData[i]['Reading'];
                if(resData[i]['Date']==selectedDate){ 
                var temp1=resData[i]['Date'].split('-');
                var temp2=resData[i]['Time'].split(':');
                var x=new Date(temp1[0],temp1[1]-1,temp1[2],temp2[0],temp2[1]);
                console.log(x,y);
                plotData.push({x:x,y:parseFloat(y)});
                }
                
            }
            
            console.log(plotData);
            console.log(plotData.length)
            if(plotData.length!=0){
                var chart = new CanvasJS.Chart("chartContainer",
                {
                    title:{
                        text: "Temperature Data"
                    },
                    axisX:{
                        gridColor: "lightgreen" ,
                        gridThickness: 2        
                    },
                    axisY:{        
                        gridColor: "lightgreen" ,
                        gridThickness: 2
                    },
                    data: [
                        {
                            type: "line",

                            dataPoints: plotData
                        }

                    ]
                });

                chart.render();
            }
            else{
                document.getElementById("chartContainer").innerHTML="No data available for this date."
            }
        } 
    }
    Http.open("GET", url);
    Http.send();
    
}


function myFunction2() {
    var selectedDate=document.getElementById("humid_Date").value;
    console.log(selectedDate);
    const Http = new XMLHttpRequest();
    const url='https://th-sen-default-rtdb.firebaseio.com/sensors/users/Humidity.json';
    

    Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
            console.log(Http.responseText);
            var resData=JSON.parse(Http.responseText);
            console.log(resData);
            var i;
            var plotData=[];
            for(i=0;i<resData.length;i++){
                var val=resData[i]['Reading'];
                if(resData[i]['Date']==selectedDate){
                var temp1=resData[i]['Date'].split('-');
                var temp2=resData[i]['Time'].split(':');
                var ind=new Date(temp1[0],temp1[1]-1,temp1[2],temp2[0],temp2[1]);
                console.log(ind,val);
                plotData.push({x:ind,y:parseFloat(val)});
                }
                
            }
            
            console.log(plotData);
            if(plotData.length!=0){
                var chart = new CanvasJS.Chart("chartContainer2",
                {
                    title:{
                        text: "Humidity Sensor Data"
                    },
                    axisX:{
                        gridColor: "lightgreen" ,
                        gridThickness: 2        
                    },
                    axisY:{        
                        gridColor: "lightgreen"
                    },
                    data: [
                        {
                            type: "line",

                            dataPoints: plotData
                        },

                    ]
                });

                chart.render();
            }
            else{
                document.getElementById("chartContainer2").innerHTML="No data available for this date."
            }
        } 
    }
    Http.open("GET", url);
    Http.send();
    
}
