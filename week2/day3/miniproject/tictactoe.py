board = [[' ', ' ', ' '],
         [' ', ' ', ' '],
         [' ', ' ', ' ']]

def display_board(board):
    print('-' * 9)
    for row in board:
        print('|'.join(row))
        print('-' * 9)

    
def player_input(board, player):
    while True:
        try:
            position = int(input(f"Player {player}, choose a number between 1 and 9: ")) - 1
            row, col = divmod(position, 3)
            if position < 0 or position >= 9 or board[row][col] != ' ':
                print("Invalid input. Please choose an empty spot between 1 and 9.")
            else:
                board[row][col] = player
                break
        except ValueError:
            print("Please enter a valid number.")
            
def check_win(board, player):
   
    for row in board:
        if all(cell == player for cell in row):
            return True
    
    #  
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    
   
    return False

    

def play():
    board = [[' ' for _ in range(3)] for _ in range(3)]
    current_player = "X"
    
    while True:
        display_board(board)
        player_input(board, current_player)
        
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break  
        
        if all(cell != ' ' for row in board for cell in row):
            display_board(board)
            print("It's a draw!")
            break 
        current_player = 'O' if current_player == 'X' else 'X'


play()

   
   
   
   
   
