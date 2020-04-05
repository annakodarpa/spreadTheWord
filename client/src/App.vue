<template>
  <div id="app">
    <Login 
      v-if="!loggedIn"
      @loggedIn="login()"
    />
    <EnterData
      v-if="loggedIn && !enterData"
      @enterData="enterData = true"
    />
    <Start
      v-if="loggedIn && !enterData"
    />
    <EnterDataForm
      v-if="enterData"
      @submit="submit"
      @finish="finish"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Login from './components/Login.vue'
import Start from './components/Start.vue'
import EnterData from './components/EnterData.vue'
import EnterDataForm from './components/EnterDataForm.vue'

export default {
  name: 'App',
  data: function() {
    return {
      id: null,
      loggedIn: false,
      enterData: false,
    }
  },
  components: {
    Login,
    Start,
    EnterData,
    EnterDataForm,
  },
  methods: {
    login: function() {
      return this.loggedIn = true;
    },
    submit: function(data) {
      var that = this;
      console.log("THIS IS THE Data: ", data);
      axios.post('http://127.0.0.1:3000/register', {
        age: data.age,
        gender: data.gender,
        howGotSick: data.howGotSick,
        fever: data.fever,
        cough: data.cough,
        soreThroat: data.soreThroat,
        tired: data.tired,
        hardToBreath: data.hardToBreath,
        household: data.household,
        howManyMeetPerDay: data.howManyMeetPerDay,
        howManyMeetPerWeek: data.howManyMeetPerWeek,
        position: data.position,
        previousConditions: data.previousConditions,
      })
      .then(function (response) {
        console.log(response);
        that.id = response.data.id;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
     finish: function(data) {
      console.log("THIS IS THE Data: ", data);
      axios.post('http://127.0.0.1:3000/update', {
        id: this.id,
        fever: data.fever,
        cough: data.cough,
        soreThroat: data.soreThroat,
        tired: data.tired,
        hardToBreath: data.hardToBreath,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
