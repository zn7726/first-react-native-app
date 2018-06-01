import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: `${Math.random()}`, 
                    name: action.placeName,
                    image: {
                      uri: "https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg?itok=UawSK9dM"
                    }
                })
            };
        
        case DELETE_PLACE:
            console.log(action.placeKey);

            return {
                ...state,
                places: state.places.filter(place => {
                    console.log('===', place.key);
                    return place.key !== action.placeKey;
                })
            };


        default:
            return state; 
    };
};

export default reducer;