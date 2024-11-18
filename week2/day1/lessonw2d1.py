# def say_hello(usurname, ):
#     print("hello " + usurname)
    
# say_hello("Mickael")

# def say_hello(usurname, language):
#     if language == "EN":
#         print("Hello " + usurname)
#     elif language == "FR":
#         print("Bonjour " + usurname)
#     else:
#         print("we do not support this language")
        
# say_hello("Mickael", "EN")
# say_hello("Mickael", "FR")
# say_hello("Mickael","bel")
# say_hello(language="FR", usurname="Menahem")
# say_hello("Mickael",language="FR")


# def say_hello(usurname, language="EN"):
#     if language == "EN":
#         print("Hello " + usurname)
#     elif language == "FR":
#         print("Bonjour " + usurname)
#     else:
#         print("we do not support this language")
        
# # say_hello("Mickael")
# # say_hello(language="FR",usurname="Mickael")

# say_hello()


# def number_by_three(name, day):
#   sentence = f'Hello {name}! Today is {day}.'
#   print(sentence)

# number_by_three("Mickael","8")
# print(day)

# def get_formatted_name(first_name, last_name):
#     """Return a full name, neatly formatted."""
#     full_name = first_name + ' ' + last_name
#     return full_name.title()

# musician = get_formatted_name('jimi', 'hendrix') 
# print(musician)

# mickael = get_formatted_name("mickael", "mayer")
# print(mickael)


# def divided_by_5(number):
#     return number / 5

# first_number = 167
# number_divided = divided_by_5(first_number)
# print(number_divided) 

# secound_number = 16765
# number_divided = divided_by_5(secound_number)
# print(number_divided) 


# def format_name(first_name, last_name):
#     return (first_name.title(), last_name.title())

# first, last = format_name("RICk", "mORTY")
# print(first)
# print(last) 

# def calculation(a, b):
#     return(a+b),(a-b)
#     # Your Code

# res = calculation(40, 10)
# print(res)

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []

# Simulate printing each design until none are left. 
# Move each design to completed_models after printing. 

while len(unprinted_designs) != 0:    
    current_design = unprinted_designs.pop() 

    # Simulate creating a 3D print from the design.    
    print("Printing model: " + current_design)    
    completed_models.append(current_design)    

# Display all completed models. 
print("\nThe following models have been printed:") 
for completed_model in completed_models:    
    print(completed_model)
    
    
# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# map_object = map(lambda s: s.upper(), fruit)

# print(list(map_object))

# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# filtered_object = filter(lambda s: s[0] == "A", fruit)

# print(list(filtered_object))

# from functools import reduce
# my_list = [1, 3, 5, 7]
# reduced_list = reduce(lambda first, second: first+second, my_list)
# print(reduced_list)


people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
