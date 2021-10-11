# i-ching-mithril
This is an example of how small a great-looking responsive single page app can be, using mithril.js. The content is the 3500-year-old taoist text, the I Ching, which offers nicely structured data, coolly binary logic from oh so long ago, and the opportunity for very nice-looking images that are small in size. 

The web app works well on phones, tablets and PC browser, with great, snappy interactions because the data is all local in the SPA. *Total* size in less than 220kb: 

- 119kb of images, 
- 46kb of mithril.js library (a less-known but smaller, faster alternative to Angular or React or Vue)
- 50kb of JS and CSS (which is mainly the data for the book)

It's hosted and running at http://iching.blackoak.io

I finally got around to an ASP.NET Core MVC version of the app, at: https://github.com/JonSchwartzDev/i-ching-aspmvc. Back and forths to the server make that inferior to this SPA version, but I intend to experiment with Blazor and Xamarin to run native versions of the ASP MVC version, after Core 6.0 releases in November. At that point the .NET Core will run on iOS, Android, Mac, Linux and Windows. 

I'm working next on a React version, which I will also take to React Native.

Comparison of code for the three versions, with the UI they implement:
https://github.com/JonSchwartzDev/i-ching-mithril/blob/master/iChing%20hexagram%20in%20three%20versions.png 
