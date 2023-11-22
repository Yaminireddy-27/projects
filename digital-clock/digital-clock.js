let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

setInterval(()=>{
	let currentDate= new Date();
	hours.textContent=(currentDate.getHours() < 10? "0": "")+currentDate.getHours();
	minutes.textContent=(currentDate.getMinutes() < 10? "0": "")+currentDate.getMinutes();
	seconds.textContent=(currentDate.getSeconds() < 10? "0": "")+currentDate.getSeconds();
});