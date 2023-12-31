/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import axios from 'axios'
import {KJUR} from 'jsrsasign'
ZoomMtg.setZoomJSLib('https://source.zoom.us/2.17.0/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

function App() {
  const [participants, setParticipants] = useState([]);
  const [participantsPrev, setParticipantsPrev] = useState([]);

  var sdkKey = 'TQkzoP8MSQOOE0YaY_2fbg';
  var meetingNumber = '83084814967';
  var passWord = 'HsNC3p';
  var role = 0;
  var userName = 'React';
  var userEmail = 'aliasgersub34@gmail.com';
  var leaveUrl = 'http://localhost:3000';

  let getSignature = async (e) => {
    e.preventDefault();
    
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2

  const oHeader = { alg: 'HS256', typ: 'JWT' }

  const oPayload = {
    sdkKey: 'TQkzoP8MSQOOE0YaY_2fbg',
    mn:meetingNumber,
    role: role,
    iat: iat,
    exp: exp,
    appKey: 'TQkzoP8MSQOOE0YaY_2fbg',
    tokenExp: iat + 60 * 60 * 2
  }

  const sHeader = JSON.stringify(oHeader)
  const sPayload = JSON.stringify(oPayload)
  const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, 'mOxIcpXsoSLu9E6Ldz61rJ7MQNZDyNQ3')
  console.log(signature)
    startMeeting(signature)
  }

  function startMeeting(signature) {
    // document.getElementById('zmmtg-root').style.display = 'block';

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          success: (success) => {
            console.log('success', success);
            ZoomMtg.getAttendeeslist({
              success: (res) => {
                setParticipantsPrev(res.result.attendeesList)
                const sortedParticipants = res.result.attendeesList.sort((a, b) =>
                a.userName.localeCompare(b.userName)
                );
                setParticipants(sortedParticipants);
                console.log(sortedParticipants)
              }
            });
          },
          error: (error) => {
            console.log('error in join', error);
          }
        });
      },
      error: (error) => {
        console.log('error in init', error);
      }
    });
  }

  return (
    <div style={{ display: 'flex' }}>
    <aside style={{ flex: '1' }}>
      <h1>Meeting</h1>
      </aside>
      <main style={{ flex: '3' }}>
        <h1>Zoom Meeting React</h1>
        <button className='btn' style={{
           marginTop: '20px',
           backgroundColor: '#2D8CFF',
           color: '#ffffff',
           textDecoration: 'none',
           paddingTop: '10px',
           paddingBottom: '10px',
           paddingLeft: '40px',
           paddingRight: '40px',
           display: 'inline-block',
           borderRadius: '10px',
           cursor: 'pointer',
           border: 'none',
           outline: 'none',
        }} onClick={getSignature} type="button">
          Join Meeting
        </button>
      </main>
    </div>
  );
}

export default App;
// import React from 'react';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Meeting from './Meeting';
// function App() {
//   let payload = {
//     meetingNumber : 84964670326,
//     role : 0,
//     sdkKey : 'nqp3SiG6TiacKTu4tIwZlw',
//     sdkSecret : 'Prm6AnDRisfRIb8RVNrsOB2Ws9dPW8Mu',
//     passWord : 'CRuGk0',
//     userName : 'React',
//     userEmail :'',
//     leaveUrl : 'http://localhost:3000'



//   }
//   // var authEndpoint = 'http://localhost:4000';
//   // var sdkKey = 'TQkzoP8MSQOOE0YaY_2fbg';
//   // var meetingNumber = '84785878239';
//   // var passWord = 'Q0uMih';
//   // var role = 0;
//   // var userName = 'React';
//   // var userEmail = 'aliasgersub34@gmail.com';
//   // var leaveUrl = 'http://localhost:3000';
//   // var signature = '';
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route path='/meeting' element={<Meeting payload={payload} />}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
