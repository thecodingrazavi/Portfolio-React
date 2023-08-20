
import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import mongodbimg from '../assets/mongodb.png';
import expressimg from '../assets/express.png';
import reactimg from '../assets/react.png';
import nodeimg from '../assets/node.png';

const About = () => {
  const [collapse, setCollapse] = useState(false);
  
  return (
    <section id="about" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-auto text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          ABOUT
        </p>
        <LineGradient width="mx-auto w-1/4 md:mx-0 md:w-[100px]" />
      </motion.div>

      <motion.div
          className="mx-auto my-10 flex items-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex w-[50px] items-center md:w-[100px] gap-8">
            <img alt="img-mern" className="hover:opacity-50 hover:scale-125 transition duration-500" src={mongodbimg}/>
            <img alt="img-mern" className="hover:opacity-50 transition duration-500 hover:scale-125" src={expressimg}/>
            <img alt="img-mern" className="hover:opacity-50 transition duration-500 hover:scale-125" src={reactimg}/>
            <img alt="img-mern" className="hover:opacity-50 transition duration-500 hover:scale-125" src={nodeimg}/>
          </div>
        </motion.div>


        <motion.div
          className="mx-auto "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
          }}
        >
           <p className="mt-10">
           Hey there! I'm Mohammed Shadab Khan Razavi, a dedicated web developer with a strong passion for transforming ideas into stunning, functional websites and applications. I call India my home base, but my work knows no bounds on the World Wide Web. 
           My journey into the world of web development began with a fascination for the internet's limitless potential. Since then, I've been on an exciting adventure of continuous learning and growth. With expertise in front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Node.js and databases like MongoDB, I'm equipped to tackle diverse challenges.
          </p>
          <span className={`long-text ${collapse ? "expanded" : ""}`}>
          I believe that the web is a canvas waiting to be filled with creativity. Every project I undertake is not just a job but a chance to craft an immersive online experience. User-centric design and clean, efficient code are at the core of my approach, ensuring that each project is not only visually appealing but also performs flawlessly.

          While I'm passionate about coding, I also value the bigger picture. Effective communication, collaboration, and understanding your unique goals are integral to my work. I love collaborating with designers and clients to bring concepts to life, and I'm a strong advocate for user-friendly, accessible web solutions.

          The web is an ever-evolving realm filled with endless possibilities. I stay at the forefront of industry trends, exploring new frameworks and technologies to keep my skills sharp. Innovation and adaptability are my constants, ensuring that I deliver cutting-edge solutions.

          Whether you're a startup looking for a digital presence, an established business seeking a web makeover, or anyone with a web-related dream, I'm here to make it a reality. Let's join forces, brainstorm ideas, and build something remarkable.

          Thank you for visiting my portfolio. I can't wait to explore the exciting web projects we can embark on together.
          </span>
        </motion.div>

        <motion.div
          className="flex mt-10 mb-20 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <button
              className="bg-gradient-rainblue read-more-btn text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
              href="#contact"
              onClick={()=> setCollapse((prev) => !prev)}
            >
              {collapse ? "Read Less" : "Read More"}
            </button>
          </motion.div>
    </section>
  );
};

export default About;
