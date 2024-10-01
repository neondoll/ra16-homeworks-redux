import { searchChangeFieldService } from "../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceSearch() {
  const dispatch = useDispatch();
  const form = useSelector(state => state.serviceSearch);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch(searchChangeFieldService(name, value));
  };

  return (
    <form className="service-search">
      <input
        className="service-search__input"
        name="name"
        onChange={handleChange}
        required
        placeholder="Search..."
        type="text"
        value={form.name}
      />
    </form>
  );
}
