App Created to compare the rating of various parking lots in different locations. 

I would like to have deployed this app but there is a difficult CORS issue that I am trying to work around. For now it requires the use of a local server to function. 

To run app:
1. Create an API key (Access Token from here on out in the documentation), using the yelp developer page https://www.yelp.com/developers/v3/manage_app NOTE: MAKE SURE TO SIGN UP FOR THE BETA VERSION.
2. Install all dependencies using npm or yarn "npm i". 
3. Put an Access Token in the .env file in the following format
ACCESS_TOKEN=Yelp Access Token
4. Using npm or yarn, run the server script in the terminal "npm run server", this helps avoid a very common but troublesome Yelp CORS error by using the cors-anywhere package. 
NOTE: the server automatically runs on localhost/8080 if the port is unavailable you will need to change it in server.js and index.js so that they have matching values. 
5. In a SEPERATE TERMAINAL, using npm or yarn run the start script "npm start" to launch the application. 

In the app just enter a City and Click search lots, you will be presented with a list of parking lots in that area and their parking score. The lower the score the worse they were rated. 

