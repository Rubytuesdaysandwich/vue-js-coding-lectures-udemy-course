<template>
  <section>
    <header>
      <h1>Active Users</h1>
    </header>
    <add-user-data @add-user="addUser"></add-user-data>
    <ul>
      <li>
        <active-user
          v-for="user in activeUsers"
          :key="user.id"
          :id="user.id"
          :user-name="user.username"
          :age="user.age"
          @delete="deleteContact"
        ></active-user>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeUsers: [
        // {//test block
        //   id: "",
        //   username: "",
        //   age: "",
        // },
      ],
    };
  },
  methods: {
    addUser(username, age) {
      const adduser = {
        id: new Date().toISOString(),
        username: username,
        age: +age, // + set to type number
      };
      this.activeUsers.push(adduser);
    },
    deleteContact(userId) {
      this.activeUsers = this.activeUsers.filter((user) => user.id !== userId);
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #8cbbf1;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #28c25b;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  /* background-color: #ec3169;
  border-color: #ec3169; */
  font-size: 25px;
  border: 3px solid #00ffea;
  background-color: #7335c4;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
