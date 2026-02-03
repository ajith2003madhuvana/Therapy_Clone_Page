import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Specialties from "../components/Specialties";
import Support from "../components/Support";
import About from "../components/About";
import Office from "../components/Office";
import FAQs from "../components/FAQs";
import ProfessionalBackground from "../components/ProfessionalBackground";
import BottomCTA from "../components/BottomCTA";
import FadeIn from "../components/FadeIn";

const Home = () => {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <Intro />
      </FadeIn>

      <FadeIn>
        <Specialties />
      </FadeIn>

      <FadeIn>
        <Support />
      </FadeIn>

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Office />
      </FadeIn>

      <FadeIn>
        <FAQs />
      </FadeIn>

      <FadeIn>
        <ProfessionalBackground />
      </FadeIn>

      <FadeIn>
        <BottomCTA />
      </FadeIn>
    </>
  );
};

export default Home;
