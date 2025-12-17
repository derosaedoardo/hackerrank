import React, { useCallback, useMemo, useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const resetHandler = useCallback(() => setCurrentSlide(0), []);

  const prevHandler = useCallback(
    () => setCurrentSlide((prevSlide) => prevSlide - 1),
    []
  );

  const nextHandler = useCallback(
    () => setCurrentSlide((prevSlide) => prevSlide + 1),
    []
  );

  const resetButtonDisabled = useMemo(() => currentSlide === 0, [currentSlide]);

  const prevButtonDisabled = useMemo(() => currentSlide === 0, [currentSlide]);

  const nextButtonDisabled = useMemo(
    () => currentSlide === slides.length - 1,
    [currentSlide]
  );

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          disabled={resetButtonDisabled}
          className="small outlined"
          onClick={resetHandler}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          disabled={prevButtonDisabled}
          className="small"
          onClick={prevHandler}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          disabled={nextButtonDisabled}
          className="small"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
