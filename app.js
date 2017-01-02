(function(){

    var app = angular.module('store', [ ]);

    app.controller('StoreController', function (){
        this.products = gems;
    });

    var gems = [
      {
        name: 'Dodecahedron',
        price: 2,
        description: 'truly amazing...',
        canPurchase : true,
        soldOut : false,
        images : [
          {
            full : "http://static1.squarespace.com/static/54f2038fe4b0ffc387527ac8/55eefa4fe4b0b7c8a5705336/55ef0f97e4b099e22cdca828/1441731538038/Coming-Soon.jpg"
          }
        ]
      },
      {
        name: 'Yellow',
        price: 13.95,
        description: 'just wow - amazing...',
        canPurchase : true,
        soldOut : true,
        images : [
          {
            full : "http://static1.squarespace.com/static/54f2038fe4b0ffc387527ac8/55eefa4fe4b0b7c8a5705336/55ef0f97e4b099e22cdca828/1441731538038/Coming-Soon.jpg"
          }
        ]
      }
    ];
})();
