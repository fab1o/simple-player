# @fab1o/simple-player

Video playback using MP4’s provided by Server with an HTML5 Video Element.

## Setup

I created two Database implementations:
1. LocalDB - serving local data
2. MongoDB - serving data from MongoDB


### 1. LocalDB

Please run:

```sh
npm start
```

You should be redirected to the client app on your browser, if not, go to: [http://127.0.0.1:8080/public/](http://127.0.0.1:8080/public/)

### 2. MongoDB

To have data be served by MongoDB, run the app with your username and password:

```sh
npm start --username=<username> --password=<password>
```

Where `<username>` is your database username and `<password>` is your database password.

