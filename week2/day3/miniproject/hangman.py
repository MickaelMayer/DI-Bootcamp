# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.


# Starter code
# Here is a piece of code that will give you a random word.

import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 
masked_word = []
    ### YOUR CODE STARTS FROM HERE ###
    
def hidden_word():
    hidden_word = word 
    for i in hidden_word:
        if i.isalpha() : 
            masked_word.append("*")
    print(masked_word)
            

def player_guess():
    wrong_answer = 0
    guessed_letter =()
    while True:
        guess = input("chosse a letter")
        guess = guess.lower()
    
        for index, letter in enumerate(word):
            if letter == guess:
                masked_word[index]= guess
                print(masked_word)
            else:
                wrong_answer +=1
                if wrong_answer == 6 :
                    print(f"you got {wrong_answer} wrong answers")
                    print("you loose sorry /n you can start again by typing again or 'stop' to quit the game")
                    break
                    # again = input("write again to start again the game")
                    # if again == "again":
                    #     play()
                    # elif again == "stop":
                    #     break
                    
                    
            
            
    

hidden_word()
player_guess()
    