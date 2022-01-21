const intial = {
     counter: 1,
     fav: [],
     mov:[]
}
export default function favReducer(state = intial, action) {
     console.log("aaaaa",action.payload);
     switch (action.type) {
          case "SET_MOVIE":
               return {
                    ...state,
                    counter: action.payload
               };

             
          case "ADD_MOVIE":
               const selectedItem = state.fav.find((el) =>
               
                    el.id == action.payload.id
               )

               if (selectedItem) {
                    return {
                         ...state,
                         fav: state.fav.filter(el => el.id != action.payload.id)
                    };
               } else {
                    return {
                         ...state,
                         fav: [...state.fav, action.payload]
                    };

     


     }
       case "REMOVE_MOVIE":
          return {
               ...state,
               fav: state.fav.filter(el => el.id != action.payload)
          };
          
          case "GET_MOVIE":
               return {
                    ...state,
                    mov:[...action.payload]
               };
               case "GET_FILTER":
                    return {
                         ...state,
                         mov:[...action.payload]
                    };
          
     default:
     return state;
} 
}