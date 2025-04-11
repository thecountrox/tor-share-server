# Tor Share Server

This Repository contains an example signalling server for the Tor-Share application.

## Features:
- TorShare clients connect to this server to easily find other clients
- Server is meant to be run as a hidden service inside the tor onion 
- Clients need to have the server url to find other clients
- Server can be selfhosted with minimal effort and clients can be modified to connect to this

## Installation:
- Install tor for your distribution (Linux/Windows/Macos)
- Install node dependencies using `npm i`
- Run server.js once to generate `tor-data` folder
- Run `tor -f tor-data/torrc` to configure tor 

## Configuration (Client side):
- Set the generated onion url in the clients as signal server url
- Signaling server is only used for client discovery and actual transfers happen on a peer to peer basis
