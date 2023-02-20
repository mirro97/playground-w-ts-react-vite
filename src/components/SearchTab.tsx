import SearchInput from "./common/search";

const SearchTab = (props: any) => {
  return (
    <div className="mx-auto max-w-3xl mt-5 py-4">
      <SearchInput {...props} />
    </div>
  );
};

export default SearchTab;
