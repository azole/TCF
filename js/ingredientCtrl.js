'use strict';

var mainApp = angular.module('mainApp', ['ngAnimate']);

mainApp.controller('mainCtrl', function($scope) {
  $scope.filterBtns = [{
      name: '全部'
    },

  ];
  $scope.setQuery = function(q) {
    if (q === '全部') {
      $scope.query = '';
    } else {
      $scope.query = q;
    }
  };
  $scope.dataObj = [{
    name: '己二烯酸',
    ename: 'Sorbic Acid',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '己二烯酸鉀',
    ename: 'Potassium Sorbate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '己二烯酸鈉',
    ename: 'Sodium Sorbate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '丙酸鈣',
    ename: 'Calcium Propionate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '丙酸鈉',
    ename: 'Sdoium Propionate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '去水醋酸',
    ename: 'Dehydroacetic Acid',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '去水醋酸鈉',
    ename: 'Sodium Dehydro-acetate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '苯甲酸',
    ename: 'Benzoic Acid',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '苯甲酸鈉',
    ename: 'Sodium Benzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '對羥苯甲酸乙酯',
    ename: 'Ethyl p-Hydroxy-benzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '對羥苯甲酸丙酯',
    ename: 'Propyl p-Hydroxy-benzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '對羥苯甲酸丁酯',
    ename: 'Butyl p-Hydroxy-benzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '對羥苯甲酸異丙酯',
    ename: 'Isopropyl p-Hydroxybenzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '對羥苯甲酸異丁酯',
    ename: 'Isobutyl p-Hydroxy-benzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '聯苯',
    ename: 'Biphenyl',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '二醋酸鈉',
    ename: 'Sodium Diacetate（Sodium Hydrogen Diacetate）',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '己二烯酸鈣',
    ename: 'Calcium Sorbate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '苯甲酸鉀',
    ename: 'Potassium Benzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '乳酸鏈球菌素',
    ename: 'Nisin',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '雙十二烷基硫酸硫胺明（雙十二烷基硫酸胺）',
    ename: 'Thiamine Dilauryl-sulfate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '丙酸',
    ename: 'Propionic Acid',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '鏈黴菌素',
    ename: 'Natamycin（Pimaricin）',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '對羥苯甲酸甲酯',
    ename: 'Methyl p-Hydroxybenzoate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '二甲基二碳酸酯（二碳酸二甲酯）',
    ename: 'Dimethyl Dicarbonate',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '氯化石灰(漂白粉)',
    ename: 'Chlorinated Lime',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '次氯酸鈉液',
    ename: 'Sodium Hypo-chlorite Solution',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '過氧化氫(雙氧水)',
    ename: 'Hydrogen Per-oxide',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '二氧化氯',
    ename: 'Chlorine Dioxide',
    type: '防腐劑',
    intro: '',
    tag: ''
  }, {
    name: '氯化石灰(漂白粉)',
    ename: 'Chlorinated Lime',
    type: '殺菌劑',
    intro: '',
    tag: ''
  }, {
    name: '次氯酸鈉液',
    ename: 'Sodium Hypo-chlorite Solution',
    type: '殺菌劑',
    intro: '',
    tag: ''
  }, {
    name: '過氧化氫(雙氧水)',
    ename: 'Hydrogen Per-oxide',
    type: '殺菌劑',
    intro: '',
    tag: ''
  }, {
    name: '二氧化氯',
    ename: 'Chlorine Dioxide',
    type: '殺菌劑',
    intro: '',
    tag: ''
  }, {
    name: '二丁基羥基甲苯',
    ename: 'Dibutyl Hydroxy Toluene（BHT）',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '丁基羥基甲氧苯',
    ename: 'Butyl Hydroxy Anisole（BHA） ',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-抗壞血酸（維生素C',
    ename: 'L-Ascorbic Acid（Vitamin C）',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-抗壞血酸鈉',
    ename: 'Sodium L-Ascorbate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-抗壞血酸硬脂酸酯',
    ename: 'L-Ascorbyl Stearate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-抗壞血酸棕櫚酸酯',
    ename: 'L-Ascorbyl Palmitate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '異抗壞血酸',
    ename: 'Erythorbic Acid',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '異抗壞血酸鈉',
    ename: 'Sodium Erythorbate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '生育醇（維生素E',
    ename: 'dl-α-Tocopherol （Vitamin E）',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '沒食子酸丙酯',
    ename: 'Propyl Gallate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '癒創樹脂',
    ename: 'Guaiac Resin',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-半胱氨酸鹽酸鹽',
    ename: 'L-Cysteine Monohydro-chloride',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '第三丁基氫',
    ename: 'Tertiary-Butyl Hydro-quinone',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-抗壞血酸鈣',
    ename: 'Calcium L-Ascorbate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '混合濃縮生育醇',
    ename: 'Tocopherols Concentrate，Mixed',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '濃縮d-α-生育醇',
    ename: 'd-α-Tocopherol Concentrate',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '乙烯二胺四醋酸二鈉/乙烯二胺四醋酸二鈉鈣',
    ename: 'EDTA Na2 or EDTA CaNa2',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸鉀',
    ename: 'Potassium Sulfite',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸鈉',
    ename: 'Sodium Sulfite',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸鈉(無水)',
    ename: 'Sodium Sulfite (Anhydrous)',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸氫鈉',
    ename: 'Sodium Bisulfit',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '低亞硫酸鈉',
    ename: 'Sodium Hydrosulfite',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '偏亞硫酸氫鉀',
    ename: 'Potassium Metabisulfite',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸氫鉀',
    ename: 'Potassium Bisulfite',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '偏亞硫酸氫鈉',
    ename: 'Sodium Metabisulfite',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: 'α–醣基異槲皮苷',
    ename: 'α– Glycosyl– isoquercitrin',
    type: '抗氧化劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸鉀',
    ename: 'Potassium Sulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸鈉',
    ename: 'Sodium Sulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸鈉（無水）',
    ename: 'Sodium Sulfite（Anhydrous）',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸氫鈉',
    ename: 'Sodium Bisulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '低亞硫酸鈉',
    ename: 'Sodium Hydrosulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '偏亞硫酸氫鉀',
    ename: 'Potassium Metabisulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硫酸氫鉀',
    ename: 'Potassium Bisulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '偏亞硫酸氫鈉',
    ename: 'Sodium Metabisulfite',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '過氧化苯甲醯',
    ename: 'Benzoyl peroxide',
    type: '漂白劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硝酸鉀',
    ename: 'Potassium Nitrite',
    type: '保色劑',
    intro: '',
    tag: ''
  }, {
    name: '亞硝酸鈉',
    ename: 'Sodium Nitrite',
    type: '保色劑',
    intro: '',
    tag: ''
  }, {
    name: '硝酸鉀',
    ename: 'Potassium Nitrite',
    type: '保色劑',
    intro: '',
    tag: ''
  }, {
    name: '硝酸鈉',
    ename: 'Sodium Nitrite',
    type: '保色劑',
    intro: '',
    tag: ''
  }, {
    name: '鉀明礬',
    ename: 'Potassium Alum',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '鈉明礬',
    ename: 'Sodium Alum',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '燒鉀明礬',
    ename: 'Burnt Potassium Alum',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '銨明礬',
    ename: 'Ammonium Alum',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '燒銨明礬',
    ename: 'Burnt Ammonium Alum',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '氯化銨',
    ename: 'Ammonium Chloride',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: 'd–酒石酸氫鉀',
    ename: 'Potsassium d–Bitartrate',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸氫鈉',
    ename: 'Sodium Bicarbonate',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸銨',
    ename: 'Ammonium Carbonate',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸氫銨',
    ename: 'Ammonium Bicarbonate',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸鉀',
    ename: 'Potassium Carbonate',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '合成膨脹劑',
    ename: 'Baking Powder',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '酸式磷酸鋁鈉',
    ename: 'Sodium Aluminum Phosphate，Acidic',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }, {
    name: '燒鈉明礬',
    ename: 'Surnt Sodium Alum',
    type: '膨脹劑',
    intro: '',
    tag: ''
  }];
});

// {name: '', pict: '', brand: '', type: '', tag: ''},
// name: 產品名稱
// pict: 產品品牌圖片
// type: 產品分類
// tag: 有助於過濾、查詢的關鍵字
