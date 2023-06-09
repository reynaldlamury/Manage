import { useEffect, useRef, useState } from "react";
import cards from "../../data";
import { useStateValue } from "../StateProvider";

const Carousel = () => {
  const [{ indexDot, indicatorClicked }, dispatch] = useStateValue();
  const [page, setPage] = useState(0);
  const [pos, setPos] = useState(0);
  // const [cardwidth, setCardwidth] = useState(494);
  const cardRefs = useRef([]);
  const cardwidth = 494;

  const handlePrev = () => {
    if (page > 0) {
      setPage((prevValue) => prevValue - 1);

      setPos((prevValue) => prevValue - cardwidth);
    }
  };

  const handleNext = () => {
    const endLimit = Math.ceil(cards.length / 2);
    if (page < endLimit - 1) {
      setPage((prevValue) => prevValue + 1);
      setPos((prevValue) => prevValue + cardwidth);
    }
  };

  useEffect(() => {
    console.log("pos", pos);
  }, [pos]);

  // function moveCard (amount) {

  // cardRefs.current.forEach((cardRef) => {
  // cardRef.style.transform = `translateX(${-amount}px)`;
  // });
  // }

  useEffect(() => {
    cardRefs.current.forEach((cardRef) => {
      cardRef.style.transform = `translateX(${-pos}px)`;
    });
    console.log("pos useEffect is being used...");
  }, [pos]);

  useEffect(() => {
    // cardRefs.current.forEach((cardRef) => {
    if (page < indexDot) {
      setPage(indexDot);
      setPos(indexDot * cardwidth);
      // cardRef.style.transform = `translateX(${-indexDot * cardwidth}px)`;
      console.log("block 1---> indexDot", indexDot);
      console.log("pos", pos);
    } else if (page > indexDot) {
      setPage(indexDot);
      setPos(indexDot * cardwidth);
      // cardRef.style.transform = `translateX(${indexDot * cardwidth}px)`;
      console.log("block 2 ---> indexDot", indexDot);
    }
    // });

    console.log("indexBot useEffect is being used...");
  }, [indexDot, indicatorClicked]);

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
  const [state, dispatch] = useStateValue();
  const dots = Math.ceil(cards.length / 2);
  const [indicatorClicked, setIndicatorClicked] = useState(false);

  const handleDot = (e) => {
    const indexDot = Number(e.target.getAttribute("indexvalue"));
    console.log(e.target);
    setIndicatorClicked(!indicatorClicked);

    dispatch({
      type: "GET_INDICATORCLICKED",
      value: indicatorClicked,
    });

    dispatch({
      type: "GET_INDEXDOT",
      value: indexDot,
    });
  };

  return (
    <>
      <div className="indicator-container">
        {/* array of pages goes here */}
        {Array(dots)
          .fill(dots)
          .map((_, idx) => (
            <div
              indexvalue={idx}
              key={idx}
              onClick={handleDot}
              className={`${idx === page ? "dot-active" : "dot"}`}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Carousel;
