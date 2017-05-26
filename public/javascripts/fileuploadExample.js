                            // <!-- 201705241224L   EL MIERCOLES   GIRO -->

var app = angular.module(
                        'fileUpload',
                            ['ngFileUpload']
                        );


app.controller('formCtrl',
                    ['$http', 'Upload', '$scope', function($http, Upload, $scope)
                            {
                              $http.get('/uploads').then(function(response)
                              {
                                  console.log('IN FILE PUBLIC/JAVASCRIPTS/FILEUPLOADEXAMPLE.JS')
                                  console.log('rIGHT IN FRONT OF FIRST RESPONSE.DATA')
                                  console.log(response.data);
                                  $scope.uploads = response.data;
                              });
                              $scope.submit = function()
                                                      {
                                                        Upload.upload(
                                                                        {
                                                                          url: '/uploads',
                                                                          method: 'post',
                                                                          data: $scope.upload
                                                                        }
                                                                     ).then(function (response)
                                                                                            {
                                                                                                                        console.log('RIGHT IN FRONT OF SECOND RESPONSE.DATA')
                                                                                                                        console.log(response.data);
                                                                                              $scope.uploads.push(response.data);
                                                                                              $scope.upload = {};
                                                                                            })
                                                      }
                              console.log('RIGHT IN FRONT OF SECOND RESPONSE.DATA')
                            }
                    ]
                );
