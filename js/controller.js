'use strict';

var mainApp = angular.module('mainApp', ['ngAnimate']);

mainApp.controller('mainCtrl', function($scope) {
  $scope.filterBtns = [
    {name: '全部'},
    {name: '油'}, 
    {name: '果汁'}, 
    {name: '牛奶'}, 
    {name: '醬油'}, 
    {name: '調味料'}, 
    {name: '水'},
    {name: '統一'},
    {name: '味全'},
    {name: '頂新'}
  ];
  $scope.setQuery = function(q){
    if(q==='全部') {
        $scope.query = '';
    } else {
      $scope.query = q;
    }
  };
  $scope.dataObj = [
    
    {name: '台灣之星', pict: 'th001.png', brand: '頂新', type: '電信', tag: ''},
    {name: '松青超市', pict: 'th002.png', brand: '頂新', type: '零售商', tag: ''},

    {name: '每日C', pict: 'wc001.png', brand: '味全', type: '果汁', tag: ''},
    {name: '貝納頌', pict: 'wc005.png', brand: '味全', type: '咖啡', tag: ''},
    {name: '林鳳營鮮乳', pict: 'wc013.png', brand: '味全', type: '鮮乳', tag: '牛奶'},
    {name: '味全辣味肉醬', pict: 'wc108.png', brand: '味全', type: '肉醬', tag: ''},
    {name: '味全珍味肉醬', pict: 'wc109.png', brand: '味全', type: '肉醬', tag: ''},
    {name: '味全瓜仔肉', pict: 'wc110.png', brand: '味全', type: '肉醬', tag: ''},
    {name: '布列德麵包店', pict: 'bread001.png', brand: '布列德', type: '麵包', tag: ''},
    {name: '德克士炸雞', pict: 'dicos001.png', brand: 'dicos', type: '熟食', tag: ''},
    {name: '林鳳營優酪乳', pict: 'wc017.png', brand: '味全', type: '優酪乳', tag: ''},
    {name: '原榨', pict: 'wc002.png', brand: '味全', type: '果汁', tag: ''},
    {name: '自然果力', pict: 'wc003.png', brand: '味全', type: '稀釋果汁', tag: ''},
    {name: '味全果汁', pict: 'wc004.png', brand: '味全', type: '稀釋果汁', tag: ''},
    {name: '36法郎', pict: 'wc006.png', brand: '味全', type: '咖啡', tag: ''},
    {name: '大絕韻', pict: 'wc007.png', brand: '味全', type: '茶', tag: ''},
    {name: '涼爽茶', pict: 'wc008.png', brand: '統一', type: '茶', tag: ''},
    {name: '天然水', pict: 'wc009.png', brand: '味全', type: '水', tag: ''},
    {name: 'Apas礦泉水', pict: 'wc010.png', brand: '味全', type: '水', tag: ''},
    {name: 'VOSSI 加拿大冰河水', pict: 'wc011.png', brand: '味全', type: '水', tag: ''},
    {name: '味全鮮乳', pict: 'wc012.png', brand: '味全', type: '鮮乳', tag: '牛奶'},
    {name: '味全調味乳', pict: 'wc014.png', brand: '味全', type: '調味乳', tag: '牛奶'},
    {name: '味全嚴選', pict: 'wc015.png', brand: '味全', type: '調味乳', tag: '牛奶'},
    {name: '味全ABLS優酪乳', pict: 'wc016.png', brand: '味全', type: '優酪乳', tag: ''},
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

    {name: '味小寶純豬肉酥', pict: 'wc101.png', brand: '味全', type: '肉酥', tag: ''},
    {name: '味小寶海苔豬肉酥', pict: 'wc102.png', brand: '味全', type: '肉酥', tag: ''},
    {name: '味小寶極品上豚豬肉酥', pict: 'wc103.png', brand: '味全', type: '肉酥', tag: ''},
    {name: '味全海苔豬肉酥', pict: 'wc105.png', brand: '味全', type: '肉酥', tag: ''},
    {name: '味小寶臻選純肉鬆禮盒', pict: 'wc106.png', brand: '味全', type: '肉酥', tag: ''},
    {name: '味小寶極品上豚純肉酥-海苔', pict: 'wc107.png', brand: '味全', type: '肉酥', tag: ''},
    {name: '味全健康廚房葡萄籽油', pict: 'wc111.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全紫果多酚調合油', pict: 'wc112.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全健康三利多嚴選調合油', pict: 'wc113.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全歐風黃金嚴選/精華調合油', pict: 'wc114.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全珍饌寶嚴選/精華調合油', pict: 'wc115.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全高溫安定嚴選調合油', pict: 'wc116.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全皇家莊園嚴選調合油', pict: 'wc117.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全義式精華調合油', pict: 'wc118.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全健康廚房橄欖油', pict: 'wc119.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全歐式優選調合油', pict: 'wc120.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全不飽和精華調合油', pict: 'wc121.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全綠果多酚調合油', pict: 'wc122.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全御膳珍寶調合油', pict: 'wc123.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全健康三利多精華調合油', pict: 'wc124.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全御膳六寶調合油', pict: 'wc125.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全珍饌寶精華調合油', pict: 'wc126.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全高溫安定義式調合油', pict: 'wc127.png', brand: '味全', type: '食用油', tag: ''},
    {name: '味全皇家莊園精華調合油', pict: 'wc128.png', brand: '味全', type: '食用油', tag: ''},

    // 統一
    {name: '茶裏王', pict: 'pecos001.png', brand: '統一', type: '包裝茶', tag: '茶'},
    {name: '麥香', pict: 'pecos002.png', brand: '統一', type: '包裝茶', tag: '紅茶'},
    {name: '純喫茶', pict: 'pecos003.png', brand: '統一', type: '包裝茶', tag: '茶'},
    {name: '飲冰室茶集', pict: 'pecos004.png', brand: '統一', type: '包裝茶', tag: '茶'},
    {name: '美研社', pict: 'pecos005.png', brand: '統一', type: '包裝茶', tag: '茶'},
    {name: '統一麵', pict: 'pecos006.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '滿漢大餐', pict: 'pecos007.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '來一客', pict: 'pecos008.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '科學麵', pict: 'pecos009.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '阿Q桶麵', pict: 'pecos010.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '統一脆麵', pict: 'pecos011.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '好勁道', pict: 'pecos012.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '拉麵道', pict: 'pecos013.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '統一調合米粉', pict: 'pecos014.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '大補帖', pict: 'pecos015.png', brand: '統一', type: '速食麵/麵條', tag: '泡麵'},
    {name: '瑞穗鮮乳', pict: 'pecos016.png', brand: '統一', type: '鮮奶/機能牛奶', tag: '牛奶'},
    {name: '統一營養強化牛乳', pict: 'pecos017.png', brand: '統一', type: '鮮奶/機能牛奶', tag: '牛奶'},
    {name: 'Dr.Milker', pict: 'pecos018.png', brand: '統一', type: '鮮奶/機能牛奶', tag: '牛奶'},
    {name: '統一麵包', pict: 'pecos019.png', brand: '統一', type: '麵包/蛋糕', tag: '麵包'},
    {name: '晨光', pict: 'pecos020.png', brand: '統一', type: '麵包/蛋糕', tag: '土司'},
    {name: '瑞穗鮮乳土司', pict: 'pecos021.png', brand: '統一', type: '麵包/蛋糕', tag: ''},
    {name: '新感覺', pict: 'pecos022.png', brand: '統一', type: '麵包/蛋糕', tag: '麵包'},
    {name: 'Amelie\'s Bagel', pict: 'pecos023.png', brand: '統一', type: '麵包/蛋糕', tag: '培果'},
    {name: '統一蛋糕屋', pict: 'pecos024.png', brand: '統一', type: '麵包 蛋糕', tag: '蛋糕'},
    {name: 'AB', pict: 'pecos025.png', brand: '統一', type: '發酵乳 優酪乳', tag: '優酪乳'},
    {name: 'LP33', pict: 'pecos026.png', brand: '統一', type: '發酵乳 優酪乳', tag: '優酪乳'},
    {name: 'L\'uxpresso', pict: 'pecos027.png', brand: '統一', type: '咖啡', tag: ''},
    {name: '左岸咖啡館', pict: 'pecos028.png', brand: '統一', type: '咖啡', tag: ''},
    {name: '咖啡廣場', pict: 'pecos029.png', brand: '統一', type: '咖啡', tag: ''},
    {name: '曼仕德', pict: 'pecos030.png', brand: '統一', type: '咖啡', tag: ''},
    {name: '統一陽光', pict: 'pecos031.png', brand: '統一', type: '穀物奶/米豆漿', tag: ''},
    {name: '統一蜜豆奶', pict: 'pecos032.png', brand: '統一', type: '發酵乳/優酪乳', tag: ''},
    {name: '纖果食感', pict: 'pecos033.png', brand: '統一', type: '果蔬汁', tag: '果汁'},
    {name: '果漾多果汁', pict: 'pecos034.png', brand: '統一', type: '果蔬汁', tag: '果汁'},
    {name: '園之味', pict: 'pecos035.png', brand: '統一', type: '果蔬汁', tag: '果汁'},
    {name: '原味本舖', pict: 'pecos036.png', brand: '統一', type: '果蔬汁', tag: '果汁'},
    {name: '統一番茄汁', pict: 'pecos037.png', brand: '統一', type: '果蔬汁', tag: '果汁'},
    {name: '瑞穗調味乳', pict: 'pecos038.png', brand: '統一', type: '調味乳', tag: '調味乳'},
    {name: '統一水果牛乳', pict: 'pecos039.png', brand: '統一', type: '調味乳', tag: '調味乳'},
    {name: '輕鬆小品', pict: 'pecos040.png', brand: '統一', type: '調味乳', tag: '調味乳'},
    {name: '統一布丁', pict: 'pecos041.png', brand: '統一', type: '甜點', tag: '布丁'},
    {name: '滿漢', pict: 'pecos042.png', brand: '統一', type: '肉品', tag: '香腸'},
    {name: '博客', pict: 'pecos043.png', brand: '統一', type: '肉品', tag: '火腿'},
    {name: 'Petlife', pict: 'pecos044.png', brand: '統一', type: '竉物食品', tag: '飼料'},
    {name: '寶多福', pict: 'pecos045.png', brand: '統一', type: '竉物食品', tag: '飼料'},
    {name: '寶貝狗', pict: 'pecos046.png', brand: '統一', type: '竉物食品', tag: '飼料'},
    {name: '及第', pict: 'pecos047.png', brand: '統一', type: '冷凍調味食品', tag: '水餃'},
    {name: '領鮮', pict: 'pecos048.png', brand: '統一', type: '冷凍調味食品', tag: '水餃'},
    {name: '阿Q饅頭', pict: 'pecos049.png', brand: '統一', type: '冷凍調味食品', tag: '冷凍麵包 饅頭'},
    {name: '水事紀', pict: 'pecos050.png', brand: '統一', type: '包裝水', tag: '水'},
    {name: '統一PH9.0', pict: 'pecos051.png', brand: '統一', type: '包裝水', tag: '水'},
    {name: 'UNI water', pict: 'pecos052.png', brand: '統一', type: '包裝水', tag: '水'},
    {name: '統一H2O純水', pict: 'pecos053.png', brand: '統一', type: '包裝水', tag: '水'},
    {name: '綺麗健康油', pict: 'pecos054.png', brand: '統一', type: '食用油', tag: '油'},
    {name: '統一清爽家', pict: 'pecos055.png', brand: '統一', type: '食用油', tag: '油'},
    {name: '統一', pict: 'pecos056.png', brand: '統一', type: '食用油', tag: '沙拉油'},
    {name: 'Metamin', pict: 'pecos057.png', brand: '統一', type: '保健食品', tag: '健康橋3D'},
    {name: '瑞穗冰品', pict: 'pecos058.png', brand: '統一', type: '冰品', tag: ''},
    {name: '冰の戀', pict: 'pecos059.png', brand: '統一', type: '冰品', tag: ''},
    {name: '統一海', pict: 'pecos060.png', brand: '統一', type: '冰品', tag: ''},
    {name: '四季', pict: 'pecos061.png', brand: '統一', type: '醬品', tag: '調味料'},
    {name: '優鮮蛋', pict: 'pecos062.png', brand: '統一', type: '蛋品', tag: ''},
    {name: '元氣御選', pict: 'pecos063.png', brand: '統一', type: '蛋品', tag: ''},

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
