<template>
  <li class="card-item-li">
    <div class="card_item-div">
      <ul class="item_train-list">
        <li>Number: {{ trainNumber }}</li>
        <li>Type: {{ timetableType }}</li>
        <li>Category: {{ trainCategory }}</li>
        <li>Time: {{ time }}</li>
        <li>Date: {{ date }}</li>
      </ul>
    </div>
  </li>
</template>


<script>
export default {
  name: "CardItem",
  props: {
    trainNumber: Number,
    timetableType: String,
    trainCategory: String,
    time: String,
    date: String,
  },
};
</script>


<style scoped>
h2 {
  color: white;
  margin: 1rem 0 0 0;
}
.item_train-list {
  color: white;
  list-style: none;
  margin: 1rem 3rem 1rem 3rem;
}

.card-item-li {
  display: flex;
  position: relative;
  border: 1px solid #424242;
  border-radius: 12px;
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
  background-color: #004e2b;
  min-width: 20%;
  font-size: 1.5rem;
}

@media only screen and (max-width: 800px) {
  .card-item-li {
    margin: 1rem 0.5rem 1rem 0.5rem;
    font-size: 1rem;
  }
}

.card_item-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>