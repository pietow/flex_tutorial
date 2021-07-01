<template>
  <div>
    <div class="flex">
        <div class="item-1" :style="`--basis1: ${parameters[0]};--growth1: ${parameters[1]};`">
          <div >
            <label for="">flex-basis:</label>
            <input type="text" v-model="parameters[0]" @input="flexChange($event, 0)">
          </div>
          <div>
            <label for="">flex-grow:</label>
            <input type="text"  v-model="parameters[1]" @input="flexChange($event, 1)">  
          </div>
        </div>
        <div class="item-2" :style="`--basis1: ${parameters[2]};--growth2: ${parameters[3]};`">
          <div>
            <label for="">flex-basis:</label>
            <input type="text" v-model="parameters[2]" @input="flexChange($event, 2)">
          </div>
          <div>
            <label for="">flex-grow:</label>
            <input type="text" v-model="parameters[3]" @input="flexChange($event, 3)">  
          </div>
        </div>
        <div class="item-3" :style="`--basis1: ${parameters[4]};--growth3: ${parameters[5]};`">
          <div>
            <label for="">flex-basis:</label>
            <input type="text" v-model="parameters[4]" @input="flexChange($event, 4)">
          </div>
          <div>
            <label for="">flex-grow:</label>
            <input type="text" v-model="parameters[5]" @input="flexChange($event, 5)">  
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parameters: ['20%',0,'20%',1,'20%',1]
    };
  },
  methods: {
    flexChange(event, i) {
      console.log(event.target.value);
      this.parameters[i] = event.target.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
  border: solid 2px black;
  padding: .005em 0;
  height: 6em;
  opacity: .8;
}

[class*="item-"] {
  --basis1: 20%;
  --growth1: 0;
  --basis2: 20%;
  --growth2: 1;
  --basis3: 20%;
  --growth3: 1;
  border: red 1px solid;
  flex: 1 20%;
  min-width: 20%;
  position:relative;
}
.item-1 {
  flex: var(--growth1) var(--basis1);
}
.item-1::before{
  content:'  ';
  background: yellow;
  height:5.7em;
  z-index:-1;
  width: 100%;
  display: block;
  border: solid 1px gray;
  position: absolute;
}
.item-2 {
  flex: var(--growth2) var(--basis2);
}
 
.item-3 {
  flex: var(--growth3) var(--basis3);
}
 

.flex > div > *{
  padding: .5em;
}

input {
  border: 1px solid gray;
  height: 2em;
  width: 5em;
}
</style>
