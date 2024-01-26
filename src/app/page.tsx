import PageLayout from "./layouts/PageLayout";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout title="Home">
      <p>
        Welkom bij Pizza Golf Maandag!
      </p>
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
