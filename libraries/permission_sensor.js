function touchStarted()
{
  document.querySelector("h1").style.display = "none"
  document.querySelector("h2").style.display = "none"


  if (typeof DeviceMotionEvent.requestPermission === 'function') 
  {
    DeviceMotionEvent.requestPermission()
            .then(permissionState => {
      if (permissionState === 'granted') 
        {
                    window.addEventListener("devicemotion", handleMotion, false);
                }
              })
            .catch(console.error);
     } 
     
     else 
  { 
    window.addEventListener("devicemotion", handleMotion, false); 
    
  }


  if (typeof DeviceOrientationEvent.requestPermission === 'function') 
  {
      DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
      if (permissionState === 'granted') 
        {
                    window.addEventListener("deviceorientation", handleOrientation, false);
                }
              })
            .catch(console.error);
     } 
     
     else 
  { 
    window.addEventListener("deviceorientation", handleOrientation, false); 
  }

  
}
