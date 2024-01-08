//  let hr= document.getElementById('#hours');
//  let mn=document.getElementById('#minute');
//  let se=document.getElementById('#second');

//  function dispalytime(){
//     let d=new Date();
//     let hh= d.getHours();
//     let mm= d.getMinutes();
//     let ss= d.getSeconds();

//     let hRotetion =30*hh +mm/2;
//     let mRotetion=6*mm;
//     let sRotetion=6*ss;
//     hours.style.transform = `rotate(${hRotetion} deg)`;
//     minute.style.transform = `rotate(${mRotetion} deg)`;
//     second.style.transform = `rotate(${sRotetion} deg)`;
//  }
//  setInterval(dispalytime,1000);
// setInterval(()=>{
//     d=new Date();
//     htime= d.getHours();
//     mtime= d.getMinutes();
//     stime= d.getSeconds();

//     hRotetion =30*htime +mtime/2;
//     mRotetion=6*mtime;
//     sRotetion=6*stime;

//     hours.style.transform = `rotate(${hRotetion} deg)`;
//     minute.style.transform = `rotate(${mRotetion} deg)`;
//     second.style.transform = `retote(${sRotetion} deg)`;
 
// },1000)


setInterval(() => {
   
date=new Date();
htime=date.getHours();
mtime=date.getMinutes();
stime=date.getSeconds();
  
hRotetion=30*htime +mtime/2;
mRotetion=6*mtime;
sRotetion=6*stime;

hours.style.transform=`rotate(${hRotetion}deg)`;
minute.style.transform=`rotate(${mRotetion}deg)`;
second .style.transform=`rotate(${sRotetion}deg)`;



}, 1000);