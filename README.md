# i-ching-mithril
This is an example of how small a great-looking responsive single page app can be, using mithril.js. The content is the 3500-year-old taoist text, the I Ching, which offers nicely structured data, coolly binary logic from oh so long ago, and the opportunity for very nice-looking images that are small in size. 

The app works well on phones, tablets and desktop, with great, snappy interactions because the data is small, and local in the SPA. *Total* size in less than 220kb: 

- 119kb of images, 
- 46kb of mithril.js library (a less-known but smaller, faster alternative to Angular or React or Vue)
- 50kb of JS and CSS (which is mainly the data for the book)

This version is deployed at http://iching-mithril.blackoak.io

See https://github.com/JonSchwartzDev/i-ching-aspmvc for the ASP.NET Core MVC version.

See https://github.com/JonSchwartzDev/i-ching-react for the React SPA version.

Production deployment size differences: Mithril 220kb, React webpack 800kb, ASP MVC 1200kb.

Comparison of code for the three versions, with the UI they implement:
![Comparison of code for the three versions, with the UI they implement](https://github.com/JonSchwartzDev/i-ching-mithril/blob/master/iChing%20hexagram%20in%20three%20versions.png)
