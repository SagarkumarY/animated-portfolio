import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
function Portfolio() {
  const items = [
    {
      id: 1,
      title: "React Commerce",
      link: "",
      image:
        "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl140nt735sn1v67jcrju.png",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum fugiat at laborum accusamus. Consectetur facilis dolorem quis reprehenderit. Harum tempora porro nulla consequuntur facere, incidunt sed architecto beatae sunt?",
    },
    {
      id: 2,
      title: "React Blog",
      link: "",
      image:
        "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnrhfi5frqdy05rqtr6rv.png",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum fugiat at laborum accusamus. Consectetur facilis dolorem quis reprehenderit. Harum tempora porro nulla consequuntur facere, incidunt sed architecto beatae sunt?",
    },
    {
      id: 3,
      title: "Next Music app",
      link: "",
      image:
        "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzypweqlzltxxfc0eh8cf.png",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum fugiat at laborum accusamus. Consectetur facilis dolorem quis reprehenderit. Harum tempora porro nulla consequuntur facere, incidunt sed architecto beatae sunt?",
    },
    {
      id: 4,
      title: "Vanilla JavaScript ",
      link: "",
      image:
        "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fubnosmujp2hmcuwyp7he.png",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum fugiat at laborum accusamus. Consectetur facilis dolorem quis reprehenderit. Harum tempora porro nulla consequuntur facere, incidunt sed architecto beatae sunt?",
    },
    {
      id: 5,
      title: "Social Media App",
      link: "",
      image:
        "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fahrsfvc7mhq230l5f5m1.png",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum fugiat at laborum accusamus. Consectetur facilis dolorem quis reprehenderit. Harum tempora porro nulla consequuntur facere, incidunt sed architecto beatae sunt?",
    },
  ];

  const Single = ({ item }) => {
      const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const y = useTransform(scrollYProgress,[0,1],[-300,250]);
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imgContainer" ref={ref}>
              <img src={item.image} alt={item.title} />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
