type PropsFilterType = {
  onClickFilter: (filter: 'all' | 'active' | 'completed') => void;
};

export const FilterBtn = ({ onClickFilter }: PropsFilterType) => {
  return (
    <div className="filter-btn">
      <button onClick={() => onClickFilter('all')}>all</button>
      <button onClick={() => onClickFilter('active')}>active</button>
      <button onClick={() => onClickFilter('completed')}>completed</button>
    </div>
  );
};
