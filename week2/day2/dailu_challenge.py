# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

matrix = [
    ["7","i","i"],
    ["T",'s',"x"],
    ["h","%","?"],
    ["i"," ","#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"],
]
secret_message = ""

for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        char = matrix[row][col]
        
        if char.isalpha():
            secret_message += char
            
        elif secret_message and secret_message[-1] != " ":
            secret_message += " "
            
            
secret_message = secret_message.strip()      
print(secret_message)
        
        
