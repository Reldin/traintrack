<template>
  <div class="autocomplete">
    <input
      type="text"
      name="search"
      placeholder="Search"
      v-model="search"
      @input="onChange"
    />
    <ul class="autocomplete-results">
      <li class="autocomplete-result" v-for="(result, i) in results" :key="i">
        {{ result }}
      </li>
    </ul>
  </div>
  <button @click="filteredResults()">Search</button>
</template>

<script>
export default {
  name: "SearchAutocomplete",
  emits: ["emitted-data"],
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: "",
      results: [],
      isOpen: false,
    };
  },

  methods: {
    filteredResults() {
      this.$emit("emitted-data", this.search);
      this.search = "";
    },
  },
};
</script>

<style scoped>
button {
  background-color: #004e2b;
  color: white;
  padding: 10px 10px 10px 10px;
  margin: 1rem 0 0.2rem 0;
  width: 5rem;
  align-self: center;
}

input {
  padding: 0 1px 0 1px;
  border: 1px solid black;
  font: inherit;
  font-size: 1.5rem;
  color: black;
}

input[type="text"]::-moz-placeholder {
  color: black;
  font-size: 1.5rem;
}

@media only screen and (max-width: 800px) and (min-width: 600px) {
  input {
    font-size: 1.1rem;
  }
  input[type="text"]::-moz-placeholder {
    font-size: 1.1rem;
  }
  button {
    width: 4rem;
  }
}

@media only screen and (max-width: 600px) {
  input {
    font-size: 0.9rem;
  }
  input[type="text"]::-moz-placeholder {
    font-size: 0.9rem;
  }
}
</style>