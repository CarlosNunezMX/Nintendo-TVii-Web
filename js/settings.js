ridOfLoad();

//Button code
const activeUserSlot = vino.act_getCurrentSlotNo(); // The slot for the active user
setMiiBody = document.getElementById("settings-mii-body");
setMiiName = document.getElementById("settings-mii-name");
setMiiName.innerText=vino.act_getName(activeUserSlot);
setMiiBody.src=vino.act_getMiiImageEx(activeUserSlot, 7);

//Button code
  function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }


  var lStickRightCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 536870912) {
      document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var lStickLeftCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 1073741824) {
      document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
    }

  }, 10);

  var bButtonCheck = setInterval(function() {
    wiiu.gamepad.update()
    if(wiiu.gamepad.hold === 16384) {
     vino.soundPlay('SE_RETURN');
     history.back();
    }

  }, 150);