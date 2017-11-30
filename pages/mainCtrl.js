'use strict';
//var apptieqviet = angular.module('apptieqviet');
app.controller('mainCtrl', function ($scope) {
    var textafter;
    var match = [
        ['k(h|H)', 'x'],
        ['K(h|H)', 'X'],
        ['c(?!(h|H))|q', 'k'],
        ['C(?!(h|H))|Q', 'K'],
        ['t(r|R)|c(h|H)', 'c'],
        ['T(r|R)|C(h|H)', 'C'],
        ['d|g(i|I)|r', 'z'],
        ['D|G(i|I)|R', 'Z'],
        ['g(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'z$1'],
        ['G(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'Z$1'],
        ['đ', 'd'],
        ['Đ', 'D'],
        ['p(h|H)', 'f'],
        ['P(h|H)', 'F'],
        ['n(g|G)(h|H)?', 'q'],
        ['N(g|G)(h|H)?', 'Q'],
        ['(g|G)(h|H)', '$1'],
        ['t(h|H)', 'w'],
        ['T(h|H)', 'W'],
        ['(n|N)(h|H)', '$1\'']
    ];
    

    function capitalize(a) {
        return a.replace(new RegExp('\b\w', 'g'), function(i){ return i.toUpperCase() })
    };
    
  
    function convert(val, match) {
        return val.replace(new RegExp(match[0], 'g'), match[1]).replace(new RegExp(capitalize(match[0]), 'g'), capitalize(match[1])).replace(new RegExp(match[0].toUpperCase(), 'g'), match[1].toUpperCase());
    };
    

    function build(val) {
        if ('string' !== typeof val)
            val = String(val);
    
        var tmp = val;
        match.forEach(function(index) {
            tmp = convert(tmp, index);
        });
        $scope.textafter = tmp;
        return tmp;
    }
    $scope.trans = function()
    {
        var textin;
        textin = $scope.textinput;
        build(textin);
        
    }
});
