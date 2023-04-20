import { useDispatch, useSelector } from "react-redux";
import InputBase from '@mui/material/InputBase';
import { handleFilter } from "redux/filtersSlice";
import { selectFilter } from "redux/selectors";


export const Filter = () => {
const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    
   

    return (
        <InputBase type="text" value={filter} onChange={(e) => dispatch(handleFilter(e.target.value))} fullWidth placeholder="Find contact by name" autoFocus variant="outlined"
            sx={{ border: "1px solid #a7a0a0", borderRadius: "6px", width: "350px", height: "45px", padding: "20px", mb: "20px", color: "white" }} />
        
    )
}

