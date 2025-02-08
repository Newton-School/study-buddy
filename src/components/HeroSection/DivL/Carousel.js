import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      color: "#FFFFFF",
      text: "“ I love using #StudyBuddy for my JEE prep! ”",
    },
    {
      id: 2,
      color: "#FFFFFF",
      text: "“It's so addictive, I solved 50 questions in one day 💪“",
    },
    {
      id: 3,
      color: "#FFFFFF",
      text: "“Ranked #32 out of 16,200 students, thanks to Study Buddy 🏆“",
    },
    {
      id: 3,
      color: "#FFFFFF",
      text: "“I and my friend solve PYQs together for 4-5 hours daily on Study Buddy 🤯“",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={styles.carouselContainer}>
      <div
        style={{
          ...styles.slidesWrapper,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{ ...styles.slide, backgroundColor: slide.color }}
          >
            <span style={styles.slideText}>{slide.text}</span>
          </div>
        ))}
      </div>
      <div style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? "#717171" : "#bbb",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: "424px",
    overflow: "hidden",
    position: "relative",
  },
  slidesWrapper: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
  },
  slide: {
    minWidth: "424px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },
  slideText: {
    color: "#5B6271",
    font: "Mona Sans",
    fontWeight: "500",
    fontSize: "14px",
    textAlign: "center",
    fontStyle: "italic",
  },
  dotsContainer: {
    textAlign: "center",
    marginTop: "10px",
  },
  dot: {
    height: "10px",
    width: "10px",
    margin: "0 5px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
  },
};

export default Carousel;
