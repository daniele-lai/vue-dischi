// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

var app = new Vue({
  el: "#app",
  data: {
    albums: []
  },
  //1. Stampiamo una card per album
  mounted: function () {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        this.albums = response.data.response;
      });
  }
});
