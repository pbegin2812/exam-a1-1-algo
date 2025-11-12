function max3(a, b, c) {
 let max  = a
 
 if (b > max) max = b
 
 if (c > max) max = c
 
 return max
}

max3(1, 3, 4); // 4
max3(-1, -2, -3); // -1

console.log(max3(10, 30, 4))