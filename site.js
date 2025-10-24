let isOn = false;
let netComs = false;

// Both below are triggered manually via the device
let userManPwr = false; // this will be toggled by the button
let comsLive = false;

if (userManPwr == true) {
    isOn = true;
    if (comsLive == true) {
        console.log("Power and connection turned on manually.\nCrypto Engine up and running.");
    } else {
        console.log("Power is turn on manually.\nConnection error, failed to connect.\nContact local systems admin.");
    }
}

//Power on function
function reportState() {
    isOn = !!userManPwr;
    netComs = !!comsLive;
    const powerMsg = isOn ? 'Power and connection turned ON manually.' : 'Power is OFF.';
    const connMsg = comsLive ? 'Crypto Engine up and running.' : 'Connection error, failed to connect.';
    console.log(`${powerMsg} ${isOn ? connMsg : ''}`.trim());
}

// Network function
function reportConnect() {
    netComs = !!comsLive;
    const connMsg = comsLive ? 'Crypto Engine up and running.' : 'Connection error, failed to connect.';
    console.log(`${connMsg} ${isOn ? connMsg : ''}`.trim());
}

// update initial state
reportState();
reportConnect();


const powerBtn = document.getElementById('powerBtn');
if (powerBtn) {
  const updatePower = () => powerBtn.textContent = isOn ? 'Power: ON' : 'Power: OFF';
  updatePower();
  powerBtn.addEventListener('click', () => {
    userManPwr = !userManPwr;
    isOn = userManPwr;
    updatePower();
    reportState();
  });
} else {
  console.log('Button with id "powerBtn" not found');
}

const networkBtn = document.getElementById('networkBtn');
if (networkBtn) {
  const updateNetwork = () => networkBtn.textContent = netComs ? 'Comms: Running' : 'Comms: Down';
  updateNetwork();
  networkBtn.addEventListener('click', () => {
    comsLive = !comsLive;
    netComs = comsLive;
    updateNetwork();
    reportState();
  });
} else {
  console.log('Button with id "networkBtn" not found');
}