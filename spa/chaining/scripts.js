var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

outputDiv.innerHTML = integers.sort(function(a,b){return a - b}).filter(function(e){if (e < 20) {return true} else {return false}}).map(function(c){return (c * 1.5) - 1;}).reduce(function(p,c) {c += p; return c})
