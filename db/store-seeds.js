use nustore;

db.stores.drop();

db.stores.insert([
{
  title: "Graze On Grassmarket",
  address: "67 Grassmarket, Edinburgh EH1 2HJ, UK",
  coords: { 
    lat: 55.947459,
    lng: -3.194982
  }

},

{
  title: "Hula Juice Bar & Gallery",
  address: "103-105 W Bow, Edinburgh EH1 2JP, UK",
  coords: {
    lat: 55.948122,
    lng: -3.194689
  }

},

{
  title: "Hendersons Salad Table Restaurant",
  address: "94 Hanover St, Edinburgh EH2 1DR, UK",
  coords: {
    lat: 55.954276,
    lng: -3.197960
  }
},

{
  title: "Random stuuff",
  address: "Derpy Mc Derp street",
  coords: {
    lat: 55.947458,
    lng: -3.205983
  }
},

{
  title: "Good Food to Eat!",
  address: "BurntCock Street",
  coords: {
    lat: 55.947453,
    lng: -3.192981
  }
},
{
  title: "Dogdirt and cold sick",
  address: "94 Hanover St, Edinburgh EH2 1DR, UK",
  coords: {
    lat: 55.944276,
    lng: -3.207960
  }
},
]);
