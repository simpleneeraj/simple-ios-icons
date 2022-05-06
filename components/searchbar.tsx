import React from "react";
import Close from "tools/icons/Close";
import css from "css/search.module.scss";
import useSearch from "store/hooks/usesearch";
import SearchOutline from "tools/icons/SearchOutline";

const SearchBar = () => {
  const { onChangeInput, inputRef, onInputReset, searchValue } = useSearch();
  return (
    <div className={css.Container}>
      <div className={css.Text}>
        <h1>Beautifully crafted open source icons</h1>
        <p>
          Premium designed icons for use in web, iOS, Android, and desktop apps.
          Support for React Components with Typescript support. Completely open
          source, MIT licensed.
        </p>
      </div>
      <div className={css.SearchBar}>
        <i className={css.IconSearch}>
          <SearchOutline size={20} />
        </i>
        <input
          onChange={onChangeInput}
          ref={inputRef}
          type="text"
          value={searchValue}
          placeholder="Search icons..."
        />
        <span onClick={onInputReset} className={css.IconClose}>
          <Close size={20} />
        </span>
      </div>
    </div>
  );
};
export default SearchBar;
