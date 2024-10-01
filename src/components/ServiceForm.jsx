import { addService, editService, endChangesService, formChangeFieldService } from "../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceForm() {
  const dispatch = useDispatch();
  const form = useSelector(state => state.serviceForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch(formChangeFieldService(name, value));
  };
  const handleReset = (event) => {
    event.preventDefault();

    dispatch(endChangesService());
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.editingMode.state) {
      dispatch(editService(form.editingMode.index, form.name, form.price));
    }
    else {
      dispatch(addService(form.name, form.price));
    }

    dispatch(endChangesService());
  };

  return (
    <form className="service-form" onReset={handleReset} onSubmit={handleSubmit}>
      <input
        className="service-form__input"
        name="name"
        onChange={handleChange}
        required
        type="text"
        value={form.name}
      />
      <input
        className="service-form__input"
        max={999999}
        min={1}
        name="price"
        onChange={handleChange}
        required
        type="number"
        value={form.price}
      />
      <button className="service-form__btn" type="submit">Save</button>
      {form.editingMode.state && (
        <button className="service-form__btn" type="reset">Cancel</button>
      )}
    </form>
  );
}
