# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


# my_fav_numbers = {"18,70,56"}
# my_fav_numbers.add("22,49")
# my_fav_numbers.pop()
# print(my_fav_numbers)

# friend_fav_numbers = {"38,90,26"}

# our_fav_numbers = my_fav_numbers | friend_fav_numbers

# print(our_fav_numbers)

# ------------------------------------
# exe2
# Given a tuple which value is integers, is it possible to add more integers to the tuple? 

# NO!

# ========================================
# exe3

# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0,"Apples")

# apple_count= basket.count("Apples") 

# print(basket)
# print(f"You have {apple_count} apples in the basket")


# =============================================
# exe4

# Recap – What is a float? What is the difference between an integer and a float? 
# 
# numbers! float has a "."(decimal) integer dosen't 


# Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?


my_numbers= 1
listed_numbers =[]
while my_numbers <= 5:
    listed_numbers.append(my_numbers)
    my_numbers += 0.5

print(listed_numbers)

# ==-========================
# exe5

# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


# list_ofNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

# for number in list_ofNumbers:
#     print(number)

# or with range

for number in range(1,21):
        print(number)

for number in range(1,21):
    if number %2 == 0 :
        print(number)
        
        
# ========================================
#  exe6

# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# name = True

# while name :
#     user_name =input("What is your name?")
#     if user_name == "mickael":
#         print("we share the same name!!")   
#         break
    
    
    
# =================================
# exe7

# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# 
        
# ======================================
# exe8
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# pizza_topings = True
# your_toppings = []
# price_per_toppings = 2.5
# while pizza_topings:
#     user_choice =input("choose your pizza toppings. (enter 'quit' when you are done)")
#     if user_choice == 'quit':
#         pizza_topings = False
#     else :
#         your_toppings.append(user_choice)
#         print("This will be added to your pizza")
        
# print(f"your toppings are {your_toppings}")

# final_price = price_per_toppings*len(your_toppings)
# print(f"Final price for toppings is,{final_price}")



# =================================
# exe9
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# under_3 = 0
# age3_12 = 10
# over_12 = 15


# age_of_family_member = True
# while age_of_family_member :
#      member_age = input("what are the age of each person in the family?(enter 'done' when you finished)")
#      if member_age == "done":
#          age_of_family_member = False
#      else :
#          print("thanks")











# ==================================
# exe10
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich
