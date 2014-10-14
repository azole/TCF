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
  }, {
    name: '氯化鈣',
    ename: 'Calcium Chloride',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '氫氧化鈣',
    ename: 'Calcium Hydroxide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硫酸鈣',
    ename: 'Calcium Sulfate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '葡萄糖酸鈣',
    ename: 'Calcium Gluconate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '檸檬酸鈣',
    ename: 'Calcium Citrate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸二氫鈣',
    ename: 'Calcium Phosphate，Monobasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸氫鈣',
    ename: 'Calcium Phosphate，Dibasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸氫鈣（無水）',
    ename: 'Calcium Phosphate，Dibasic(Anhydrous)',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸鈣',
    ename: 'Calcium Phosphate，Tribasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '酸性焦磷酸鈣',
    ename: 'Calcium Dihydrogen Pyrophosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '甘油醇磷酸鈣',
    ename: 'Calcium Glycerophosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '乳酸鈣',
    ename: 'Calcium Lactate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硬脂酸乳酸鈣',
    ename: 'Calcium Stearoyl Lactylate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸鈣',
    ename: 'Calcium Carbonate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸銨',
    ename: 'Ammonium Carbonate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸鉀',
    ename: 'Potassium Carbonate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸鈉、無水碳酸鈉',
    ename: 'Sodium Carbonate ; Sodium Carbonate , Anhydrous',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸鎂',
    ename: 'Magnesium Carbonate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硫酸銨',
    ename: 'Ammonium Sulfate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硫酸鈉',
    ename: 'Sodium Sulfate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硬脂酸鎂',
    ename: 'Magnesium Stearate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硫酸鎂',
    ename: 'Magnesium Sulfate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '氯化鎂',
    ename: 'Magnesium Chloride',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸二氫銨',
    ename: 'Ammonium Phosphate，Monobasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸氫二銨',
    ename: 'Ammonium Phosphate，Dibasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸二氫鉀',
    ename: 'Potassium Phosphate，Monobasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸氫二鉀',
    ename: 'Potassium Phosphate，Dibasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸鉀',
    ename: 'Potassium Phosphate，Tribasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸二氫鈉',
    ename: 'Sodium Phosphate , Monobasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸二氫鈉（無水）',
    ename: 'Sodium Phosphate , Monobasic（Anhydrous）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸氫二鈉',
    ename: 'Sodium Phosphate , Dibasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸氫二鈉（無水）',
    ename: 'Sodium Phosphate , Dibasic（Anhydrous）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸鈉',
    ename: 'Sodium Phosphate , Tribasic',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '磷酸鈉（無水）',
    ename: 'Sodium Phosphate , Tribasic（Anhydrous）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '偏磷酸鉀',
    ename: 'Potassium Metaphosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '偏磷酸鈉',
    ename: 'Sodium Metaphosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '多磷酸鉀',
    ename: 'Potassium Polyphosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '多磷酸鈉',
    ename: 'Sodium Polyphosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '醋酸鈉；醋酸鈉（無水）',
    ename: 'Sodium Acetate；Sodium Acetate（Anhydrous）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '甘油',
    ename: 'Glycerol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '乳酸硬脂酸鈉',
    ename: 'Sodium Stearyl 2- Lactylate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '皂土',
    ename: 'Bentonite',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '矽酸鋁',
    ename: 'Aluminum Silicate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '矽藻土',
    ename: 'Diatomaceous Earth',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '滑石粉',
    ename: 'Talc',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: 'L-半胱氨酸鹽酸鹽',
    ename: 'L-Cysteine Monohydrochloride',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '亞鐵氰化鈉',
    ename: 'Sodium Ferrocyanide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '矽酸鈣',
    ename: 'Calcium Silicate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '矽鋁酸鈉',
    ename: 'Sodium Silicoaluminate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '乙烯二胺四醋酸二鈉或乙烯二胺四醋酸二鈉鈣',
    ename: 'EDTA Na2 or EDTA CaNa2',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '二氧化矽',
    ename: 'Silicon Dioxide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '氧化鈣',
    ename: 'Calcium Oxide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '碳酸氫鉀',
    ename: 'Potassium Bicarbonate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '木松香甘油酯',
    ename: 'Glycerol Ester of Wood Rosin',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '石油蠟',
    ename: 'Petroleum Wax',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '米糠蠟',
    ename: 'Rice Bran Wax',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硬脂酸',
    ename: 'Stearic Acid',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '己二酸',
    ename: 'Adipic Acid',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硫酸鋁',
    ename: 'Aluminum Sulfate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '珍珠岩粉',
    ename: 'Perlite',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硬脂酸鈉',
    ename: 'Sodium Stearate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硬脂酸鉀',
    ename: 'Potassium Stearate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '羥丙基纖維素',
    ename: 'Hydroxypropyl Cellulose',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '羥丙基甲基纖維素',
    ename: 'Hydroxypropyl Methylcellulose（Propylene Glycol Ether of Methylcellulose）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '聚糊精',
    ename: 'Polydextrose',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '食用石膏',
    ename: 'Food Gypsum',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '酸性白土（活性白土）',
    ename: 'Acid Clay（Active Clay）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '酸性焦磷酸鈉',
    ename: 'Disodium Dihydrogen Pyrophosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '棕櫚蠟',
    ename: 'Carnauba Wax',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '焦磷酸鉀',
    ename: 'Potassium Pyrophosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '焦磷酸鈉',
    ename: 'Sodium Pyrophosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '焦磷酸鈉（無水）',
    ename: 'Sodium Pyrophosphate (Anhydrous)',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '無水氯化鈣',
    ename: 'Calcium Chloride，Anhydrous',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '三偏磷酸鈉',
    ename: 'Sodium Trimetaphosphate',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '（尿素）胺甲醯胺',
    ename: '（Urea）Carbamide ',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '偶氮二甲醯胺',
    ename: 'Azodicarbonamide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '過氧化苯甲醯',
    ename: 'Benzoyl Peroxide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '交聯羧甲基纖維素鈉',
    ename: '（Cross-Linked Sodium Carboxymethyl Cellulose）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '聚麩胺酸鈉',
    ename: '（Sodium γ-Polyglutamate）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '聚乙烯吡咯烷酮',
    ename: '（Polyvinyl-pyrrolidone）',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '硬脂酸鈣',
    ename: '(Calcium Stearate)',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '亞鐵氰化鉀',
    ename: 'Potassium Ferrocyanide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '亞鐵氰化鈣',
    ename: 'Sodium Ferrocyanide',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '蓖麻油',
    ename: 'Castor Oil',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: 'D-山梨醇',
    ename: 'D-Sorbitol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: 'D-山梨醇液70%',
    ename: 'D-Sorbitol Solution 70%',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: 'D-木糖醇',
    ename: 'D-Xylitol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: 'D-甘露醇',
    ename: 'D-Mannitol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '麥芽糖醇',
    ename: 'Maltitol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '麥芽糖醇糖漿（氫化葡萄糖漿）',
    ename: 'Maltitol Syrup (Hydrogenated Glucose Syrup)',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '異麥芽酮糖醇（巴糖醇）',
    ename: 'Isomalt(Hydrogenated Palatinose)',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '乳糖醇',
    ename: 'Lactitol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '赤藻糖醇',
    ename: 'Erythritol',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }, {
    name: '檸檬酸三乙酯',
    ename: 'Triethyl citrate    ',
    type: '品質改良用、釀造用及食品製造用劑',
    intro: '',
    tag: ''
  }];
});

// {name: '', pict: '', brand: '', type: '', tag: ''},
// name: 產品名稱
// pict: 產品品牌圖片
// type: 產品分類
// tag: 有助於過濾、查詢的關鍵字
