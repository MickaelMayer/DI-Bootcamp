#Print the following output in one line of code:

print(("Hello world\n"*4) + ("I love python\n"*4))

# ------------------------------------------

# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

# month =  int (input("enter a month by his number from 1 to 12"))



# if 3 <= month <= 5: 
#     print("spring")
# elif 6 <= month <= 8:
#     print("summer")
# elif 9 <= month <= 11:
#     print("autumn")
# elif month == 12 or 1 <= month <= 2:
#     print("winter")
    
    
    
    
my_text= """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""

lenght= len(my_text)

print(f"the lenght is, {lenght}")

# -------------------------------------


# while True:
#     long_word = input("enter the longest word possible without the letter A").strip()
    
#     if "A" in long_word or "a" in long_word:
#         print("make sure to avoid the letter A")
#     else:
#         print("great job ")
#         break

while True:
    long_word = input("enter a word without the letter a").strip().lower()
    
    print(f"Debug: You entered '{long_word}' (Length: {len(long_word)})") 
    
    if "a" in long_word :
        print("wrong there is an a in it ")
    else :
        print("great job")
        break


