import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Videocomp() {
    const {roomID} = useParams();
    const containerRef = useRef(null)

    useEffect(()=> {
        let myMeeting = async (element) => {
            if(!roomID || !containerRef.current) return;

            // generate Kit Token
           
            const appID = Number(import.meta.env.VITE_APP_ID);
            const serverSecret = import.meta.env.VITE_SERVER_SECRET;
            console.log(import.meta.env);

             const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID, 
                serverSecret,
                roomID,  
                Date.now().toString(), 
                "VA"
                );
           
            // Create instance object from Kit Token.
             const zp = ZegoUIKitPrebuilt.create(kitToken);
             // start the call
             zp.joinRoom({
               container: element,
               sharedLinks: [
                 {
                   name: 'Personal link',
                   url:
                    window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                     '?roomID=' +
                     roomID,
                 },
               ],
               scenario: {
                 mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
               },
           })
        }
        myMeeting()
 
      return()=>{
        if (containerRef.current){
            containerRef.current.innerHTML = "";
        }
      }
      
      },[roomID])
    return (
        <div
          className="myCallContainer"
          ref={containerRef}
          style={{ width: '100vw', height: '100vh' }}
        ></div>
      );
}

export default Videocomp