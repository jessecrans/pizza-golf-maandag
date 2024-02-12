import gameData from '../../../public/game_data/game_database.json'

type GameData = {
  date: string,
  players: string[],
  scores: number[][],
}

export const holeNums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
]
export const holePars = [
  3, 3, 4, 4, 7, 7, 4, 3, 4, 4, 4, 5, 4, 5, 4, 4, 5, 5
]

const gamesPerPlayer: { [key: string]: number[][] } = {}

/**
 * Gets all players that have played at least one game
 * 
 * @returns All players that have played at least one game
 */
export const getAllPlayers = () => {
  const players: string[] = []

  gameData.forEach(game => {
    game.players.forEach(player => {
      if (!players.includes(player)) {
        players.push(player);
      }
    })
  });

  return players;
}

export const players = getAllPlayers(); // All players that have played at least one game

/**
 * Gets all the games associated with the provided player
 * 
 * @param player - The player to get the scores for
 * @returns The scores for the player in each game
 */
export const getPlayerGames = (player: string) => {
  const games: number[][] = [];

  if (gamesPerPlayer[player]) { // check for cached data
    return gamesPerPlayer[player];
  }

  gameData.forEach(game => {
    game.players.forEach((gamePlayer, index) => {
      if (gamePlayer === player) {
        games.push(game.scores[index]);
      }
    })
  })

  gamesPerPlayer[player] = games; // cache the data

  return games;
}

/**
 * 
 * @param player - The player to get the total score for
 * @returns The total score of the player for each game
 */
export const getPlayerTotalScorePerGame = (player: string) => {
  return getPlayerGames(player).map(game => game.reduce((a, b) => a + b, 0))
}

/**
 * Gets the average score over all games of the provided player
 * 
 * @param player - The player to get the average for
 * @returns The average score of the player
 */
export const getPlayerAverageScore = (player: string) => {
  return getPlayerTotalScorePerGame(player).reduce((a, b) => a + b, 0) / getPlayerGames(player).length;
}

/**
 * Gets the average score over all games of all players
 * 
 * @returns The average score of all players
 */
export const getAverageScores = () => {
  const averageScores: { [key: string]: number } = {};
  players.forEach(player => {
    averageScores[player] = getPlayerAverageScore(player);
  })

  return averageScores;
}

/**
 * 
 * @param player - The player to get the average score for
 * @param hole - The hole to get the average score for
 * @returns The average score of the player for the specified hole
 */
export const getPlayerAverageScoreOnHole = (player: string, hole: number) => {
  return getPlayerGames(player).map(game => game[hole - 1]).reduce((a, b) => a + b, 0) / getPlayerGames(player).length;
}

/**
 * Gets the average scores for the specified hole per player
 * 
 * @param hole - The hole to get the average scores for
 * @returns The average scores for the specified hole
 */
export const getAverageScoresOnHole = (hole: number) => {
  const averageScores: { [key: string]: number } = {};
  players.forEach(player => {
    averageScores[player] = getPlayerAverageScoreOnHole(player, hole);
  })

  return averageScores;
}

/**
 * Gets the average score over all players for the specified hole
 * 
 * @param hole - The hole to get the average score for
 * @returns The average score over all players for the specified hole
 */
export const getAverageScoreOnHole = (hole: number) => {
  const averageScores = getAverageScoresOnHole(hole);
  let sum = 0;
  Object.entries(averageScores).forEach(([_, score]) => {
    sum += score;
  })

  return sum / Object.keys(averageScores).length;
}

/**
 * Gets the average score over all games
 * 
 * @returns The average score over all players over all games
 */
export const getAverageGameScore = () => {
  let sum = 0;
  gameData.forEach(game => {
    game.scores.forEach(scoreArray => {
      sum += scoreArray.reduce((a, b) => a + b, 0);
    })
  })

  const totalNumberOfScores = gameData.reduce((a, b) => a + b.scores.length, 0);

  return sum / totalNumberOfScores;
}

