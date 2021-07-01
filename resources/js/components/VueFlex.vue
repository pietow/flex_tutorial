<template>
  <div>
    <div class="flex fraction">
      <p
        class="item-1"
        :style="
          `--basis1: ${parameters[0]};--growth1: ${parameters[1]};--pseudo1: ${factor1};`
        "
      >
        {{ getRemainder(1) }}
        <br>
        &#8212;
        <br>
        {{ getSumGrowth() }}
        <br>
        of Remainder
      </p>
      <p
        class="item-2"
        :style="
          `--basis1: ${parameters[2]};--growth2: ${parameters[3]};--pseudo2: ${factor2};`
        "
      >
        {{ getRemainder(3) }}
        <br>
        &#8212;
        <br>
        {{ getSumGrowth() }}
        <br>
        of Remainder
      </p>
      <p
        class="item-3"
        :style="
          `--basis1: ${parameters[4]};--growth3: ${parameters[5]};--pseudo3: ${factor3};`
        "
      >
        {{ getRemainder(5) }}
        <br>
        &#8212;
        <br>
        {{ getSumGrowth() }}
        <br>
        of Remainder
      </p>
    </div>
    <div class="flex">
      <div
        class="item-1"
        :style="
          `--basis1: ${parameters[0]};--growth1: ${parameters[1]};--pseudo1: ${factor1};`
        "
      >
        <div>
          <label for="">flex-basis:</label>
          <input
            type="text"
            v-model="parameters[0]"
            @input="flexChange($event, 0)"
          />
        </div>
        <div>
          <label for="">flex-grow:</label>
          <input
            type="text"
            v-model="parameters[1]"
            @input="flexChange($event, 1)"
          />
        </div>
      </div>
      <div
        class="item-2"
        :style="
          `--basis1: ${parameters[2]};--growth2: ${parameters[3]};--pseudo2: ${factor2};`
        "
      >
        <div>
          <label for="">flex-basis:</label>
          <input
            type="text"
            v-model="parameters[2]"
            @input="flexChange($event, 2)"
          />
        </div>
        <div>
          <label for="">flex-grow:</label>
          <input
            type="text"
            v-model="parameters[3]"
            @input="flexChange($event, 3)"
          />
        </div>
      </div>
      <div
        class="item-3"
        :style="
          `--basis1: ${parameters[4]};--growth3: ${parameters[5]};--pseudo3: ${factor3};`
        "
      >
        <div>
          <label for="">flex-basis:</label>
          <input
            type="text"
            v-model="parameters[4]"
            @input="flexChange($event, 4)"
          />
        </div>
        <div>
          <label for="">flex-grow:</label>
          <input
            type="text"
            v-model="parameters[5]"
            @input="flexChange($event, 5)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parameters: ["20%", 0, "20%", 0, "20%", 0],
      factor1: "",
      factor2: "",
      factor3: "",
    };
  },
  methods: {
    flexChange(event, i) {
      let input = event.target.value;
      this.parameters[i] = input;
      // input = float(input);
      if (i === 0) {
        input = +input.replace(
          /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/`a-zA-z]/gi,
          ""
        );
        this.factor1 = input / 100;
        console.log(input);
      }
      if (i === 2) {
        input = +input.replace(
          /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/`a-zA-z]/gi,
          ""
        );
        this.factor2 = input / 100;
        console.log(input);
      }
      if (i === 4) {
        input = +input.replace(
          /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/`a-zA-z]/gi,
          ""
        );
        this.factor3 = input / 100;
        console.log(input);
      }
    },
    getRemainder(i) {
      return this.parameters[i].toString();
    },
    getSumGrowth() {
      return +this.parameters[1] + +this.parameters[3] + +this.parameters[5];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
  border: solid 2px black;
  padding: 0.005em 0;
  height: 6em;
  opacity: 0.8;
  position: relative;
  --basis1: 20%;
  --growth1: 0;
  --basis2: 20%;
  --growth2: 1;
  --basis3: 20%;
  --growth3: 1;
  --pseudo1: 0.2;
  --pseudo2: 0.2;
  --pseudo3: 0.2;
}

p {
  text-align: center;
}



[class*="item-"] {
  border: red 1px solid;
  flex: 1 20%;
  /* min-width: 20%; */
  position: relative;
}
.item-1 {
  flex: var(--growth1) var(--basis1);
}

.item-1::before {
  content: "  ";
  background: yellow;
  height: 5.7em;
  z-index: -1;
  width: calc(var(--pseudo1) * var(--container));
  display: block;
  border: solid 1px gray;
  position: absolute;
}
.item-2::before {
  content: "  ";
  background: yellow;
  height: 5.7em;
  z-index: -1;
  width: calc(var(--pseudo1) * var(--container));
  display: block;
  border: solid 1px gray;
  position: absolute;
}
.item-3::before {
  content: "  ";
  background: yellow;
  height: 5.7em;
  z-index: -1;
  width: calc(var(--pseudo1) * var(--container));
  display: block;
  border: solid 1px gray;
  position: absolute;
}
.flex::before {
  content: "Remainder";
  background: gray;
  height: 2.95em;
  z-index: -1;
  width:100%;
  /* width: calc( */
  /*   (1 - (var(--pseudo1) + var(--pseudo2) + var(--pseudo3))) * var(--container) */
  /* ); */
  /* width: calc((1 - var(--pseudo1)) * var(--container)); */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 2em;
  border: solid 1px gray;
  position: absolute;
  top: 0em;
  right: 0em;
}
.item-2 {
  flex: var(--growth2) var(--basis2);
}

.item-3 {
  flex: var(--growth3) var(--basis3);
}

.flex > div > * {
  padding: 0.5em;
}

input {
  border: 1px solid gray;
  height: 2em;
  width: 5em;
}
</style>
