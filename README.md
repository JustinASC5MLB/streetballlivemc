# StreetballLiveMC.IO
## Justin L, John M, Kevin V

### Description
Overview: StreetballLiveMC.IO is a web application for connecting a community through streetball and exercise. Inspired by a multitude of basketball tournaments. 

In our StreetballLiveMC.IO web application, active users in the same neighborhood or city will be able to get connected with other users to play basketball or exercise together. This new service will encourage young adults and kids to try to live a more healthy fit lifestyle while making new friends.

### User Stories
Users will be able to enter their username, and current location and get back other user(s) with a different username, and current location.

1. as a registered-user, I can create a game
2. as a non-registered user, I can join a game + submit my contact info

### Data Model
* the application will store users and matches.
* users will have basic properties(name, location, etc.)
* matches will "match" users with other users nearby to play basketball or exercise

```
user {
  username: string,
  location: string,
}
```

### APIs / Functionality
* Firebase API
* Google Maps API
* Click events: news, contact, about me, site, matching tool

### Division of Labor 
Kevin -> CSS
Justin -> JavaScript
John -> HTML
