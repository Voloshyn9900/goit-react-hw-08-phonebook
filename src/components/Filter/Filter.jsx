import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactSlice";
import { FilterInput, FilterLabel } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.account.filter);
  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value.trim()))}
      />
    </>
  );
};
