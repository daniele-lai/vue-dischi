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
        // Cicliamo l'array albums per estrapolare i generi per le options
        this.albums.forEach((item) => {
          if (this.genres.includes(item.genre) == false) {
            this.genres.push(item.genre);
          }
        });
        console.log(this.genres);
      });
  }
});
