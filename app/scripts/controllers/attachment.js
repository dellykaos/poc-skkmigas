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
        "async": true,
        "crossDomain": true,
        "url": "http://10.3.3.66:8080/alfresco/service/api/upload?alf_ticket=TICKET_decec884d65414733c9ddca657df2085791567d6",
        "method": "POST",
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      }

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }
  });