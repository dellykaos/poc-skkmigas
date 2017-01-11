'use strict';

angular.module('pocApp')
  .controller('AttachmentCtrl', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('http://192.168.43.122:8080/attachment/index')
        .withOption('serverSide', true)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name'),
        DTColumnBuilder.newColumn('contentType').withTitle('Content Type'),
        DTColumnBuilder.newColumn('size').withTitle('Size'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(actionsHtml)
    ];

    function actionsHtml(data, type, full, meta) {
      var html ='<div class="">' + 
                  '<a href="' + full.path + '"  class="btn btn-warning" title="Download" download>' +
                    'Download' +
                  '</a>' +
                  '<a href="/#!/attachment/detail/' + full.id + '" class="btn btn-default" title="Detail">' +
                    'Detail' +
                  '</a> ' +
                  '<a href="/#!/attachment/edit/' + full.id + '" class="btn btn-primary" title="Edit">' +
                    'Edit' +
                  '</a> ' +
                  '<a href="/#!/attachment/delete/' + full.id + '"  class="btn btn-danger" title="Delete">' +
                    'Delete' +
                  '</a>' +
                '</div>';
      return html;
    }

  })
  .controller('AttachmentUploadCtrl', function ($scope, $http, $window) {
    var downloadUrl = "http://10.3.3.66:8080/share/proxy/alfresco/api/node/content/workspace/SpacesStore/";
    
    $scope.file_changed = function(element) {
        var file = document.getElementById('file').files[0];

        if(file.size > 1048576){ // 1 MB
          alert("Ukuran maksimal file 1 MB!");

          document.getElementById('file').value =  '';
        }
        var extension = file.name.split('.').pop();

        console.log(extension); 
        if(extension != "pdf"){
          alert("Hanya file .pdf yang bisa diupload!");

          document.getElementById('file').value =  '';          
        }
        console.log(file); 
    };

    $scope.send = function(model){
      var form = new FormData();
      var file = document.getElementById('file').files[0];
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

      $(".preloader").show();

      $http(settings)
        .then(function (d) {
          var path = downloadUrl + d.data.nodeRef.replace('workspace://SpacesStore/','');
          var data = {
            name: file.name,
            contentType: file.type,
            size: file.size,
            path: path
          }

          $http.post("http://192.168.43.122:8080/attachment/create", data)
            .then(function(resp){
              $window.location.href = "/#!/attachment";
            });
          $(".preloader").hide();
        }, function(err){
          $(".preloader").hide();
        });
    }
  })
.controller('AttachmentDetailCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/attachment/show?id="+$routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });
  })
.controller('AttachmentEditCtrl', function ($scope, $http, $routeParams, $window) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/attachment/show?id="+$routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });

    var downloadUrl = "http://10.3.3.66:8080/share/proxy/alfresco/api/node/content/workspace/SpacesStore/";
    $scope.send = function(model){
      var form = new FormData();
      var file = document.getElementById('file').files[0];
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
          var path = downloadUrl + d.data.nodeRef.replace('workspace://SpacesStore/','');
          var data = {
            id: $scope.model.id,
            name: file.name,
            contentType: file.type,
            size: file.size,
            path: path
          }

          $http.post("http://192.168.43.122:8080/attachment/update", data)
            .then(function(resp){
              $window.location.href = "/#!/attachment/detail/" + $scope.model.id;
            });
        });
    }
  })
.controller('AttachmentDeleteCtrl', function ($scope, $http, $routeParams, $window) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/attachment/show?id="+$routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });

    $scope.send = function(id){
      console.log(id);
      $http.delete("http://192.168.43.122:8080/attachment/delete?id="+id)
        .then(function(resp){
          $window.location.href = "/#!/attachment";
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