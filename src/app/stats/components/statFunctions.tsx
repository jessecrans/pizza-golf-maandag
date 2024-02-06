type GameData = {
  date: string,
  players: string[],
  scores: number[][],
}

// obtain all players that have played at least one game
export const getAllPlayers = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  let players: string[] = []

  gameData.forEach(game => {
    game.players.forEach(player => {
      if (!players.includes(player)) {
        players.push(player);
      }
    })
  });

  return players;
}

/* 
Stats:

ranglijst
  - totaal average
  - average per hole
  - number of wins
  - average finish position
  - games played
  - best score
  - worst score
*/

// Obtain average score per game per player
export const getAverageScores = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  let averageScores: { [key: string]: number } = {};
  let allScores: { [key: string]: number[] } = {};
  gameData.forEach(game => {
    game.players.forEach((player, index) => {
      if (!allScores[player]) {
        allScores[player] = [];
      }
      allScores[player].push(game.scores[index].reduce((a, b) => a + b, 0));
    })
  })

  Object.entries(allScores).forEach(([player, scores]) => {
    averageScores[player] = scores.reduce((a, b) => a + b, 0) / scores.length;
  })

  return averageScores;
}

// Obtain average score per hole per player
export const getAverageScoresPerHole = ({
  gameData, hole
}: {
  gameData: GameData[],
  hole: number
}) => {
  let averageScores: { [key: string]: number } = {};
  let allScores: { [key: string]: number[] } = {};
  gameData.forEach(game => {
    game.players.forEach((player, index) => {
      if (!allScores[player]) {
        allScores[player] = [];
      }
      allScores[player].push(game.scores[index][hole - 1]);
    })
  })

  Object.entries(allScores).forEach(([player, scores]) => {
    averageScores[player] = scores.reduce((a, b) => a + b, 0) / scores.length;
  })

  return averageScores;
}

// Obtain the average finish position for each player
export const getAverageFinishPosition = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  const finishPositions: { [key: string]: number[] } = {};
  const averageFinishPositions: { [key: string]: number } = {};

  gameData.forEach(game => {
    let lastScore = 0;
    let lastPosition = 0;

    game.scores.forEach((scoreArray, index) => {
      const finalScore = scoreArray.reduce((a, b) => a + b, 0);
      if (!finishPositions[game.players[index]]) { // add entry if it doesn't exist
        finishPositions[game.players[index]] = [];
      }
      if (finalScore !== lastScore) { // if the current score is different from the last score, increment the last position
        lastPosition = index + 1;
        lastScore = finalScore;
      }
      finishPositions[game.players[index]].push(lastPosition);
    })
  })

  Object.entries(finishPositions).forEach(([player, positions]) => {
    averageFinishPositions[player] = positions.reduce((a, b) => a + b, 0) / positions.length;
  })

  return averageFinishPositions;
}

// Obtain the number of wins for each player
export const getNumberOfWins = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  const wins: { [key: string]: number } = {};

  gameData.forEach(game => {
    const bestScore = game.scores[0].reduce((a, b) => a + b, 0);
    game.players.forEach((player, index) => {

      if (!wins[player]) {
        wins[player] = 0;
      }
      if (game.scores[index].reduce((a, b) => a + b, 0) === bestScore) {
        wins[player] += 1;
      }
    })
  })

  return wins;
}

// Obtain the number of games played by each player
export const getGamesPlayed = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  const gamesPlayed: { [key: string]: number } = {};

  gameData.forEach(game => {
    game.players.forEach(player => {
      if (!gamesPlayed[player]) {
        gamesPlayed[player] = 0;
      }
      gamesPlayed[player] += 1;
    })
  })

  return gamesPlayed;
}

// Obtain the best scores for any game obtained by each player
export const getBestScores = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  const bestScores: { [key: string]: number } = {};

  gameData.forEach(game => {
    game.scores.forEach((scores, index) => {
      const score = scores.reduce((a, b) => a + b, 0)
      const currentPlayerWorstScore = bestScores[game.players[index]];
      if (!currentPlayerWorstScore || score < currentPlayerWorstScore) {
        bestScores[game.players[index]] = score;
      }
    })
  })

  return bestScores;
}

// Obtain the worst scores for any game obtained by each player
export const getWorstScores = ({
  gameData
}: {
  gameData: GameData[]
}) => {
  const worstScores: { [key: string]: number } = {}

  gameData.forEach(game => {
    game.scores.forEach((scores, index) => {
      const score = scores.reduce((a, b) => a + b, 0)
      const currentPlayerWorstScore = worstScores[game.players[index]];
      if (!currentPlayerWorstScore || score > currentPlayerWorstScore) {
        worstScores[game.players[index]] = score;
      }
    })
  })

  return worstScores;
}