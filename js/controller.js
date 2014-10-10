'use strict';

var mainApp = angular.module('mainApp', ['ngAnimate']);

mainApp.controller('mainCtrl', function($scope) {
  $scope.filterBtns = [
    {name: '全部'}, 
    {name: '果汁'}, 
    {name: '牛奶'}, 
    {name: '醬油'}, 
    {name: '調味料'}, 
    {name: '水'}
  ];
  $scope.setQuery = function(q){
    if(q==='全部') {
        $scope.query = '';
    } else {
      $scope.query = q;
    }
  };
  $scope.dataObj = [
    {name: '每日C', pict: 'wc001.png', brand: '味全', type: '果汁', tag: ''},
    {name: '原榨', pict: 'wc002.png', brand: '味全', type: '果汁', tag: ''},
    {name: '自然果力', pict: 'wc003.png', brand: '味全', type: '稀釋果汁', tag: ''},
    {name: '味全果汁', pict: 'wc004.png', brand: '味全', type: '稀釋果汁', tag: ''},
    {name: '貝納頌', pict: 'wc005.png', brand: '味全', type: '咖啡', tag: ''},
    {name: '36法郎', pict: 'wc006.png', brand: '味全', type: '咖啡', tag: ''},
    {name: '大絕韻', pict: 'wc007.png', brand: '味全', type: '茶', tag: ''},
    {name: '涼爽茶', pict: 'wc008.png', brand: '統一', type: '茶', tag: ''},
    {name: '天然水', pict: 'wc009.png', brand: '味全', type: '水', tag: ''},
    {name: 'Apas礦泉水', pict: 'wc010.png', brand: '味全', type: '水', tag: ''},
    {name: 'VOSSI 加拿大冰河水', pict: 'wc011.png', brand: '味全', type: '水', tag: ''},
    {name: '味全鮮乳', pict: 'wc012.png', brand: '味全', type: '鮮乳', tag: '牛奶'},
    {name: '林鳳營鮮乳', pict: 'wc013.png', brand: '味全', type: '鮮乳', tag: '牛奶'},
    {name: '味全調味乳', pict: 'wc014.png', brand: '味全', type: '調味乳', tag: '牛奶'},
    {name: '味全嚴選', pict: 'wc015.png', brand: '味全', type: '調味乳', tag: '牛奶'},
    {name: '味全ABLS優酪乳', pict: 'wc016.png', brand: '味全', type: '優酪乳', tag: ''},
    {name: '林鳳營優酪乳', pict: 'wc017.png', brand: '味全', type: '優酪乳', tag: ''},
    {name: 'LCA506', pict: 'wc018.png', brand: '味全', type: '稀釋發酵乳', tag: ''},
    {name: '大醇豆', pict: 'wc019.png', brand: '味全', type: '豆漿', tag: ''},
    {name: '味全高鮮', pict: 'wc020.png', brand: '味全', type: '調味料', tag: ''},
    {name: '健康廚房調味料', pict: 'wc021.png', brand: '味全', type: '調味料', tag: ''},
    {name: '味全醬油', pict: 'wc022.png', brand: '味全', type: '醬品', tag: '調味料'},
    {name: '淬釀', pict: 'wc023.png', brand: '味全', type: '醬品', tag: '醬油 調味料'},
    {name: '味全調味醬', pict: 'wc024.png', brand: '味全', type: '醬品', tag: '調味料'},
    {name: '味全料理醬', pict: 'wc025.png', brand: '味全', type: '醬品', tag: '調味料'},
    {name: '健康廚房沾拌淋醬', pict: 'wc026.png', brand: '味全', type: '醬品', tag: '調味料'},
    {name: '味全雞蛋布丁', pict: 'wc027.png', brand: '味全', type: '點心', tag: ''},
    {name: '原味優格', pict: 'wc028.png', brand: '味全', type: '點心', tag: ''},
  ];
  $scope.speed = 'nga-default';
  $scope.stagger = 'nga-stagger';
  $scope.classes = 'nga-slide-left';
});

// {name: '', pict: '', brand: '', type: '', tag: ''},
// name: 產品名稱
// pict: 產品品牌圖片
// type: 產品分類
// tag: 有助於過濾、查詢的關鍵字
