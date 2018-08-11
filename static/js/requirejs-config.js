// 为requirejs 模块名做全局配置
// 此处配置与打包配置无关（官方解释）
// 打包配置，需要重写，写在了gruntfile.js中
// 请保持两处命名一致
/*global require,requirejs*/
var yikuyiStatic={};
var yikuyiUrl = $("#projectUrl");
yikuyiStatic.projectUrl = yikuyiUrl.length ? yikuyiUrl.val() : "";
require.config({
    baseUrl:  '/static/js',
    paths: {
        'jquery': 'jquery-1.11.3.min',
        'menus': 'component/menus',
        'bar': 'component/bar',
        'path': 'component/path',
        'toolMenu': 'component/toolMenu'
    },
    urlArgs: "" 
});
// 非AMD模块配置
//requirejs.config({
//    baseUrl: '../js'
//    // ,shim: {
//    //     'underscore': {　　　　　　　　
//    //         exports: '_'　　　　　　
//    //     },
//    //     'backbone': {　　　　　　　　
//    //         deps: ['underscore', 'jquery'],
//    //         exports: 'Backbone'　　　　　　
//    //     }
//    // }
//});
