Problem Statement
Your company maintains a CAD Parts Repository used in mechanical design
projects. You are asked to develop a basic system using Express.js +
TypeScript for the backend and HTML + TypeScript for the frontend. The
application should display all available CAD parts and allow adding or
deleting entries.


In this I am jsut doing the backend with the hepl of Postman as I don't know how to do DOM manupulation in the frontend

Step to config file in server using Express js
1. npm init -y for initilazition
2. npm install express
3.npm install --save-dev typescript ts-node @types/node @types/express (for the typescript )
4. npx tsc --init
5. to run it 
npm run build 
npm start

 Features

CRUD Operations- Create, Read, Update, and Delete CAD parts
Type Safety - Built with TypeScript for robust type checking
RESTful API - Standard REST endpoints for easy integration
Category Management - Support for multiple part categories (Pipe, Valve, Flange, Elbow)
Validation - Input validation for all API requests
In-Memory Storage - Fast data storage with in-memory arrays
Error Handling - Comprehensive error responses with messages

Results ScreenShorts
working Localhost 
<img width="1920" height="986" alt="image" src="https://github.com/user-attachments/assets/fa5da3c2-0ae4-49c6-92f8-f94a9f28e73b" />

<img width="1895" height="984" alt="image" src="https://github.com/user-attachments/assets/f2859894-311e-4cb6-853c-28e068d88bbb" />


On the Postman 

GET 
<img width="1886" height="951" alt="image" src="https://github.com/user-attachments/assets/0bec1725-9119-4d70-8a78-828f3ce62edc" />

Post
<img width="1908" height="996" alt="image" src="https://github.com/user-attachments/assets/934fe906-3c6a-42d7-9156-a8c65cc6385f" />

Delete
<img width="1905" height="955" alt="image" src="https://github.com/user-attachments/assets/2b24c06e-8855-42b1-814f-c2b391312dbe" />

