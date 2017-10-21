# Rock Paper Scissors with a login and logout 

Play Rock Paper Scissors against a computer! This project uses an API and routing to take the users to different pages based on whether they are logged in or out. 


| routes        | page                                                             |
| ------------- |:----------------------------------------------------------------:| 
| /register     | user can register a username and password                        |
| /login        | user can login with an existing username and password combination|  
| /play         | user can play the game once logged in                            |  
| /logout       | user can click on logout button and logout                       |
| /users        | user can see a list of people who have registered                |

On opening the app you will be taken to a home page. If registering you must go to /register and create a username and password. After doing so, navigate to the /login page. There is currently a bug that means sometimes you username and password will flag as wrong on the first login attempt but reload the /login page and try again and you will be taken to a success page. From here you can click a button that will take you to the game. 

The game itself requires users to enter 'Rock', 'Paper' or 'Scissors' and press submit. The game then displays a relevant picture for the users move choice and the computer's move choice and displays the result and also keeps a running score.

To logout click the logout button and you will be redirected to the /login route which has a logout button. On click of this button you will be logged out and no longer able to access the /play route. 

Going forward I am going to store the scores that the user finishes on and maybe implement a first-to-five system. I will also fix the login bug and try to improve the user experience by referring to the username of the player after login!




