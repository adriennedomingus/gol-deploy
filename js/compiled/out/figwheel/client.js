// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-2";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args29455 = [];
var len__22743__auto___29458 = arguments.length;
var i__22744__auto___29459 = (0);
while(true){
if((i__22744__auto___29459 < len__22743__auto___29458)){
args29455.push((arguments[i__22744__auto___29459]));

var G__29460 = (i__22744__auto___29459 + (1));
i__22744__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var G__29457 = args29455.length;
switch (G__29457) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29455.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22750__auto__ = [];
var len__22743__auto___29463 = arguments.length;
var i__22744__auto___29464 = (0);
while(true){
if((i__22744__auto___29464 < len__22743__auto___29463)){
args__22750__auto__.push((arguments[i__22744__auto___29464]));

var G__29465 = (i__22744__auto___29464 + (1));
i__22744__auto___29464 = G__29465;
continue;
} else {
}
break;
}

var argseq__22751__auto__ = ((((0) < args__22750__auto__.length))?(new cljs.core.IndexedSeq(args__22750__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22751__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29462){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29462));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22750__auto__ = [];
var len__22743__auto___29467 = arguments.length;
var i__22744__auto___29468 = (0);
while(true){
if((i__22744__auto___29468 < len__22743__auto___29467)){
args__22750__auto__.push((arguments[i__22744__auto___29468]));

var G__29469 = (i__22744__auto___29468 + (1));
i__22744__auto___29468 = G__29469;
continue;
} else {
}
break;
}

var argseq__22751__auto__ = ((((0) < args__22750__auto__.length))?(new cljs.core.IndexedSeq(args__22750__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22751__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29466){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29466));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29470 = cljs.core._EQ_;
var expr__29471 = (function (){var or__21673__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29474){if((e29474 instanceof Error)){
var e = e29474;
return false;
} else {
throw e29474;

}
}})();
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29470.call(null,"true",expr__29471))){
return true;
} else {
if(cljs.core.truth_(pred__29470.call(null,"false",expr__29471))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29471)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29476){if((e29476 instanceof Error)){
var e = e29476;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29476;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29477){
var map__29480 = p__29477;
var map__29480__$1 = ((((!((map__29480 == null)))?((((map__29480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);
var message = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21673__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21661__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21661__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21661__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23875__auto___29642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___29642,ch){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___29642,ch){
return (function (state_29611){
var state_val_29612 = (state_29611[(1)]);
if((state_val_29612 === (7))){
var inst_29607 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29613_29643 = state_29611__$1;
(statearr_29613_29643[(2)] = inst_29607);

(statearr_29613_29643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (1))){
var state_29611__$1 = state_29611;
var statearr_29614_29644 = state_29611__$1;
(statearr_29614_29644[(2)] = null);

(statearr_29614_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (4))){
var inst_29564 = (state_29611[(7)]);
var inst_29564__$1 = (state_29611[(2)]);
var state_29611__$1 = (function (){var statearr_29615 = state_29611;
(statearr_29615[(7)] = inst_29564__$1);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29564__$1)){
var statearr_29616_29645 = state_29611__$1;
(statearr_29616_29645[(1)] = (5));

} else {
var statearr_29617_29646 = state_29611__$1;
(statearr_29617_29646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (15))){
var inst_29571 = (state_29611[(8)]);
var inst_29586 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29571);
var inst_29587 = cljs.core.first.call(null,inst_29586);
var inst_29588 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29587);
var inst_29589 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29588)].join('');
var inst_29590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29589);
var state_29611__$1 = state_29611;
var statearr_29618_29647 = state_29611__$1;
(statearr_29618_29647[(2)] = inst_29590);

(statearr_29618_29647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (13))){
var inst_29595 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29619_29648 = state_29611__$1;
(statearr_29619_29648[(2)] = inst_29595);

(statearr_29619_29648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (6))){
var state_29611__$1 = state_29611;
var statearr_29620_29649 = state_29611__$1;
(statearr_29620_29649[(2)] = null);

(statearr_29620_29649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (17))){
var inst_29593 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29621_29650 = state_29611__$1;
(statearr_29621_29650[(2)] = inst_29593);

(statearr_29621_29650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (3))){
var inst_29609 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29611__$1,inst_29609);
} else {
if((state_val_29612 === (12))){
var inst_29570 = (state_29611[(9)]);
var inst_29584 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29570,opts);
var state_29611__$1 = state_29611;
if(cljs.core.truth_(inst_29584)){
var statearr_29622_29651 = state_29611__$1;
(statearr_29622_29651[(1)] = (15));

} else {
var statearr_29623_29652 = state_29611__$1;
(statearr_29623_29652[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (2))){
var state_29611__$1 = state_29611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29611__$1,(4),ch);
} else {
if((state_val_29612 === (11))){
var inst_29571 = (state_29611[(8)]);
var inst_29576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29577 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29571);
var inst_29578 = cljs.core.async.timeout.call(null,(1000));
var inst_29579 = [inst_29577,inst_29578];
var inst_29580 = (new cljs.core.PersistentVector(null,2,(5),inst_29576,inst_29579,null));
var state_29611__$1 = state_29611;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29611__$1,(14),inst_29580);
} else {
if((state_val_29612 === (9))){
var inst_29571 = (state_29611[(8)]);
var inst_29597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29598 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29571);
var inst_29599 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29598);
var inst_29600 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29599)].join('');
var inst_29601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29600);
var state_29611__$1 = (function (){var statearr_29624 = state_29611;
(statearr_29624[(10)] = inst_29597);

return statearr_29624;
})();
var statearr_29625_29653 = state_29611__$1;
(statearr_29625_29653[(2)] = inst_29601);

(statearr_29625_29653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (5))){
var inst_29564 = (state_29611[(7)]);
var inst_29566 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29567 = (new cljs.core.PersistentArrayMap(null,2,inst_29566,null));
var inst_29568 = (new cljs.core.PersistentHashSet(null,inst_29567,null));
var inst_29569 = figwheel.client.focus_msgs.call(null,inst_29568,inst_29564);
var inst_29570 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29569);
var inst_29571 = cljs.core.first.call(null,inst_29569);
var inst_29572 = figwheel.client.autoload_QMARK_.call(null);
var state_29611__$1 = (function (){var statearr_29626 = state_29611;
(statearr_29626[(9)] = inst_29570);

(statearr_29626[(8)] = inst_29571);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29572)){
var statearr_29627_29654 = state_29611__$1;
(statearr_29627_29654[(1)] = (8));

} else {
var statearr_29628_29655 = state_29611__$1;
(statearr_29628_29655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (14))){
var inst_29582 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29629_29656 = state_29611__$1;
(statearr_29629_29656[(2)] = inst_29582);

(statearr_29629_29656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (16))){
var state_29611__$1 = state_29611;
var statearr_29630_29657 = state_29611__$1;
(statearr_29630_29657[(2)] = null);

(statearr_29630_29657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (10))){
var inst_29603 = (state_29611[(2)]);
var state_29611__$1 = (function (){var statearr_29631 = state_29611;
(statearr_29631[(11)] = inst_29603);

return statearr_29631;
})();
var statearr_29632_29658 = state_29611__$1;
(statearr_29632_29658[(2)] = null);

(statearr_29632_29658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (8))){
var inst_29570 = (state_29611[(9)]);
var inst_29574 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29570,opts);
var state_29611__$1 = state_29611;
if(cljs.core.truth_(inst_29574)){
var statearr_29633_29659 = state_29611__$1;
(statearr_29633_29659[(1)] = (11));

} else {
var statearr_29634_29660 = state_29611__$1;
(statearr_29634_29660[(1)] = (12));

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
});})(c__23875__auto___29642,ch))
;
return ((function (switch__23763__auto__,c__23875__auto___29642,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23764__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23764__auto____0 = (function (){
var statearr_29638 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29638[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23764__auto__);

(statearr_29638[(1)] = (1));

return statearr_29638;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23764__auto____1 = (function (state_29611){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_29611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e29639){if((e29639 instanceof Object)){
var ex__23767__auto__ = e29639;
var statearr_29640_29661 = state_29611;
(statearr_29640_29661[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29662 = state_29611;
state_29611 = G__29662;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23764__auto__ = function(state_29611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23764__auto____1.call(this,state_29611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23764__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23764__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___29642,ch))
})();
var state__23877__auto__ = (function (){var statearr_29641 = f__23876__auto__.call(null);
(statearr_29641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___29642);

return statearr_29641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___29642,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29663_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29663_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29666 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29666){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e29665){if((e29665 instanceof Error)){
var e = e29665;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29666], null));
} else {
var e = e29665;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_29666))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29667){
var map__29674 = p__29667;
var map__29674__$1 = ((((!((map__29674 == null)))?((((map__29674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);
var opts = map__29674__$1;
var build_id = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29674,map__29674__$1,opts,build_id){
return (function (p__29676){
var vec__29677 = p__29676;
var map__29678 = cljs.core.nth.call(null,vec__29677,(0),null);
var map__29678__$1 = ((((!((map__29678 == null)))?((((map__29678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29678):map__29678);
var msg = map__29678__$1;
var msg_name = cljs.core.get.call(null,map__29678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29677,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29677,map__29678,map__29678__$1,msg,msg_name,_,map__29674,map__29674__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29677,map__29678,map__29678__$1,msg,msg_name,_,map__29674,map__29674__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29674,map__29674__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29684){
var vec__29685 = p__29684;
var map__29686 = cljs.core.nth.call(null,vec__29685,(0),null);
var map__29686__$1 = ((((!((map__29686 == null)))?((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var msg = map__29686__$1;
var msg_name = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29685,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29688){
var map__29698 = p__29688;
var map__29698__$1 = ((((!((map__29698 == null)))?((((map__29698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);
var on_compile_warning = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29698,map__29698__$1,on_compile_warning,on_compile_fail){
return (function (p__29700){
var vec__29701 = p__29700;
var map__29702 = cljs.core.nth.call(null,vec__29701,(0),null);
var map__29702__$1 = ((((!((map__29702 == null)))?((((map__29702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);
var msg = map__29702__$1;
var msg_name = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29701,(1));
var pred__29704 = cljs.core._EQ_;
var expr__29705 = msg_name;
if(cljs.core.truth_(pred__29704.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29705))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29704.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29705))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29698,map__29698__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__,msg_hist,msg_names,msg){
return (function (state_29913){
var state_val_29914 = (state_29913[(1)]);
if((state_val_29914 === (7))){
var inst_29841 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29841)){
var statearr_29915_29961 = state_29913__$1;
(statearr_29915_29961[(1)] = (8));

} else {
var statearr_29916_29962 = state_29913__$1;
(statearr_29916_29962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (20))){
var inst_29907 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29917_29963 = state_29913__$1;
(statearr_29917_29963[(2)] = inst_29907);

(statearr_29917_29963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (27))){
var inst_29903 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29918_29964 = state_29913__$1;
(statearr_29918_29964[(2)] = inst_29903);

(statearr_29918_29964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (1))){
var inst_29834 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29834)){
var statearr_29919_29965 = state_29913__$1;
(statearr_29919_29965[(1)] = (2));

} else {
var statearr_29920_29966 = state_29913__$1;
(statearr_29920_29966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (24))){
var inst_29905 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29921_29967 = state_29913__$1;
(statearr_29921_29967[(2)] = inst_29905);

(statearr_29921_29967[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (4))){
var inst_29911 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29913__$1,inst_29911);
} else {
if((state_val_29914 === (15))){
var inst_29909 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29922_29968 = state_29913__$1;
(statearr_29922_29968[(2)] = inst_29909);

(statearr_29922_29968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (21))){
var inst_29868 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29923_29969 = state_29913__$1;
(statearr_29923_29969[(2)] = inst_29868);

(statearr_29923_29969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (31))){
var inst_29892 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29892)){
var statearr_29924_29970 = state_29913__$1;
(statearr_29924_29970[(1)] = (34));

} else {
var statearr_29925_29971 = state_29913__$1;
(statearr_29925_29971[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (32))){
var inst_29901 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29926_29972 = state_29913__$1;
(statearr_29926_29972[(2)] = inst_29901);

(statearr_29926_29972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (33))){
var inst_29890 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29927_29973 = state_29913__$1;
(statearr_29927_29973[(2)] = inst_29890);

(statearr_29927_29973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (13))){
var inst_29855 = figwheel.client.heads_up.clear.call(null);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(16),inst_29855);
} else {
if((state_val_29914 === (22))){
var inst_29872 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29873 = figwheel.client.heads_up.append_warning_message.call(null,inst_29872);
var state_29913__$1 = state_29913;
var statearr_29928_29974 = state_29913__$1;
(statearr_29928_29974[(2)] = inst_29873);

(statearr_29928_29974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (36))){
var inst_29899 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29929_29975 = state_29913__$1;
(statearr_29929_29975[(2)] = inst_29899);

(statearr_29929_29975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (29))){
var inst_29883 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29930_29976 = state_29913__$1;
(statearr_29930_29976[(2)] = inst_29883);

(statearr_29930_29976[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (6))){
var inst_29836 = (state_29913[(7)]);
var state_29913__$1 = state_29913;
var statearr_29931_29977 = state_29913__$1;
(statearr_29931_29977[(2)] = inst_29836);

(statearr_29931_29977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (28))){
var inst_29879 = (state_29913[(2)]);
var inst_29880 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29881 = figwheel.client.heads_up.display_warning.call(null,inst_29880);
var state_29913__$1 = (function (){var statearr_29932 = state_29913;
(statearr_29932[(8)] = inst_29879);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(29),inst_29881);
} else {
if((state_val_29914 === (25))){
var inst_29877 = figwheel.client.heads_up.clear.call(null);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(28),inst_29877);
} else {
if((state_val_29914 === (34))){
var inst_29894 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(37),inst_29894);
} else {
if((state_val_29914 === (17))){
var inst_29861 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29933_29978 = state_29913__$1;
(statearr_29933_29978[(2)] = inst_29861);

(statearr_29933_29978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (3))){
var inst_29853 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29853)){
var statearr_29934_29979 = state_29913__$1;
(statearr_29934_29979[(1)] = (13));

} else {
var statearr_29935_29980 = state_29913__$1;
(statearr_29935_29980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (12))){
var inst_29849 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29936_29981 = state_29913__$1;
(statearr_29936_29981[(2)] = inst_29849);

(statearr_29936_29981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (2))){
var inst_29836 = (state_29913[(7)]);
var inst_29836__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29913__$1 = (function (){var statearr_29937 = state_29913;
(statearr_29937[(7)] = inst_29836__$1);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29836__$1)){
var statearr_29938_29982 = state_29913__$1;
(statearr_29938_29982[(1)] = (5));

} else {
var statearr_29939_29983 = state_29913__$1;
(statearr_29939_29983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (23))){
var inst_29875 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29875)){
var statearr_29940_29984 = state_29913__$1;
(statearr_29940_29984[(1)] = (25));

} else {
var statearr_29941_29985 = state_29913__$1;
(statearr_29941_29985[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (35))){
var state_29913__$1 = state_29913;
var statearr_29942_29986 = state_29913__$1;
(statearr_29942_29986[(2)] = null);

(statearr_29942_29986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (19))){
var inst_29870 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29870)){
var statearr_29943_29987 = state_29913__$1;
(statearr_29943_29987[(1)] = (22));

} else {
var statearr_29944_29988 = state_29913__$1;
(statearr_29944_29988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (11))){
var inst_29845 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29945_29989 = state_29913__$1;
(statearr_29945_29989[(2)] = inst_29845);

(statearr_29945_29989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (9))){
var inst_29847 = figwheel.client.heads_up.clear.call(null);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(12),inst_29847);
} else {
if((state_val_29914 === (5))){
var inst_29838 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29913__$1 = state_29913;
var statearr_29946_29990 = state_29913__$1;
(statearr_29946_29990[(2)] = inst_29838);

(statearr_29946_29990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (14))){
var inst_29863 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29863)){
var statearr_29947_29991 = state_29913__$1;
(statearr_29947_29991[(1)] = (18));

} else {
var statearr_29948_29992 = state_29913__$1;
(statearr_29948_29992[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (26))){
var inst_29885 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29885)){
var statearr_29949_29993 = state_29913__$1;
(statearr_29949_29993[(1)] = (30));

} else {
var statearr_29950_29994 = state_29913__$1;
(statearr_29950_29994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (16))){
var inst_29857 = (state_29913[(2)]);
var inst_29858 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29859 = figwheel.client.heads_up.display_exception.call(null,inst_29858);
var state_29913__$1 = (function (){var statearr_29951 = state_29913;
(statearr_29951[(9)] = inst_29857);

return statearr_29951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(17),inst_29859);
} else {
if((state_val_29914 === (30))){
var inst_29887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29888 = figwheel.client.heads_up.display_warning.call(null,inst_29887);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(33),inst_29888);
} else {
if((state_val_29914 === (10))){
var inst_29851 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29952_29995 = state_29913__$1;
(statearr_29952_29995[(2)] = inst_29851);

(statearr_29952_29995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (18))){
var inst_29865 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29866 = figwheel.client.heads_up.display_exception.call(null,inst_29865);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(21),inst_29866);
} else {
if((state_val_29914 === (37))){
var inst_29896 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29953_29996 = state_29913__$1;
(statearr_29953_29996[(2)] = inst_29896);

(statearr_29953_29996[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (8))){
var inst_29843 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(11),inst_29843);
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
});})(c__23875__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23763__auto__,c__23875__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29957[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto____1 = (function (state_29913){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_29913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e29958){if((e29958 instanceof Object)){
var ex__23767__auto__ = e29958;
var statearr_29959_29997 = state_29913;
(statearr_29959_29997[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29913;
state_29913 = G__29998;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto__ = function(state_29913){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto____1.call(this,state_29913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__,msg_hist,msg_names,msg))
})();
var state__23877__auto__ = (function (){var statearr_29960 = f__23876__auto__.call(null);
(statearr_29960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_29960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__,msg_hist,msg_names,msg))
);

return c__23875__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23875__auto___30061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___30061,ch){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___30061,ch){
return (function (state_30044){
var state_val_30045 = (state_30044[(1)]);
if((state_val_30045 === (1))){
var state_30044__$1 = state_30044;
var statearr_30046_30062 = state_30044__$1;
(statearr_30046_30062[(2)] = null);

(statearr_30046_30062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (2))){
var state_30044__$1 = state_30044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30044__$1,(4),ch);
} else {
if((state_val_30045 === (3))){
var inst_30042 = (state_30044[(2)]);
var state_30044__$1 = state_30044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30044__$1,inst_30042);
} else {
if((state_val_30045 === (4))){
var inst_30032 = (state_30044[(7)]);
var inst_30032__$1 = (state_30044[(2)]);
var state_30044__$1 = (function (){var statearr_30047 = state_30044;
(statearr_30047[(7)] = inst_30032__$1);

return statearr_30047;
})();
if(cljs.core.truth_(inst_30032__$1)){
var statearr_30048_30063 = state_30044__$1;
(statearr_30048_30063[(1)] = (5));

} else {
var statearr_30049_30064 = state_30044__$1;
(statearr_30049_30064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (5))){
var inst_30032 = (state_30044[(7)]);
var inst_30034 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30032);
var state_30044__$1 = state_30044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30044__$1,(8),inst_30034);
} else {
if((state_val_30045 === (6))){
var state_30044__$1 = state_30044;
var statearr_30050_30065 = state_30044__$1;
(statearr_30050_30065[(2)] = null);

(statearr_30050_30065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (7))){
var inst_30040 = (state_30044[(2)]);
var state_30044__$1 = state_30044;
var statearr_30051_30066 = state_30044__$1;
(statearr_30051_30066[(2)] = inst_30040);

(statearr_30051_30066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (8))){
var inst_30036 = (state_30044[(2)]);
var state_30044__$1 = (function (){var statearr_30052 = state_30044;
(statearr_30052[(8)] = inst_30036);

return statearr_30052;
})();
var statearr_30053_30067 = state_30044__$1;
(statearr_30053_30067[(2)] = null);

(statearr_30053_30067[(1)] = (2));


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
});})(c__23875__auto___30061,ch))
;
return ((function (switch__23763__auto__,c__23875__auto___30061,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23764__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23764__auto____0 = (function (){
var statearr_30057 = [null,null,null,null,null,null,null,null,null];
(statearr_30057[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23764__auto__);

(statearr_30057[(1)] = (1));

return statearr_30057;
});
var figwheel$client$heads_up_plugin_$_state_machine__23764__auto____1 = (function (state_30044){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_30044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e30058){if((e30058 instanceof Object)){
var ex__23767__auto__ = e30058;
var statearr_30059_30068 = state_30044;
(statearr_30059_30068[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30069 = state_30044;
state_30044 = G__30069;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23764__auto__ = function(state_30044){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23764__auto____1.call(this,state_30044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23764__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23764__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___30061,ch))
})();
var state__23877__auto__ = (function (){var statearr_30060 = f__23876__auto__.call(null);
(statearr_30060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___30061);

return statearr_30060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___30061,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__){
return (function (state_30090){
var state_val_30091 = (state_30090[(1)]);
if((state_val_30091 === (1))){
var inst_30085 = cljs.core.async.timeout.call(null,(3000));
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30090__$1,(2),inst_30085);
} else {
if((state_val_30091 === (2))){
var inst_30087 = (state_30090[(2)]);
var inst_30088 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30090__$1 = (function (){var statearr_30092 = state_30090;
(statearr_30092[(7)] = inst_30087);

return statearr_30092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30090__$1,inst_30088);
} else {
return null;
}
}
});})(c__23875__auto__))
;
return ((function (switch__23763__auto__,c__23875__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23764__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23764__auto____0 = (function (){
var statearr_30096 = [null,null,null,null,null,null,null,null];
(statearr_30096[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23764__auto__);

(statearr_30096[(1)] = (1));

return statearr_30096;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23764__auto____1 = (function (state_30090){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_30090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e30097){if((e30097 instanceof Object)){
var ex__23767__auto__ = e30097;
var statearr_30098_30100 = state_30090;
(statearr_30098_30100[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30101 = state_30090;
state_30090 = G__30101;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23764__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23764__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23764__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23764__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__))
})();
var state__23877__auto__ = (function (){var statearr_30099 = f__23876__auto__.call(null);
(statearr_30099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_30099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__))
);

return c__23875__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30124){
var state_val_30125 = (state_30124[(1)]);
if((state_val_30125 === (1))){
var inst_30118 = cljs.core.async.timeout.call(null,(2000));
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(2),inst_30118);
} else {
if((state_val_30125 === (2))){
var inst_30120 = (state_30124[(2)]);
var inst_30121 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30122 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30121);
var state_30124__$1 = (function (){var statearr_30126 = state_30124;
(statearr_30126[(7)] = inst_30120);

return statearr_30126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30124__$1,inst_30122);
} else {
return null;
}
}
});})(c__23875__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23763__auto__,c__23875__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto____0 = (function (){
var statearr_30130 = [null,null,null,null,null,null,null,null];
(statearr_30130[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto__);

(statearr_30130[(1)] = (1));

return statearr_30130;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto____1 = (function (state_30124){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_30124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e30131){if((e30131 instanceof Object)){
var ex__23767__auto__ = e30131;
var statearr_30132_30134 = state_30124;
(statearr_30132_30134[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30135 = state_30124;
state_30124 = G__30135;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto__ = function(state_30124){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto____1.call(this,state_30124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23877__auto__ = (function (){var statearr_30133 = f__23876__auto__.call(null);
(statearr_30133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_30133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__,figwheel_version,temp__4657__auto__))
);

return c__23875__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30136){
var map__30140 = p__30136;
var map__30140__$1 = ((((!((map__30140 == null)))?((((map__30140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30140):map__30140);
var file = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30142 = "";
var G__30142__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30142),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30142);
var G__30142__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30142__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30142__$1);
if(cljs.core.truth_((function (){var and__21661__auto__ = line;
if(cljs.core.truth_(and__21661__auto__)){
return column;
} else {
return and__21661__auto__;
}
})())){
return [cljs.core.str(G__30142__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30142__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30143){
var map__30150 = p__30143;
var map__30150__$1 = ((((!((map__30150 == null)))?((((map__30150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30150):map__30150);
var ed = map__30150__$1;
var formatted_exception = cljs.core.get.call(null,map__30150__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30150__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30150__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30152_30156 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30153_30157 = null;
var count__30154_30158 = (0);
var i__30155_30159 = (0);
while(true){
if((i__30155_30159 < count__30154_30158)){
var msg_30160 = cljs.core._nth.call(null,chunk__30153_30157,i__30155_30159);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30160);

var G__30161 = seq__30152_30156;
var G__30162 = chunk__30153_30157;
var G__30163 = count__30154_30158;
var G__30164 = (i__30155_30159 + (1));
seq__30152_30156 = G__30161;
chunk__30153_30157 = G__30162;
count__30154_30158 = G__30163;
i__30155_30159 = G__30164;
continue;
} else {
var temp__4657__auto___30165 = cljs.core.seq.call(null,seq__30152_30156);
if(temp__4657__auto___30165){
var seq__30152_30166__$1 = temp__4657__auto___30165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30152_30166__$1)){
var c__22484__auto___30167 = cljs.core.chunk_first.call(null,seq__30152_30166__$1);
var G__30168 = cljs.core.chunk_rest.call(null,seq__30152_30166__$1);
var G__30169 = c__22484__auto___30167;
var G__30170 = cljs.core.count.call(null,c__22484__auto___30167);
var G__30171 = (0);
seq__30152_30156 = G__30168;
chunk__30153_30157 = G__30169;
count__30154_30158 = G__30170;
i__30155_30159 = G__30171;
continue;
} else {
var msg_30172 = cljs.core.first.call(null,seq__30152_30166__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30172);

var G__30173 = cljs.core.next.call(null,seq__30152_30166__$1);
var G__30174 = null;
var G__30175 = (0);
var G__30176 = (0);
seq__30152_30156 = G__30173;
chunk__30153_30157 = G__30174;
count__30154_30158 = G__30175;
i__30155_30159 = G__30176;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30177){
var map__30180 = p__30177;
var map__30180__$1 = ((((!((map__30180 == null)))?((((map__30180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30180):map__30180);
var w = map__30180__$1;
var message = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21661__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21661__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21661__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30188 = cljs.core.seq.call(null,plugins);
var chunk__30189 = null;
var count__30190 = (0);
var i__30191 = (0);
while(true){
if((i__30191 < count__30190)){
var vec__30192 = cljs.core._nth.call(null,chunk__30189,i__30191);
var k = cljs.core.nth.call(null,vec__30192,(0),null);
var plugin = cljs.core.nth.call(null,vec__30192,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30194 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30188,chunk__30189,count__30190,i__30191,pl_30194,vec__30192,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30194.call(null,msg_hist);
});})(seq__30188,chunk__30189,count__30190,i__30191,pl_30194,vec__30192,k,plugin))
);
} else {
}

var G__30195 = seq__30188;
var G__30196 = chunk__30189;
var G__30197 = count__30190;
var G__30198 = (i__30191 + (1));
seq__30188 = G__30195;
chunk__30189 = G__30196;
count__30190 = G__30197;
i__30191 = G__30198;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30188);
if(temp__4657__auto__){
var seq__30188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30188__$1)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,seq__30188__$1);
var G__30199 = cljs.core.chunk_rest.call(null,seq__30188__$1);
var G__30200 = c__22484__auto__;
var G__30201 = cljs.core.count.call(null,c__22484__auto__);
var G__30202 = (0);
seq__30188 = G__30199;
chunk__30189 = G__30200;
count__30190 = G__30201;
i__30191 = G__30202;
continue;
} else {
var vec__30193 = cljs.core.first.call(null,seq__30188__$1);
var k = cljs.core.nth.call(null,vec__30193,(0),null);
var plugin = cljs.core.nth.call(null,vec__30193,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30203 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30188,chunk__30189,count__30190,i__30191,pl_30203,vec__30193,k,plugin,seq__30188__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30203.call(null,msg_hist);
});})(seq__30188,chunk__30189,count__30190,i__30191,pl_30203,vec__30193,k,plugin,seq__30188__$1,temp__4657__auto__))
);
} else {
}

var G__30204 = cljs.core.next.call(null,seq__30188__$1);
var G__30205 = null;
var G__30206 = (0);
var G__30207 = (0);
seq__30188 = G__30204;
chunk__30189 = G__30205;
count__30190 = G__30206;
i__30191 = G__30207;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30208 = [];
var len__22743__auto___30215 = arguments.length;
var i__22744__auto___30216 = (0);
while(true){
if((i__22744__auto___30216 < len__22743__auto___30215)){
args30208.push((arguments[i__22744__auto___30216]));

var G__30217 = (i__22744__auto___30216 + (1));
i__22744__auto___30216 = G__30217;
continue;
} else {
}
break;
}

var G__30210 = args30208.length;
switch (G__30210) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30208.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30211_30219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30212_30220 = null;
var count__30213_30221 = (0);
var i__30214_30222 = (0);
while(true){
if((i__30214_30222 < count__30213_30221)){
var msg_30223 = cljs.core._nth.call(null,chunk__30212_30220,i__30214_30222);
figwheel.client.socket.handle_incoming_message.call(null,msg_30223);

var G__30224 = seq__30211_30219;
var G__30225 = chunk__30212_30220;
var G__30226 = count__30213_30221;
var G__30227 = (i__30214_30222 + (1));
seq__30211_30219 = G__30224;
chunk__30212_30220 = G__30225;
count__30213_30221 = G__30226;
i__30214_30222 = G__30227;
continue;
} else {
var temp__4657__auto___30228 = cljs.core.seq.call(null,seq__30211_30219);
if(temp__4657__auto___30228){
var seq__30211_30229__$1 = temp__4657__auto___30228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30211_30229__$1)){
var c__22484__auto___30230 = cljs.core.chunk_first.call(null,seq__30211_30229__$1);
var G__30231 = cljs.core.chunk_rest.call(null,seq__30211_30229__$1);
var G__30232 = c__22484__auto___30230;
var G__30233 = cljs.core.count.call(null,c__22484__auto___30230);
var G__30234 = (0);
seq__30211_30219 = G__30231;
chunk__30212_30220 = G__30232;
count__30213_30221 = G__30233;
i__30214_30222 = G__30234;
continue;
} else {
var msg_30235 = cljs.core.first.call(null,seq__30211_30229__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30235);

var G__30236 = cljs.core.next.call(null,seq__30211_30229__$1);
var G__30237 = null;
var G__30238 = (0);
var G__30239 = (0);
seq__30211_30219 = G__30236;
chunk__30212_30220 = G__30237;
count__30213_30221 = G__30238;
i__30214_30222 = G__30239;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22750__auto__ = [];
var len__22743__auto___30244 = arguments.length;
var i__22744__auto___30245 = (0);
while(true){
if((i__22744__auto___30245 < len__22743__auto___30244)){
args__22750__auto__.push((arguments[i__22744__auto___30245]));

var G__30246 = (i__22744__auto___30245 + (1));
i__22744__auto___30245 = G__30246;
continue;
} else {
}
break;
}

var argseq__22751__auto__ = ((((0) < args__22750__auto__.length))?(new cljs.core.IndexedSeq(args__22750__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22751__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30241){
var map__30242 = p__30241;
var map__30242__$1 = ((((!((map__30242 == null)))?((((map__30242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30242):map__30242);
var opts = map__30242__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30240){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30240));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30248){if((e30248 instanceof Error)){
var e = e30248;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30248;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30252){
var map__30253 = p__30252;
var map__30253__$1 = ((((!((map__30253 == null)))?((((map__30253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30253):map__30253);
var msg_name = cljs.core.get.call(null,map__30253__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1465824130346