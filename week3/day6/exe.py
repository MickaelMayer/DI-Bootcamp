import random
import json
#  Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

def get_words_from_file():
    try:
        with open('/Users/mickael/Desktop/DI-Bootcamp/week3/day6/words.txt', 'r') as f:
            content = f.read()
            words = content.split() 
        return words
    except FileNotFoundError:
        print("The file 'words.txt' was not found.")
        return []
get_words_from_file()


# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:

def get_random_sentence(length):
    words = get_words_from_file()
    
    if length < 2 or length > 20:
        raise ValueError("Length must be between 2 and 20.")
    random_words = random.choices(words, k=length)
    
    sentence = ''.join(random_words).lower()
    
    return sentence   
    
    
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

# Create a function called main which will:

def main():
    print("Choose a length, and we will return you a random sentence.")
    try:
        
        user_choice = int(input("Choose a number between 2 and 20: "))
        
        
        if user_choice < 2 or user_choice > 20:
            print("Error: The number must be between 2 and 20.")
        else:
            
            sentence = get_random_sentence(user_choice)
            print(f"Your random sentence is: {sentence}")
    except ValueError:
        print("Error: Please enter a valid integer.")
    
    
# main()
# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.





















# 🌟 Exercise 2: Working with JSON
# Instructions
# import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data =json.loads(sampleJson)
salary = data['company']['employee']["payable"]["salary"]
print(f'salary:{salary}')
data["company"]["employee"]["birth_date"] = "1990-01-01"
with open("updated_data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Updated JSON saved to 'updated_data.json'")


# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.