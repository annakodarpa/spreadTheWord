<template>
  <div class="feel-sick">
    <h4>Känner du dig Corona-sjuk? Klicka här för att hjälpa till att sprida information kring hur viruset sprider sig</h4>
    <button
      @click="$emit('enterData')">Lägg in information här</button>
  </div>
</template>

<script>
export default {
  name: 'EnterData',
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feel-sick {
  border-radius: 5%;
  border: 2px solid black;
  height: 200px;
  width: 200px;
  margin: auto;
}
</style>
