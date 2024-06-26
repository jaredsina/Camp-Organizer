<p align="center">
    <img src="/client/src/assets/logo.png" alt="theCoderschool logo">
</p>


<h1 align="center">theCoderSchool Program Manager</h1>

This web application aims to increase organization and effectiveness when managing numerous programs for theCoderSchool Montgomery. 
<p align="center">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jaredsina/Camp-Organizer">
<img alt="GitHub Actions Client Workflow Status" src="https://img.shields.io/github/actions/workflow/status/jaredsina/Camp-Organizer/client-pipeline.yaml?label=client">
<img alt="GitHub Actions Backend Workflow Status"  src="https://img.shields.io/github/actions/workflow/status/jaredsina/Camp-Organizer/backend-pipeline.yaml?label=backend">
</p>

### Link to Project
<p>Notice! Both Backend and Frontend are running on free tiers. Please give services time to startup after visiting link.</p>
<a href="https://camp-organizer-front-end.onrender.com/" target="_blank" rel="noopener noreferrer">
theCoderSchool Program Manager
</a>



## Features

<ul>
    <li>Authentication system to protect information<br><br>
    <img src="/assets/auth-system.gif" alt="gif of authentication system">
    </li>
    <br>
    <li>Enables users to create, read, update or delete programs, tasks, partners, and files<br><br>
    <img src="/assets/program-crud.gif" alt="gif of program crud operations"></li>
    <br>
    <li>Allows users to manage tasks specific to a program and set optional email reminders for each task<br><br>
    <img src="/assets/task-creation.png" alt="picture of task creation form"></li>
    <li>Users can upload pictures, pdfs, and documents to the system, which are saved on Google Cloud Storage</li>
    <li>Enables users to save information specific to a Partner, such as multiple programs being run, points of contact, and invoice reminders</li>

</ul>

## Tech used

In developing our web application, we strategically chose a stack of technologies that collectively contribute to a robust and efficient system. The combination of Node.js, Express.js, React, and MongoDB was carefully selected for various reasons, each playing a crucial role in enhancing the performance, scalability, and user experience of our application.

##### MongoDB

MongoDB played a crucial role in storing program, partner, and task data for the web application. Its document-oriented, scalable, and flexible nature provided an efficient and adaptable solution for representing and managing diverse types of information associated with programs, partners, and tasks within the application.

##### Express

We chose Express.js for its simplicity and ease of use in building robust APIs and handling HTTP requests Express.js facilitated the creation of RESTful APIs endpoints, establishing a seamless communication channel between the frontend (React) and the backend (Node.js)

##### React

React, a powerful JavaScript library for building user interfaces, played a pivotal role in crafting an interactive and dynamic dashboard on the frontend of our application.

##### NodeJS

Ensure a seamless integration between the frontend and backend, allowing developers to build feature-rich and scalable applications using a consistent JavaScript-based technology stack.

##### Tailwind

Tailwind CSS proved to be an invaluable tool in our styling toolkit, offering a rapid, flexible, and maintainable approach to crafting the visual elements of our application.

##### Jest 

Jest extended its capabilities to support integration testing of entire features or user scenarios within the backend. This holistic approach ensured that different components interacted as expected, providing end-to-end validation of features and enhancing the overall quality of the application.


