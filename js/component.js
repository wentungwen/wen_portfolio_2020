// https://cythilya.github.io/2017/05/11/vue-component-intro/

var intro = {
  name:'intro',
  template: `<div><p>{{names[0]}}
  <a :href="names[0]">{{intro[0]}}</a></p></div>`,
  data: function () {
    return {
      names: ["aaa", "bbb", "ccc"],
      intro: [
        " dignissimos corporis quos",
        " dignissimos corporis quos",
        " dignissimos corporis quos",
      ],
    };
  },
  methods: {
    sayHi: function () {
      alert("Hi");
    },
  },
};

var vm = new Vue({
  el: "#main",
  components: {
    intro: intro,
  },
});
