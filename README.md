# tv-show-search-app

# My Awesome Project

Simple TV Show search app that displays all the images of TV shows that matches keywords entered in the search input.

**Link to project:** https://brianbud.github.io/tv-show-search-app/

![alt tag](tv-show-search-screenshot.png)

## How It's Made:

**Tech used:** HTML, JavaScript, Axios

This project was made to be more familiar understanding API, Promises ,Async Await, and practive with [Axios](https://axios-http.com/docs/intro) which is a promise-based HTTP Client for node.js and the browser.

For this app, I used the API called [TVMaze](https://www.tvmaze.com/api)

Using the API platform Postman, I identified that I want to use the image property to extract the url for the tv show.

I got the value from the form input and add it to the query search when calling the API.

Since a promise will be pending, I add the async keyword before the function name and await to the axios GET response.

I used a for of loop to loop through all the shows and to get the image for each show and append it to the body of the website.

I ran through an obstacle where not all shows had images, so I added a logic that the function will ONLY ran for objects that have images and ignore the ones that do not. I did this with a simple if statement.

Something new I learnt too is that axios can make a query string object so that multiple query search will be added to the to the URL.

## Lessons Learned:

-This is my first time using a tool called [Postman](https://www.postman.com/) which really help simplified using API than testing out in the console.log.

-I learnt that using preventDefault() method when testing forms is good to avoid needing to refresh or adding unncessary data to our database when testing. This method will as self-described, will stop the default action of submitting the form data. The data will not go anywhere when you click on submit.

-using axios params for key:value pairs to add in the query string, to be able to add multiple queries to the string instead of just using a template literal for only 1 query in the URL.
