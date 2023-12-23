## Keysurf

A quick and fun typing game project built in HTML, CSS, and JS. The game was designed
to serve as an example of my skills in a front-end web-developer context and to serve
as a time filler to continue making better whenever I have free time.

## Installation
This assumes that you already have NodeJS, npm, and Docker installed and/or configured.
Clone directory from Github and change directory to the newly cloned directory.

### Installing through NodeJS

- Run `npm install` in the command line.
- Then run `npm run start` in the command line.
- You should see `Listening on port <PORT>`.
- Access the web app through your localhost at that port. For example: `127.0.0.1:3000`

### Installing through Docker

Build an image using the Dockerfile. The target port is 3000 and publish that to whatever
host port you desire. The entrypoint is set up for the container to start up the server 
automatically upon start-up.

## Usage

- Access the game through your localhost (or local network ip) at the returned or published port.
- Play the game.

## Future features checklist

These are features that I want to add over time whenever I or someone else gets a chance.

- [ ] Desktop application w/ external API (Electron, sadly)
- [ ] Statistic Tracking
- [ ] Tunable settings
- [ ] Refactor code
- [ ] User-friendly way to add sentences.
- [ ] Timer for user to get ready before game start
- [ ] Selectable in-game backgrounds w/ user-friendly way to add their own

## License

Copyright 2023 andrewdotjs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the “Software”), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN 
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.