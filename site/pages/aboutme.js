import Header from "../components/header";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import ContentPage from "../components/contentPage";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Curious with some daredevil tendencies.</p>
      <p>
        Quitting a 10 year career in agriculture to pursue a new interest does
        have some similarity in pushing the limits of the body in running a 70km
        ultramarathon as a regular guy who has never done a full 42km run.
      </p>
      <p>
        A geneticist by training who wondered into the world of agriculture R&D{" "}
        realizing that there's much more in the world than lab work, performing
        data analysis from field trials and consulting stakeholders on the
        interaction of plants, climate, terrain, pests and diseases through a
        lifecycle of a plant. Though that chapter has ended, I do appreciate the
        opportunity that came with the job to travel to some areas that in the
        country that are not often visited and to hear and work together with
        leading experts in the industry.{" "}
      </p>
      <p>
        Who knew that a geneticist that deals with information encoded within
        all living things would also be interested by origin and the importance
        of inanimate rocks, sand, silt and clay - the very thing allows entire
        civilizations to be fed and built upon.
      </p>
      <p>
        My journey in the digital realm is very recent in early 2022, but I did
        have an early start in hacking psp consoles using guides on sketchy
        sites in my youth and installing OS that I had no use for. I also should
        taken cue and made my move earlier when I was the defacto "IT" guy at
        work troubleshooting printer and hardware issues.
      </p>
      <p>Likes dry/dad humour and enjoyor of puns, lots of puns.</p>
      <div
        class="tenor-gif-embed"
        data-postid="8455327"
        data-share-method="host"
        data-aspect-ratio="2.27273"
        data-width="50%"
      >
        <a href="https://tenor.com/view/matrix-puns-reddit-gif-8455327">
          Matrix Puns GIF
        </a>
        from <a href="https://tenor.com/search/matrix-gifs">Matrix GIFs</a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
      <p>
        Familiar with Javascript, working on React and Node.js and currently
        struggling with css. This will be updated accordingly.
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
