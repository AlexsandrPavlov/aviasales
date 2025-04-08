const initialState = {
  sortOption: 'cheap',
  allChecked: [],
  checkedList: [
    {title: 'Все', id: 'all', idTransfer: -1, checked: false},
    {title: 'Без пересадок', idTransfer: 0, id: 'without_transfer', checked: false},
    {title: '1 пересадка', idTransfer: 1, id: 'one_transfer', checked: false},
    {title: '2 пересадки', idTransfer: 2, id: 'two_transfer', checked: false},
    {title: '3 пересадки', idTransfer: 3, id: 'three_transfer', checked: false},
  ],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_OPTION':
      return {
        ...state,
        sortOption: action.payload,
      };

    case 'TOGGLE_FILTER': {
      const updatedCheckedList = state.checkedList.map((filter) => {
        if (filter.id === action.payload) {
          return {...filter, checked: !filter.checked};
        }
        return filter;
      });

      // Проверяем состояние чекбокса "Все"
      const allFiltersSelected = updatedCheckedList.every((filter) => filter.id === 'all' || filter.checked);

      return {
        ...state,
        checkedList: updatedCheckedList.map((filter) =>
          filter.id === 'all' ? {...filter, checked: allFiltersSelected} : filter
        ),
      };
    }

    case 'TOGGLE_ALL_FILTERS': {
      const allChecked = action.payload;
      const updatedCheckedList = state.checkedList.map((filter) => ({
        ...filter,
        checked: filter.id === 'all' ? allChecked : allChecked,
      }));

      return {
        ...state,
        checkedList: updatedCheckedList,
      };
    }

    default:
      return state;
  }
};
