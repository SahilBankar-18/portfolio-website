"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

// Define the type for the props of CountUp component
interface CountUpProps {
  end: number;
  duration: number;
  reset: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration, reset }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (reset) {
      animateValue(0, end, duration * 1000, setCount);
    }
  }, [end, duration, reset]);

  const animateValue = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      callback(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return <span>{count}</span>;
};

// Define a type for each item in the array
interface CounterItem {
  id: number;
  icon: JSX.Element;
  count: number;
  heading: string;
}

const Counter: React.FC = () => {
  // Array of counters with types defined by CounterItem
  const arr: CounterItem[] = [
    {
      id: 1,
      icon: <GiSkills size={35} />, // Corrected icon usage
      count: 7 ,
      heading: "Experience in Months",
    },
    {
      id: 2,
      icon: <FaLaptopCode size={35} />,
      count: 10,
      heading: "Technologies",
    },
    {
      id: 3,
      icon: <AiOutlineFundProjectionScreen size={35} />,
      count: 12,
      heading: "Completed Projects",
    },
  ];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="w-full md:px-16 dark:bg-gray-900 px-4 md:pb-10 flex justify-center items-center"
      ref={sectionRef}
    >
      <div className="w-full grid lg:grid-cols-3 place-content-center md:grid-cols-3 grid-cols-1 gap-6 justify-center items-center">
        <div className="lg:col-span-3 md:col-span-2 flex justify-center items-center py-10">
          <div className="w-full flex flex-wrap gap-8 justify-center items-center px-2 lg:px-12">
            {arr.map((item) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                key={item.id}
                className="relative dark:bg-gray-700 shadow-purple flex flex-col gap-4 justify-center items-center py-4 rounded-xl dark:shadow-black overflow-hidden group cursor-pointer md:w-52 lg:w-60 w-full h-48 align-content-center"
              >
                <div className="relative z-10 bg-golden3 text-black dark:text-white p-3 rounded-full transition-all duration-500 group-hover:text-white dark:group-hover:text-white">
                  {item.icon}
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center">
                  <h5 className="text-2xl font-extrabold transition-all duration-500 group-hover:text-white dark:group-hover:text-white text-black dark:text-white">
                    {isVisible ? (
                      <CountUp
                        end={item.count}
                        duration={1.5}
                        reset={isVisible}
                      />
                    ) : (
                      "0"
                    )}
                    {item.id === 4 ? "%" : "+"}
                  </h5>
                  <p className="text-subHeading font-semibold transition-all duration-500 group-hover:text-white dark:group-hover:text-white text-black dark:text-white text-center">
                    {item.heading}
                  </p>
                </div>
                <div className="absolute inset-0 bg-purple dark:bg-purple transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
