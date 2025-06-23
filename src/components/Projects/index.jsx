import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/work1.png";
import work2 from "../../assets/Images/work2.png";
import work3 from "../../assets/Images/work3.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "NFT",
      year: "2025",
      img: work1,
      title: "NFT E-commerce",
      detail:
        "This React application, crafted with Create React App, offers dynamic navigation via React Router and fetches data using Axios. Firebase handles backend operations, while keen-slider and AOS enable engaging carousels and animations. The UI incorporates React Icons and loading skeletons for enhanced user experience. Built with npm scripts, it utilizes images from Freepik, Giphy, and Pexels, and includes a countdown timer feature.",
        link: "https://michael-internship.vercel.app/"
    },
    {
      client: "Treact",
      year: "2025",
      img: work2,
      title: "React Template Page.",
      detail:
        "This landing page showcases beautiful and customizable React templates. It features clear navigation, a strong call to action, and highlights key benefits like security, 24/7 support, and ease of use. The design is visually appealing and responsive, aiming to attract developers seeking efficient and professional website solutions.",
        link: "https://mikebikeking.github.io/Beautiful-React-Templates/",
    },
    {
      client: "Movie Finder",
      year: "2025",
      img: work3,
      title: "Find your next Movie.",
      detail:
        "This React application, built with Vite and styled with TailwindCSS, uses Appwrite for backend services. It features a 'Trending Movies' section, showcasing popular movies fetched from the backend API. The app demonstrates fetching and displaying data from an external API.",
        link: "https://movie-app-react-939f82d3058d.herokuapp.com/",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              04
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Projects
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  link={item.link}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
