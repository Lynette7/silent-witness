# StarkNet Cohort Assignment: Day 9

## Question: Building a blog engine with modules

You are tasked with building a basic blog engine using the Cairo programming language. The blog engine should have functionalities to manage posts and users. Follow the steps below to implement this blog engine.

### Level 1

Create a new Cairo package named "BlogEngine" using Scarb.

### Level 2

Inside the package, organize your code into appropriate modules for better maintainability:

1. Create a module named "models" to define the data structures. Inside this module:

- Define a struct named User with fields for username and email.
- Define another struct named Post with fields for title, content, and author (which is a reference to a User).

2. Create a module named "database" to simulate a basic database interaction. Inside this module:

- Implement a function named create_user that takes username and email and returns a new User instance.
- Implement a function named create_post that takes title, content, and author, and returns a new Post instance.

3. Create a module named "utils" to handle common operations. Inside this module:

- Implement a function named display_post that takes a Post instance and prints its details.

### Level 3

In the "main.cairo" file, import the necessary modules and perform the following operations:

- Create a user using the create_user function from the "database" module.
- Create a post using the create_post function and associate it with the user you
created.
