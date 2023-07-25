import {createStore} from 'vuex'


let store= createStore({
    state() {
        return{
          userData:[]
            
        }

    },
   mutations:{
    fetchData(state,payload) {
      state.userData=payload

    }
   },
    
        actions: {
          async fetchData(context) {
            try {
             
              //let res = await fetch("https://jsonplaceholder.typicode.com/users");
              let res = await fetch("https://localhost:44369/Employee/Employee/Get");//asp.net file integration
              let data = await res.json();
              console.log("data", data);
              context.commit("fetchData",data)// send it to mutations


            } catch (err) {
              console.log("error", err);
            }
          },
        },
       
    })
    export default store;