// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21673__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21673__auto__){
return or__21673__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21673__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26819_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26819_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26824 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26825 = null;
var count__26826 = (0);
var i__26827 = (0);
while(true){
if((i__26827 < count__26826)){
var n = cljs.core._nth.call(null,chunk__26825,i__26827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26828 = seq__26824;
var G__26829 = chunk__26825;
var G__26830 = count__26826;
var G__26831 = (i__26827 + (1));
seq__26824 = G__26828;
chunk__26825 = G__26829;
count__26826 = G__26830;
i__26827 = G__26831;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26824);
if(temp__4657__auto__){
var seq__26824__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26824__$1)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,seq__26824__$1);
var G__26832 = cljs.core.chunk_rest.call(null,seq__26824__$1);
var G__26833 = c__22484__auto__;
var G__26834 = cljs.core.count.call(null,c__22484__auto__);
var G__26835 = (0);
seq__26824 = G__26832;
chunk__26825 = G__26833;
count__26826 = G__26834;
i__26827 = G__26835;
continue;
} else {
var n = cljs.core.first.call(null,seq__26824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26836 = cljs.core.next.call(null,seq__26824__$1);
var G__26837 = null;
var G__26838 = (0);
var G__26839 = (0);
seq__26824 = G__26836;
chunk__26825 = G__26837;
count__26826 = G__26838;
i__26827 = G__26839;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26878_26885 = cljs.core.seq.call(null,deps);
var chunk__26879_26886 = null;
var count__26880_26887 = (0);
var i__26881_26888 = (0);
while(true){
if((i__26881_26888 < count__26880_26887)){
var dep_26889 = cljs.core._nth.call(null,chunk__26879_26886,i__26881_26888);
topo_sort_helper_STAR_.call(null,dep_26889,(depth + (1)),state);

var G__26890 = seq__26878_26885;
var G__26891 = chunk__26879_26886;
var G__26892 = count__26880_26887;
var G__26893 = (i__26881_26888 + (1));
seq__26878_26885 = G__26890;
chunk__26879_26886 = G__26891;
count__26880_26887 = G__26892;
i__26881_26888 = G__26893;
continue;
} else {
var temp__4657__auto___26894 = cljs.core.seq.call(null,seq__26878_26885);
if(temp__4657__auto___26894){
var seq__26878_26895__$1 = temp__4657__auto___26894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26878_26895__$1)){
var c__22484__auto___26896 = cljs.core.chunk_first.call(null,seq__26878_26895__$1);
var G__26897 = cljs.core.chunk_rest.call(null,seq__26878_26895__$1);
var G__26898 = c__22484__auto___26896;
var G__26899 = cljs.core.count.call(null,c__22484__auto___26896);
var G__26900 = (0);
seq__26878_26885 = G__26897;
chunk__26879_26886 = G__26898;
count__26880_26887 = G__26899;
i__26881_26888 = G__26900;
continue;
} else {
var dep_26901 = cljs.core.first.call(null,seq__26878_26895__$1);
topo_sort_helper_STAR_.call(null,dep_26901,(depth + (1)),state);

var G__26902 = cljs.core.next.call(null,seq__26878_26895__$1);
var G__26903 = null;
var G__26904 = (0);
var G__26905 = (0);
seq__26878_26885 = G__26902;
chunk__26879_26886 = G__26903;
count__26880_26887 = G__26904;
i__26881_26888 = G__26905;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26882){
var vec__26884 = p__26882;
var x = cljs.core.nth.call(null,vec__26884,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26884,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26884,x,xs,get_deps__$1){
return (function (p1__26840_SHARP_){
return clojure.set.difference.call(null,p1__26840_SHARP_,x);
});})(vec__26884,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26918 = cljs.core.seq.call(null,provides);
var chunk__26919 = null;
var count__26920 = (0);
var i__26921 = (0);
while(true){
if((i__26921 < count__26920)){
var prov = cljs.core._nth.call(null,chunk__26919,i__26921);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26922_26930 = cljs.core.seq.call(null,requires);
var chunk__26923_26931 = null;
var count__26924_26932 = (0);
var i__26925_26933 = (0);
while(true){
if((i__26925_26933 < count__26924_26932)){
var req_26934 = cljs.core._nth.call(null,chunk__26923_26931,i__26925_26933);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26934,prov);

var G__26935 = seq__26922_26930;
var G__26936 = chunk__26923_26931;
var G__26937 = count__26924_26932;
var G__26938 = (i__26925_26933 + (1));
seq__26922_26930 = G__26935;
chunk__26923_26931 = G__26936;
count__26924_26932 = G__26937;
i__26925_26933 = G__26938;
continue;
} else {
var temp__4657__auto___26939 = cljs.core.seq.call(null,seq__26922_26930);
if(temp__4657__auto___26939){
var seq__26922_26940__$1 = temp__4657__auto___26939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26922_26940__$1)){
var c__22484__auto___26941 = cljs.core.chunk_first.call(null,seq__26922_26940__$1);
var G__26942 = cljs.core.chunk_rest.call(null,seq__26922_26940__$1);
var G__26943 = c__22484__auto___26941;
var G__26944 = cljs.core.count.call(null,c__22484__auto___26941);
var G__26945 = (0);
seq__26922_26930 = G__26942;
chunk__26923_26931 = G__26943;
count__26924_26932 = G__26944;
i__26925_26933 = G__26945;
continue;
} else {
var req_26946 = cljs.core.first.call(null,seq__26922_26940__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26946,prov);

var G__26947 = cljs.core.next.call(null,seq__26922_26940__$1);
var G__26948 = null;
var G__26949 = (0);
var G__26950 = (0);
seq__26922_26930 = G__26947;
chunk__26923_26931 = G__26948;
count__26924_26932 = G__26949;
i__26925_26933 = G__26950;
continue;
}
} else {
}
}
break;
}

var G__26951 = seq__26918;
var G__26952 = chunk__26919;
var G__26953 = count__26920;
var G__26954 = (i__26921 + (1));
seq__26918 = G__26951;
chunk__26919 = G__26952;
count__26920 = G__26953;
i__26921 = G__26954;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26918);
if(temp__4657__auto__){
var seq__26918__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26918__$1)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,seq__26918__$1);
var G__26955 = cljs.core.chunk_rest.call(null,seq__26918__$1);
var G__26956 = c__22484__auto__;
var G__26957 = cljs.core.count.call(null,c__22484__auto__);
var G__26958 = (0);
seq__26918 = G__26955;
chunk__26919 = G__26956;
count__26920 = G__26957;
i__26921 = G__26958;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26918__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26926_26959 = cljs.core.seq.call(null,requires);
var chunk__26927_26960 = null;
var count__26928_26961 = (0);
var i__26929_26962 = (0);
while(true){
if((i__26929_26962 < count__26928_26961)){
var req_26963 = cljs.core._nth.call(null,chunk__26927_26960,i__26929_26962);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26963,prov);

var G__26964 = seq__26926_26959;
var G__26965 = chunk__26927_26960;
var G__26966 = count__26928_26961;
var G__26967 = (i__26929_26962 + (1));
seq__26926_26959 = G__26964;
chunk__26927_26960 = G__26965;
count__26928_26961 = G__26966;
i__26929_26962 = G__26967;
continue;
} else {
var temp__4657__auto___26968__$1 = cljs.core.seq.call(null,seq__26926_26959);
if(temp__4657__auto___26968__$1){
var seq__26926_26969__$1 = temp__4657__auto___26968__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26926_26969__$1)){
var c__22484__auto___26970 = cljs.core.chunk_first.call(null,seq__26926_26969__$1);
var G__26971 = cljs.core.chunk_rest.call(null,seq__26926_26969__$1);
var G__26972 = c__22484__auto___26970;
var G__26973 = cljs.core.count.call(null,c__22484__auto___26970);
var G__26974 = (0);
seq__26926_26959 = G__26971;
chunk__26927_26960 = G__26972;
count__26928_26961 = G__26973;
i__26929_26962 = G__26974;
continue;
} else {
var req_26975 = cljs.core.first.call(null,seq__26926_26969__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26975,prov);

var G__26976 = cljs.core.next.call(null,seq__26926_26969__$1);
var G__26977 = null;
var G__26978 = (0);
var G__26979 = (0);
seq__26926_26959 = G__26976;
chunk__26927_26960 = G__26977;
count__26928_26961 = G__26978;
i__26929_26962 = G__26979;
continue;
}
} else {
}
}
break;
}

