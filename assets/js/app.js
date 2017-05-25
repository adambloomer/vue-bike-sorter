new Vue({
  el: '#app',
  data () {
    return {
      featureFilters: [],
      sortByRating: 'asc',
      // the bikes data would most likely come from a JSON object from a REST api
      // however I'm declaring here for the purposes of this test project
      bikes: [
        {
          name: 'Santa Cruz Bronson',
          imageLink: 'santa-cruz-bronson.jpg',
          description: 'Quite possibly the best 150mm travel trail bike ever!',
          features: ['29in wheels', 'Aluminium frame', 'All mountain'],
          rating: 5
        },
        {
          name: 'Giant Trance',
          imageLink: 'giant-trance.jpg',
          description: 'Stay in control, even when the trail gets rough. The all-new Trance puts you on a lightweight yet stiff Carbon frame with an updated Maestro Suspension system.',
          features: ['29in wheels', 'Carbon frame', 'All mountain'],
          rating: 4
        },
        {
          name: 'Specialized Camber',
          imageLink: 'specialized-camber.jpg',
          description: 'The Camber 650b is just begging to become someone\'s first trail tool, especially if they want the rapid and playful handling of 650b wheels. The handling is matched by its natural climbing efficiency, while the hardwearing and reliable components package refuses to let you down.',
          features: ['650b wheels', 'Aluminium frame', 'All mountain'],
          rating: 5
        },
        {
          name: 'Cotic Soul',
          imageLink: 'cotic-soul.jpg',
          description: 'Tough, light, zippy, fun, interactive, durable, comfortable. It\'s happy ripping up the singletrack at your local woods or trail centre, crossing maps on your bivvy adventures, smashing rocks in the Peak or Lake Districts, or tearing down mountains on your summer holidays. It\'s the ultimate expression of the 26" wheel hardtail.',
          features: ['26in wheels', 'Steel frame', 'Hardtail'],
          rating: 3
        },
        {
          name: 'Trek Remedy',
          imageLink: 'trek-remedy.jpg',
          description: 'Remedy is the mountain biker\'s mountain bike. Take on the toughest terrain and conquer any trail with the full suspension ride that scores tens for capability. Want to push harder? Want more travel? Need a more capable build? Remedy is your full suspension ride to the next level.',
          features: ['29in wheels', 'Aluminium frame', 'All mountain'],
          rating: 4
        },
        {
          name: 'Specialized Demo',
          imageLink: 'specialized-demo.jpg',
          description: 'Combing the World Cup proven Demo 8 design with an affordable M5 aluminium frame the Demo 8 Alloy is Downhill MTB that is designed to win races without breaking the bank.',
          features: ['26in wheels', 'Aluminium frame', 'Downhill'],
          rating: 1
        }
      ]
    }
  },
  computed: {
    filteredBikes () {
      let bikeResults = [];
      // if no filters, return all data
      if (!this.featureFilters.length) {
        bikeResults = this.bikes;
      } else {
        // loop through bikes object and return any bikes that match the selected filters
        this.bikes.filter(bike => {
          let addedToResults = false;
          for (var i in this.featureFilters) {
            if (bike.features.indexOf(this.featureFilters[i]) > -1 && addedToResults === false) {
                bikeResults.push(bike);
                addedToResults = true;
            }
          }
        })
      }
      // handle sorting if selected
      if (this.sortByRating === 'asc') {
        bikeResults.sort(function (a, b) {
          return a.rating - b.rating;
        });
      }
      // return the sorted/filtered data to the function
      return bikeResults;
    }
  }
})
