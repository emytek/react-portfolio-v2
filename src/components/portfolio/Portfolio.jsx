import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Free chat",
    img: "/img/free-chat.png",
    link: "https://freechat-ui.vercel.app",
    desc: "A fullstack social media app designed as a custom facebook clone using the MERN stack, MongoDB as the No-sql database, Node and Express on the backend and React on the frontend",
  },
  {
    id: 2,
    title: "Feature Blog",
    img: "/img/blog-b.png",
    link: "https://blog.100jsprojects.com",
    desc: "A MERN stack full blog site with Auth and CRUD functionalities admin: Created with React, Node, Express and MongoDB ",
  },
  {
    id: 3,
    title: "Bazar- Shopay Ecommerce",
    link: "https://shopay-bazar-1.vercel.app",
    img: "/img/bazar1.png",
    desc: "A Next js ecommerce app developed with next-auth, node, express and mongodb and redux applying o-auth, subproducts, cart functionality, payments with paypal/stripe, shipping and admin functionality ",
  },
  {
    id: 4,
    title: "Simple Products store",
    link: "https://store-frontend-ten.vercel.app",
    img: "/img/store.png",
    desc: "A product store created using RESTful web service on a node-express server with React ui on the client and deployed on fly hosting",
  },

  {
    id: 5,
    title: "Credib App",
    link: "https://credib.io",
    img: "/img/credib.png",
    desc: "A mobile app that connects vendors to clients through a market-place and also provide an event-planning solution",
  },
  {
    id: 5,
    title: "Agric Trail",
    link: "https://agrictrail.vercel.app",
    img: "/img/agric.png",
    desc: "A farm inventory solution and food systems management app for simplified record keeping and better financial management in agric business",
  },
  {
    id: 6,
    title: "Bandage products display",
    link: "https://product-cards-task.vercel.app",
    img: "/img/prod.png",
    desc: "A simple Next js site displaying basic UI components and paginated products and products details fetched from an external api",
  },
  {
    id: 7,
    title: "Hmp for Devs",
    link: "https://house-market-place-dusky.vercel.app",
    img: "/img/hmp1.png",
    desc: "A simple house market place app for developers created with react and firebase with google sign-in for auth and other functionalities",
  },
  {
    id: 8,
    title: "Vetir Feedback",
    link: "https://house-market-place-dusky.vercel.app",
    img: "/img/feedback.png",
    desc: "A simple feedback and review demo project showing the basic features of react and applying CRUD in single page applications",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} className="btnLink">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
