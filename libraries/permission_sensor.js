// function touchStarted()
// {

//   if (typeof DeviceMotionEvent.requestPermission === 'function') 
//   {
//     DeviceMotionEvent.requestPermission()
//             .then(permissionState => {
//       if (permissionState === 'granted') 
//         {
//                     window.addEventListener("devicemotion", handleMotion, false);
//                 }
//               })
//             .catch(console.error);
//      } 
     
//      else 
//   { 
//     window.addEventListener("devicemotion", handleMotion, false); 
    
//   }


//   if (typeof DeviceOrientationEvent.requestPermission === 'function') 
//   {
//       DeviceOrientationEvent.requestPermission()
//             .then(permissionState => {
//       if (permissionState === 'granted') 
//         {
//                     window.addEventListener("deviceorientation", handleOrientation, false);
//                 }
//               })
//             .catch(console.error);
//      } 
     
//      else 
//   { 
//     window.addEventListener("deviceorientation", handleOrientation, false); 
//   }

  
// }
