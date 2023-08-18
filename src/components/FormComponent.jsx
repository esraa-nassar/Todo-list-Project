/* eslint-disable react/prop-types */
import FormStyled from "./styledComponents/Form.Styled";
import Div from "./styledComponents/Div.Styled";

const Form = (props) => {
//   console.log(props);
  return (
    <>
      <FormStyled onSubmit={(e) => props.handleSubmit(e)}>
        <h2 className="text-success">New Item</h2>
        <Div className="form-group">
          <input
            className="form-control w-75 fs-5 border-primary "
            type="text"
            name="textItem"
            value={props.inputValue}
            id="textItem"
            required
            autoFocus
            onChange={(e) => props.handleChange(e)}
          />
        </Div>
        <Div>
          <button type="submit" className="btn btn-outline-primary w-75 fs-5">
            Add
          </button>
        </Div>
      </FormStyled>
    </>
  );
};

export default Form;
