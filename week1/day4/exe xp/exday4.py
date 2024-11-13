# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


my_fav_numbers = {"18,70,56"}
my_fav_numbers.add("22,49")
my_fav_numbers.pop()
print(my_fav_numbers)

friend_fav_numbers = {"38,90,26"}

our_fav_numbers = my_fav_numbers | friend_fav_numbers

print(our_fav_numbers)

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

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")

apple_count= basket.count("Apples") 

print(basket)
print(f"You have {apple_count} apples in the basket")


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
