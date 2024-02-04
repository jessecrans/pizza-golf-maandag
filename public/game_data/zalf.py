import numpy as np
import matplotlib.pyplot as plt
from typing import Dict, List, Tuple, TypedDict
import json
import re

class Game(TypedDict):
    date: str
    players: List[str]
    scores: List[int]

PLAYERS = [
    "GSkillz",
    "DrVanox",
    "YellowVarik",
    "Abstuz",
    "Jasper"
]

# reading entering games
def read_games() -> List[Game]:
    """Reads all games from the database

    Returns:
        List[Game]: List of games
    """
    with open("game_database.json", "r") as f:
        games = json.load(f)
    return games

def get_all_previous_players() -> List[str]:
    """Gets all players from previous games

    Returns:
        List[str]: List of players
    """
    previous_players = []
    for game in read_games():
        for player in game["players"]:
            if player not in previous_players:
                previous_players.append(player)
    return previous_players

def enter_game() -> Game:
    """Gets user input for a new game

    Returns:
        Game: New game
    """
    # Get date
    while True:
        date = input("Enter date of game (YYYY-MM-DD): ")
        if not re.match(r"\d{4}-\d{2}-\d{2}", date):
            print("Invalid date format. Please enter a date in the format YYYY-MM-DD")
            continue
        break

    # Get players
    previous_players = get_all_previous_players()
    players = []
    print("Enter participants: ")
    while True:
        print("Enter player: ")
        for i, player in enumerate(previous_players):
            print(f"\t{i}: {player}")
        print(f"\tn: New player")
        print(f"\tcontinue: Continue to scores")

        print(f"Players entered: {players}")

        user_input = input()

        if user_input == "continue":
            break
        elif user_input == 'n':
            new_player = input("Enter new player name: ")
            players.append(new_player)
            previous_players.append(new_player)
        elif not user_input.isdigit():
            print("Invalid input. Please enter a number")
            continue
        elif int(user_input) < 0 or int(user_input) > len(previous_players):
            print(f"Invalid input. Please enter a number between 0 and {len(previous_players)}")
            continue
        elif previous_players and previous_players[int(user_input)] in players:
            print("Player already entered. Please enter a different player")
            continue
        else:
            players.append(previous_players[int(user_input)])
    
    # Get scores
    scores = []
    for player in players:
        player_score = []
        while True:
            user_input = input(f"Score for: {player} on hole {len(player_score) + 1}:\t")
            if not user_input.isdigit():
                print("Invalid input. Please enter a number")
                continue
            elif int(user_input) < 1:
                print("Invalid input. Please enter a positive number")
                continue
            elif int(user_input) > 14:
                print("Invalid input. Please enter a number less than or equal to 14")
                continue
            else:
                player_score.append(int(user_input))
            
            if len(player_score) == 18:
                scores.append(player_score)
                break

    return {
        "date": date,
        "players": players,
        "scores": scores
    }

def enter_game_to_database():
    """Enters a new game to the database
    """
    game = enter_game()
    games = read_games()
    games.append(game)
    with open("game_database.json", "w") as f:
        json.dump(games, f, indent=4)
    print("Game entered successfully")

while True:
    print("Actions:")
    print("\t1: Enter game")
    print("\t2: Quit")

    user_input_action = input("Enter action: ")

    if user_input_action == "1":
        enter_game_to_database()
    if user_input_action == "2":
        break
    else:
        print("Invalid input. Please enter 1 or 2.")
        continue