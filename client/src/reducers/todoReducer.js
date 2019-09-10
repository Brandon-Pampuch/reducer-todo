export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'CLEAR_TODO':
            return [];
        case 'MARK_COMPLETED':
            return [...state.map(cur => cur.id === action.payload ? { ...cur, completed: !cur.completed } : cur)];
        case 'CLEAR_COMPLETED':
            return [...state.filter(cur => cur.completed ? false : true
            )];
        default:
            return state;



    }
}