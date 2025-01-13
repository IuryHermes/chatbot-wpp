if not exist "%cd%\node_modules" (
    npm install
) 

cd bin
start cmd /c json-server.cmd
start cmd /c qrcode.cmd
start cmd /c http-server.cmd

start http://localhost:3003