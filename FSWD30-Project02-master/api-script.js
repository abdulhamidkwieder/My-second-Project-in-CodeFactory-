
function myMap() {
    var myLatLng = { lat: 48.2001268, lng: 16.3951012 };
    var mapProp = {
        center: new google.maps.LatLng(48.2001268, 16.3951012),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}



// function submit(){
//   var first_name = document.getElementById('first_name').value; 
//   var last_name = document.getElementById('last_name').value;
//   var email = document.getElementById('email').value;
//   var phone_number = document.getElementById('phone_number').value;
//   var message = document.getElementById('message').value;
//   var result;

// 	var array =[first_name , last_name , email , phone_number , message];
// 	var array_error_name = ['first_name_error','last_name_error','email_error','phone_number_error','message_error'];
// 	var array_name =['first_name','last_name','email','phone_number','message'];
// 	var array_error = ["Please Fill Your First Name ","Please Fill Your Last Name ","Email is required","Phone Number is required","Please give us feedback"];
