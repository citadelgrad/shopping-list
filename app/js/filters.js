'use strict';

/* Filters */

angular.module('myList.filters', []).
  filter('fractions', function() {
    return function(text) {

      return String(text).replace(/((\d+)\.(\d+))/g, function(_, original, whole, fraction) {
             if (whole === '0') {
                if (fraction === '500'){
                    return "&frac12;";
                } else if (fraction === "123"){
                    return "&frac18;";
                } else if (fraction === "200"){
                    return "&frac15;";
                } else if (fraction === "250"){
                    return "&frac14;";
                } else if (fraction === "333"){
                    return "&frac13;";
                } else if (fraction === "666"){
                    return "&frac23;";
                } else if (fraction === "750"){
                    return "&frac34;";
                } else if (fraction === "000"){
                    return "";
                } else {
                    return fraction;
                }
             } else {
                if (fraction === '500'){
                    return whole + " &frac12;";
                } else if (fraction === "123"){
                    return "&frac18;";
                } else if (fraction === "200"){
                    return "&frac15;";
                } else if (fraction === "250"){
                    return "&frac14;";
                } else if (fraction === "333"){
                    return "&frac13;";
                } else if (fraction === "666"){
                    return "&frac23;";
                } else if (fraction === "750"){
                    return "&frac34;";
                } else if (fraction === "000"){
                    return whole;
                } else {
                    return original;
                }
                
             }
             
         });
      //.replace(/\.500/, ' &frac12;');
    }
  });
