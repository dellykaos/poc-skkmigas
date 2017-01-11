'use strict';

angular.module('pocApp')
  .controller('AttachmentCtrl', function ($scope, $http) {

  })
  .controller('AttachmentUploadCtrl', function ($scope, $http) {
    $scope.send = function(model){
      var form = new FormData();
      form.append("filedata", document.getElementById('file').files[0]);
      form.append("destination", "workspace://SpacesStore/7ca25e4f-c78e-490d-b3b7-db3fb7519e20");
      form.append("containerid", "documentLibrary");
      form.append("overwrite", "true");

      var settings = {
        "url": "http://10.3.3.66:8080/alfresco/service/api/upload?alf_ticket=TICKET_decec884d65414733c9ddca657df2085791567d6",
        "method": "POST",
        "data": form,
        "headers": {
            'Content-Type': undefined
        }
      }

      $http(settings)
        .then(function (d) {
          console.log(d.data);
        });
    }
  });
// 'use strict';

// angular.module('pocApp')
//   .controller('AttachmentCtrl', function ($scope, $http) {

//   })
//   .controller('AttachmentUploadCtrl', function ($scope, $http, Upload) {
//     $scope.uploadFiles = function(file, errFiles) {
//         $scope.f = file;
//         $scope.errFile = errFiles && errFiles[0];
//         if (file) {
//             file.upload = Upload.upload({
//                 url: 'http://10.3.3.66:8080/alfresco/service/api/upload?alf_ticket=TICKET_decec884d65414733c9ddca657df2085791567d6',
//                 data: {
//                   filedata: file,
//                   destination: "workspace://SpacesStore/7ca25e4f-c78e-490d-b3b7-db3fb7519e20",
//                   containerid: "documentLibrary",
//                   overwrite: "true"
//                 }
//             });

//             file.upload.then(function (response) {
//                 $timeout(function () {
//                     file.result = response.data;
//                 });
//             }, function (response) {
//                 if (response.status > 0)
//                     $scope.errorMsg = response.status + ': ' + response.data;
//             }, function (evt) {
//                 file.progress = Math.min(100, parseInt(100.0 * 
//                                          evt.loaded / evt.total));
//             });
//         }   
//     }
//   });