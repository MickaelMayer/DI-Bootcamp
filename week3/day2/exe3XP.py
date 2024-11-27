# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

from ex_XP import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False
    def train(self):
        return (self.bark())
        self.trained = True
    def play(self, *args):
        dog_names = "".join(args)
        print(f"{dog_names} all plays together")
    def do_a_trick(self):
         if self.trained:  
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
         else:
             print(f"{self.name} is not trained")
            
            



# Create instances of PetDog
dog1 = PetDog("Buddy", 4, 20)
dog2 = PetDog("Charlie", 5, 25)
dog3 = PetDog("Bella", 3, 18)

# Test the `train` method
print("\n--- Training Dogs ---")
dog1.train()  # Should print "Buddy is barking" and set trained to True
print(f"Is {dog1.name} trained? {dog1.trained}")  # Should print True

# Test the `play` method
print("\n--- Dogs Playing Together ---")
dog1.play("Charlie", "Bella")  # Should print "Charlie, Bella all play together"

# Test the `do_a_trick` method (untrained dog)
print("\n--- Do a Trick (Untrained Dog) ---")
dog2.do_a_trick()  # Should print "Charlie is not trained yet and can't do tricks."

# Train another dog and test tricks
print("\n--- Train Another Dog and Perform a Trick ---")
dog2.train()  # Should print "Charlie is barking"
dog2.do_a_trick()  # Should print a random trick for Charlie

# Test another trained dog performing a trick
print("\n--- Another Dog Doing Tricks ---")
dog1.do_a_trick()  # Should print a random trick for Buddy

# Verify that an untrained dog still can't do tricks
print("\n--- Untrained Dog Trying to Do a Trick ---")
dog3.do_a_trick()  # Should print "Bella is not trained yet and can't do tricks."



# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”
