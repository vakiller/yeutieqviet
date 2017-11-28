'use strict';
//var apptieqviet = angular.module('apptieqviet');
app.controller('mainCtrl', function ($scope) {
    var textafter;
    var match = [
        ['c(?!(h|H))|q', 'k'],
        ['C(?!(h|H))|Q', 'K'],
        ['T(r|R)|C(h|H)', 'C'],
        ['t(r|R)|c(h|H)', 'c'],
        ['q', 'k'],
        ['d', 'z'],
        ['gi', 'z'],
        ['ch', 'c'],
        ['ngh?', 'q'],
        ['đ', 'd'],
        ['gh', 'g'],
        ['nh', 'n\''],
        ['NH', 'n\''],
         ['kh', 'x'],
        ['KH', 'X'],
        ['ph', 'f'],
        ['r', 'z'],
        ['th', 'w'],
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
