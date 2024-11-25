# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
    def __repr__(self):
        return f"Cat(name={self.name}, age={self.age})"

my_cat = Cat("miaou", 32)
his_cat = Cat("maouw", 422)
their_cat = Cat("mamaou",2)

all_cats =[my_cat,his_cat,their_cat]
print(list(all_cats))
def oldest_cat():
    cat_list =0
    for cat in all_cats:
        if cat.age > cat_list:
            cat_list += 1
            print(cat_list)
            
oldest_cat()
        
     
   
   
   

# ============================================================
# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self,name, height) :
        self.name= name
        self.height= height
        
    def bark (self):
        print(f"{self.name} goes woof")
        
    def jump (self):
        print(f"{self.name} jump {self.height} CM ")
        

my_dog =Dog(name="“Rex”",height=50)
her_dog =Dog(name="“Teacup”",height=20)
my_dog.bark(); my_dog.jump()

if my_dog.height > her_dog.height:
    print(f"{my_dog.name} is bigger")
else:
    print(f"{her_dog.name} is bigger")
    


# =========================================================
# 🌟 Exercise 3 : Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics) :
        self.lyrics = lyrics
        
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
 
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()














# ==========================================================
#
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example
# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }
# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)instantiates

class Zoo:
    def __init__(self, zoo_name) :
        self.zoo_name = zoo_name
        self.animals =[]
       
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            
    def get_animals(self): 
        print(self.animals)
    
    def sell_animal(self,animal_sold): 
       if animal_sold in self.animals:
           self.animals.remove(animal_sold)
           print(f"{animal_sold} was removed for the Zoo")
       else :
           print(f"sorry  {animal_sold} is not in the zoo")
           print(f"this is the updated list{self.animals}")
    def sort_animals(self):       
        self.animals.sort()
        grouped_animals = {}
        group_number = 1
        for animal in self.animals:
            first_letter = animal[0]
            if group_number not in grouped_animals:
                grouped_animals[group_number] = [animal]
            else:
                if grouped_animals[group_number][0][0]== first_letter:
                    grouped_animals[group_number].append(animal) 
                else:
                    group_number += 1  # Move to the next group
                    grouped_animals[group_number] = [animal]
                    
        return grouped_animals

    def get_groups(self):
        grouped_animals = self.sort_animals()  
        print("Grouped Animals:")
        for group_number, animals in grouped_animals.items():
            print(f"Group {group_number}: {animals}")

        
# Instantiate the Zoo class
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Add some animals to the zoo
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

# Test: List all animals in the zoo
print("Animals in the zoo:")
ramat_gan_safari.get_animals()

# Test: Remove a specific animal
print("\nRemoving 'Lion' from the zoo...")
ramat_gan_safari.sell_animal("Lion")

# Test: Try to remove an animal that isn't in the zoo
print("\nAttempting to remove 'Tiger' (not in the zoo)...")
ramat_gan_safari.sell_animal("Tiger")

# Test: List animals after removals
print("\nAnimals in the zoo after removals:")
ramat_gan_safari.get_animals()

# Test: Sort and group the animals
print("\nSorting and grouping animals...")
ramat_gan_safari.get_groups()

# Test: Adding a duplicate animal (should not add)
print("\nAdding a duplicate animal 'Zebra'...")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.get_animals()        
           
       
       
       
       
       
       
       
       
       
       
       
       
       
        
        
            #  Exercise 4 : Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It  two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.