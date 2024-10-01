import { editingService, removeService } from "../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.serviceList);
  const search = useSelector(state => state.serviceSearch);

  const filterItems = (item) => {
    let check = true;

    if (search.name) {
      check = check && item.name.includes(search.name);
    }

    return check;
  };
  const handleEditing = (id) => {
    const index = items.findIndex(item => item.id === id);

    const { name, price } = items[index];

    dispatch(editingService(name, price, { state: true, index }));
  };
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul className="service-list">
      {items.filter(filterItems).map(item => (
        <li className="service-list__item" key={item.id}>
          {item.name}
          {" "}
          {item.price}
          <button className="service-list__btn" onClick={() => handleEditing(item.id)}>✎</button>
          <button className="service-list__btn" onClick={() => handleRemove(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
