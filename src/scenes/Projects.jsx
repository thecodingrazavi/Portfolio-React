import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1img from '../assets/project-1.jpeg';
import project2img from '../assets/project-2.jpeg';
import project3img from '../assets/project-3.jpeg';
import project4img from '../assets/project-4.jpeg';
import project5img from '../assets/project-5.jpeg';
import project6img from '../assets/project-6.jpeg';
import project7img from '../assets/project-7.jpeg';


const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Welcome to my digital playground. Here, you'll find a curated selection of my web development projects. Each one is a testament to my passion for code and creativity.

        Explore these digital wonders and imagine the possibilities. Let's turn your ideas into reality together.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                  }} 
                  transition={{delay:0.2, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project1img} alt="{projectTitle}" />
          </motion.div>
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1     },
                  }} 
                  transition={{delay:0.3, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project2img} alt="{projectTitle}" />
          </motion.div>

          {/* ROW 2 */}
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                  }} 
                  transition={{delay:0.4, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project3img} alt="{projectTitle}" />
          </motion.div>
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1      },
                  }} 
                  transition={{delay:0.4, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project4img} alt="{projectTitle}" />
          </motion.div>
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                  }} 
                  transition={{delay:0.5, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project5img} alt="{projectTitle}" />
          </motion.div>

          {/* ROW 3 */}
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                  }} 
                  transition={{delay:0.6, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project6img} alt="{projectTitle}" />
          </motion.div>
          <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                  }} 
                  transition={{delay:0.7, duration:0.5}}
              className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Project 1</p>
              <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
            <img src={project7img} alt="{projectTitle}" />
          </motion.div>
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;