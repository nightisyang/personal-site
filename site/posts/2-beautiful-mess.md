---
title: beautiful mess
cover_image: /blog/img/abstract.png
date: 16-11-2022
---

# beautiful mess

## descending

It was end of April when [basic-poker](https://github.com/nightisyang/basic-poker) was nearing completion, the development of a simple UI for the game was rewarding as everything was done from scratch and without additional frameworks or libraries. Just pure JS, HTML and CSS. I also realized at this moment that I wasn't dealing with any "real" data, as inputs were mostly limited to game logic with all the code running client side. I had some ideas on how to further expand on this project, and eventually implemented basic-poker as a [discord bot](https://github.com/nightisyang/discord-poker-bot), running on a Node.js server. This udemy [course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) was instrumental to my learning of backend development.

## mash-up

Having some experience in backend development, I wanted to dip my toes into frontend libraries/framework and decided learn up some [React](https://www.udemy.com/course/React-the-complete-guide-incl-redux/). While going through the course, I realize that I was stuck in tutorial hell and was not practicing what I was learning. The course did a good job in explain how React works, i.e. re-using components, hooks, state, passing data through props, but does not and in my opinion can't teach what is important in frontend development, creativity. Frontend frameworks like React are just tools for developers to implement their vision of what a good UI would look like. This also applies somewhat to backend code, where I'll touch upon later.

Just like how [basic poker](https://github.com/nightisyang/basic-poker) gave me in sight on how to coding really works, I wanted to delve deeper into React through building a project. It was also a good time to combine and test my frontend and backend knowledge into a single project, and thus[splish](https://github.com/nightisyang/splish) was born. With a slight twist, using another framework, [React Native](https://reactnative.dev/).

The choice of building a mobile app was an easy one, almost every interaction with a site, for non-work purposes, is usually done through a mobile phone that is conviniently available in your pocket.

> "Wouldn't it be nice to have an app that list down all the waterfalls in Malaysia?" - me

With just that brief thought, I knew that it'd be a nice project to work on, as it's something that I would use. But it wasn't an original idea as the folks at [Waterfalls of Malaysia](https://waterfallsofmalaysia.com/d.php) were already compiling since [1998](https://waterfallsofmalaysia.com/index.htm), a time when the internet was at it's very infancy in Malaysia. Nevertheless, repackaging the information available on the site as a mobile app would still server the same purpose to me i.e. to learn, and learn I did.

The very first thing to do was to contact the admins and obtain permission to re-use their content. I was lucky that the group behind the site was receptive to the idea. The next thing to do was to obtain all the information available on the site. This was the first challenge, scrapping data from a site. If only I knew earlier that there were easier ways of doing it using [Python library](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) it would have saved me lots of time, but I guess that's just how learning works. [cheerio](https://cheerio.js.org/) is a bs4 equivalanet for JS that is mainly based off [jQuery](https://jquery.com/) a library which was developed from a time before React was available. This is the starting point of where I learn about dependencies, and dependency hell. After compiling, curating, and organizing the information and placing them on [Mongo](https://www.mongodb.com/). It was time to implement the API request/response on the backend.

React Native is just like React, it inherits all of the hooks and functionalities of React without JSX and also CSS. The one thing I enjoyed using React Native was access to standard libraries that produces similar results across both Android and iOS platforms. And it is also the source of frustration as not all behaviours are available on both platforms. Dealing with how Stylesheets worked in React Native was also initially a challenge as styles did not "casscade", but at the same time I did learn how to use flex.

Implementing features on the app was a whole new experience. It's just not feasible or time-efficient to implement every feature again from scratch as it's likely that someone has implemented it before

Want to navigate between pages?  
[react-navigation](https://reactnavigation.org/)

Add a map?  
[react-native-maps](https://github.com/react-native-maps/react-native-maps)

Improve image fetching speed? Cache images?  
[react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)

Add zoom functionality to image?  
[react-native-image-zoom-viewer](https://www.npmjs.com/package/react-native-image-zoom-viewer)

Libraries like [react-navigation](https://reactnavigation.org) are also massive in terms of other functionalities it provides, I have just barely scratch the surface of what it can do.

Testing. Lots of testing. Debugging. Lots of debugging. Bread and butter.

It was a relief when the app finaly took shape and it's something that I'm proud of. Publishing the app on both app stores ([Android](https://play.google.com/store/apps/details?id=com.splish14092022&pli=1) and [iOS](https://apps.apple.com/us/app/splishmy/id6443442595)) was an experience on it's own and wasn't as difficult as I'd imagine. The final act was to host the backend server, and what better way to learn more about hosting than do it it your own? I took some tinkering, and having the experience of self-hosting before (this site) was a big help.

## ascending

Having built a basic fullstack app, it gave me appreciation of the work that has gone into massive apps like social networks, e-commerce etc etc on not only how the data is organized, stored and retrieved but also how it's presented to the user in a easily consumable manner. At the end of the day, programming/software engineer are just tools to solve real world problems and users do not want to exprience more friction when interacting with an app, I have newfound respect for UI/UX developers.

Coming back to my comments of backend code, and I think this applies more to consumer facing applications. Content is king, and again - the code is just a tool. If it wasn't for the good folks at [Waterfalls of Malaysia](https://waterfallsofmalaysia.com/d.php), the app is just an empty shell void of anything.

Knowing how to use libraries is also a skill, though managing several libraries can get really messy very quickly, it's just part of the process in creating a beautiful mess.
