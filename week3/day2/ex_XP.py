# Exercise 1 : Pets
# Instructions
# Using this code:


# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat): 
    def sing(self,sounds):
        return f'{sounds}'


my_Bengal = Bengal("thierry",2)
my_charteux = Chartreux("Leon",5) 
my_siamese = Siamese("Salomon",22)
all_cats = [my_Bengal,my_charteux,my_siamese]


sara_pets= Pets(all_cats)

sara_pets.walk()












# =============================================
# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

class Dog:
    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight/(self.age*10)
    
    def fight(self,other_dog):
        self_power= self.run_speed()
        other_dog_power= other_dog.run_speed()
        
        if self_power > other_dog_power:
            return f"{self.name} win the fight"
        elif self_power < other_dog_power:
            return f"{other_dog.name} win"
        else:
            return "it's a tie"

dog1 = Dog("lolo",17,180)
dog2 = Dog("lala",12,80)
dog3 = Dog("lili",3,280)

print(dog1.fight(dog2))  
print(dog2.fight(dog3))  
print(dog1.fight(dog3))  


# ============================================
# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.















# ================================================
# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:
# members: list of dictionaries
# last_name : (string)



class Family:
    def __init__(self,members,last_name):
        self.members= members
        self.last_name= last_name
        


    def born(self,**kwargs):
        self.members.append(**kwargs)
        print("Mazal tov for the new baby")

    def is_18(self,name):
        for member in self.members:
            if member['name'] == name :
                return member ['age'] >= 18
        return False
            

    def family_presentation(self):
        print(f"the {self.last_name} family")
        for member in self.members:
            print(member)


members= [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

family1= Family(members= members ,last_name="mayer")


family1.family_presentation()
# family1.born(name = "Chana", age = 0, gender = "female", is_child = True)


print(f"Is Michael over 18? {family1.is_18('Michael')}")
print(f"Is Sarah over 18? {family1.is_18('Sarah')}")
print(f"Is Chana over 18? {family1.is_18('chana')}")


family1.family_presentation()















# ======================================================
# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

class TheIncredibles(Family):
    pass

    
    
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
              if member['age'] >= 18:
                print(f"{member['name']}'s power is {member['power']}.")
            else:
                raise Exception(f"{member['name']} is not over 18 and cannot use their power!")
    
    

# Add a method called incredible_presentation which :

# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
    def incredible_presentation(self):
        print("Here is our powerful family:")
        super().family_presentation()
        for member in self.members:
            print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")

# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

 # Create an instance of TheIncredibles class
incredible_family = TheIncredibles(
    members=[
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ],
    last_name="Incredibles"
)


incredible_family.incredible_presentation()


incredible_family.born(
    name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack'
)


incredible_family.incredible_presentation()


try:
    incredible_family.use_power('Michael')  
    incredible_family.use_power('Sarah')    
    incredible_family.use_power('Baby Jack')  
except Exception as e:
    print(e)

