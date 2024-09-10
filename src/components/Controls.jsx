import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const numberElement = useRef();

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const togglePrivacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: { num: numberElement.current.value },
    });
    numberElement.current.value = "";
  };

  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: { num: numberElement.current.value },
    });
    numberElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={togglePrivacy}
        >
          TogglePrivacy
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controlRow">
        <input
          type="text"
          className="form-control"
          style={{ width: "150px" }}
          placeholder="Enter a Number"
          ref={numberElement}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};
export default Controls;
