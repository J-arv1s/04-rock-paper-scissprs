START: ask player to pick ROCK PAPER or SCISSORS
computer randomly picks ROCK PAPER or SCISSORS
    choose a random float between 0.5 3.5 rounding to nearest hole number
        rock = 1 paper = 2 scissors = 3
compare both results and produce output
| PLAYER | CPU        |   WINNER |
----------------------------
ROCK     |  ROCK      /    DRAW
ROCK     |   PAPER      /    CPU
ROCK     |  SCISSORS      /    PLAYER
PAPER    |  ROCK      /    PLAYER
PAPER    |  PAPER      /    DRAW
PAPER    |   SCISSORS      /    CPU
SCISSORS |   ROCK      /    CPU
SCISSORS |  PAPER      /    PLAYER
SCISSORS | SCISSORS      /    DRAW

change the output to different colours. victory: green, lose: red, draw: orange[yellow]
store if cpu won or player won in variables
    cpu win: count   player win: count
Produce options
    - Play Again
        : run through the game loop again
    - Show Match History
        : produces both win counts side by side
        : returns to option menu
    - Leave
        : ends the program