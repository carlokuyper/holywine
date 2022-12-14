

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/MikeMaynard14/termoneexample)
![GitHub watchers](https://img.shields.io/github/watchers/MikeMaynard14/termoneexample)
![GitHub language count](https://img.shields.io/github/languages/count/MikeMaynard14/termoneexample)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MikeMaynard14/termoneexample)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Carlo Kuyper</h5>
<h5 align="center" style="padding:0;margin:0;">180145</h5>
<h6 align="center">DV200 - Term 1 | 2022</h6>
</br>
<p align="center">

  <a href="ttps://github.com/carlokuyper/starwars_web">
    <img src="images\logo.png" alt="Logo" width="160" height="160">
  </a>
  
  <h3 align="center">Holy Wine</h3>

  <p align="center">
    A react project that uses the Node.js, Express.js, Mongo DB Atlas, and JWT Authentication
    to allow a user to easily access and manage there website.<br>
        
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/carlokuyper/starwars_web/issues">Report Bug</a>
    ·
    <a href="https://github.com/carlokuyper/starwars_web/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/carlokuyper/holywine/blob/main/images/Carlo_Kuyper_180145_Mockup%20(1).png)

### Project Description

A nice introduction to this amazing project of mine.

### Built With
almost final
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Mongo DB Atlas](https://www.mongodb.com/)
* [JWT Authentication](https://jwt.io/introduction)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/carlokuyper/holywine.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/carlokuyper/holywine
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Open 2 terminals and navigate to the client and server files  </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm i
   ```

4. An API key is not required


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://github.com/carlokuyper/holywine/blob/main/images/Carlo_Kuyper_180145_Mockup%20(3).png)

### Make and manage everything! 

The entire website is build to help the user. It features multiple aspects like stock management, order processing and many more

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the process I used to create the final website. I started by looking at multiple examples of what I wanted to create or how I wanted to design the website.  After creating wireframes I got an idea of how I wanted to design the website.  I then went on to implement the functionality of the website, and style the website.

### Inspiration

Initial Wireframe

![image3](https://github.com/carlokuyper/holywine/blob/main/images/Landing%20page.png)

### Final UI

Product Page

![image4](https://github.com/carlokuyper/holywine/blob/main/images/Products.png)

Products Page

![image5](https://github.com/carlokuyper/holywine/blob/main/images/Product%20page.png)

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `React-Router v6`.
* Implemented `Node.js`, `Express.js` and `Mongo DB Atlas` to create the main system
* Added additional user security with`JWT Authentication`

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* This was a fun and interesting process, although it was a ver intense project to learn and implement react within the given time period. I do believe it was worth it and a very good experience.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* The main challenge was being able to send an array to the DB. 
* For my website I many used API calls to send data throughout my website. This worked perfectly but when it came to sending the products in cart to the orders DB it didn't work, as Mongoose doesn't allow an object array with an object array inside it to be transferred.  

Because of this issue I was also not able to create a more complex system of storing products, as I originally wanted to create an in depth system when it comes to handling the products.

#### Above And Beyond

Additional features that I implemented into the brief.
<!-- what did you learn outside of the classroom and implement into your project-->
* I changed my system of handling data that it uses the db to pull and push data as needed
* Additionally the user can remove the item from the cart from any page as it is all connected through the DB
* I added an additional section in the cart that allows a users to change/update the information before purchasing.
* I also added an extra page for creating/registering a user

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* For future improvements, I would like to focus more on fixing the order items with the arrays

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image6](https://github.com/carlokuyper/holywine/blob/main/images/Carlo_Kuyper_180145_Mockup%20(4).png)

<br>

![image7](https://github.com/carlokuyper/holywine/blob/main/images/Carlo_Kuyper_180145_Mockup%20(2).png)


<!-- AUTHORS -->
## Authors

* **Carlo Kuyper** - [carlokuyper](https://github.com/carlokuyper)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Carlo Kuyper** - [carlokuyper@gmail.com](carlokuyper@gmail.com) 