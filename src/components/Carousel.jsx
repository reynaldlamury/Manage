import cards from "../../data";

const Carousel = () => {
  return (
    <>
      <div className="wrapper">
        <div className="card-container">
          {cards.map(({ name, img, desc }, idx) => (
            <div key={idx} className="card">
              <img className="card__img" src={img} alt={`${name}`} />
              <p className="card__name margin-top-1em text-center">{name}</p>
              <p className="card__desc margin-top-1em text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
