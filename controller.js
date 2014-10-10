'use strict';

var mainApp = angular.module('mainApp', []);

mainApp.controller('mainCtrl', function($scope) {
  $scope.dataObj = [
    {name: '每日C', pict: 'cf001.png', brand: '味全', type: '果汁', tag: ''},
    {name: '原榨', pict: 'cf002.png', brand: '味全', type: '果汁', tag: ''},
    {name: '自然果力', pict: 'cf003.png', brand: '味全', type: '稀釋果汁', tag: ''},
    {name: '味全果汁', pict: 'cf004.png', brand: '味全', type: '稀釋果汁', tag: ''},
    {name: '貝納頌', pict: 'cf005.png', brand: '味全', type: '咖啡', tag: ''},
    {name: '36法郎', pict: 'cf006.png', brand: '味全', type: '咖啡', tag: ''},
    {name: '大絕韻', pict: 'cf007.png', brand: '味全', type: '茶', tag: ''},
    {name: '涼爽茶', pict: 'cf008.png', brand: '統一', type: '茶', tag: ''},
    {name: '天然水', pict: 'cf009.png', brand: '味全', type: '水', tag: ''},
    {name: 'Apas礦泉水', pict: 'cf010.png', brand: '味全', type: '水', tag: ''},
    {name: 'VOSSI 加拿大冰河水', pict: 'cf011.png', brand: '味全', type: '水', tag: ''},
    {name: '味全鮮乳', pict: 'cf012.png', brand: '味全', type: '鮮乳', tag: '牛奶'},
    {name: '林鳳營鮮乳', pict: 'cf013.png', brand: '味全', type: '鮮乳', tag: '牛奶'},
    {name: '味全調味乳', pict: 'cf014.png', brand: '味全', type: '調味乳', tag: '牛奶'},
    {name: '味全嚴選', pict: 'cf015.png', brand: '味全', type: '調味乳', tag: '牛奶'},
    {name: '味全ABLS優酪乳', pict: 'cf016.png', brand: '味全', type: '優酪乳', tag: ''},
    {name: '林鳳營優酪乳', pict: 'cf017.png', brand: '味全', type: '優酪乳', tag: ''},
    {name: 'LCA506', pict: 'cf018.png', brand: '味全', type: '稀釋發酵乳', tag: ''},
    {name: '大醇豆', pict: 'cf019.png', brand: '味全', type: '豆漿', tag: ''}
  ];
});
