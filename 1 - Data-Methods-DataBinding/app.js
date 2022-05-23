new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'ninja',
    website: 'https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/',
    websiteTag: '<a href="https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/">Ninja</a>'
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + " " + this.name
    }
  }
});