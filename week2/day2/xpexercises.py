# Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# def display_message():
#     print('I am learning function in Pyhon')

# display_message()


# ==================================================
# 🌟 Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

# def favorite_book(title):
#     print(f"one of my favorite book is {title}")
    
# favorite_book("sefer Hazirchonot")



# =================================================
# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# def describe_city(city,contry="France"):
#     print(f'{city} is in {contry}')
    
# describe_city(city = "paris")









# =====================================
# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.




import random

# def compar_number():
#     number = int (input("enter a number between 1 to 100"))
#     random_number = print(random.randint(1, 100))
    
#     if number == random_number:
#         print("it's the same number")
#     else:
#         print("you failed ")
    
# compar_number()
    

# ===============================================
# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

# def make_shirt(size,text):
#     print(f"the size is {size} and this is the text{text}")
    
    
# make_shirt(56,"hello")


# def make_shirt(size = "L", text = " 'I love Python' "):
#     print(f"the size is {size} and this is the text{text}")
    
    
# make_shirt()

# def make_shirt(size = "M", text = " 'I love Python' "):
#     print(f"the size is {size} and this is the text{text}")
    
    
# make_shirt()

# def make_shirt(size = "M", text=""):
#     print(f"the size is {size} and this is the text{text}")
    
    
# make_shirt(size= "M", text=" hello")



# ================================================================
# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.


# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians():
#     print(magician_names)

# show_magicians()

# def make_great():
#     for i in range(len(magician_names)):
#         magician_names[i] = "The Great " + magician_names[i]


# make_great() 
# show_magicians()
    



# ========================================
# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


# def get_random_temp():
#     return (random.randint(-10, 40))
# get_random_temp()

# def main():
#     temperature = get_random_temp()
#     if temperature <= 0:
#         print(f"“Brrr, that’s freezing! Wear some extra layers today, today's temperature is {temperature}”")
#     elif  1<=  temperature <=16:
#         print(f"Quite chilly! Don’t forget your coat, today's temperature is {temperature}")
#     elif 17<=  temperature <= 23:
#         print(f"still a bit cold today, today's temperature is {temperature}")
#     elif 24 <= temperature <= 32:
#         print(f"pefect temperature, today's temperature is {temperature}")
#     elif 33 <+ temperature <= 40:
#         print(f"stay home it's dangerous, today's temperature is {temperature}")
        
    # print(f'dear customer teh temperature today is {temperatue} Celcius')
# main()
        
# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().
    

# def get_random_temp(season):
#     if season == "winter":
#         return (random.randint(-10, 3))
#     elif season == "spring":
#         return (random.randint(4, 20))
#     elif season == "summer":
#         return (random.randint(21, 40))
#     elif season == "autumn":
#         return (random.randint(0, 15))

# # print(get_random_temp("summer"))

# def main():
#    season =input("type in a season")
#    return season
        
# season_input = main()
# weather = get_random_temp(season_input)

# print(weather)










# ==============================================
# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
# wrong_answer = []
# correct_answer = 0
# wrong_answer_count = 0


# def test(data):
#     global correct_answer, wrong_answer_count 

#     for item in data:
#         question = item["question"]
#         answer = item["answer"]
#         user_answer = input(f"{question}")
#         print(f"your answer is {user_answer}, the real answer is {answer}")
        
#         if user_answer != answer:
#             print("wrong")
#             wrong_answer.append(user_answer)
#             wrong_answer_count += 1
            
#         elif user_answer == answer:
#             print("good answer")
#             correct_answer +=1

# test(data)
# print(f"{wrong_answer} you got {wrong_answer_count} wrong answers and {correct_answer} correct answers " )


# Data for the quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

# Function to ask questions and track answers
def run_quiz(data):
    correct_count = 0
    wrong_count = 0
    wrong_answers = []

    for item in data:
        question = item["question"]
        answer = item["answer"]
        user_answer = input(f"{question} ")

        if user_answer == answer:
            print("Good answer")
            correct_count += 1
        else:
            print(f"Wrong. The correct answer is {answer}")
            wrong_count += 1
            wrong_answers.append({"question": question, "your_answer": user_answer, "correct_answer": answer})

    return correct_count, wrong_count, wrong_answers

# Function to display the results
def show_results(correct_count, wrong_count, wrong_answers):
    print("\n--- Quiz Results ---")
    print(f"Correct answers: {correct_count}")
    print(f"Wrong answers: {wrong_count}")
    
    if wrong_answers:
        print("\nDetails of wrong answers:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")
    else:
        print("Great job! You got all the questions right!")

# Run the quiz and display the results
correct_count, wrong_count, wrong_answers = run_quiz(data)
show_results(correct_count, wrong_count, wrong_answers)
