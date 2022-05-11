# dormakaba-notes
Note application with React and Nodejs Rest APIs

## How To Run
1. Create an account on https://www.mongodb.com/ and Login in it. 
2. Go to Mongodb Atlas. 
3. Go to `Database Access` under `Security` and `Add New Database User`
4. Create new Cluster under `Database`.
5. Click on `Connect` and then click on `Connect your application`
6. Copy connect string and paste in under server/config/default.josn file.
7. Fill user's password in string.

Note:- You may need to enter you Current IP address in `Network Access` under `Security`

default.josn will look like - 
```
{
"mongoURI": "mongodb+srv://mongodb:<password>@cluster1.x74pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}
```

Start server:
```
cd server
npm install
npm start
```

Start Web server
```
cd client
npm install
npm start
```
