App Created to compare the rating of various parking structures in different locations. 

To run app
1. Install all dependencies.
2. Create a .env folder with an Acess Token from the Yelp API (NOTE: to make it work for graphql you need to be signed up for the beta version) the token should be in the .env file in the following format:
ACCESS_TOKEN=  Yelp Access Token
3. Run the server script, this helps avoid a very common but troublesome Yelp CORS error. 
4. Run the start script to launch the application. 

NOTE: the server automatically runs on localhost/8080 if the port is unavailable you will need to change it in server.js and index.js so that they have matching values. 