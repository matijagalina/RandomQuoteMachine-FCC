# Random Quote Machine

Simple website which uses random quote generator - **API** found [here](https://random-quote-generator.herokuapp.com/).

![Screenshot](img/screenshot.png)

It uses **jQuery** and **ajax** for fetching the data from API and showing it inside the container by clicking on the *Next quote* button.

For added functionality there is a *Share it on Twitter* button which also listens for a click using jQuery event listener.
It uses values from the container in which quote appears and adds the to the twitter url for sharing tweets - *'https://twitter.com/intent/tweet?&text='*.
New share window is opened with width:700 and height:400 defined inside the .js file.

The project fulfills the provided user stories:

*User Story: I can click a button to show me a new random quote.*
*User Story: I can press a button to tweet out a quote.*

**Codepen** link to quickly see how it looks and behaves: [codepen link](https://codepen.io/matijagalina/pen/bLVBxE)