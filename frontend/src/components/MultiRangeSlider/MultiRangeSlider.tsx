import React, { useCallback, useEffect, useState, useRef } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

interface MultiRangeSliderProps {
  min?: number;
  max?: number;
  onChange?: any;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min || 0);
  const [maxVal, setMaxVal] = useState(max || 1);
  const range = useRef(null);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => {
          const value = Math.min(Number(e.target.value), maxVal - 1);
          setMinVal(value);
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(e) => {
          const value = Math.max(Number(e.target.value), minVal + 1);
          setMaxVal(value);
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">
          <BsCurrencyRupee />
          {minVal}
        </div>
        <div className="slider__right-value">
          <BsCurrencyRupee />
          {maxVal}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