/**
 * Gets the average finish position of the provided player
 * 
 * @param player - The player to get the average finish position for
 * @returns The average finish position of the player
 */
export const getPlayerAverageFinishPosition = (player: string) => {
  const finishPositions: number[] = [];
  gameData.forEach(game => {
    let lastScore = 0;
    let lastPosition = 0;

    game.scores.forEach((scoreArray, index) => {
      const finalScore = scoreArray.reduce((a, b) => a + b, 0);
      if (finalScore !== lastScore) {
        lastPosition = index + 1;
        lastScore = finalScore;
      }
      if (game.players[index] === player) {
        finishPositions.push(lastPosition);
      }
    })
  })

  return finishPositions.reduce((a, b) => a + b, 0) / finishPositions.length;
}

/**
 * Gets the average finish positions of each player
 * 
 * @returns The average finish positions of each player
 */
export const getAverageFinishPosition = () => {
  const averageFinishPositions: { [key: string]: number } = {};

  players.forEach(player => {
    averageFinishPositions[player] = getPlayerAverageFinishPosition(player);
  })

  return averageFinishPositions;
}

/**
 * Counts the number of times the provided player has finished at the provided position
 * 
 * @param player - The player for which the position count will be fetched
 * @param position - The position of which the number of times the player has placed at it will be counted
 * @returns The number of times the specified player has placed at the specified position
 */
export const getPlayerNumberOfPositionPlacements = (player: string, position: number) => {
  let positionCount = 0;

  gameData.forEach(game => {
    if (!game.scores[position]) {
      return
    }

    const positionScore = game.scores[position].reduce((a, b) => a + b, 0);

    if (game.scores[position - 1] && game.scores[position - 1].reduce((a, b) => a + b, 0) === positionScore) {
      return
    }

    let index = position;
    while (game.scores[index] && game.scores[index].reduce((a, b) => a + b) === positionScore) {
      if (game.players[index] === player) {
        positionCount++;
        return;
      }
      index++;
    }
  })

  return positionCount;
}

/**
 * Gets the number of placements for each player at the specified position
 * 
 * @param position - The position to get the number of placements for
 * @returns The number of placements for the specified position for each player
 */
export const getNumberOfPositionPlacements = (position: number) => {
  const positionCounts: { [key: string]: number } = {}
  players.forEach(player => {
    positionCounts[player] = 0;
  })

  gameData.forEach(game => {
    if (!game.scores[position]) {
      return
    }

    const positionScore = game.scores[position].reduce((a, b) => a + b, 0);

    if (game.scores[position - 1] && game.scores[position - 1].reduce((a, b) => a + b, 0) === positionScore) {
      return
    }

    let index = position;
    while (game.scores[index] && game.scores[index].reduce((a, b) => a + b) === positionScore) {
      positionCounts[game.players[index]]++;
      index++;
    }
  })

  return positionCounts;
}

/**
 * Gets the number of games played by the provided player
 * 
 * @param player - The player to get the number of games played for
 * @returns - The number of games played by the specified player
 */
export const getPlayerGamesPlayed = (player: string) => {
  return getPlayerGames(player).length
}

/**
 * Gets the number of games played by each player
 * 
 * @returns The number of games played by each player
 */
export const getGamesPlayed = () => {
  const gamesPlayed: { [key: string]: number } = {};

  players.forEach(player => {
    gamesPlayed[player] = getPlayerGamesPlayed(player);
  })

  return gamesPlayed;
}

/**
 * Gets the best score of the provided player
 * 
 * @param player - The player to get the best score for
 * @returns Best score of the player
 */
export const getPlayerBestScore = (player: string) => {
  return Math.min(...getPlayerTotalScorePerGame(player));
}

/**
 * Gets the best scores for each player
 * 
 * @returns The best scores for each player
 */
