use nustore;

db.stores.drop();

db.stores.insert([
  {
    title: "Graze On Grassmarket",
    address: "67 Grassmarket, Edinburgh EH1 2HJ, UK",
    lat: 55.947459,
    long: -3.194982
  },

  {
    title: "Hula Juice Bar & Gallery",
    address: "103-105 W Bow, Edinburgh EH1 2JP, UK",
    lat: 55.948122,
    long: -3.194689
  },

  {
    title: "Hendersons Salad Table Restaurant",
    address: "94 Hanover St, Edinburgh EH2 1DR, UK",
    lat: 55.954286,
    long: -3.19796
  }
]);
