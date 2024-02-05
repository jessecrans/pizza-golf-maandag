import PageLayout from "./layouts/PageLayout";
import Link from "next/link";
import gameData from "../../public/game_data/game_database.json"

export default function Home() {

  const getLatestWinner = () => {
    const latestGame = gameData[gameData.length - 1];

    const bestScores = latestGame.scores.reduce((maxScores, currentScores) => {
      const thisScore = currentScores.reduce((sum, currentVal) => sum + currentVal);
      const bestScore = maxScores.reduce((sum, currentVal) => sum + currentVal);

      return thisScore < bestScore ? currentScores : maxScores
    })

    return latestGame.players[latestGame.scores.indexOf(bestScores)]
  };

  return (
    <PageLayout title="Home">
      <p>
        Welkom bij Pizza Golf Maandag!
      </p>
      <br/>
      <p>Winnaar van deze week: {getLatestWinner()}</p> 
      <br />
      <p>
        Op deze site kun je alles vinden over Pizza Golf Maandag. Strategieën voor elke hole, speler profielen en de statistieken van elke gespeelde ronde
      </p>
      <br />
      <p>
        Weet je niet wat Pizza Golf Maandag is? Ga naar de <Link href='over'>over</Link> pagina voor meer informatie.
      </p>
    </PageLayout>
  );
}
