App Created to compare the rating of various parking lots in different locations. 

To run app:
1. Create an API key (Access Token from here on out in the documentation), using the yelp developer page https://www.yelp.com/developers/v3/manage_app NOTE: MAKE SURE TO SIGN UP FOR THE BETA VERSION.
1. Install all dependencies using npm or yarn <npm i>. 
2. Create a .env folder with an Acess Token from the Yelp API (NOTE: to make it work for graphql you need to be signed up for the beta version) the token should be in the .env file in the following format:
ACCESS_TOKEN=Yelp Access Token
3. Using npm or yarn, run the server script <npm run server> in the terminal, this helps avoid a very common but troublesome Yelp CORS error by using the cors-anywhere package. 
NOTE: the server automatically runs on localhost/8080 if the port is unavailable you will need to change it in server.js and index.js so that they have matching values. 
4. In a SEPERATE TERMAINAL, using npm or yarn run the start script <npm start> to launch the application. 
