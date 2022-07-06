const currenttime = document.querySelector("h1"),
content=document.querySelector(".Content")
selectMenu=document.querySelectorAll("select"),
setAlarmBtn=document.querySelector("button");

let AlarmTime;
let isAlarmOn=false;
let AlarmTone=new Audio("iphone_alarm.mp3");
for(let i=12;i>0;i--)
{
    i = i < 10 ? "0" + i : i;
    let option= `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=59;i>0;i--)
{
    i = i < 10 ? "0" + i : i;
    let opt= `<option value ="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",opt);
}
for(let i=2;i>0;i--)
{
    let ampm = i == 1 ? "AM" : "PM";
    let opt= `<option value ="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",opt);
}
setInterval(()=>{
    let date = new Date();
    h= date.getHours(),
    m= date.getMinutes(),
    s= date.getSeconds(),
    ampm= "AM";

    if(h>=12){
        ampm="PM"; h=h-12;
    }
    h= h==0? h=12:h;
    h= h<10? h='0'+h : h;
    m= m<10? m='0'+m : m;
    s= s<10? s='0'+s : s;

    currenttime.innerText=`${h}:${m}:${s} ${ampm}`;

    if(AlarmTime==`${h}:${m} ${ampm}`)
    {
       
        AlarmTone.play();
        AlarmTone.loop=true;
    }
   
}
,1000);

function SetAlarm()
{ 
    if(isAlarmOn == true)
    {
        AlarmTime="";
        AlarmTone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText=" Set Alarm ";
        
        return isAlarmOn=false;
    }

    let time= `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  
    if (time.includes("Hours") || time.includes("Minutes") || time.includes("AM/PM")){
        return alert("Please Set Valid Time Value");
    }
    
    isAlarmOn=true;
    AlarmTime=time;
    content.classList.add("disable");
    setAlarmBtn.innerText="Reset Alarm";

}

setAlarmBtn.addEventListener("click",SetAlarm);