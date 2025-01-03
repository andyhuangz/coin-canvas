# CoinCanvas
CoinCanvas is an online web application allowing users to both keep track of their financial transactions and stay up to date with any tasks.
Furthermore, users are able to freely create, delete, and update their tasks/transactions whenever they desire.
With a variety of features at users' disposal, CoinCanvas enables its users to confidently maintain control over their daily lives.
<br><br>


## Tech Stack
**Frontend:** React.js, Bootstrap, Chart.js <br>
**Backend**: Express.js, Node.js <br>
**Database**: MongoDB <br>
**Testing Frameworks/Libraries**: Mocha, Chai, Jest, React Testing Library <br>
**Other Tools**: Docker, Mongoose, JSON Web Tokens, Bcrypt
<br><br>


## Features

### Registration, login, logout
Users are able to create their own account, log in to that account, and log out. Each account will have their own personalized pages.
<br>
<video src= "https://github.com/user-attachments/assets/f9cdbe31-220f-42dd-96bb-8025a562b26c"> </video>
<br>

### Dashboard
The dashboard is the landing page when users sign in and provides a summary of their transactions. The dashboard contains three cards:
a card for their total balance, a card for their total income, and a card for their total expenses. Below the three cards are two graphs:
a graph summarizing the user's balance for each day, and a graph summarizing the total amount that each transaction activity causes.
<br>
<video src= "https://github.com/user-attachments/assets/4ab1fddb-ad91-4266-a2ab-d5ecb43411db"> </video>
<br>

### Tasks
On the tasks page, users will be shown all of their saved tasks. They have the option of adding more tasks and deleting all of the saved tasks. 
For each individual saved task, users can view the task's details, edit the task, or delete the task. Users can use the search bar to filter tasks by their title.
There is also a counter that keeps track of how many saved tasks there are in total.
<br>
<video src= "https://github.com/user-attachments/assets/0f069e89-855c-45ec-a1f9-aa204de16cc7"> </video>
<br>

### Transactions
On the transactions page, users will be shown all of their saved transactions. Users have the option of adding more transactions or deleting all of the transactions. 
For each individual saved transaction, users can edit the transaction, or delete the transaction. Users can use the search bar to filter transactions by their activity.
There is also a counter that keeps track of how many saved transactions there are in total.
<br>
<video src= "https://github.com/user-attachments/assets/2fe42915-a39b-4377-be17-2c2ff6d22e9d"> </video>
<br>

### Settings
The settings page will show the user their account details and preferences. Users can update their personal details, and they can also change their currency preference for the transactions.
<br>
<video src= "https://github.com/user-attachments/assets/aab4af77-3c41-44be-aad2-8ad730306e2b"> </video>
<br>


## How to run the application

### Prerequisites
**Operating System**: Windows, macOS, or Linux <br>
**Software**: Git, a code editor/integrated development environment (example: Visual Studio Code), Node.js (optional), <br>
Docker, Docker Compose, and Docker CLI <br> (Installing only Docker should provide all of the necessary Docker tools mentioned) <br>

### Setup
**1.** Clone the repository <br>
**2.** Use this command in your terminal ```cd coin-canvas``` <br>
**3.** Create a **.env file** in the **backend folder** <br>
**4.** In the .env file, add these 3 variables: <br>
```PORT = 3000``` <br>
```DB_URL = "mongodb://mongo:27017/CoinCanvasDB"``` <br>
```ACCESS_TOKEN_SECRET = " "``` <--- the string's value can be whatever you want, and it is used to encode your authentication tokens <br>

### Running the application
**1.** Make sure your terminal is in the coin-canvas directory, and it should contain the **docker-compose.yml** file <br>
**2.** Also make sure the **Docker Desktop application** is opened and running in the background <br>
**3.** Use this command in your code editor's terminal: ```docker-compose up``` <br>
**4.** Access the website on your browser at **http://localhost:5173/** <br><br>


## Resources
Git: https://git-scm.com/ <br>
Docker: https://www.docker.com/ <br>
Node.js (optional): https://nodejs.org/en
<br><br>


