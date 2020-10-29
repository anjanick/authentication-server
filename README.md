# Auth CKG

[![N|Solid](https://i.ibb.co/4PN4mc2/POWERED-BY.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/anjanick/authentication-server)

Auth CKG is an Authentication server which uses best Node JS pratices. It is more efficient and fast than that of any auth-enabled system. As it is built on Node JS, the major part is non-blocking IO Operations. It not only reduces the server costs and but reduces the latency as well.

# Features!

- Decoupled Services makes it scalable.
- Multiple people can work on the same backend without changing each other's code.
- Callbacks to reduce the IO blocks making low CPU + RAM usage.

Its built on MVC Framework hence it is lightweight and conventions is that of people naturally can understand the services decoupled.

### Installation

It requires [Node.js](https://nodejs.org/) to run.
```sh
$ git clone https://github.com/anjanick/authentication-server.git
```
Install the dependencies and devDependencies and start the server.

```sh
$ cd authentication-server
$ npm install
$ npm start
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```
### DataBase Configuration

```sh
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`);
  
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
```
### Environment Variables
```sh
PORT= Define the Port For Serving the Node Js App
MYSQL_HOST = Host Address of the Database.
MYSQL_PORT = Port number of the Database.
MYSQL_USER = Username of the Database User.
MYSQL_PASSWORD = Password of the Database User.
MYSQL_DATABASE = Name of the Database
JWT_ACCESS_KEY = Key to generate Access tokens.
JWT_REFRESH_KEY = Key to generate Refresh tokens.
JWT_ACCESS_EXPIRY = Expiry for Access Token. Default value = 5m
JWT_REFRESH_EXPIRY = Expiry for Refresh Token. Default value = 15d
```
License
----
MIT