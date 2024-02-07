import gameData from '../../../public/game_data/game_database.json'

type GameData = {
  date: string,
  players: string[],
  scores: number[][],
}

const holePars = [
  3, 3, 4, 4, 7, 7, 4, 3, 4, 4, 4, 5, 4, 5, 4, 4, 5, 5
]


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
export const getAverageScoresPerHole = (hole: number) => {
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

// Obtain the number of silver medals for each player
export const getSilverCounts = () => {
  let silverCounts: { [key: string]: number } = {};

  gameData.forEach(game => {
    game.players.forEach(player => {
      if (!silverCounts[player]) {
        silverCounts[player] = 0;
      }
    })

    if (1 >= game.scores.length) {
      return
    }

    const goldScore = game.scores[0].reduce((a, b) => a + b, 0);
    const silverScore = game.scores[1].reduce((a, b) => a + b, 0);

    if (goldScore === silverScore) {
      return
    }

    let silverIndex = 1;
    while (silverIndex < game.scores.length && game.scores[silverIndex].reduce((a, b) => a + b) === silverScore) {
      silverCounts[game.players[silverIndex]]++;
      silverIndex++;
    }
  })

  return silverCounts;
}

// Obtain the number of bronze medals for each player
export const getBronzeCounts = () => {
  let bronzeCounts: { [key: string]: number } = {};

  gameData.forEach(game => {
    game.players.forEach(player => {
      if (!bronzeCounts[player]) {
        bronzeCounts[player] = 0;
      }
    })

    if (2 >= game.scores.length) {
      return
    }

    const silverScore = game.scores[1].reduce((a, b) => a + b, 0);
    const bronzeScore = game.scores[2].reduce((a, b) => a + b, 0);

    if (bronzeScore === silverScore) {
      return
    }

    let bronzeIndex = 2;
    while (bronzeIndex < game.scores.length && game.scores[bronzeIndex].reduce((a, b) => a + b) === bronzeScore) {
      bronzeCounts[game.players[bronzeIndex]]++;
      bronzeIndex++;
    }
  })

  return bronzeCounts;
}

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

// Obtain the best hole for each player
export const getBestHoles = () => {
  let bestHoles: { [key: string]: number } = {};

  const averageScoresPerHolePerPlayer: { [key: string]: number }[] = holePars.map((_, i) => getAverageScoresPerHole(i + 1));
  const averageScoresPerHole = averageScoresPerHolePerPlayer.map((scoresPerPlayer) => {
    let sum = 0;
    Object.entries(scoresPerPlayer).forEach(([_, score]) => {
      sum += score;
    })
    return sum / Object.keys(scoresPerPlayer).length;
  })

  averageScoresPerHolePerPlayer.forEach((scoresPerPlayer, index) => {
    Object.entries(scoresPerPlayer).forEach(([player, score]) => {
      if (!bestHoles[player]) {
        bestHoles[player] = index;
      }
      const currentDifference = (score - averageScoresPerHole[index]);
      const bestDifference = (averageScoresPerHolePerPlayer[bestHoles[player]][player] - averageScoresPerHole[bestHoles[player]]);
      if (currentDifference < bestDifference) {
        bestHoles[player] = index;
      }
    })
  })

  return bestHoles;
}

// Obtain the worst hole for each player
export const getWorstHoles = () => {
  let worstHoles: { [key: string]: number } = {};

  const averageScoresPerHolePerPlayer: { [key: string]: number }[] = holePars.map((_, i) => getAverageScoresPerHole(i + 1));
  const averageScoresPerHole = averageScoresPerHolePerPlayer.map((scoresPerPlayer) => {
    let sum = 0;
    Object.entries(scoresPerPlayer).forEach(([_, score]) => {
      sum += score;
    })
    return sum / Object.keys(scoresPerPlayer).length;
  })

  averageScoresPerHolePerPlayer.forEach((scoresPerPlayer, index) => {
    Object.entries(scoresPerPlayer).forEach(([player, score]) => {
      if (!worstHoles[player]) {
        worstHoles[player] = index;
      }
      const currentDifference = (score - averageScoresPerHole[index]);
      const worstDifference = (averageScoresPerHolePerPlayer[worstHoles[player]][player] - averageScoresPerHole[worstHoles[player]]);
      if (currentDifference > worstDifference) {
        worstHoles[player] = index;
      }
    })
  })

  return worstHoles;
}

// Obtain the number of hole in ones for each player
export const getHoleInOnes = () => {
  let holeInOnes: { [key: string]: number } = {};

  gameData.forEach(game => {
    game.players.forEach((player, index) => {
      if (!holeInOnes[player]) {
        holeInOnes[player] = 0;
      }

      game.scores[index].forEach(score => {
        if (score === 1) {
          holeInOnes[player]++;
        }
      })
    })
  })

  return holeInOnes;
}

// Obtain the number of albatrosses for each player
export const getAlbatrosses = () => {
  let albatrosses: { [key: string]: number } = {};

  getAllPlayers().forEach(player => albatrosses[player] = 0);

  gameData.forEach(game => {
    game.scores.forEach((scoresThisGame, i) => {
      scoresThisGame.forEach((score, j) => {
        if (score !== 1 && score === holePars[j] - 3) {
          albatrosses[game.players[i]]++;
        }
      })
    })
  })

  return albatrosses;
}

// Obtain the number of eagles for each player
export const getEagles = () => {
  let eagles: { [key: string]: number } = {};

  getAllPlayers().forEach(player => eagles[player] = 0);

  gameData.forEach(game => {
    game.scores.forEach((scoresThisGame, i) => {
      scoresThisGame.forEach((score, j) => {
        if (score !== 1 && score === holePars[j] - 2) {
          eagles[game.players[i]]++;
        }
      })
    })
  })

  return eagles;
}

// Obtain the number of birdies for each player
export const getBirdies = () => {
  let birdies: { [key: string]: number } = {};

  getAllPlayers().forEach(player => birdies[player] = 0);

  gameData.forEach(game => {
    game.scores.forEach((scoresThisGame, i) => {
      scoresThisGame.forEach((score, j) => {
        if (score !== 1 && score === holePars[j] - 1) {
          birdies[game.players[i]]++;
        }
      })
    })
  })

  return birdies;
}