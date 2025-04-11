const SignalingServer = require('./signaling');
const path = require('path');
const fs = require('fs-extra');

async function startServer() {
  const torDataDir = path.join(__dirname, 'tor-data');
  await fs.ensureDir(torDataDir);

  const signalingServer = new SignalingServer();
  await signalingServer.start(torDataDir);

  console.log('Signaling server started. Onion address:', signalingServer.getOnionAddress());
}

startServer().catch((error) => {
  console.error('Failed to start signaling server:', error);
});
