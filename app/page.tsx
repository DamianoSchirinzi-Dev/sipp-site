import { VideoBanner } from "./components/VideoBanner/VideoBanner";
import { Navigation } from "./components/Navigation/Navigation";
import { InfoSection } from "./components/InfoSection/InfoSection";

export default function Home() {
  return (
    <div>
      <VideoBanner />
      <Navigation />
      <InfoSection
        heading="About"
        subheading="Sipp is an independent coffee company with three outlets based in Manchester."
        body1="Routed in our community our aim is to provide a welcoming space to work, meet, talk, and dream up some big ideas."
        body2="Nordic inspired, TAKK is the result of our travels throughout Scandinavia and Iceland. It’s a big fat love letter to Reykjavik…its people and their love for the coffee bean."
        imageUrl="/images/Cafe_1.png"
      />
      <InfoSection
        heading="Coffee"
        subheading="Finca Miravalle from El Salvador is our single origin house coffee."
        body1="We focus on relationships. Our house espresso is a single origin coffee from Finca Miravalle in El Salvador. We regularly feature guest espresso from some of the best roasters in Europe and further afield."
        body2="On the brew bar, we serve a range of single origin coffees that change on a weekly basis. We are dedicated to sourcing some of the best coffees available in Europe, and obsessive in our desire to serve you the best possible drink."
        imageUrl="/images/Cafe_1.png"
      />
    </div>
  );
}
