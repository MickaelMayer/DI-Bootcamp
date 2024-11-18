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


def say_hello(usurname, language="EN"):
    if language == "EN":
        print("Hello " + usurname)
    elif language == "FR":
        print("Bonjour " + usurname)
    else:
        print("we do not support this language")
        
say_hello("Mickael")