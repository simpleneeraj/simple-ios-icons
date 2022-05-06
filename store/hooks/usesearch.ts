import React from "react";
import searchSlice from "store/slice/search";
import { searchSelector } from "store/selector";
import { useDispatch, useSelector } from "react-redux";

const _actions = searchSlice.actions


const useSearch = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(searchSelector);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChangeInput = React.useCallback(() => {
        const input = inputRef.current as HTMLInputElement
        dispatch(_actions.onSearch(input.value))
    }, [searchValue])

    const onInputReset = React.useCallback(() => {
        dispatch(_actions.onSearch(''))
    }, [searchValue])


    return { searchValue, inputRef, onChangeInput, onInputReset }
}

export default useSearch;