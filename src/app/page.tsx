

import { AboutUs } from "./AboutUs";
import Banner from "./Banner";
import { Careers } from "./Careers";
import { Enquire } from "./Enquire";
import { Footer } from "./Footer";
import { Service } from "./Service";
import { StockMarket } from "./StockMarket";
import { Tasks } from "./Tasks";

export default function Home() {
  return (
   <main>
    <Banner/>
    <StockMarket/>
    <Service/>
    <AboutUs/>
    <Careers/>
    <Tasks/>
    <Enquire/>
    <Footer/>
   </main>
  );
}
