// //get the IP addresses associated with an account
// export default () => {
//   return new Promise(resolve => {
//     const ip_dups = {};
//
//     //compatibility for firefox and chrome
//     let RTCPeerConnection = window.RTCPeerConnection
//       || window.mozRTCPeerConnection
//       || window.webkitRTCPeerConnection;
//     let useWebKit = !!window.webkitRTCPeerConnection;
//
//     //bypass naive webrtc blocking using an iframe
//     if (!RTCPeerConnection) {
//       //NOTE: you need to have an iframe in the page right above the script tag
//       //
//       //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
//       //<script>...getIPs called in here...
//       //
//       const win = iframe.contentWindow;
//       RTCPeerConnection = win.RTCPeerConnection
//         || win.mozRTCPeerConnection
//         || win.webkitRTCPeerConnection;
//       useWebKit = !!win.webkitRTCPeerConnection;
//     }
//
//     //minimal requirements for data connection
//     const mediaConstraints = {
//       optional: [{RtpDataChannels: true}]
//     };
//
//     const servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
//
//     //construct a new RTCPeerConnection
//     const pc = new RTCPeerConnection(servers, mediaConstraints);
//
//     function handleCandidate(candidate) {
//       //match just the IP address
//       const ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
//       const ip_addr = ip_regex.exec(candidate);
//
//       //remove duplicates
//       // if (ip_dups[ip_addr] === undefined)
//       ip_dups[ip_addr] = true;
//
//       return ip_addr;
//     }
//
//     //listen for candidate events
//     pc.onicecandidate = function (ice) {
//
//       //skip non-candidate events
//       if (ice.candidate)
//         handleCandidate(ice.candidate.candidate);
//     };
//
//     //create a bogus data channel
//     pc.createDataChannel("");
//
//     //create an offer sdp
//     pc.createOffer(function (result) {
//
//       //trigger the stun server request
//       pc.setLocalDescription(result, function () {
//       }, function () {
//       });
//
//     }, function () {
//     });
//
//     //wait for a while to let everything done
//     setTimeout(function () {
//       //read candidate info from local description
//       const lines = pc.localDescription.sdp.split('\n');
//       const res = [];
//
//       lines.forEach(function (line) {
//         if (line.indexOf('a=candidate:') === 0)
//           console.log(handleCandidate(line));
//         res.push(handleCandidate(line));
//       });
//
//       resolve(res);
//     }, 1000);
//   });
// }

export default () => {
  return new Promise(resolve => {
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;//compatibility for Firefox and chrome

    const pc = new RTCPeerConnection({iceServers: []});
    const noop = () => {};

    pc.createDataChannel('');//create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);// create offer and set local description
    pc.onicecandidate = (ice) => {
      if (ice && ice.candidate && ice.candidate.candidate) {
        const myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
        pc.onicecandidate = noop;

        // console.log('my IP: ', myIP);
        resolve(myIP);
      }
    };
  });
}
