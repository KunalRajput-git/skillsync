const Filter = () => {
  return (
    <div className="mt-8 flex w-4/5 m-auto justify-between items-center">
      <input
        type="text"
        placeholder="search eg: javascript"
        className="w-1/3 border py-3 px-5 rounded-md"
      />
      <div>Filter</div>
    </div>
  );
};

export default Filter;
