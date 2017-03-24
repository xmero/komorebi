angular.module("SharingTreeApp", ['ngRoute', 'angular-jwt', 'ngFileUpload'])

.component('togleEdit', {
    bindings: {
        product: '='
    },
    controller: TogleEditCtrl,
    templateUrl: '/templates/togleedit.html'
})

function TogleEditCtrl($scope, $location, ProductsFactory, Upload) {
    $scope.editProduct = (e, product, file) => {
        e.preventDefault()
        const url = '/upload' //node.js route
        Upload.upload({ url, file })
            .success(({ imageLink }) => $scope.imageLink = imageLink)
            .then(() => {
                const { name, location, description, _id, free, postalCode } = product
                const image = $scope.imageLink
                ProductsFactory.editProduct(_id, name, location, description, image, free, postalCode)
                    .then(function(product) {
                        $scope.product = product
                        window.location.reload()
                    })
            })
    }

    $scope.editMode = false;
    $scope.togEditMode = function() {
        if ($scope.editMode === false)
            $scope.editMode = true;
        else
            $scope.editMode = false;
    }

    $scope.deleteProduct = (e, pid) => {
        e.preventDefault()
        ProductsFactory.deleteProduct(pid)
            .then(() => window.location.reload())
    }
}
