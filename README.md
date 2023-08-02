# @fab1o/simple-player

I have not been able to access the database due to permissions and network access. I decided to work on a creative solution. I created two Database implementations:
1. LocalDB - serving local data
2. MongoDB - serving data from MongoDB

The implementation for MongoDB is done and should work¹, but I have not been able to test it. Nevertheless, I was able to move forward and finish the assignment after Shannon, who was very helpful, provided the data.

### 1. LocalDB

Please run:

```sh
npm start
```

You should be redirected to the client app on your browser, if not, go to: [http://127.0.0.1:8080/public/](http://127.0.0.1:8080/public/)

### 2. MongoDB

To have data be served by MongoDB, run the app with username and password:

```sh
npm start --username=<username> --password=<password>
```

Where `<username>` is your database username and `<password>` is your database password.

 For any question, please contact me at fabio [dot] jsx [at] gmail [dot] com


---
¹ Should work if the name of the database and the collection that I wrote in the code are correct.
