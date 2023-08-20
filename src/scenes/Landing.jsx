import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <motion.div className="basis-3/5 z-10 mt-16 md:mt-32 md:mb-32 flex justify-center md:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{delay:0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-[65px] before:-left-[50px] before:rounded-full
            before:w-[500px] before:max-w-[400px] md:before:max-w-[600px] before:h-[500px] before:border-2 before:border-blue before:z-[-1] before:hover:border-red before:hover:bg-gradient-rainbow transition-all duration-500"
          >
            <img
              alt="profile"
              className="hover:scale-125 transition duration-500 z-10 w-[400px] max-w-[400px] md:max-w-[600px]"
              src="https://thecodingrazavi.github.io/Mohammed-Shadab-Khan-Razavi/images/sample-logo.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:scale-125 hover:opacity-50 transition duration-500 z-10 w-72 max-w-[400px] md:max-w-[600px]"
            src="https://thecodingrazavi.github.io/Mohammed-Shadab-Khan-Razavi/images/sample-logo.png"
          />
        )}
      </motion.div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Shadab {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[30px] before:-top-[80px] before:z-[-1]"
            >
              Khan
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          I have a keen eye for detail and a passion for creating visually appealing websites. From responsive designs to smooth animations, I strive to deliver immersive user experiences.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-2 md:py-3 md:px-7 font-semibold text-sm
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Download CV
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-4  md:px-10 font-playfair text-sm ">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
