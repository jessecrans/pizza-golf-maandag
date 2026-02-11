import PageLayout from "./layouts/PageLayout";
import Link from "next/link";
import gameData from "../../public/game_data/game_database.json"
import { getLatestWinners, getPlayerCurrentStreak } from "@/app/util/statFunctions"

export default function Home() {

  return (
    <PageLayout title="Home">
      <p>
        Welkom bij Pizza Golf Maandag!
      </p>
      <br />
      <div className="text-center">
        {/* <h2 className="text-yellow-200 text-2xl font-bold">Winnaar van de week</h2> */}
        {/* {
          getLatestWinners().map((winner, index) => {
            return <p key={index} className="text-white text-4xl">{winner} 🔥{getPlayerCurrentStreak(winner)}</p>
          })
        } */}
        <h2 className="text-yellow-200 text-2xl font-bold">Attentie Pizza Golf Maandag Spelers en Kijkers</h2>
        <div className="border p-4 m-4 rounded-xl border-2 bg-green-950 border-yellow-200 bg-opacity-50">
          <p>
            Al <b>DrVanox</b> z&apos;n resultaten zijn met terugwerkende kracht ongeldig verklaard vanwege zijn schuld-bekentenis van het gebruiken van een spiekbriefje tijdens het spelen. Hier zouden de precieze richtingen en schotkracht-niveaus op hebben gestaan. Hierdoor heeft hij een aanzienlijk voordeel ervaren tijdens de speelrondes. Hiermee laat hij de organisatie geen andere keuze dan de eerdergenoemde straf.  
          </p>
          <br/>
          <p>
            Met het oog voor transparantie zullen zijn scores wel te zien blijven. Al is dat wel met de nodige aantekening.
          </p>
        </div>
      </div>
      <br />
      <p>
        Op deze site kun je alles vinden over Pizza Golf Maandag. Strategieën voor elke hole, speler profielen en de statistieken van elke gespeelde ronde
      </p>
      <br />
      <p>
        Weet je niet wat Pizza Golf Maandag is? Ga naar de <Link href='over'>over</Link> pagina voor meer informatie.
      </p>
      <br />
      <p>Of luister naar dit nummer!</p>
      <div className="flex justify-center items-center m-4">
        <iframe
          src="https://www.youtube.com/embed/4O3HqHPZxOQ"
          title="YouTube video player"
          className="w-full max-w-screen-md aspect-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </PageLayout>
  );
}