export const getBestScores = () => {
  const bestScores: { [key: string]: number } = {}

  players.forEach(player => {
    bestScores[player] = getPlayerBestScore(player);
  })

  return bestScores;
}

/**
 * Gets the worst score of the provided player
 *
 * @param player - The player to get the worst score for
 * @returns The worst score of the player
 */
export const getPlayerWorstScore = (player: string) => {
  return Math.max(...getPlayerTotalScorePerGame(player));
}

/**
 * Gets the worst scores for each player
 * 
 * @returns The worst scores for each player
 */
export const getWorstScores = () => {
  const worstScores: { [key: string]: number } = {}

  players.forEach(player => {
    worstScores[player] = getPlayerWorstScore(player);
  })

  return worstScores;
}

/**
 * Gets the pizza score for each player
 * 
 * @returns The pizza score for each player
 */
export const getPizzaScores = () => {
  let pizzaScores: { [key: string]: number } = {};
  let betterThanPars: { [key: string]: number[] } = {};

  gameData.forEach(game => {
    game.players.forEach(player => {
      if (!betterThanPars[player]) {
        betterThanPars[player] = [];
      }
    })

    game.scores.forEach((scoreForPlayer, i) => {
      scoreForPlayer.forEach((score, j) => {
        betterThanPars[game.players[i]].push(score <= holePars[j] ? 1 : 0);
      })
    })
  })

  for (const [player, betterThanParArray] of Object.entries(betterThanPars)) {
    pizzaScores[player] = betterThanParArray.reduce((a, b) => a + b) / betterThanParArray.length
  }

  return pizzaScores;
}

/**
 * Gets the best hole for each player
 * @param player - The player to get the best hole for
 * @returns The best hole for the player
 */
export const getPlayerBestHole = (player: string) => {
  let bestHole = 0;
  let bestDifference = 0;

  const averageScoresPerHole = holeNums.map(hole => getAverageScoreOnHole(hole));

  holeNums.forEach(hole => {
    const currentDifference = (getPlayerAverageScoreOnHole(player, hole) - averageScoresPerHole[hole - 1]);
    if (currentDifference < bestDifference) {
      bestDifference = currentDifference;
      bestHole = hole;
    }
  })

  return bestHole;
}


/**
 * Gets the worst hole for each player
 * 
 * @param player - The player to get the worst hole for
 * @returns The worst hole for the player
 */
export const getPlayerWorstHole = (player: string) => {
  let worstHole = 0;
  let worstDifference = 0;

  const averageScoresPerHole = holeNums.map(hole => getAverageScoreOnHole(hole));

  holeNums.forEach(hole => {
    const currentDifference = (getPlayerAverageScoreOnHole(player, hole) - averageScoresPerHole[hole - 1]);
    if (currentDifference > worstDifference) {
      worstDifference = currentDifference;
      worstHole = hole;
    }
  })

  return worstHole;
}

/**
 * Gets the number of hole in ones for the provided player
 * 
 * @param player - The player to get the number of hole in ones for
 * @returns The number of hole in ones for the player
 */
export const getPlayerHoleInOnes = (player: string) => {
  let count = 0;
  getPlayerGames(player).forEach(game => {
    game.forEach(score => {
      if (score === 1) {
        count++;
      }
    })
  })

  return count;
}

/**
 * 
 * @param player - The player to get the number of times they have scored par - x
 * @param x The number of strokes under par to count
 * @returns 
 */
export const getPlayerParMinusXCount = (player: string, x: number) => {
  let count = 0;
  getPlayerGames(player).forEach(game => {
    game.forEach((score, i) => {
      if (score === holePars[i] - x && score !== 1) {
        count++;
      }
    })
  })

  return count;
}

/**
 * Gets the leaderboard for the specified hole
 * 
 * @param hole - The hole to get the leaderboard for
 * @returns The leaderboard for the specified hole
 */
