import { useEffect, useRef, useState } from "react";
import cards from "../../data";

const Carousel = () => {
  const [page, setPage] = useState(0);
  const [pos, setPos] = useState(0);
  // const [width, setWidth] = useState(0);
  const cardRefs = useRef([]);

  const handlePrev = () => {
    if (page > 0) {
      setPage((prevValue) => prevValue - 1);
      setPos((prevValue) => prevValue - 494);
    }
  };

  const handleNext = () => {
    const endLimit = Math.ceil(cards.length / 2);
    if (page < endLimit - 1) {
      setPage((prevValue) => prevValue + 1);
      setPos((prevValue) => prevValue + 494);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((cardRef) => {
      cardRef.style.transform = `translateX(${-pos}px)`;
    });
  }, [pos]);

  return (
    <>
      <div className="wrapper">
        <div className="sub-wrapper">
          <div onClick={handlePrev} className="prev">
            prev
          </div>
          <div className="card-container">
            {cards.map(({ name, img, desc }, idx) => (
              <div
                ref={(ref) => (cardRefs.current[idx] = ref)}
                key={idx}
                className="card"
              >
                <img className="card__img" src={img} alt={`${name}`} />
                <p className="card__name margin-top-1em text-center">{name}</p>
                <p className="card__desc margin-top-1em text-center">{desc}</p>
              </div>
            ))}
          </div>
          <div onClick={handleNext} className="next">
            next
          </div>
        </div>
        <Indicator page={page} />
      </div>
    </>
  );
};

const Indicator = ({ page }) => {
  const dots = Math.ceil(cards.length / 2);

  return (
    <>
      <div className="indicator-container">
        {/* array of pages goes here */}
        {Array(dots)
          .fill(dots)
          .map((_, idx) => (
            <div
              key={idx}
              className={`${idx === page ? "dot-active" : "dot"}`}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Carousel;
