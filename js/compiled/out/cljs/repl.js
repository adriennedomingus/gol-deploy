// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27843_27857 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27844_27858 = null;
var count__27845_27859 = (0);
var i__27846_27860 = (0);
while(true){
if((i__27846_27860 < count__27845_27859)){
var f_27861 = cljs.core._nth.call(null,chunk__27844_27858,i__27846_27860);
cljs.core.println.call(null,"  ",f_27861);

var G__27862 = seq__27843_27857;
var G__27863 = chunk__27844_27858;
var G__27864 = count__27845_27859;
var G__27865 = (i__27846_27860 + (1));
seq__27843_27857 = G__27862;
chunk__27844_27858 = G__27863;
count__27845_27859 = G__27864;
i__27846_27860 = G__27865;
continue;
} else {
var temp__4657__auto___27866 = cljs.core.seq.call(null,seq__27843_27857);
if(temp__4657__auto___27866){
var seq__27843_27867__$1 = temp__4657__auto___27866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27843_27867__$1)){
var c__22484__auto___27868 = cljs.core.chunk_first.call(null,seq__27843_27867__$1);
var G__27869 = cljs.core.chunk_rest.call(null,seq__27843_27867__$1);
var G__27870 = c__22484__auto___27868;
var G__27871 = cljs.core.count.call(null,c__22484__auto___27868);
var G__27872 = (0);
seq__27843_27857 = G__27869;
chunk__27844_27858 = G__27870;
count__27845_27859 = G__27871;
i__27846_27860 = G__27872;
continue;
} else {
var f_27873 = cljs.core.first.call(null,seq__27843_27867__$1);
cljs.core.println.call(null,"  ",f_27873);

var G__27874 = cljs.core.next.call(null,seq__27843_27867__$1);
var G__27875 = null;
var G__27876 = (0);
var G__27877 = (0);
seq__27843_27857 = G__27874;
chunk__27844_27858 = G__27875;
count__27845_27859 = G__27876;
i__27846_27860 = G__27877;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27878 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21673__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27878);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27878)))?cljs.core.second.call(null,arglists_27878):arglists_27878));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27847 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27848 = null;
var count__27849 = (0);
var i__27850 = (0);
while(true){
if((i__27850 < count__27849)){
var vec__27851 = cljs.core._nth.call(null,chunk__27848,i__27850);
var name = cljs.core.nth.call(null,vec__27851,(0),null);
var map__27852 = cljs.core.nth.call(null,vec__27851,(1),null);
var map__27852__$1 = ((((!((map__27852 == null)))?((((map__27852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27852):map__27852);
var doc = cljs.core.get.call(null,map__27852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27879 = seq__27847;
var G__27880 = chunk__27848;
var G__27881 = count__27849;
var G__27882 = (i__27850 + (1));
seq__27847 = G__27879;
chunk__27848 = G__27880;
count__27849 = G__27881;
i__27850 = G__27882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27847);
if(temp__4657__auto__){
var seq__27847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27847__$1)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,seq__27847__$1);
var G__27883 = cljs.core.chunk_rest.call(null,seq__27847__$1);
var G__27884 = c__22484__auto__;
var G__27885 = cljs.core.count.call(null,c__22484__auto__);
var G__27886 = (0);
seq__27847 = G__27883;
chunk__27848 = G__27884;
count__27849 = G__27885;
i__27850 = G__27886;
continue;
} else {
var vec__27854 = cljs.core.first.call(null,seq__27847__$1);
var name = cljs.core.nth.call(null,vec__27854,(0),null);
var map__27855 = cljs.core.nth.call(null,vec__27854,(1),null);
var map__27855__$1 = ((((!((map__27855 == null)))?((((map__27855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27855):map__27855);
var doc = cljs.core.get.call(null,map__27855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27887 = cljs.core.next.call(null,seq__27847__$1);
var G__27888 = null;
var G__27889 = (0);
var G__27890 = (0);
seq__27847 = G__27887;
chunk__27848 = G__27888;
count__27849 = G__27889;
i__27850 = G__27890;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1465824126056