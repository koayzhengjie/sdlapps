# *Assignment: Restaurant Order Manager*

## **Objective**
I have been tasked with creating a project through the use of Node.js, React.js and MongoDB to create an application that can implement CRUD operations. The progression of this assignment can be supported through industry practices such as 
* JIRA usage
* Requirement Diagram with use of SysML
* GitHub Version Control
* CI/CD implementation for automatic deployments


## **Prerequisite**
Install the following before commencing the application
* Nodejs [https://nodejs.org/en]
* Git [https://git-scm.com/]
* VS code editor [https://code.visualstudio.com/]
* MongoDB Account [https://account.mongodb.com/account/login]
* GitHub Account [https://github.com/signup?source=login]
* Access to EC2 [https://d-97671c4bd0.awsapps.com/start#/]
* Putty [https://www.puttygen.com/#gsc.tab=0]

## **Project Setup**
* Clone repository: git clone [https://github.com/koayzhengjie/sdlapps.git]
* Navigate to project folder: cd sdlapps
* Install dependencies: npm install | yarn install
* Set up environment: cp .env // edit .env as needed
* Run application: npm start 

## ** CI/CD Pipeline Setup**
* Description: Automation of the whole git process, which allows for an easier time testing, building and pushing the application out.
* Tools & Service: GitHub, GitHub Actions, AWS, Puddy
* Setup:
   *  Clone repository: git clone [https://github.com/koayzhengjie/sdlapps.git]
   *  Install dependencies: npm install | yarn install
   *  Configuration
   *   Name: CI/CD Pipeline
on:
    push:
        branches:
            - main

jobs:
    deploy: 
        name: Deploy Backend & Frontend
        runs-on: self-hosted
        strategy:
            matrix:
                node-version: [22]
        environment: MONGO_URI
  


