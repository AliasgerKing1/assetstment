import React from 'react';

import './App.css';
// import ZoomMtgEmbedded from '@zoomus/websdk/embedded';

function App() {

  // const client = ZoomMtgEmbedded.createClient();

  // var authEndpoint = 'http://localhost:3000'
  // var sdkKey = 'XjhY87zoQvCWWhnh6HD8Lw'
  // var sdkSecret = 'i8iMlKxYI0lmbKJPgQ4xJ52HjRQIZwQO'
  // var meetingNumber = '87800992073'
  // var passWord = 'GWH52B'
  // var role = 0
  // var userName = 'React'
  // var userEmail = 'aliasgersub34@gmail.com'
  // // var registrantToken = ''
  // // var zakToken = ''

  // function getSignature(e) {
  //   e.preventDefault();

  //   fetch(authEndpoint, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       meetingNumber: meetingNumber,
  //       role: role
  //     })
  //   }).then(res => res.json())
  //   .then(response => {
  //     startMeeting(response.signature)
  //   }).catch(error => {
  //     console.error(error)
  //   })
  // }

  // function startMeeting(signature) {

  //   let meetingSDKElement = document.getElementById('meetingSDKElement');

  //   client.init({
  //     debug: true,
  //     zoomAppRoot: meetingSDKElement,
  //     language: 'en-US',
  //     customize: {
  //       meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
  //       toolbar: {
  //         buttons: [
  //           {
  //             text: 'Custom Button',
  //             className: 'CustomButton',
  //             onClick: () => {
  //               console.log('custom button');
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });

  //   client.join({
  //     signature: signature,
  //   	sdkKey: sdkKey,
  //   	sdkSecret: sdkSecret,
  //   	meetingNumber: meetingNumber,
  //   	password: passWord,
  //   	userName: userName,
  //     userEmail: userEmail,
  //     // tk: registrantToken,
  //     // zak: zakToken
  //   })
  // }

  return (
    <div className="App">

      {/* mainnnnnnnnnnnnnnnnnn */}
    </div>
  );
}

export default App;

      // <main>
      //   <h1>Zoom Meeting SDK Sample React</h1>

      //   {/* For Component View */}
      //   <div id="meetingSDKElement">
      //     {/* Zoom Meeting SDK Component View Rendered Here */}
      //   </div>

      //   <button onClick={getSignature}>Join Meeting</button>
      // </main>


// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://api.zoom.us/v2/metrics/meetings/{meetingId}/participants',
//   headers: {
//     'Authorization': 'Bearer {Your JWT Token}',
//     'Content-Type': 'application/json'
//   },
//   params: {
//     type: 'past', // Use 'live' for live meetings
//     page_size: '30',
//     next_page_token: '' // Use the next page token to paginate through large numbers of participants
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
