# Hairball Art!

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)



## Table of Contents

- [Background](#background)
- [Live Demo](#live-demo)
- [Install](#install)
- [Resources](#Resources)
- [License](#license)

## Background
![Sample Art](imgs/Sample1%20(Medium).png)

A simple P5.js project exploring the art of flow-field using Perlin Noise + Particles System + Circle Packs. This repo is inspired by the amzaing "Colorful Coding" Youtube Channel. I highly recommend watching the tutorial [HERE](https://www.youtube.com/watch?v=1-QXuR-XX_s).
- We start by creating a list of random non-overlaping circles - `circlePack.js`.
- For each circle we create a particle system - `particleSystem.js`
- Within each system we create a list of particles that get moved according to perline noise - `particle.js`. NOTE: In the current implementation particles movment does not follow proper physics laws -at all-!. I am keeping this for another commit in future.!
- Everytime your refresh the page a new drawing will be started.!

## Live Demo
- [CODEPEN](hairball.netlify.app)

## Install
1. Clone this repo to your machine.

```sh
$ git clone https://github.com/Ozeidi/HairBall.git
```
2. To test the code, I highly recommend using VS Code. I use `Live Server` extension to serve the app locally.



##  Resources
- [Colorful Coding Youtube Channel](https://www.youtube.com/channel/UCWOTJIT48V9vxKoqdQBTHnw):
An excelent Resource for P5.JS tutorials and Generative Art.
- [The Coding Train Youtube Channel](https://www.youtube.com/c/TheCodingTrain/featured): Daniel Shiffman Coding Train channel is dedicated to beginner-friendly creative coding tutorials and challenges. 
## License

[MIT](LICENSE) © Omar Al Zeidi
