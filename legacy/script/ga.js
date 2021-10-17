/*
Google Analytics Code Snipet (Minimized)
このスクリプトは、Googleアナリティクスでのアクセス解析用のコードです。
Copyright (c) 2019 mtripg6666tdr All Rights Reserved.
このファイル内のコードを転載することを禁止します。
*/
if(location.host.indexOf("myon.ga")<0||location.search.indexOf("option_no_analytics")>=0){$(document).ready(function(){$("a").each(function(){if(this.href.indexOf("#")>=0){}else{if(this.href.indexOf("?option_no_analytics")<0){this.href=this.href+"?option_no_analytics"}}})})}else{$("body").append($("<script><\/script>").attr("async",true).attr("src","https://www.googletagmanager.com/gtag/js?id=UA-150686921-2"));window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","UA-150686921-2")};