export const getLeaderboardOnHole = (hole: number) => {
  const scores = getAverageScoresOnHole(hole);
  const leaderboard: { name: string, score: number }[] = [];

  Object.entries(scores).forEach(([player, score]) => {
    leaderboard.push({ name: player, score: score });
  })

  leaderboard.sort((a, b) => a.score - b.score);

  return leaderboard;
}

interface playerGame {
  player: string,
  score: number[],
  totalScore: number
}

/**
 * Gets all games sorted by total score
 * 
 * @returns Array of all games sorted by total score
 */
export const getAllSortedGames = () => {
  const sortedGames: playerGame[] = [];

  gameData.forEach(game => {
    game.players.forEach((player, index) => {
      sortedGames.push({
        player: player,
        score: game.scores[index],
        totalScore: game.scores[index].reduce((a, b) => a + b, 0)
      })
    })
  })

  sortedGames.sort((a, b) => a.totalScore - b.totalScore);

  return sortedGames;
}

/**
 * Gets the best score on the provided hole
 * 
 * @param hole - The hole to get the best score for
 * @returns The best score on the hole
 */
export const getBestScoreOnHole = (hole: number) => {
  let bestScore = 14;
  gameData.forEach(game => {
    game.scores.forEach(scoreArray => {
      if (scoreArray[hole - 1] < bestScore) {
        bestScore = scoreArray[hole - 1];
      }
    })
  })

  return bestScore;
}

/**
 * Gets the best possible game
 * 
 * @returns The best game
 */
export const getBestGame = () => {
  let bestGame = 0;
  holeNums.map(hole => getBestScoreOnHole(hole)).forEach(score => {
    bestGame += score;
  })

  return bestGame;
}

/**
 * Get all dates of games played
 * 
 * @returns All dates of games played
 */
export const getAllDates = () => {
  const dates: string[] = [];

  gameData.forEach(game => {
    if (!dates.includes(game.date)) {
      dates.push(game.date);
    }
  })

  return dates;
}

/**
 * Gets the winners of the passed game
 * 
 * @param game - The game of which to determine the winners
 * @returns - The winners of the specified game
 */
const getWinnersOfGame = (game: {
  date: string
  players: string[]
  scores: number[][]
}) => {
  const bestScore = game.scores[0].reduce((a, b) => a + b, 0);
  const winners = [game.players[0]]
  let i = 1;
  while (game.scores[i].reduce((a, b) => a + b, 0) === bestScore) {
    winners.push(game.players[i++]);
  }

  return winners;
}

/**
 * Gets the winners of the latest game that was played 
 * 
 * @returns The winners of the latest game
 */
export const getLatestWinners = () => {
  const latestGame = gameData[gameData.length - 1];

  return getWinnersOfGame(latestGame);
};

/**
 * Get current streak of the latest winner
 * 
 * @returns Current streak of the latest winner
 */
export const getPlayerCurrentStreak = (player: string) => {
  let currentStreak = 0;

  for (let i = gameData.length - 1; i > 0; i--) {
    if (!(getWinnersOfGame(gameData[i]).includes(player))) {
      break;
    }
    currentStreak++;
  }

  return currentStreak;
}

/**
 * Gets the largest win streak of the specified player over all games
 * 
 * @param player - The player for which to get the largest streak
 * @returns The largest win streak of the specified player
 */
export const getPlayerLargestStreak = (player: string) => {
  let greatestStreak = 0;
  let currentStreak = 0;

  gameData.forEach(game => {
    if (getWinnersOfGame(game).includes(player)) {
      currentStreak++;
      greatestStreak = Math.max(greatestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  })

  return greatestStreak;
}

/**
 * Gets the percentage of games in which the specified player has participated
 * 
 * @param player - The player for which to get the percentage of games player
 * @returns The percentage the games in which the player has participated
 */
export const getPlayerParticipationPercentage = (player: string) => {
  return getPlayerGamesPlayed(player) / gameData.length * 100;
}