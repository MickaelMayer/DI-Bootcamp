
# exercices 1
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

print("Hello world\n"*4)

# ------------------------

# ex2
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

print ((99**3)*8)

# -------------------------

# ex3
# Predict the output of the following code snippets:

# >>> 5 < 3 .               false
# >>> 3 == 3 .              true
# >>> 3 == "3" .            false
# >>> "3" > 3 .             error
# >>> "Hello" == "hello" .  false


# -----------------------------------------
#ex4
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Macbook air"
print("I have a "+ computer_brand+" computer")


# -------------------------------------

# ex5 
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = "Mayer Mickael"
age = "31"
shoe_size = "43"
info = "Hello my name is " + name  + " and I am " + age +" old\n I wear size "+ shoe_size + " and I don't know why you are asking for my shoe size :)"

print (info)

# ----------------------------------

# ex6
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.


a = 8
b =7

if a > b:
    print("Hello world")
    
# -----------------------------------
# ex7

# Write code that asks the user for a number and determines whether this number is odd or even.



num= int (input(" Please choose a number "))

if num % 2 == 0 :
    print("even")
else :
    print("odd")
    
# -------------------------------------

# ex8
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

name = (input("what is your name Sir?"))

if name == "mickael":
    print("oh wow such a coincidence we have the same name ")
else :
    print(" I am vey sorry but you don't have the privilege to share the same name than me ")
    
    
# --------------------------------
# exe9
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

height = int (input("what is you heigth in CM please?"))

if height == 145 or height > 145:
    print("please ejoy your ride")
else :
    print("I am sorry you need to grow a little bit before  ")
    
