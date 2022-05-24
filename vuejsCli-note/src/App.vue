<template>
  <div>
    <!-- <h1>{{ title }}</h1>
    <ninjas></ninjas> -->

    <app-header></app-header>
    <ninjas v-bind:ninjas="ninjas" ></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import Ninja from "./Ninja.vue";
// export default {
//   components: {
//     ninjas: Ninja
//   },
//   data() {
//     return {
//       title: "Ninja App"
//     };
//   }
// };

import Header from "./components/Header.vue";
import Ninjas from "./components/Ninjas.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    'app-header': Header,
    'ninjas' : Ninjas,
    'app-footer': Footer
  },
  data() {
    return {
      title: 'Vue Ninjas',
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    };
  }
};
</script>

<style>
/* h1 {
  color: purple;
} */
</style>
