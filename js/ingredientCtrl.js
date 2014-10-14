'use strict';

var mainApp = angular.module('mainApp', ['ngAnimate']);

mainApp.controller('mainCtrl', function($scope) {
  $scope.filterBtns = [
    {name: '全部'},
    
  ];
  $scope.setQuery = function(q){
    if(q==='全部') {
        $scope.query = '';
    } else {
      $scope.query = q;
    }
  };
  $scope.dataObj = [
    {name: '苯甲酸及其鹽類', intro: '苯甲酸進入人體後，在9-15小時內可從尿中排出，剩餘部分與葡萄糖化合而解毒；因上述解毒作用是在肝臟內進行的，符合標準者，對人體無害，肝功能不好的人不宜使用。', type: '防腐劑', tag: '安息香酸 '},
    {name: '山梨酸及其鹽類', intro: ' 山梨酸、山梨酸鉀人體正常的新陳代謝，易被分解為二氧化碳和水排出體外，符合標準者對人體無害。最近研究發現，山梨酸會與食物中含鐵氧化物或添加物結合成可能致癌物。', type: '防腐劑', tag: ''},

  ];
  $scope.speed = 'nga-default';
  $scope.stagger = 'nga-none';
  $scope.classes = 'nga-fade';
});

// {name: '', pict: '', brand: '', type: '', tag: ''},
// name: 產品名稱
// pict: 產品品牌圖片
// type: 產品分類
// tag: 有助於過濾、查詢的關鍵字
