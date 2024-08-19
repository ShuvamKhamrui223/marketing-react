import {
  About,
  Clients,
  Contact,
  CTA,
  FAQ,
  Features,
  Hero,
  Portfolio,
  Pricing,
  RecentPosts,
  Services,
  Stats,
  Team,
  Testimonials,
} from "./components";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      {/* <Stats /> */}
      <Services />
      <Features />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Team />
      <CTA />
      <Testimonials />
      <RecentPosts />
      <Contact />
    </>
  );
};

export default Home;
