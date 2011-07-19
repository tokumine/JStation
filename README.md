JStation
=========

An quick hack to make a virtual browser based games console.

Currently only plays 1 game with 1 touch event: http://vimeo.com/26552857

Concepts
---------
1 high power machine is the 'Screen' machine also running node.js
1..n iOS webkit devices connect to screen machine node


Install
--------
npm install


To play
--------
* edit your screen machine IP address in public/controller.html line 77
* on screen machine: node touch_server.js
* on screen machine: visit http://localhost:8080/screen.html
* on iOS device to play: visit http://SCREEN_MACHINE_IP:8080/controller.html


Todo
-----
* optimise sending touches to nodejs 
* multiplayer
* multitouch
* multigame
* multifun!

Credits
--------
Large amounts of controller code from sebleedelisle / JSTouchController (http://goo.gl/sN8bS) 