var G__26980 = cljs.core.next.call(null,seq__26918__$1);
var G__26981 = null;
var G__26982 = (0);
var G__26983 = (0);
seq__26918 = G__26980;
chunk__26919 = G__26981;
count__26920 = G__26982;
i__26921 = G__26983;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26988_26992 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26989_26993 = null;
var count__26990_26994 = (0);
var i__26991_26995 = (0);
while(true){
if((i__26991_26995 < count__26990_26994)){
var ns_26996 = cljs.core._nth.call(null,chunk__26989_26993,i__26991_26995);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26996);

var G__26997 = seq__26988_26992;
var G__26998 = chunk__26989_26993;
var G__26999 = count__26990_26994;
var G__27000 = (i__26991_26995 + (1));
seq__26988_26992 = G__26997;
chunk__26989_26993 = G__26998;
count__26990_26994 = G__26999;
i__26991_26995 = G__27000;
continue;
} else {
var temp__4657__auto___27001 = cljs.core.seq.call(null,seq__26988_26992);
if(temp__4657__auto___27001){
var seq__26988_27002__$1 = temp__4657__auto___27001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26988_27002__$1)){
var c__22484__auto___27003 = cljs.core.chunk_first.call(null,seq__26988_27002__$1);
var G__27004 = cljs.core.chunk_rest.call(null,seq__26988_27002__$1);
var G__27005 = c__22484__auto___27003;
var G__27006 = cljs.core.count.call(null,c__22484__auto___27003);
var G__27007 = (0);
seq__26988_26992 = G__27004;
chunk__26989_26993 = G__27005;
count__26990_26994 = G__27006;
i__26991_26995 = G__27007;
continue;
} else {
var ns_27008 = cljs.core.first.call(null,seq__26988_27002__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27008);

var G__27009 = cljs.core.next.call(null,seq__26988_27002__$1);
var G__27010 = null;
var G__27011 = (0);
var G__27012 = (0);
seq__26988_26992 = G__27009;
chunk__26989_26993 = G__27010;
count__26990_26994 = G__27011;
i__26991_26995 = G__27012;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21673__auto__ = goog.require__;
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27013__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27014__i = 0, G__27014__a = new Array(arguments.length -  0);
while (G__27014__i < G__27014__a.length) {G__27014__a[G__27014__i] = arguments[G__27014__i + 0]; ++G__27014__i;}
  args = new cljs.core.IndexedSeq(G__27014__a,0);
} 
return G__27013__delegate.call(this,args);};
G__27013.cljs$lang$maxFixedArity = 0;
G__27013.cljs$lang$applyTo = (function (arglist__27015){
var args = cljs.core.seq(arglist__27015);
return G__27013__delegate(args);
});
G__27013.cljs$core$IFn$_invoke$arity$variadic = G__27013__delegate;
return G__27013;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27017 = cljs.core._EQ_;
var expr__27018 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27017.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27018))){
var path_parts = ((function (pred__27017,expr__27018){
return (function (p1__27016_SHARP_){
return clojure.string.split.call(null,p1__27016_SHARP_,/[\/\\]/);
});})(pred__27017,expr__27018))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27017,expr__27018){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27020){if((e27020 instanceof Error)){
var e = e27020;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27020;

}
}})());
});
;})(path_parts,sep,root,pred__27017,expr__27018))
} else {
if(cljs.core.truth_(pred__27017.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27018))){
return ((function (pred__27017,expr__27018){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27017,expr__27018){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27017,expr__27018))
);

return deferred.addErrback(((function (deferred,pred__27017,expr__27018){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27017,expr__27018))
);
});
;})(pred__27017,expr__27018))
} else {
return ((function (pred__27017,expr__27018){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27017,expr__27018))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27021,callback){
var map__27024 = p__27021;
var map__27024__$1 = ((((!((map__27024 == null)))?((((map__27024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27024):map__27024);
var file_msg = map__27024__$1;
var request_url = cljs.core.get.call(null,map__27024__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27024,map__27024__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27024,map__27024__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__){
return (function (state_27048){
var state_val_27049 = (state_27048[(1)]);
if((state_val_27049 === (7))){
var inst_27044 = (state_27048[(2)]);
var state_27048__$1 = state_27048;
var statearr_27050_27070 = state_27048__$1;
(statearr_27050_27070[(2)] = inst_27044);

(statearr_27050_27070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (1))){
var state_27048__$1 = state_27048;
var statearr_27051_27071 = state_27048__$1;
(statearr_27051_27071[(2)] = null);

(statearr_27051_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (4))){
var inst_27028 = (state_27048[(7)]);
var inst_27028__$1 = (state_27048[(2)]);
var state_27048__$1 = (function (){var statearr_27052 = state_27048;
(statearr_27052[(7)] = inst_27028__$1);

return statearr_27052;
})();
if(cljs.core.truth_(inst_27028__$1)){
var statearr_27053_27072 = state_27048__$1;
(statearr_27053_27072[(1)] = (5));

} else {
var statearr_27054_27073 = state_27048__$1;
(statearr_27054_27073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (6))){
var state_27048__$1 = state_27048;
var statearr_27055_27074 = state_27048__$1;
(statearr_27055_27074[(2)] = null);

(statearr_27055_27074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (3))){
var inst_27046 = (state_27048[(2)]);
var state_27048__$1 = state_27048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27048__$1,inst_27046);
} else {
if((state_val_27049 === (2))){
var state_27048__$1 = state_27048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27048__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27049 === (11))){
var inst_27040 = (state_27048[(2)]);
var state_27048__$1 = (function (){var statearr_27056 = state_27048;
(statearr_27056[(8)] = inst_27040);

return statearr_27056;
})();
var statearr_27057_27075 = state_27048__$1;
(statearr_27057_27075[(2)] = null);

(statearr_27057_27075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (9))){
var inst_27032 = (state_27048[(9)]);
var inst_27034 = (state_27048[(10)]);
var inst_27036 = inst_27034.call(null,inst_27032);
var state_27048__$1 = state_27048;
var statearr_27058_27076 = state_27048__$1;
(statearr_27058_27076[(2)] = inst_27036);

(statearr_27058_27076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (5))){
var inst_27028 = (state_27048[(7)]);
var inst_27030 = figwheel.client.file_reloading.blocking_load.call(null,inst_27028);
var state_27048__$1 = state_27048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27048__$1,(8),inst_27030);
} else {
if((state_val_27049 === (10))){
var inst_27032 = (state_27048[(9)]);
var inst_27038 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27032);
var state_27048__$1 = state_27048;
var statearr_27059_27077 = state_27048__$1;
(statearr_27059_27077[(2)] = inst_27038);

(statearr_27059_27077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27049 === (8))){
var inst_27034 = (state_27048[(10)]);
var inst_27028 = (state_27048[(7)]);
var inst_27032 = (state_27048[(2)]);
var inst_27033 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27034__$1 = cljs.core.get.call(null,inst_27033,inst_27028);
var state_27048__$1 = (function (){var statearr_27060 = state_27048;
(statearr_27060[(9)] = inst_27032);

(statearr_27060[(10)] = inst_27034__$1);

return statearr_27060;
})();
if(cljs.core.truth_(inst_27034__$1)){
var statearr_27061_27078 = state_27048__$1;
(statearr_27061_27078[(1)] = (9));

} else {
var statearr_27062_27079 = state_27048__$1;
(statearr_27062_27079[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23875__auto__))
;
return ((function (switch__23763__auto__,c__23875__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23764__auto__ = null;
var figwheel$client$file_reloading$state_machine__23764__auto____0 = (function (){
var statearr_27066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27066[(0)] = figwheel$client$file_reloading$state_machine__23764__auto__);

(statearr_27066[(1)] = (1));

return statearr_27066;
});
var figwheel$client$file_reloading$state_machine__23764__auto____1 = (function (state_27048){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_27048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e27067){if((e27067 instanceof Object)){
var ex__23767__auto__ = e27067;
var statearr_27068_27080 = state_27048;
(statearr_27068_27080[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27081 = state_27048;
state_27048 = G__27081;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23764__auto__ = function(state_27048){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23764__auto____1.call(this,state_27048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23764__auto____0;
figwheel$client$file_reloading$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23764__auto____1;
return figwheel$client$file_reloading$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__))
})();
var state__23877__auto__ = (function (){var statearr_27069 = f__23876__auto__.call(null);
(statearr_27069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_27069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__))
);

return c__23875__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27082,callback){
var map__27085 = p__27082;
var map__27085__$1 = ((((!((map__27085 == null)))?((((map__27085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27085):map__27085);
var file_msg = map__27085__$1;
var namespace = cljs.core.get.call(null,map__27085__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27085,map__27085__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27085,map__27085__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27087){
var map__27090 = p__27087;
var map__27090__$1 = ((((!((map__27090 == null)))?((((map__27090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27090):map__27090);
var file_msg = map__27090__$1;
var namespace = cljs.core.get.call(null,map__27090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21661__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21661__auto__){
var or__21673__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
var or__21673__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21673__auto____$1)){
return or__21673__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21661__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27092,callback){
var map__27095 = p__27092;
var map__27095__$1 = ((((!((map__27095 == null)))?((((map__27095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27095):map__27095);
var file_msg = map__27095__$1;
var request_url = cljs.core.get.call(null,map__27095__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23875__auto___27183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___27183,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___27183,out){
return (function (state_27165){
var state_val_27166 = (state_27165[(1)]);
if((state_val_27166 === (1))){
var inst_27143 = cljs.core.nth.call(null,files,(0),null);
var inst_27144 = cljs.core.nthnext.call(null,files,(1));
var inst_27145 = files;
var state_27165__$1 = (function (){var statearr_27167 = state_27165;
(statearr_27167[(7)] = inst_27144);

(statearr_27167[(8)] = inst_27143);

(statearr_27167[(9)] = inst_27145);

return statearr_27167;
})();
var statearr_27168_27184 = state_27165__$1;
(statearr_27168_27184[(2)] = null);

(statearr_27168_27184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27166 === (2))){
var inst_27148 = (state_27165[(10)]);
var inst_27145 = (state_27165[(9)]);
var inst_27148__$1 = cljs.core.nth.call(null,inst_27145,(0),null);
var inst_27149 = cljs.core.nthnext.call(null,inst_27145,(1));
var inst_27150 = (inst_27148__$1 == null);
var inst_27151 = cljs.core.not.call(null,inst_27150);
var state_27165__$1 = (function (){var statearr_27169 = state_27165;
(statearr_27169[(10)] = inst_27148__$1);

(statearr_27169[(11)] = inst_27149);

return statearr_27169;
})();
if(inst_27151){
var statearr_27170_27185 = state_27165__$1;
(statearr_27170_27185[(1)] = (4));

} else {
var statearr_27171_27186 = state_27165__$1;
(statearr_27171_27186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27166 === (3))){
var inst_27163 = (state_27165[(2)]);
var state_27165__$1 = state_27165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27165__$1,inst_27163);
} else {
if((state_val_27166 === (4))){
var inst_27148 = (state_27165[(10)]);
var inst_27153 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27148);
var state_27165__$1 = state_27165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27165__$1,(7),inst_27153);
} else {
if((state_val_27166 === (5))){
var inst_27159 = cljs.core.async.close_BANG_.call(null,out);
var state_27165__$1 = state_27165;
var statearr_27172_27187 = state_27165__$1;
(statearr_27172_27187[(2)] = inst_27159);

(statearr_27172_27187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27166 === (6))){
var inst_27161 = (state_27165[(2)]);
var state_27165__$1 = state_27165;
var statearr_27173_27188 = state_27165__$1;
(statearr_27173_27188[(2)] = inst_27161);

(statearr_27173_27188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27166 === (7))){
var inst_27149 = (state_27165[(11)]);
var inst_27155 = (state_27165[(2)]);
var inst_27156 = cljs.core.async.put_BANG_.call(null,out,inst_27155);
var inst_27145 = inst_27149;
var state_27165__$1 = (function (){var statearr_27174 = state_27165;
(statearr_27174[(9)] = inst_27145);

(statearr_27174[(12)] = inst_27156);

return statearr_27174;
})();
var statearr_27175_27189 = state_27165__$1;
(statearr_27175_27189[(2)] = null);

(statearr_27175_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23875__auto___27183,out))
;
return ((function (switch__23763__auto__,c__23875__auto___27183,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto____0 = (function (){
var statearr_27179 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27179[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto__);

(statearr_27179[(1)] = (1));

return statearr_27179;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto____1 = (function (state_27165){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_27165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e27180){if((e27180 instanceof Object)){
var ex__23767__auto__ = e27180;
var statearr_27181_27190 = state_27165;
(statearr_27181_27190[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27191 = state_27165;
state_27165 = G__27191;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto__ = function(state_27165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto____1.call(this,state_27165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___27183,out))
})();
var state__23877__auto__ = (function (){var statearr_27182 = f__23876__auto__.call(null);
(statearr_27182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___27183);

return statearr_27182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___27183,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27192,opts){
var map__27196 = p__27192;
var map__27196__$1 = ((((!((map__27196 == null)))?((((map__27196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27196):map__27196);
var eval_body__$1 = cljs.core.get.call(null,map__27196__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21661__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21661__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21661__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27198){var e = e27198;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27199_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27199_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27204){
var vec__27205 = p__27204;
var k = cljs.core.nth.call(null,vec__27205,(0),null);
var v = cljs.core.nth.call(null,vec__27205,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27206){
var vec__27207 = p__27206;
var k = cljs.core.nth.call(null,vec__27207,(0),null);
var v = cljs.core.nth.call(null,vec__27207,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27211,p__27212){
var map__27459 = p__27211;
var map__27459__$1 = ((((!((map__27459 == null)))?((((map__27459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27459):map__27459);
var opts = map__27459__$1;
var before_jsload = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27460 = p__27212;
var map__27460__$1 = ((((!((map__27460 == null)))?((((map__27460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27460):map__27460);
var msg = map__27460__$1;
var files = cljs.core.get.call(null,map__27460__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27460__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27460__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27613){
var state_val_27614 = (state_27613[(1)]);
if((state_val_27614 === (7))){
var inst_27474 = (state_27613[(7)]);
var inst_27477 = (state_27613[(8)]);
var inst_27475 = (state_27613[(9)]);
var inst_27476 = (state_27613[(10)]);
var inst_27482 = cljs.core._nth.call(null,inst_27475,inst_27477);
var inst_27483 = figwheel.client.file_reloading.eval_body.call(null,inst_27482,opts);
var inst_27484 = (inst_27477 + (1));
var tmp27615 = inst_27474;
var tmp27616 = inst_27475;
var tmp27617 = inst_27476;
var inst_27474__$1 = tmp27615;
var inst_27475__$1 = tmp27616;
var inst_27476__$1 = tmp27617;
var inst_27477__$1 = inst_27484;
var state_27613__$1 = (function (){var statearr_27618 = state_27613;
(statearr_27618[(7)] = inst_27474__$1);

(statearr_27618[(8)] = inst_27477__$1);

(statearr_27618[(9)] = inst_27475__$1);

(statearr_27618[(10)] = inst_27476__$1);

(statearr_27618[(11)] = inst_27483);

return statearr_27618;
})();
var statearr_27619_27705 = state_27613__$1;
(statearr_27619_27705[(2)] = null);

(statearr_27619_27705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (20))){
var inst_27517 = (state_27613[(12)]);
var inst_27525 = figwheel.client.file_reloading.sort_files.call(null,inst_27517);
var state_27613__$1 = state_27613;
var statearr_27620_27706 = state_27613__$1;
(statearr_27620_27706[(2)] = inst_27525);

(statearr_27620_27706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (27))){
var state_27613__$1 = state_27613;
var statearr_27621_27707 = state_27613__$1;
(statearr_27621_27707[(2)] = null);

(statearr_27621_27707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (1))){
var inst_27466 = (state_27613[(13)]);
var inst_27463 = before_jsload.call(null,files);
var inst_27464 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27465 = (function (){return ((function (inst_27466,inst_27463,inst_27464,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27208_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27208_SHARP_);
});
;})(inst_27466,inst_27463,inst_27464,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27466__$1 = cljs.core.filter.call(null,inst_27465,files);
var inst_27467 = cljs.core.not_empty.call(null,inst_27466__$1);
var state_27613__$1 = (function (){var statearr_27622 = state_27613;
(statearr_27622[(14)] = inst_27463);

(statearr_27622[(15)] = inst_27464);

(statearr_27622[(13)] = inst_27466__$1);

return statearr_27622;
})();
if(cljs.core.truth_(inst_27467)){
var statearr_27623_27708 = state_27613__$1;
(statearr_27623_27708[(1)] = (2));

} else {
var statearr_27624_27709 = state_27613__$1;
(statearr_27624_27709[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (24))){
var state_27613__$1 = state_27613;
var statearr_27625_27710 = state_27613__$1;
(statearr_27625_27710[(2)] = null);

(statearr_27625_27710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (39))){
var inst_27567 = (state_27613[(16)]);
var state_27613__$1 = state_27613;
var statearr_27626_27711 = state_27613__$1;
(statearr_27626_27711[(2)] = inst_27567);

(statearr_27626_27711[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (46))){
var inst_27608 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
var statearr_27627_27712 = state_27613__$1;
(statearr_27627_27712[(2)] = inst_27608);

(statearr_27627_27712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (4))){
var inst_27511 = (state_27613[(2)]);
var inst_27512 = cljs.core.List.EMPTY;
var inst_27513 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27512);
var inst_27514 = (function (){return ((function (inst_27511,inst_27512,inst_27513,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27209_SHARP_){
var and__21661__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27209_SHARP_);
if(cljs.core.truth_(and__21661__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27209_SHARP_));
} else {
return and__21661__auto__;
}
});
;})(inst_27511,inst_27512,inst_27513,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27515 = cljs.core.filter.call(null,inst_27514,files);
var inst_27516 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27517 = cljs.core.concat.call(null,inst_27515,inst_27516);
var state_27613__$1 = (function (){var statearr_27628 = state_27613;
(statearr_27628[(12)] = inst_27517);

(statearr_27628[(17)] = inst_27511);

(statearr_27628[(18)] = inst_27513);

return statearr_27628;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27629_27713 = state_27613__$1;
(statearr_27629_27713[(1)] = (16));

} else {
var statearr_27630_27714 = state_27613__$1;
(statearr_27630_27714[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (15))){
var inst_27501 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
var statearr_27631_27715 = state_27613__$1;
(statearr_27631_27715[(2)] = inst_27501);

(statearr_27631_27715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (21))){
var inst_27527 = (state_27613[(19)]);
var inst_27527__$1 = (state_27613[(2)]);
var inst_27528 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27527__$1);
var state_27613__$1 = (function (){var statearr_27632 = state_27613;
(statearr_27632[(19)] = inst_27527__$1);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27613__$1,(22),inst_27528);
} else {
if((state_val_27614 === (31))){
var inst_27611 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27613__$1,inst_27611);
} else {
if((state_val_27614 === (32))){
var inst_27567 = (state_27613[(16)]);
var inst_27572 = inst_27567.cljs$lang$protocol_mask$partition0$;
var inst_27573 = (inst_27572 & (64));
var inst_27574 = inst_27567.cljs$core$ISeq$;
var inst_27575 = (inst_27573) || (inst_27574);
var state_27613__$1 = state_27613;
if(cljs.core.truth_(inst_27575)){
var statearr_27633_27716 = state_27613__$1;
(statearr_27633_27716[(1)] = (35));

} else {
var statearr_27634_27717 = state_27613__$1;
(statearr_27634_27717[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (40))){
var inst_27588 = (state_27613[(20)]);
var inst_27587 = (state_27613[(2)]);
var inst_27588__$1 = cljs.core.get.call(null,inst_27587,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27589 = cljs.core.get.call(null,inst_27587,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27590 = cljs.core.not_empty.call(null,inst_27588__$1);
var state_27613__$1 = (function (){var statearr_27635 = state_27613;
(statearr_27635[(20)] = inst_27588__$1);

(statearr_27635[(21)] = inst_27589);

return statearr_27635;
})();
if(cljs.core.truth_(inst_27590)){
var statearr_27636_27718 = state_27613__$1;
(statearr_27636_27718[(1)] = (41));

} else {
var statearr_27637_27719 = state_27613__$1;
(statearr_27637_27719[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (33))){
var state_27613__$1 = state_27613;
var statearr_27638_27720 = state_27613__$1;
(statearr_27638_27720[(2)] = false);

(statearr_27638_27720[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (13))){
var inst_27487 = (state_27613[(22)]);
var inst_27491 = cljs.core.chunk_first.call(null,inst_27487);
var inst_27492 = cljs.core.chunk_rest.call(null,inst_27487);
var inst_27493 = cljs.core.count.call(null,inst_27491);
var inst_27474 = inst_27492;
var inst_27475 = inst_27491;
var inst_27476 = inst_27493;
var inst_27477 = (0);
var state_27613__$1 = (function (){var statearr_27639 = state_27613;
(statearr_27639[(7)] = inst_27474);

(statearr_27639[(8)] = inst_27477);

(statearr_27639[(9)] = inst_27475);

(statearr_27639[(10)] = inst_27476);

return statearr_27639;
})();
var statearr_27640_27721 = state_27613__$1;
(statearr_27640_27721[(2)] = null);

(statearr_27640_27721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (22))){
var inst_27530 = (state_27613[(23)]);
var inst_27527 = (state_27613[(19)]);
var inst_27531 = (state_27613[(24)]);
var inst_27535 = (state_27613[(25)]);
var inst_27530__$1 = (state_27613[(2)]);
var inst_27531__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27530__$1);
var inst_27532 = (function (){var all_files = inst_27527;
var res_SINGLEQUOTE_ = inst_27530__$1;
var res = inst_27531__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27530,inst_27527,inst_27531,inst_27535,inst_27530__$1,inst_27531__$1,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27210_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27210_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27530,inst_27527,inst_27531,inst_27535,inst_27530__$1,inst_27531__$1,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27533 = cljs.core.filter.call(null,inst_27532,inst_27530__$1);
var inst_27534 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27535__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27534);
var inst_27536 = cljs.core.not_empty.call(null,inst_27535__$1);
var state_27613__$1 = (function (){var statearr_27641 = state_27613;
(statearr_27641[(23)] = inst_27530__$1);

(statearr_27641[(24)] = inst_27531__$1);

(statearr_27641[(25)] = inst_27535__$1);

(statearr_27641[(26)] = inst_27533);

return statearr_27641;
})();
if(cljs.core.truth_(inst_27536)){
var statearr_27642_27722 = state_27613__$1;
(statearr_27642_27722[(1)] = (23));

} else {
var statearr_27643_27723 = state_27613__$1;
(statearr_27643_27723[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (36))){
var state_27613__$1 = state_27613;
var statearr_27644_27724 = state_27613__$1;
(statearr_27644_27724[(2)] = false);

(statearr_27644_27724[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (41))){
var inst_27588 = (state_27613[(20)]);
var inst_27592 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27593 = cljs.core.map.call(null,inst_27592,inst_27588);
var inst_27594 = cljs.core.pr_str.call(null,inst_27593);
var inst_27595 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27594)].join('');
var inst_27596 = figwheel.client.utils.log.call(null,inst_27595);
var state_27613__$1 = state_27613;
var statearr_27645_27725 = state_27613__$1;
(statearr_27645_27725[(2)] = inst_27596);

(statearr_27645_27725[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (43))){
var inst_27589 = (state_27613[(21)]);
var inst_27599 = (state_27613[(2)]);
var inst_27600 = cljs.core.not_empty.call(null,inst_27589);
var state_27613__$1 = (function (){var statearr_27646 = state_27613;
(statearr_27646[(27)] = inst_27599);

return statearr_27646;
})();
if(cljs.core.truth_(inst_27600)){
var statearr_27647_27726 = state_27613__$1;
(statearr_27647_27726[(1)] = (44));

} else {
var statearr_27648_27727 = state_27613__$1;
(statearr_27648_27727[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (29))){
var inst_27530 = (state_27613[(23)]);
var inst_27527 = (state_27613[(19)]);
var inst_27567 = (state_27613[(16)]);
var inst_27531 = (state_27613[(24)]);
var inst_27535 = (state_27613[(25)]);
var inst_27533 = (state_27613[(26)]);
var inst_27563 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27566 = (function (){var all_files = inst_27527;
var res_SINGLEQUOTE_ = inst_27530;
var res = inst_27531;
var files_not_loaded = inst_27533;
var dependencies_that_loaded = inst_27535;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27567,inst_27531,inst_27535,inst_27533,inst_27563,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27565){
var map__27649 = p__27565;
var map__27649__$1 = ((((!((map__27649 == null)))?((((map__27649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27649):map__27649);
var namespace = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27567,inst_27531,inst_27535,inst_27533,inst_27563,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27567__$1 = cljs.core.group_by.call(null,inst_27566,inst_27533);
var inst_27569 = (inst_27567__$1 == null);
var inst_27570 = cljs.core.not.call(null,inst_27569);
var state_27613__$1 = (function (){var statearr_27651 = state_27613;
(statearr_27651[(28)] = inst_27563);

(statearr_27651[(16)] = inst_27567__$1);

return statearr_27651;
})();
if(inst_27570){
var statearr_27652_27728 = state_27613__$1;
(statearr_27652_27728[(1)] = (32));

} else {
var statearr_27653_27729 = state_27613__$1;
(statearr_27653_27729[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (44))){
var inst_27589 = (state_27613[(21)]);
var inst_27602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27589);
var inst_27603 = cljs.core.pr_str.call(null,inst_27602);
var inst_27604 = [cljs.core.str("not required: "),cljs.core.str(inst_27603)].join('');
var inst_27605 = figwheel.client.utils.log.call(null,inst_27604);
var state_27613__$1 = state_27613;
var statearr_27654_27730 = state_27613__$1;
(statearr_27654_27730[(2)] = inst_27605);

(statearr_27654_27730[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (6))){
var inst_27508 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
var statearr_27655_27731 = state_27613__$1;
(statearr_27655_27731[(2)] = inst_27508);

(statearr_27655_27731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (28))){
var inst_27533 = (state_27613[(26)]);
var inst_27560 = (state_27613[(2)]);
var inst_27561 = cljs.core.not_empty.call(null,inst_27533);
var state_27613__$1 = (function (){var statearr_27656 = state_27613;
(statearr_27656[(29)] = inst_27560);

return statearr_27656;
})();
if(cljs.core.truth_(inst_27561)){
var statearr_27657_27732 = state_27613__$1;
(statearr_27657_27732[(1)] = (29));

} else {
var statearr_27658_27733 = state_27613__$1;
(statearr_27658_27733[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (25))){
var inst_27531 = (state_27613[(24)]);
var inst_27547 = (state_27613[(2)]);
var inst_27548 = cljs.core.not_empty.call(null,inst_27531);
var state_27613__$1 = (function (){var statearr_27659 = state_27613;
(statearr_27659[(30)] = inst_27547);

return statearr_27659;
})();
if(cljs.core.truth_(inst_27548)){
var statearr_27660_27734 = state_27613__$1;
(statearr_27660_27734[(1)] = (26));

} else {
var statearr_27661_27735 = state_27613__$1;
(statearr_27661_27735[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (34))){
var inst_27582 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
if(cljs.core.truth_(inst_27582)){
var statearr_27662_27736 = state_27613__$1;
(statearr_27662_27736[(1)] = (38));

} else {
var statearr_27663_27737 = state_27613__$1;
(statearr_27663_27737[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (17))){
var state_27613__$1 = state_27613;
var statearr_27664_27738 = state_27613__$1;
(statearr_27664_27738[(2)] = recompile_dependents);

(statearr_27664_27738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (3))){
var state_27613__$1 = state_27613;
var statearr_27665_27739 = state_27613__$1;
(statearr_27665_27739[(2)] = null);

(statearr_27665_27739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (12))){
var inst_27504 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
var statearr_27666_27740 = state_27613__$1;
(statearr_27666_27740[(2)] = inst_27504);

(statearr_27666_27740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (2))){
var inst_27466 = (state_27613[(13)]);
var inst_27473 = cljs.core.seq.call(null,inst_27466);
var inst_27474 = inst_27473;
var inst_27475 = null;
var inst_27476 = (0);
var inst_27477 = (0);
var state_27613__$1 = (function (){var statearr_27667 = state_27613;
(statearr_27667[(7)] = inst_27474);

(statearr_27667[(8)] = inst_27477);

(statearr_27667[(9)] = inst_27475);

(statearr_27667[(10)] = inst_27476);

return statearr_27667;
})();
var statearr_27668_27741 = state_27613__$1;
(statearr_27668_27741[(2)] = null);

(statearr_27668_27741[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (23))){
var inst_27530 = (state_27613[(23)]);
var inst_27527 = (state_27613[(19)]);
var inst_27531 = (state_27613[(24)]);
var inst_27535 = (state_27613[(25)]);
var inst_27533 = (state_27613[(26)]);
var inst_27538 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27540 = (function (){var all_files = inst_27527;
var res_SINGLEQUOTE_ = inst_27530;
var res = inst_27531;
var files_not_loaded = inst_27533;
var dependencies_that_loaded = inst_27535;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27531,inst_27535,inst_27533,inst_27538,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27539){
var map__27669 = p__27539;
var map__27669__$1 = ((((!((map__27669 == null)))?((((map__27669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27669):map__27669);
var request_url = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27531,inst_27535,inst_27533,inst_27538,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27541 = cljs.core.reverse.call(null,inst_27535);
var inst_27542 = cljs.core.map.call(null,inst_27540,inst_27541);
var inst_27543 = cljs.core.pr_str.call(null,inst_27542);
var inst_27544 = figwheel.client.utils.log.call(null,inst_27543);
var state_27613__$1 = (function (){var statearr_27671 = state_27613;
(statearr_27671[(31)] = inst_27538);

return statearr_27671;
})();
var statearr_27672_27742 = state_27613__$1;
(statearr_27672_27742[(2)] = inst_27544);

(statearr_27672_27742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (35))){
var state_27613__$1 = state_27613;
var statearr_27673_27743 = state_27613__$1;
(statearr_27673_27743[(2)] = true);

(statearr_27673_27743[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (19))){
var inst_27517 = (state_27613[(12)]);
var inst_27523 = figwheel.client.file_reloading.expand_files.call(null,inst_27517);
var state_27613__$1 = state_27613;
var statearr_27674_27744 = state_27613__$1;
(statearr_27674_27744[(2)] = inst_27523);

(statearr_27674_27744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (11))){
var state_27613__$1 = state_27613;
var statearr_27675_27745 = state_27613__$1;
(statearr_27675_27745[(2)] = null);

(statearr_27675_27745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (9))){
var inst_27506 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
var statearr_27676_27746 = state_27613__$1;
(statearr_27676_27746[(2)] = inst_27506);

(statearr_27676_27746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (5))){
var inst_27477 = (state_27613[(8)]);
var inst_27476 = (state_27613[(10)]);
var inst_27479 = (inst_27477 < inst_27476);
var inst_27480 = inst_27479;
var state_27613__$1 = state_27613;
if(cljs.core.truth_(inst_27480)){
var statearr_27677_27747 = state_27613__$1;
(statearr_27677_27747[(1)] = (7));

} else {
var statearr_27678_27748 = state_27613__$1;
(statearr_27678_27748[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (14))){
var inst_27487 = (state_27613[(22)]);
var inst_27496 = cljs.core.first.call(null,inst_27487);
var inst_27497 = figwheel.client.file_reloading.eval_body.call(null,inst_27496,opts);
var inst_27498 = cljs.core.next.call(null,inst_27487);
var inst_27474 = inst_27498;
var inst_27475 = null;
var inst_27476 = (0);
var inst_27477 = (0);
var state_27613__$1 = (function (){var statearr_27679 = state_27613;
(statearr_27679[(7)] = inst_27474);

(statearr_27679[(8)] = inst_27477);

(statearr_27679[(32)] = inst_27497);

(statearr_27679[(9)] = inst_27475);

(statearr_27679[(10)] = inst_27476);

return statearr_27679;
})();
var statearr_27680_27749 = state_27613__$1;
(statearr_27680_27749[(2)] = null);

(statearr_27680_27749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (45))){
var state_27613__$1 = state_27613;
var statearr_27681_27750 = state_27613__$1;
(statearr_27681_27750[(2)] = null);

(statearr_27681_27750[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (26))){
var inst_27530 = (state_27613[(23)]);
var inst_27527 = (state_27613[(19)]);
var inst_27531 = (state_27613[(24)]);
var inst_27535 = (state_27613[(25)]);
var inst_27533 = (state_27613[(26)]);
var inst_27550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27552 = (function (){var all_files = inst_27527;
var res_SINGLEQUOTE_ = inst_27530;
var res = inst_27531;
var files_not_loaded = inst_27533;
var dependencies_that_loaded = inst_27535;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27531,inst_27535,inst_27533,inst_27550,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27551){
var map__27682 = p__27551;
var map__27682__$1 = ((((!((map__27682 == null)))?((((map__27682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27682):map__27682);
var namespace = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27531,inst_27535,inst_27533,inst_27550,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27553 = cljs.core.map.call(null,inst_27552,inst_27531);
var inst_27554 = cljs.core.pr_str.call(null,inst_27553);
var inst_27555 = figwheel.client.utils.log.call(null,inst_27554);
var inst_27556 = (function (){var all_files = inst_27527;
var res_SINGLEQUOTE_ = inst_27530;
var res = inst_27531;
var files_not_loaded = inst_27533;
var dependencies_that_loaded = inst_27535;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27531,inst_27535,inst_27533,inst_27550,inst_27552,inst_27553,inst_27554,inst_27555,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27530,inst_27527,inst_27531,inst_27535,inst_27533,inst_27550,inst_27552,inst_27553,inst_27554,inst_27555,state_val_27614,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27557 = setTimeout(inst_27556,(10));
var state_27613__$1 = (function (){var statearr_27684 = state_27613;
(statearr_27684[(33)] = inst_27555);

(statearr_27684[(34)] = inst_27550);

return statearr_27684;
})();
var statearr_27685_27751 = state_27613__$1;
(statearr_27685_27751[(2)] = inst_27557);

(statearr_27685_27751[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (16))){
var state_27613__$1 = state_27613;
var statearr_27686_27752 = state_27613__$1;
(statearr_27686_27752[(2)] = reload_dependents);

(statearr_27686_27752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (38))){
var inst_27567 = (state_27613[(16)]);
var inst_27584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27567);
var state_27613__$1 = state_27613;
var statearr_27687_27753 = state_27613__$1;
(statearr_27687_27753[(2)] = inst_27584);

(statearr_27687_27753[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (30))){
var state_27613__$1 = state_27613;
var statearr_27688_27754 = state_27613__$1;
(statearr_27688_27754[(2)] = null);

(statearr_27688_27754[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (10))){
var inst_27487 = (state_27613[(22)]);
var inst_27489 = cljs.core.chunked_seq_QMARK_.call(null,inst_27487);
var state_27613__$1 = state_27613;
if(inst_27489){
var statearr_27689_27755 = state_27613__$1;
(statearr_27689_27755[(1)] = (13));

} else {
var statearr_27690_27756 = state_27613__$1;
(statearr_27690_27756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (18))){
var inst_27521 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
if(cljs.core.truth_(inst_27521)){
var statearr_27691_27757 = state_27613__$1;
(statearr_27691_27757[(1)] = (19));

} else {
var statearr_27692_27758 = state_27613__$1;
(statearr_27692_27758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (42))){
var state_27613__$1 = state_27613;
var statearr_27693_27759 = state_27613__$1;
(statearr_27693_27759[(2)] = null);

(statearr_27693_27759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (37))){
var inst_27579 = (state_27613[(2)]);
var state_27613__$1 = state_27613;
var statearr_27694_27760 = state_27613__$1;
(statearr_27694_27760[(2)] = inst_27579);

(statearr_27694_27760[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27614 === (8))){
var inst_27474 = (state_27613[(7)]);
var inst_27487 = (state_27613[(22)]);
var inst_27487__$1 = cljs.core.seq.call(null,inst_27474);
var state_27613__$1 = (function (){var statearr_27695 = state_27613;
(statearr_27695[(22)] = inst_27487__$1);

return statearr_27695;
})();
if(inst_27487__$1){
var statearr_27696_27761 = state_27613__$1;
(statearr_27696_27761[(1)] = (10));

} else {
var statearr_27697_27762 = state_27613__$1;
(statearr_27697_27762[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23763__auto__,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto____1 = (function (state_27613){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_27613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__23767__auto__ = e27702;
var statearr_27703_27763 = state_27613;
(statearr_27703_27763[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27613;
state_27613 = G__27764;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto__ = function(state_27613){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto____1.call(this,state_27613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23877__auto__ = (function (){var statearr_27704 = f__23876__auto__.call(null);
(statearr_27704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__,map__27459,map__27459__$1,opts,before_jsload,on_jsload,reload_dependents,map__27460,map__27460__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23875__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27767,link){
var map__27770 = p__27767;
var map__27770__$1 = ((((!((map__27770 == null)))?((((map__27770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27770):map__27770);
var file = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27770,map__27770__$1,file){
return (function (p1__27765_SHARP_,p2__27766_SHARP_){
if(cljs.core._EQ_.call(null,p1__27765_SHARP_,p2__27766_SHARP_)){
return p1__27765_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27770,map__27770__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27776){
var map__27777 = p__27776;
var map__27777__$1 = ((((!((map__27777 == null)))?((((map__27777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27777):map__27777);
var match_length = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27772_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27772_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27779 = [];
var len__22743__auto___27782 = arguments.length;
var i__22744__auto___27783 = (0);
while(true){
if((i__22744__auto___27783 < len__22743__auto___27782)){
args27779.push((arguments[i__22744__auto___27783]));

var G__27784 = (i__22744__auto___27783 + (1));
i__22744__auto___27783 = G__27784;
continue;
} else {
}
break;
}

var G__27781 = args27779.length;
switch (G__27781) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27779.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27786_SHARP_,p2__27787_SHARP_){
return cljs.core.assoc.call(null,p1__27786_SHARP_,cljs.core.get.call(null,p2__27787_SHARP_,key),p2__27787_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27788){
var map__27791 = p__27788;
var map__27791__$1 = ((((!((map__27791 == null)))?((((map__27791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27791):map__27791);
var f_data = map__27791__$1;
var file = cljs.core.get.call(null,map__27791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27793,files_msg){
var map__27800 = p__27793;
var map__27800__$1 = ((((!((map__27800 == null)))?((((map__27800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27800):map__27800);
var opts = map__27800__$1;
var on_cssload = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27802_27806 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27803_27807 = null;
var count__27804_27808 = (0);
var i__27805_27809 = (0);
while(true){
if((i__27805_27809 < count__27804_27808)){
var f_27810 = cljs.core._nth.call(null,chunk__27803_27807,i__27805_27809);
figwheel.client.file_reloading.reload_css_file.call(null,f_27810);

var G__27811 = seq__27802_27806;
var G__27812 = chunk__27803_27807;
var G__27813 = count__27804_27808;
var G__27814 = (i__27805_27809 + (1));
seq__27802_27806 = G__27811;
chunk__27803_27807 = G__27812;
count__27804_27808 = G__27813;
i__27805_27809 = G__27814;
continue;
} else {
var temp__4657__auto___27815 = cljs.core.seq.call(null,seq__27802_27806);
if(temp__4657__auto___27815){
var seq__27802_27816__$1 = temp__4657__auto___27815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27802_27816__$1)){
var c__22484__auto___27817 = cljs.core.chunk_first.call(null,seq__27802_27816__$1);
var G__27818 = cljs.core.chunk_rest.call(null,seq__27802_27816__$1);
var G__27819 = c__22484__auto___27817;
var G__27820 = cljs.core.count.call(null,c__22484__auto___27817);
var G__27821 = (0);
seq__27802_27806 = G__27818;
chunk__27803_27807 = G__27819;
count__27804_27808 = G__27820;
i__27805_27809 = G__27821;
continue;
} else {
var f_27822 = cljs.core.first.call(null,seq__27802_27816__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27822);

var G__27823 = cljs.core.next.call(null,seq__27802_27816__$1);
var G__27824 = null;
var G__27825 = (0);
var G__27826 = (0);
seq__27802_27806 = G__27823;
chunk__27803_27807 = G__27824;
count__27804_27808 = G__27825;
i__27805_27809 = G__27826;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27800,map__27800__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27800,map__27800__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465824125935