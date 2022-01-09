<template>
  <section class="card">
    <div class="card_div">
      <div class="card_div-control">
        <label class="card_div-label" for="search"
          >Search for a station with a short code</label
        >
        <search-autocomplete
          @emitted-data="emittedData"
          :items="giveShortCodes"
        />
      </div>
    </div>
    <div class="card_div-cards">
      <h1 class="card_div-header">
        List of departing trains from {{ stationNameChange }}
      </h1>
      <ul class="card_ul">
        <card-item
          v-for="item in giveItemsWithVuex"
          :key="item"
          :trainNumber="item.trainNumber"
          :timetableType="item.timetableType"
          :trainCategory="item.trainCategory"
          :time="item.time"
          :date="item.date"
        >
        </card-item>
      </ul>
    </div>
  </section>
</template>


<script>
import SearchAutocomplete from "@/pages/Frontpage/SearchAutocomplete.vue";
import CardItem from "./CardItem.vue";
export default {
  name: "CardComponent",
  components: {
    CardItem,
    SearchAutocomplete,
  },
  data() {
    return {
      selectionStation: "",
      arrayOfItems: [],
    };
  },
  computed: {
    giveItemsWithVuex() {
      return this.$store.getters["trainData/getAllTrainData"];
    },
    giveShortCodes() {
      return this.$store.getters["trainData/getAllStations"];
    },
    stationNameChange() {
      return this.$store.getters["trainData/getFilteredStationName"];
    },
  },
  created() {
    this.fetchStations();
  },
  methods: {
    async search(data) {
      // this.$store.getters["trainData/getFilteredStations"];

      try {
        await this.$store.dispatch("trainData/fetchTrains", data);
        this.$store.dispatch("trainData/filterStation", data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchStations() {
      try {
        await this.$store.dispatch("trainData/getAllStations");
      } catch (error) {
        console.log(error.message);
      }
    },
    emittedData(data) {
      this.search(data);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
}

.card_div {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.card_div-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0 0.5rem 0;
}

.card_div-label {
  margin: 0 0.5rem 0.2rem 0.5rem;
  font-size: 1.5rem;
}

.card_div-header {
  text-align: center;
  border-bottom: 1px solid black;
}

.card_ul {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

@media only screen and (max-width: 800px) and (min-width: 600px) {
  .card_div-label {
    font-size: 1.1rem;
  }

  .card_div {
    align-items: center;
  }

  .card_div-control {
    align-items: center;
    flex-direction: column;
  }
}

@media only screen and (max-width: 600px) {
  .card_div-label {
    font-size: 0.9rem;
  }

  .card_div {
    align-items: center;
  }

  .card_div-control {
    align-items: center;
    flex-direction: column;
  }
}
</style>