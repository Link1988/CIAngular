# Continuous-Integration-and-Deployment-for-AngularJS-and-Node.js
[pluralsight] Continuous Integration and Deployment for AngularJS and Node.js [2014, ENG]

___

# 01. Getting Started

01\. Getting Started | 02-npm Install

    npm install  

01\. Getting Started | 03-Bower

    $ bower install

01\. Getting Started | 04-Node Startup

    $ nodemon server.js  

01\. Getting Started | 05-Front End Setup

    $ nodemon server.js  

01\. Getting Started | 06-Angular Setup

    $ nodemon server.js  

01\. Getting Started | 07-Display Jobs

    $ nodemon server.js  


# 02. Deployment Intro

02\. Deployment Intro | 10-Heroku Deploy

    $ heroku login  
    $ heroku create  
    $ git push heroku master  
    $ heroku ps:scale web=1


02\. Deployment Intro | 11-Database MongoDB

    install mongodb locally

    $ npm install
    $ nodemon server.js

02\. Deployment Intro | 12-Jobs API

    $ nodemon server.js
    
localhost/api/jobs


02\. Deployment Intro | 13-Deploy With MongoDB

    $ git push heroku master

http://heroku-project-name.herokuapp.com/api/jobs

02\. Deployment Intro | 14-Front End Data

    $ bower install
    $ git push heroku master

http://heroku-project-name.herokuapp.com


# 03. Testing and Deployment

03\. Testing and Deployment | 17-First Test | mocha | chai

    # npm install -g mocha  
    $ npm install
    $ mocha --timeout 15000


03\. Testing and Deployment | 18-Refactoring Our Test | mocha | chai | bluebird

    $ npm install
    $ mocha


03\. Testing and Deployment | 19-Refactoring Job | mocha | chai | bluebird

    $ mocha


03\. Testing and Deployment | 20-Mocha Before | mocha | chai | bluebird

    $ mocha


03\. Testing and Deployment | 21-Jobs Data | mocha | chai | bluebird

    $ mocha



# 04. Continuous Integration

https://codeship.com

04\. Continuous Integration | 24-Continuous Integration

Test Commands:  

    npm install mocha -g  
    mocha

04\. Continuous Integration | 25-BDD Brainstorm


04\. Continuous Integration | 26-API test With SuperTest | supertest | test failed its ok

    $ npm install  
    mocha


04\. Continuous Integration | 27-API Implementation | supertest | body-parser | test passed

    $ npm install  
    mocha

04\. Continuous Integration | 28-API Jobs Get Exercise | supertest | body-parser

    mocha


04\. Continuous Integration | 29-Server Update | supertest | body-parser

    mocha


04\. Continuous Integration | 30-Karma Setup | karma | karma-cli | karma-mocha | karma-chai

    $ npm install -g karma-cli  
    $ npm install && bower install
    $ karma init  

Which testing framework do you want to use ?
mocha  

Do you want to use Require.js ?  
no

Do you want to capture any browsers automatically ?
> Chrome  


What is the location of your source and test files ?
> public/app/**/*.js  
> test/app/**/*.js  


Should any of the files included by the previous patterns be excluded ?  
> public/app/app.js  

Do you want Karma to watch all the files and run the tests on change ?
yes



04\. Continuous Integration | 31-AngularJS Post Test | karma | karma-cli | karma-mocha | karma-chai | phantomjs | karma-phantomjs-launcher | test failed its ok

    $ npm install
    $ karma start


04\. Continuous Integration | 32-AngularJS Jobs Service | karma | karma-cli | karma-mocha | karma-chai | phantomjs | karma-phantomjs-launcher

    $ karma start  


04\. Continuous Integration | 33-Update App | karma | karma-cli | karma-mocha | karma-chai | phantomjs | karma-phantomjs-launcher

    $ mocha test/server

04\. Continuous Integration | 34-Jobs Data Exercise | karma | karma-cli | karma-mocha | karma-chai | phantomjs | karma-phantomjs-launcher


    $ mocha test/server  

each time when you press F5 in browser, the additional test block is add



04\. Continuous Integration | 35-Job Posting Form | karma | karma-cli | karma-mocha | karma-chai | phantomjs | karma-phantomjs-launcher


04\. Continuous Integration | 36-Deploying | karma | karma-cli | karma-mocha | karma-chai | phantomjs | karma-phantomjs-launcher

https://codeship.com

Test Commands:
    
    npm install mocha -g  
    npm install karma-cli -g  
    mocha test/server
    karma start 
