import Header from "../components/header";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import ContentPage from "../components/contentPage";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Curious with some daredevil tendencies.</p>
      <p>
        Quitting a 10 year career in agriculture to pursue a new interest does
        draw some similarity in pushing the limits of the body in running a 70km
        ultramarathon as a regular guy who has never done a full 42km run.
      </p>
      <p>
        A geneticist by training, that mostly tinkered in the lab, wondered into
        the world of agricultural R&D, performed data analysis from field
        trials, consulting stakeholders on the interaction of plants, climate,
        terrain, pests and diseases throughout the lifecycle of a plant. Studied
        the origin and importance of inanimate rocks, sand, silt and clay - the
        very thing allowed entire civilizations to be fed and built upon.
      </p>
      <p>
        The slow pace of R&D for a perrenial crop such as oil palm did provide
        career stability and the initial novelty that came with it satisfied
        curiosity. With time, novelty worn off, coupled with the slow R&D
        progress of a perrenial crop that is usually measured in years naturally
        slowed personal progress. Perhaps I should have taken cue and made my
        move earlier when I was the defacto "IT" guy at work troubleshooting
        printer and hardware issues. Better late than never. I'm grateful and
        appreciate the opportunities it provided, but it was time to move on.
      </p>
      <p>
        My journey as a self-studied coder/programmer started early 2022, feel
        free to look around in <Link href="/projects">projects</Link> and{" "}
        <Link href="/blog">blog</Link> for the latest update!
      </p>
      <p>Likes dry/dad humour and enjoyor of puns, lots of puns.</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://media.tenor.com/hsgug-TgdT4AAAAd/matrix-puns.gif"
          alt="Matrix Puns"
          style={{ width: "80%" }}
        ></img>
      </div>
      <p>
        Familiar with Javascript (primary), Python, Data Stuctures and
        Algorithms, Node.js/Express, HTML, CSS, React, React Native, SQL,
        MongoDB.
      </p>
    </div>
  );
}

AboutMe.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
