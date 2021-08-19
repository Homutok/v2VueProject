export default {
  state: {
    users:[]
  },
  mutations: {
    updateUsers(state,users){
      state.users=users;
    }
  },
  actions: {
    async fetchUsers(ctx){
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    ctx.commit('updateUsers',users);
    }
  },
  modules: {
  },
  getters:{
    allUsers(state){
      return state.users
    }
  }
}