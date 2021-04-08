// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

var app = new Vue({
  el: "#app",
  data: {
    albums: [],
    genres: []
  },
  //1. Stampiamo una card per album
  mounted: function () {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        this.albums = response.data.response;
      });
  },
  methods: {
    funzioneAlert: function() {
      alert("ciao");
    }
  }
});
