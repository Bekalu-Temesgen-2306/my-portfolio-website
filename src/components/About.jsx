import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: "2023 - Present",
      text: "Computer Science Student, Bahir Dar University (focus: Web Development & UX Design)",
    },
    {
      year: "2023",
      text: "Web Programming Certificate, Udacity",
    },
    {
      year: "2022",
      text: "SSS Training Certification, Bahir Dar University",
    },
    {
      year: "2021",
      text: "Started Programming Journey, Self-learning through online resources",
    },
  ];

  return (
    <section id="about" className="section bg-light dark:bg-dark-light">
      <div className="container">
        {/* Intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            I'm a passionate Computer Science student at Bahir Dar University,
            specializing in web development and UX design. I’m dedicated to
            creating accessible and visually appealing digital solutions that
            solve real-world problems. I’ve built different projects that handle
            feasible problems, such as the EthioTour website that provides
            comprehensive information about Ethiopian tourism destinations. My
            approach combines technical expertise with creative problem-solving
            to deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Timeline (Compact Resume Style) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold mb-6">🎓 Education & Experience</h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="pl-2"
              >
                <p className="text-base text-text-muted">
                  <span className="font-semibold text-primary">
                    {item.year}
                  </span>{" "}
                  · {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          <div className="mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              See More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
