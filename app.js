var app = angular.module("shopApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/products-list", {
            templateUrl: "components/products-list.html",
            controller: "productsListCtrl"
        })
        .when("/product", {
            templateUrl: "components/product.html"
        })
        .when("/kart", {
            templateUrl: "components/kart.html",
            controller: "kartCtrl"
        })
        .otherwise({
            redirectsTo: "/"
        });
});

app.factory("productsListService", function() {
  var productsList = [
        {
            id: "item1",
            title: "title 1",
            imgURL: "img/img1.jpg",
            imgTitle: "product 1 img",
            description: "some product 1 description"
        },
        {
            id: "item2",
            title: "title 2",
            imgURL: "img/img2.jpg",
            imgTitle: "product 2 img",
            description: "some product 2 description"
        },
        {
            id: "item3",
            title: "title 3",
            imgURL: "img/img3.jpg",
            imgTitle: "product 3 img",
            description: "some product 3 description"
        },
        {
            id: "item4",
            title: "title 4",
            imgURL: "img/img4.jpg",
            imgTitle: "product 4 img",
            description: "some product 4 description"
        },
        {
            id: "item5",
            title: "title 5",
            imgURL: "img/img5.jpg",
            imgTitle: "product 5 img",
            description: "some product 5 description"
        },
        {
            id: "item6",
            title: "title 6",
            imgURL: "img/img6.jpg",
            imgTitle: "product 6 img",
            description: "some product 6 description"
        },
        {
            id: "item7",
            title: "title 7",
            imgURL: "img/img7.jpg",
            imgTitle: "product 7 img",
            description: "some product 7 description"
        },
        {
            id: "item8",
            title: "title 8",
            imgURL: "img/img8.jpg",
            imgTitle: "product 8 img",
            description: "some product 8 description"
        }
    ];
    return {
      getProducts: function() {
        return productsList;
      }
    }
});

app.factory("kartService", function() {
    var kart = [];
    return {
        addKart: function(item) {
            if (kart.indexOf(item) == -1) {
                kart.push(item);
            } else {
                console.log("The item was added earlie!");
            }
        },
        getKartList: function() {
            return kart;
        }
    }
});

app.controller("mainCtrl", function ($scope, kartService) {
    $scope.title = "Shop items";
});

app.controller("productsListCtrl", function ($scope, productsListService, kartService) {
    $scope.products = productsListService.getProducts();
    $scope.detailsClick = function(item) {
      console.log("Click on ", item.id);
    };
    $scope.addKart = function(item) {
        kartService.addKart(item);
    };
});

app.controller("kartCtrl", function ($scope, kartService) {
    $scope.kart = kartService.getKartList();
});
