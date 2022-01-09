<template>
  <div class="front-div">
    <card-component></card-component>
  </div>
</template>

<script>
import CardComponent from "../../components/CardComponent.vue";
export default {
  name: "FrontPage",
  components: {
    CardComponent,
  },
  computed: {},
  methods: {},
};
</script>


<style scoped>
.front-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-height: 80vh;
  width: 70%;
  margin: 7rem 0 4rem 0;
  border: solid black;
  border-radius: 30px;
  box-shadow: 0.5rem 0.5rem rgb(28, 42, 48);
}

@media only screen and (max-width: 600px) {
  .front-div {
    width: 100%;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  background-color: #004e2b;
  color: white;
  padding: 10px 10px 10px 10px;
}
</style>