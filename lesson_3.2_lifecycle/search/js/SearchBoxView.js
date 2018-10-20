const SearchBoxView = ({ fixed, getNode }) => {
  const getInput = node => getNode('searchBox', node);
  const getInputContainer = node => getNode('searchContainer', node);

  return (
    <section className="container" ref={getInputContainer}>
      <div className="row">
        <div className="col-sm-12">
          <input
            className={`search-box ${fixed ? 'search-box_fixed' : null}`}
            placeholder="Поиск"
            ref={getInput}
          />
        </div>
      </div>
    </section>
  );
};
