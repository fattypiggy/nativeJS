let map = new Map()
    .set(1, 'a')
    .set(2,' b')
    .set(3, 'c');

// Map 没有filter方法，所以要先转换成Array然后再filter操作
let map1 = new Map(
    [...map].filter(
        ([k,v]) => k < 3
    )
);
// Map没有map方法，想转换成Array再进行map操作
let map2 = new Map(
    [...map].map(
        ([k,v]) => [k*2, '_' + v]
    )
);

let myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);

// Map转换为数组
[...myMap];

// Map转换为对象，前提是Map的所有键都是字符串
function map2Obj(map) {
    let obj = Object.create(null);
    for (const [k, v] of map) {
        obj[k] = v;
    }
    return obj;
}

// 对象转换为Map
function obj2Map(obj) {
    let map = new Map();
    for (const k of Object.keys(obj)) {
        map.set(k, obj[k]);
    }
    return map;
}