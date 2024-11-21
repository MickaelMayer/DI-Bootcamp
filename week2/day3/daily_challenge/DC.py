# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

# sorted_list = []

# def sorting_list():
#     user_list = input("enter a serie of words:")
#     if " " in user_list and "," not in user_list:
#         user_list = user_list.replace(" ",",")
#     user_list = [word.strip() for word in user_list.split(",")]
#     sorted_list= sorted(user_list)
    
#     print(','.join(sorted_list))

# sorting_list()


# =====================================================
# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples
# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

# 1. Take input from the user (a sentence).
# 2. Split the sentence into words using split().
# 3. Initialize a variable `longest_word` as an empty string.
# 4. Loop through the list of words:
#    - If the current word's length is greater than `longest_word`'s length:
#       - Update `longest_word` to the current word.
# 5. After the loop, `longest_word` will contain the longest word.
# 6. Print or return `longest_word`.

user_words = input("enter a list of words with different lenghts: ")
def extracting_word(user_input):
    return user_input.split()




def longest_word(word_list):
    the_longest_word = ""
    for word in word_list:
        if len(word)> len(the_longest_word):
            the_longest_word = word
            return the_longest_word
    print(the_longest_word)
 


split_list = extracting_word(user_words)  # Get the list of words
result = longest_word(split_list)  # Find the longest word
print(f"The longest word is: {result}")





