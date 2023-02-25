import SearchInput from "./common/search";

const SearchTab = (props: any) => {
  return (
    <div className="mx-auto max-w-3xl py-4">
      <SearchInput {...props} />
    </div>
  );
};

export default SearchTab;
