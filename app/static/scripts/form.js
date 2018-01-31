
function formClick() {
  alert("Hello");
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'deleteCookies');
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.onload = function() {
  //   location.reload();
  //   auth2.signOut().then(function () {
  //     setElements(false);
  //     console.log('User signed out.');
  //   });
  // };

  // xhr.send();
}

// function sendTokentoDB(id_token){
//   var auth2 = gapi.auth2.getAuthInstance();
//   var googleUser= auth2.currentUser.get();
//   var profile = googleUser.getBasicProfile();
  
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'signIn');
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onload = function() {
//     setElements(true);
//   };

//   var data = {
//       Uid : id_token
//     , Name : profile.getName()
//   }

//   xhr.send(JSON.stringify(data));

//   console.log("Sent: " + JSON.stringify(data) + " to database");

// }
 
 