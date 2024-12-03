import string
import random
import datetime
from faker import Faker



#  Exercise 1: Currencies
# Instructions

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __repr__(self):
        return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return self.amount
    def __iadd__(self, other):
        if isinstance(other, int):  
            self.amount += other
        elif isinstance(other, Currency): 
            
            if self.currency == other.currency:
                self.amount += other.amount
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            raise TypeError("Unsupported type for addition")
        return self  
            
        
        
   

#     #Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(repr(c1))
print(int(c1))
print(int(c1) + 5)
print(int(c1) + int(c2))
print(c1)


# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>





# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that sum 2 numbers, and prints the result
# In a file named exercise_one.py import the function and call it to print the result
# Hint: You can use the the following syntaxes:

# import module_name 

# OR 

# from module_name import function_name 

# OR 

# from module_name import function_name as fn 

# OR

# import module_name as mn


# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

random_string = ''.join(random.choices(string.ascii_letters, k=5))
print(random_string)






# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

today_date = datetime.date.today()
actual_datetime = datetime.datetime.now()

print(f"Today is the {today_date.day}/{today_date.month}/{today_date.year}")
print(f"Today is the {today_date.strftime("%d/%m")}")




# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

now= datetime.datetime.now()
jan1 = datetime.datetime(now.year+1,1,1)

time_until_jan = jan1 - now

definit_jan = f"the new year will be in {time_until_jan}"

print(definit_jan)




# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

# def lifetime():
#     user_birth= input("enter you date of birth (YYYY-MM-DD)")
#     birth = datetime.datetime.strptime(user_birth, "%Y-%m-%d")
#     countdown = now - birth
#     print(f"you have been living for that much {countdown} have you brought Moshiah yet")
    


# lifetime()



# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

fake = Faker()

users= []
for _ in range(10):
    user = {
        "name": fake.name(),
        "adress": fake.address(),
        "langage_code": fake.language_code(),
    }
    users.append(user)
for user in users:
    print(user)