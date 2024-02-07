import gameData from '../../../public/game_data/game_database.json'

type GameData = {
  date: string,
  players: string[],
  scores: number[][],
}

// obtain all players that have played at least one game
export const getAllPlayers = () => {
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

// Obtain average score per game per player
export const getAverageScores = () => {
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
export const getAverageScoresPerHole = () => {
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
export const getAverageFinishPosition = () => {
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
export const getNumberOfWins = () => {
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
export const getGamesPlayed = () => {
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
export const getBestScores = () => {
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
export const getWorstScores = () => {
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

export const getSilverCount = () => {
  let silverCounts: { [key: string]: number } = {};

  gameData.forEach(game => {
    const bestScore = game.scores[0].reduce((a, b) => a + b, 0);
    let silverIndex = 1;
    let silverScore;

    while (game.scores[silverIndex] && (silverScore = game.scores[silverIndex].reduce((a, b) => a + b)) === bestScore) {
      silverIndex++;
    }

    if (!game.scores[silverIndex]) {
      return
    }

    while (game.scores[silverIndex] && game.scores[silverIndex].reduce((a, b) => a + b) === silverScore) {
      if (!silverCounts[game.players[silverIndex]]) {
        silverCounts[game.players[silverIndex]] = 0;
      }
      silverCounts[game.players[silverIndex]]++;
    }
  })

  return silverCounts;
}

export const getBronzeCount = () => {
  let bronzeCounts: { [key: string]: number } = {};

  gameData.forEach(game => {
    const bestScore = game.scores[0].reduce((a, b) => a + b, 0);
    let silverIndex = 1;
    let silverScore;

    while (game.scores[silverIndex] && (silverScore = game.scores[silverIndex].reduce((a, b) => a + b)) === bestScore) {
      silverIndex++;
    }

    if (!game.scores[silverIndex + 1]) {
      return
    }

    let bronzeIndex = silverIndex + 1;
    let bronzeScore;

    while (game.scores[bronzeIndex] && (bronzeScore = game.scores[silverIndex].reduce((a, b) => a + b)) === silverScore) {
      bronzeIndex++;
    }

    while (game.scores[bronzeIndex] && game.scores[bronzeIndex].reduce((a, b) => a + b) === bronzeScore) {
      if (!bronzeCounts[game.players[silverIndex]]) {
        bronzeCounts[game.players[silverIndex]] = 0;
      }
      bronzeCounts[game.players[silverIndex]]++;
    }
  })

  return bronzeCounts;
}