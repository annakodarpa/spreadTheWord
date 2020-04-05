<template>
  <div class="container">
    <div
      class="start-questions"
      v-if="!next"
    >
      <h4>Här följer några korta frågor. Glöm inte att trycka på spara när du är klar.</h4>
      <form>
        <label for="age">Ålder: </label>
        <span v-text="data.age"></span><br>
        <input type="range" id="age" name="age" min="0" max="120" step="1" v-model="data.age"><br>

        <label for="gender">Kön:</label><br>
        <input type="radio" id="male" value="man" v-model="data.gender">
        <label for="male">Man</label><br>
        <input type="radio" id="female" value="woman" v-model="data.gender">
        <label for="female">Kvinna</label><br>
        <input type="radio" id="nonBinary" value="non-binary" v-model="data.gender">
        <label for="nonBinary">Icke-binär</label><br>
        <input type="radio" id="noAnswer" value="no-answer" v-model="data.gender">
        <label for="noAnswer">Uppger ej</label><br>

        <label for="household">Hur många bor i ditt hushåll (inklusive dig själv): </label>
        <span v-text="data.household"></span><br>
        <input type="range" id="household" name="household" min="1" max="20" step="1" v-model="data.household"><br>

        <label for="howManyMeetPerDay">Hur många personer träffar du om dagen (personer du träffar tillräckligt mycket för att exempelvis ha en konversation med, du själv räknas inte): </label>
        <span v-text="data.howManyMeetPerDay"></span><br>
        <input type="range" id="howManyMeetPerDay" name="howManyMeetPerDay" min="0" max="200" step="1" v-model="data.howManyMeetPerDay"><br>

        <label for="howManyMeetPerWeek">Hur många personer träffar du per vecka (personer du träffar tillräckligt mycket för att exempelvis ha en konversation med, du själv räknas inte): </label>
        <span v-text="data.howManyMeetPerWeek"></span><br>
        <input type="range" id="howManyMeetPerWeek" name="howManyMeetPerWeek" min="0" max="200" step="1" v-model="data.howManyMeetPerWeek"><br>

        <label for="howGotSick">Hur tror du själv att du har blivit sjuk: </label><br>
        <input type="text" id="howGotSick" v-model="data.howGotSick"><br>

        <label for="previousConditions">Har du några underliggande sjukdomar: </label><br>
        <input type="text" id="previousConditions" v-model="data.previousConditions"><br>

        <label for="position">I vilken stad/ort befinner du dig: </label><br>
        <input type="text" id="position" v-model="data.position"><br>
      </form>
      <button
        @click="submit()"
      >
        Nästa
      </button>

    </div>
    <div
      class="symptom-questions"
      v-if="next"
    >
       <h4>Här följer några korta frågor om dina symptom. Glöm inte att trycka på spara när du är klar.</h4>
        <label for="fever">Har du feber? Om du inte har mätt kan du lämna värdet på 37.0: </label>
        <span v-text="data.fever"></span><br>
        <input type="range" id="fever" name="fever" min="35.0" max="45.0" step="0.1" v-model="data.fever"><br>

        <label for="cough">Hostar du? Hur illa är hostan på en skala från 0-10 där 0 är ingen hosta och 10 är fruktansvärd hosta: </label>
        <span v-text="data.cough"></span><br>
        <input type="range" id="cough" name="cough" min="0" max="10" step="1" v-model="data.cough"><br>

        <label for="soreThroat">Har du ont i halsen? Hur illa är halsontet på en skala från 0-10 där 0 är inget ont och 10 är fruktansvärt ont: </label>
        <span v-text="data.soreThroat"></span><br>
        <input type="range" id="soreThroat" name="soreThroat" min="0" max="10" step="1" v-model="data.soreThroat"><br>

        <label for="tired">Är du trött? Hur trött är du på en skala från 0-10 där 0 är lika trött som vanligt och 10 är fruktansvärt trött: </label>
        <span v-text="data.tired"></span><br>
        <input type="range" id="tired" name="tired" min="0" max="10" step="1" v-model="data.tired"><br>

        <label for="hardToBreath">Har du svårt att andas? Hur svårt har du att andas på en skala från 0-10 där 0 är inga svårigheter och 10 är fruktansvärda svårigheter: </label>
        <span v-text="data.hardToBreath"></span><br>
        <input type="range" id="hardToBreath" name="hardToBreath" min="0" max="10" step="1" v-model="data.hardToBreath"><br>
      <button
        @click="finish()"
      >
        Spara och tillgängliggör
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterDataForm',
  data: function(){
    return {
      next: false,
      data: {
        age: 30,
        gender: "",
        household: 1,
        howManyMeetPerDay: null,
        howManyMeetPerWeek: null,
        position: null,
        previousConditions: null,
        
        howGotSick: "",
        
        fever: 37.0,
        cough: null,
        soreThroat: null,
        tired: null,
        hardToBreath: null,
        
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods:{
    submit: function() {
      this.next = true;
      console.log("Submitting...", this.data);
      this.$emit('submit', this.data);
    },
    finish: function() {
      console.log("Submitting...", this.data);
      this.$emit('finish', this.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
