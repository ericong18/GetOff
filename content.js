console.log("I'm running");


var userHours = 0;
var userMinutes = 0.1;
var userTimer;
// <<<<<<< HEAD
// let userTimer = setInterval(alertUser, 5000);

// function alertUser() {
// swal({
//   title: 'Hey there!',
//   text: "You have been on " + window.location.href + " for at least 10 minutes",
//   type: 'warning',
//   showCancelButton: false,
//   confirmButtonColor: '#3085d6',
//   confirmButtonText: "I don't need a break!"
// }).then((result) => {
  
//     window.location.replace("http://m.memegen.com/gy6mmd.jpg");
  
// })
// 	// alert("You have been on " + siteURL + " for at least 10 minutes");
// 	//window.location.replace("http://m.memegen.com/gy6mmd.jpg");
// =======


chrome.storage.local.get(['savedDefaultHours', 'savedDefaultMinutes'], function(result) {
	if (!result.savedDefaultHours && !result.savedDefaultMinutes){
		console.log("hi");
		userHours = 0;
		userMinutes = 0.1;
	}
	if (!result.savedDefaultHours){
		userHours = 0;
	}
	else{
		console.log("hi1");
		userHours = result.savedDefaultHours;
	}
	if (!result.savedDefaultMinutes){
		userMinutes = 0;
	}
	else{
		console.log("hi2");
		userMinutes = result.savedDefaultMinutes;
	}
	console.log("hi3");
	//alert(userHours + " hours and " + userMinutes + " minutes");
	
	let time = convertTime(userHours, userMinutes);
	// alert(time);
	console.log(userHours, userMinutes);
	userTimer = setTimeout(function() {
		alertUserCustom(userHours, userMinutes)
	}, time);
	//userTimer = setTimeout(alertUserCustom(userHours, userMinutes), time);

})


// let userTimer = setInterval(alertUser, 5000);

// function alertUser(userHours, userMinutes) {
// swal({
//   title: 'Hey there!',
//   text: "You have been on " + window.location.href + " for at least " + (userHours || "0") + " hour(s) and " + (userMinutes || "0") + " minutes(s)",
//   type: 'warning',
//   showCancelButton: false,
//   confirmButtonColor: '#3085d6',
//   confirmButtonText: "I don't need a break!"
// }).then((result) => {
  
//     window.location.replace("http://m.memegen.com/gy6mmd.jpg");
  
// })
	// alert("You have been on " + siteURL + " for at least 10 minutes");
	//window.location.replace("http://m.memegen.com/gy6mmd.jpg");


function alertUserDefault() {
	alert("You have been on " + window.location.href + " for at least ");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}

function alertUserCustom(userHours, userMinutes) {
	alert("You have been on " + window.location.href + " for at least " + (userHours || "0") + " hour(s) and " + (userMinutes || "0") + " minutes(s)");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}

function convertTime(hours, minutes) {
	let total =(hours * 60 + parseFloat(minutes)) * 60000;
	console.log(total)
	return total;
}