// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23920 = [];
var len__22743__auto___23926 = arguments.length;
var i__22744__auto___23927 = (0);
while(true){
if((i__22744__auto___23927 < len__22743__auto___23926)){
args23920.push((arguments[i__22744__auto___23927]));

var G__23928 = (i__22744__auto___23927 + (1));
i__22744__auto___23927 = G__23928;
continue;
} else {
}
break;
}

var G__23922 = args23920.length;
switch (G__23922) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23920.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23923 = (function (f,blockable,meta23924){
this.f = f;
this.blockable = blockable;
this.meta23924 = meta23924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23925,meta23924__$1){
var self__ = this;
var _23925__$1 = this;
return (new cljs.core.async.t_cljs$core$async23923(self__.f,self__.blockable,meta23924__$1));
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23925){
var self__ = this;
var _23925__$1 = this;
return self__.meta23924;
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23924","meta23924",505226462,null)], null);
});

cljs.core.async.t_cljs$core$async23923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23923";

cljs.core.async.t_cljs$core$async23923.cljs$lang$ctorPrWriter = (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async23923");
});

cljs.core.async.__GT_t_cljs$core$async23923 = (function cljs$core$async$__GT_t_cljs$core$async23923(f__$1,blockable__$1,meta23924){
return (new cljs.core.async.t_cljs$core$async23923(f__$1,blockable__$1,meta23924));
});

}

return (new cljs.core.async.t_cljs$core$async23923(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23932 = [];
var len__22743__auto___23935 = arguments.length;
var i__22744__auto___23936 = (0);
while(true){
if((i__22744__auto___23936 < len__22743__auto___23935)){
args23932.push((arguments[i__22744__auto___23936]));

var G__23937 = (i__22744__auto___23936 + (1));
i__22744__auto___23936 = G__23937;
continue;
} else {
}
break;
}

var G__23934 = args23932.length;
switch (G__23934) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23932.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23939 = [];
var len__22743__auto___23942 = arguments.length;
var i__22744__auto___23943 = (0);
while(true){
if((i__22744__auto___23943 < len__22743__auto___23942)){
args23939.push((arguments[i__22744__auto___23943]));

var G__23944 = (i__22744__auto___23943 + (1));
i__22744__auto___23943 = G__23944;
continue;
} else {
}
break;
}

var G__23941 = args23939.length;
switch (G__23941) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23939.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23946 = [];
var len__22743__auto___23949 = arguments.length;
var i__22744__auto___23950 = (0);
while(true){
if((i__22744__auto___23950 < len__22743__auto___23949)){
args23946.push((arguments[i__22744__auto___23950]));

var G__23951 = (i__22744__auto___23950 + (1));
i__22744__auto___23950 = G__23951;
continue;
} else {
}
break;
}

var G__23948 = args23946.length;
switch (G__23948) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23946.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23953 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23953);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23953,ret){
return (function (){
return fn1.call(null,val_23953);
});})(val_23953,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23954 = [];
var len__22743__auto___23957 = arguments.length;
var i__22744__auto___23958 = (0);
while(true){
if((i__22744__auto___23958 < len__22743__auto___23957)){
args23954.push((arguments[i__22744__auto___23958]));

var G__23959 = (i__22744__auto___23958 + (1));
i__22744__auto___23958 = G__23959;
continue;
} else {
}
break;
}

var G__23956 = args23954.length;
switch (G__23956) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23954.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22588__auto___23961 = n;
var x_23962 = (0);
while(true){
if((x_23962 < n__22588__auto___23961)){
(a[x_23962] = (0));

var G__23963 = (x_23962 + (1));
x_23962 = G__23963;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23964 = (i + (1));
i = G__23964;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23968 = (function (alt_flag,flag,meta23969){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23969 = meta23969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23970,meta23969__$1){
var self__ = this;
var _23970__$1 = this;
return (new cljs.core.async.t_cljs$core$async23968(self__.alt_flag,self__.flag,meta23969__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23970){
var self__ = this;
var _23970__$1 = this;
return self__.meta23969;
});})(flag))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23968.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23969","meta23969",729895766,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23968";

cljs.core.async.t_cljs$core$async23968.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async23968");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23968 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23968(alt_flag__$1,flag__$1,meta23969){
return (new cljs.core.async.t_cljs$core$async23968(alt_flag__$1,flag__$1,meta23969));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23968(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23974 = (function (alt_handler,flag,cb,meta23975){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23975 = meta23975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23976,meta23975__$1){
var self__ = this;
var _23976__$1 = this;
return (new cljs.core.async.t_cljs$core$async23974(self__.alt_handler,self__.flag,self__.cb,meta23975__$1));
});

cljs.core.async.t_cljs$core$async23974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23976){
var self__ = this;
var _23976__$1 = this;
return self__.meta23975;
});

cljs.core.async.t_cljs$core$async23974.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23975","meta23975",-479605000,null)], null);
});

cljs.core.async.t_cljs$core$async23974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23974";

cljs.core.async.t_cljs$core$async23974.cljs$lang$ctorPrWriter = (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async23974");
});

cljs.core.async.__GT_t_cljs$core$async23974 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23974(alt_handler__$1,flag__$1,cb__$1,meta23975){
return (new cljs.core.async.t_cljs$core$async23974(alt_handler__$1,flag__$1,cb__$1,meta23975));
});

}

return (new cljs.core.async.t_cljs$core$async23974(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23977_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23977_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23978_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23978_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21673__auto__ = wport;
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23979 = (i + (1));
i = G__23979;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21673__auto__ = ret;
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21661__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21661__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21661__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22750__auto__ = [];
var len__22743__auto___23985 = arguments.length;
var i__22744__auto___23986 = (0);
while(true){
if((i__22744__auto___23986 < len__22743__auto___23985)){
args__22750__auto__.push((arguments[i__22744__auto___23986]));

var G__23987 = (i__22744__auto___23986 + (1));
i__22744__auto___23986 = G__23987;
continue;
} else {
}
break;
}

var argseq__22751__auto__ = ((((1) < args__22750__auto__.length))?(new cljs.core.IndexedSeq(args__22750__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22751__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23982){
var map__23983 = p__23982;
var map__23983__$1 = ((((!((map__23983 == null)))?((((map__23983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23983):map__23983);
var opts = map__23983__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23980){
var G__23981 = cljs.core.first.call(null,seq23980);
var seq23980__$1 = cljs.core.next.call(null,seq23980);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23981,seq23980__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23988 = [];
var len__22743__auto___24038 = arguments.length;
var i__22744__auto___24039 = (0);
while(true){
if((i__22744__auto___24039 < len__22743__auto___24038)){
args23988.push((arguments[i__22744__auto___24039]));

var G__24040 = (i__22744__auto___24039 + (1));
i__22744__auto___24039 = G__24040;
continue;
} else {
}
break;
}

var G__23990 = args23988.length;
switch (G__23990) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23988.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23875__auto___24042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___24042){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___24042){
return (function (state_24014){
var state_val_24015 = (state_24014[(1)]);
if((state_val_24015 === (7))){
var inst_24010 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24016_24043 = state_24014__$1;
(statearr_24016_24043[(2)] = inst_24010);

(statearr_24016_24043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (1))){
var state_24014__$1 = state_24014;
var statearr_24017_24044 = state_24014__$1;
(statearr_24017_24044[(2)] = null);

(statearr_24017_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (4))){
var inst_23993 = (state_24014[(7)]);
var inst_23993__$1 = (state_24014[(2)]);
var inst_23994 = (inst_23993__$1 == null);
var state_24014__$1 = (function (){var statearr_24018 = state_24014;
(statearr_24018[(7)] = inst_23993__$1);

return statearr_24018;
})();
if(cljs.core.truth_(inst_23994)){
var statearr_24019_24045 = state_24014__$1;
(statearr_24019_24045[(1)] = (5));

} else {
var statearr_24020_24046 = state_24014__$1;
(statearr_24020_24046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (13))){
var state_24014__$1 = state_24014;
var statearr_24021_24047 = state_24014__$1;
(statearr_24021_24047[(2)] = null);

(statearr_24021_24047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (6))){
var inst_23993 = (state_24014[(7)]);
var state_24014__$1 = state_24014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24014__$1,(11),to,inst_23993);
} else {
if((state_val_24015 === (3))){
var inst_24012 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24014__$1,inst_24012);
} else {
if((state_val_24015 === (12))){
var state_24014__$1 = state_24014;
var statearr_24022_24048 = state_24014__$1;
(statearr_24022_24048[(2)] = null);

(statearr_24022_24048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (2))){
var state_24014__$1 = state_24014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24014__$1,(4),from);
} else {
if((state_val_24015 === (11))){
var inst_24003 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_24003)){
var statearr_24023_24049 = state_24014__$1;
(statearr_24023_24049[(1)] = (12));

} else {
var statearr_24024_24050 = state_24014__$1;
(statearr_24024_24050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (9))){
var state_24014__$1 = state_24014;
var statearr_24025_24051 = state_24014__$1;
(statearr_24025_24051[(2)] = null);

(statearr_24025_24051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (5))){
var state_24014__$1 = state_24014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24026_24052 = state_24014__$1;
(statearr_24026_24052[(1)] = (8));

} else {
var statearr_24027_24053 = state_24014__$1;
(statearr_24027_24053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (14))){
var inst_24008 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24028_24054 = state_24014__$1;
(statearr_24028_24054[(2)] = inst_24008);

(statearr_24028_24054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (10))){
var inst_24000 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24029_24055 = state_24014__$1;
(statearr_24029_24055[(2)] = inst_24000);

(statearr_24029_24055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (8))){
var inst_23997 = cljs.core.async.close_BANG_.call(null,to);
var state_24014__$1 = state_24014;
var statearr_24030_24056 = state_24014__$1;
(statearr_24030_24056[(2)] = inst_23997);

(statearr_24030_24056[(1)] = (10));


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
});})(c__23875__auto___24042))
;
return ((function (switch__23763__auto__,c__23875__auto___24042){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_24034 = [null,null,null,null,null,null,null,null];
(statearr_24034[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_24034[(1)] = (1));

return statearr_24034;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_24014){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object)){
var ex__23767__auto__ = e24035;
var statearr_24036_24057 = state_24014;
(statearr_24036_24057[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24058 = state_24014;
state_24014 = G__24058;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_24014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_24014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___24042))
})();
var state__23877__auto__ = (function (){var statearr_24037 = f__23876__auto__.call(null);
(statearr_24037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___24042);

return statearr_24037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___24042))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24242){
var vec__24243 = p__24242;
var v = cljs.core.nth.call(null,vec__24243,(0),null);
var p = cljs.core.nth.call(null,vec__24243,(1),null);
var job = vec__24243;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23875__auto___24425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___24425,res,vec__24243,v,p,job,jobs,results){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___24425,res,vec__24243,v,p,job,jobs,results){
return (function (state_24248){
var state_val_24249 = (state_24248[(1)]);
if((state_val_24249 === (1))){
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24248__$1,(2),res,v);
} else {
if((state_val_24249 === (2))){
var inst_24245 = (state_24248[(2)]);
var inst_24246 = cljs.core.async.close_BANG_.call(null,res);
var state_24248__$1 = (function (){var statearr_24250 = state_24248;
(statearr_24250[(7)] = inst_24245);

return statearr_24250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24248__$1,inst_24246);
} else {
return null;
}
}
});})(c__23875__auto___24425,res,vec__24243,v,p,job,jobs,results))
;
return ((function (switch__23763__auto__,c__23875__auto___24425,res,vec__24243,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0 = (function (){
var statearr_24254 = [null,null,null,null,null,null,null,null];
(statearr_24254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__);

(statearr_24254[(1)] = (1));

return statearr_24254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1 = (function (state_24248){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24255){if((e24255 instanceof Object)){
var ex__23767__auto__ = e24255;
var statearr_24256_24426 = state_24248;
(statearr_24256_24426[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24427 = state_24248;
state_24248 = G__24427;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = function(state_24248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1.call(this,state_24248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___24425,res,vec__24243,v,p,job,jobs,results))
})();
var state__23877__auto__ = (function (){var statearr_24257 = f__23876__auto__.call(null);
(statearr_24257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___24425);

return statearr_24257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___24425,res,vec__24243,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24258){
var vec__24259 = p__24258;
var v = cljs.core.nth.call(null,vec__24259,(0),null);
var p = cljs.core.nth.call(null,vec__24259,(1),null);
var job = vec__24259;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22588__auto___24428 = n;
var __24429 = (0);
while(true){
if((__24429 < n__22588__auto___24428)){
var G__24260_24430 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24260_24430) {
case "compute":
var c__23875__auto___24432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24429,c__23875__auto___24432,G__24260_24430,n__22588__auto___24428,jobs,results,process,async){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (__24429,c__23875__auto___24432,G__24260_24430,n__22588__auto___24428,jobs,results,process,async){
return (function (state_24273){
var state_val_24274 = (state_24273[(1)]);
if((state_val_24274 === (1))){
var state_24273__$1 = state_24273;
var statearr_24275_24433 = state_24273__$1;
(statearr_24275_24433[(2)] = null);

(statearr_24275_24433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (2))){
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24273__$1,(4),jobs);
} else {
if((state_val_24274 === (3))){
var inst_24271 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24273__$1,inst_24271);
} else {
if((state_val_24274 === (4))){
var inst_24263 = (state_24273[(2)]);
var inst_24264 = process.call(null,inst_24263);
var state_24273__$1 = state_24273;
if(cljs.core.truth_(inst_24264)){
var statearr_24276_24434 = state_24273__$1;
(statearr_24276_24434[(1)] = (5));

} else {
var statearr_24277_24435 = state_24273__$1;
(statearr_24277_24435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (5))){
var state_24273__$1 = state_24273;
var statearr_24278_24436 = state_24273__$1;
(statearr_24278_24436[(2)] = null);

(statearr_24278_24436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (6))){
var state_24273__$1 = state_24273;
var statearr_24279_24437 = state_24273__$1;
(statearr_24279_24437[(2)] = null);

(statearr_24279_24437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (7))){
var inst_24269 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24280_24438 = state_24273__$1;
(statearr_24280_24438[(2)] = inst_24269);

(statearr_24280_24438[(1)] = (3));


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
});})(__24429,c__23875__auto___24432,G__24260_24430,n__22588__auto___24428,jobs,results,process,async))
;
return ((function (__24429,switch__23763__auto__,c__23875__auto___24432,G__24260_24430,n__22588__auto___24428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null];
(statearr_24284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1 = (function (state_24273){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__23767__auto__ = e24285;
var statearr_24286_24439 = state_24273;
(statearr_24286_24439[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24440 = state_24273;
state_24273 = G__24440;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = function(state_24273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1.call(this,state_24273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__;
})()
;})(__24429,switch__23763__auto__,c__23875__auto___24432,G__24260_24430,n__22588__auto___24428,jobs,results,process,async))
})();
var state__23877__auto__ = (function (){var statearr_24287 = f__23876__auto__.call(null);
(statearr_24287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___24432);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(__24429,c__23875__auto___24432,G__24260_24430,n__22588__auto___24428,jobs,results,process,async))
);


break;
case "async":
var c__23875__auto___24441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24429,c__23875__auto___24441,G__24260_24430,n__22588__auto___24428,jobs,results,process,async){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (__24429,c__23875__auto___24441,G__24260_24430,n__22588__auto___24428,jobs,results,process,async){
return (function (state_24300){
var state_val_24301 = (state_24300[(1)]);
if((state_val_24301 === (1))){
var state_24300__$1 = state_24300;
var statearr_24302_24442 = state_24300__$1;
(statearr_24302_24442[(2)] = null);

(statearr_24302_24442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (2))){
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24300__$1,(4),jobs);
} else {
if((state_val_24301 === (3))){
var inst_24298 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24300__$1,inst_24298);
} else {
if((state_val_24301 === (4))){
var inst_24290 = (state_24300[(2)]);
var inst_24291 = async.call(null,inst_24290);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24291)){
var statearr_24303_24443 = state_24300__$1;
(statearr_24303_24443[(1)] = (5));

} else {
var statearr_24304_24444 = state_24300__$1;
(statearr_24304_24444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (5))){
var state_24300__$1 = state_24300;
var statearr_24305_24445 = state_24300__$1;
(statearr_24305_24445[(2)] = null);

(statearr_24305_24445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (6))){
var state_24300__$1 = state_24300;
var statearr_24306_24446 = state_24300__$1;
(statearr_24306_24446[(2)] = null);

(statearr_24306_24446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (7))){
var inst_24296 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24307_24447 = state_24300__$1;
(statearr_24307_24447[(2)] = inst_24296);

(statearr_24307_24447[(1)] = (3));


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
});})(__24429,c__23875__auto___24441,G__24260_24430,n__22588__auto___24428,jobs,results,process,async))
;
return ((function (__24429,switch__23763__auto__,c__23875__auto___24441,G__24260_24430,n__22588__auto___24428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0 = (function (){
var statearr_24311 = [null,null,null,null,null,null,null];
(statearr_24311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__);

(statearr_24311[(1)] = (1));

return statearr_24311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1 = (function (state_24300){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24312){if((e24312 instanceof Object)){
var ex__23767__auto__ = e24312;
var statearr_24313_24448 = state_24300;
(statearr_24313_24448[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24449 = state_24300;
state_24300 = G__24449;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = function(state_24300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1.call(this,state_24300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__;
})()
;})(__24429,switch__23763__auto__,c__23875__auto___24441,G__24260_24430,n__22588__auto___24428,jobs,results,process,async))
})();
var state__23877__auto__ = (function (){var statearr_24314 = f__23876__auto__.call(null);
(statearr_24314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___24441);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(__24429,c__23875__auto___24441,G__24260_24430,n__22588__auto___24428,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24450 = (__24429 + (1));
__24429 = G__24450;
continue;
} else {
}
break;
}

var c__23875__auto___24451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___24451,jobs,results,process,async){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___24451,jobs,results,process,async){
return (function (state_24336){
var state_val_24337 = (state_24336[(1)]);
if((state_val_24337 === (1))){
var state_24336__$1 = state_24336;
var statearr_24338_24452 = state_24336__$1;
(statearr_24338_24452[(2)] = null);

(statearr_24338_24452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (2))){
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24336__$1,(4),from);
} else {
if((state_val_24337 === (3))){
var inst_24334 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24336__$1,inst_24334);
} else {
if((state_val_24337 === (4))){
var inst_24317 = (state_24336[(7)]);
var inst_24317__$1 = (state_24336[(2)]);
var inst_24318 = (inst_24317__$1 == null);
var state_24336__$1 = (function (){var statearr_24339 = state_24336;
(statearr_24339[(7)] = inst_24317__$1);

return statearr_24339;
})();
if(cljs.core.truth_(inst_24318)){
var statearr_24340_24453 = state_24336__$1;
(statearr_24340_24453[(1)] = (5));

} else {
var statearr_24341_24454 = state_24336__$1;
(statearr_24341_24454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (5))){
var inst_24320 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24336__$1 = state_24336;
var statearr_24342_24455 = state_24336__$1;
(statearr_24342_24455[(2)] = inst_24320);

(statearr_24342_24455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (6))){
var inst_24322 = (state_24336[(8)]);
var inst_24317 = (state_24336[(7)]);
var inst_24322__$1 = cljs.core.async.chan.call(null,(1));
var inst_24323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24324 = [inst_24317,inst_24322__$1];
var inst_24325 = (new cljs.core.PersistentVector(null,2,(5),inst_24323,inst_24324,null));
var state_24336__$1 = (function (){var statearr_24343 = state_24336;
(statearr_24343[(8)] = inst_24322__$1);

return statearr_24343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24336__$1,(8),jobs,inst_24325);
} else {
if((state_val_24337 === (7))){
var inst_24332 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24344_24456 = state_24336__$1;
(statearr_24344_24456[(2)] = inst_24332);

(statearr_24344_24456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (8))){
var inst_24322 = (state_24336[(8)]);
var inst_24327 = (state_24336[(2)]);
var state_24336__$1 = (function (){var statearr_24345 = state_24336;
(statearr_24345[(9)] = inst_24327);

return statearr_24345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24336__$1,(9),results,inst_24322);
} else {
if((state_val_24337 === (9))){
var inst_24329 = (state_24336[(2)]);
var state_24336__$1 = (function (){var statearr_24346 = state_24336;
(statearr_24346[(10)] = inst_24329);

return statearr_24346;
})();
var statearr_24347_24457 = state_24336__$1;
(statearr_24347_24457[(2)] = null);

(statearr_24347_24457[(1)] = (2));


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
});})(c__23875__auto___24451,jobs,results,process,async))
;
return ((function (switch__23763__auto__,c__23875__auto___24451,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0 = (function (){
var statearr_24351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__);

(statearr_24351[(1)] = (1));

return statearr_24351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1 = (function (state_24336){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24352){if((e24352 instanceof Object)){
var ex__23767__auto__ = e24352;
var statearr_24353_24458 = state_24336;
(statearr_24353_24458[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24459 = state_24336;
state_24336 = G__24459;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = function(state_24336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1.call(this,state_24336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___24451,jobs,results,process,async))
})();
var state__23877__auto__ = (function (){var statearr_24354 = f__23876__auto__.call(null);
(statearr_24354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___24451);

return statearr_24354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___24451,jobs,results,process,async))
);


var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__,jobs,results,process,async){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__,jobs,results,process,async){
return (function (state_24392){
var state_val_24393 = (state_24392[(1)]);
if((state_val_24393 === (7))){
var inst_24388 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24394_24460 = state_24392__$1;
(statearr_24394_24460[(2)] = inst_24388);

(statearr_24394_24460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (20))){
var state_24392__$1 = state_24392;
var statearr_24395_24461 = state_24392__$1;
(statearr_24395_24461[(2)] = null);

(statearr_24395_24461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (1))){
var state_24392__$1 = state_24392;
var statearr_24396_24462 = state_24392__$1;
(statearr_24396_24462[(2)] = null);

(statearr_24396_24462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (4))){
var inst_24357 = (state_24392[(7)]);
var inst_24357__$1 = (state_24392[(2)]);
var inst_24358 = (inst_24357__$1 == null);
var state_24392__$1 = (function (){var statearr_24397 = state_24392;
(statearr_24397[(7)] = inst_24357__$1);

return statearr_24397;
})();
if(cljs.core.truth_(inst_24358)){
var statearr_24398_24463 = state_24392__$1;
(statearr_24398_24463[(1)] = (5));

} else {
var statearr_24399_24464 = state_24392__$1;
(statearr_24399_24464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (15))){
var inst_24370 = (state_24392[(8)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24392__$1,(18),to,inst_24370);
} else {
if((state_val_24393 === (21))){
var inst_24383 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24400_24465 = state_24392__$1;
(statearr_24400_24465[(2)] = inst_24383);

(statearr_24400_24465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (13))){
var inst_24385 = (state_24392[(2)]);
var state_24392__$1 = (function (){var statearr_24401 = state_24392;
(statearr_24401[(9)] = inst_24385);

return statearr_24401;
})();
var statearr_24402_24466 = state_24392__$1;
(statearr_24402_24466[(2)] = null);

(statearr_24402_24466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (6))){
var inst_24357 = (state_24392[(7)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24392__$1,(11),inst_24357);
} else {
if((state_val_24393 === (17))){
var inst_24378 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24378)){
var statearr_24403_24467 = state_24392__$1;
(statearr_24403_24467[(1)] = (19));

} else {
var statearr_24404_24468 = state_24392__$1;
(statearr_24404_24468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (3))){
var inst_24390 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24392__$1,inst_24390);
} else {
if((state_val_24393 === (12))){
var inst_24367 = (state_24392[(10)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24392__$1,(14),inst_24367);
} else {
if((state_val_24393 === (2))){
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24392__$1,(4),results);
} else {
if((state_val_24393 === (19))){
var state_24392__$1 = state_24392;
var statearr_24405_24469 = state_24392__$1;
(statearr_24405_24469[(2)] = null);

(statearr_24405_24469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (11))){
var inst_24367 = (state_24392[(2)]);
var state_24392__$1 = (function (){var statearr_24406 = state_24392;
(statearr_24406[(10)] = inst_24367);

return statearr_24406;
})();
var statearr_24407_24470 = state_24392__$1;
(statearr_24407_24470[(2)] = null);

(statearr_24407_24470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (9))){
var state_24392__$1 = state_24392;
var statearr_24408_24471 = state_24392__$1;
(statearr_24408_24471[(2)] = null);

(statearr_24408_24471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (5))){
var state_24392__$1 = state_24392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24409_24472 = state_24392__$1;
(statearr_24409_24472[(1)] = (8));

} else {
var statearr_24410_24473 = state_24392__$1;
(statearr_24410_24473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (14))){
var inst_24370 = (state_24392[(8)]);
var inst_24372 = (state_24392[(11)]);
var inst_24370__$1 = (state_24392[(2)]);
var inst_24371 = (inst_24370__$1 == null);
var inst_24372__$1 = cljs.core.not.call(null,inst_24371);
var state_24392__$1 = (function (){var statearr_24411 = state_24392;
(statearr_24411[(8)] = inst_24370__$1);

(statearr_24411[(11)] = inst_24372__$1);

return statearr_24411;
})();
if(inst_24372__$1){
var statearr_24412_24474 = state_24392__$1;
(statearr_24412_24474[(1)] = (15));

} else {
var statearr_24413_24475 = state_24392__$1;
(statearr_24413_24475[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (16))){
var inst_24372 = (state_24392[(11)]);
var state_24392__$1 = state_24392;
var statearr_24414_24476 = state_24392__$1;
(statearr_24414_24476[(2)] = inst_24372);

(statearr_24414_24476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (10))){
var inst_24364 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24415_24477 = state_24392__$1;
(statearr_24415_24477[(2)] = inst_24364);

(statearr_24415_24477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (18))){
var inst_24375 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24416_24478 = state_24392__$1;
(statearr_24416_24478[(2)] = inst_24375);

(statearr_24416_24478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (8))){
var inst_24361 = cljs.core.async.close_BANG_.call(null,to);
var state_24392__$1 = state_24392;
var statearr_24417_24479 = state_24392__$1;
(statearr_24417_24479[(2)] = inst_24361);

(statearr_24417_24479[(1)] = (10));


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
});})(c__23875__auto__,jobs,results,process,async))
;
return ((function (switch__23763__auto__,c__23875__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0 = (function (){
var statearr_24421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__);

(statearr_24421[(1)] = (1));

return statearr_24421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1 = (function (state_24392){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24422){if((e24422 instanceof Object)){
var ex__23767__auto__ = e24422;
var statearr_24423_24480 = state_24392;
(statearr_24423_24480[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24481 = state_24392;
state_24392 = G__24481;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__ = function(state_24392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1.call(this,state_24392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__,jobs,results,process,async))
})();
var state__23877__auto__ = (function (){var statearr_24424 = f__23876__auto__.call(null);
(statearr_24424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_24424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__,jobs,results,process,async))
);

return c__23875__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24482 = [];
var len__22743__auto___24485 = arguments.length;
var i__22744__auto___24486 = (0);
while(true){
if((i__22744__auto___24486 < len__22743__auto___24485)){
args24482.push((arguments[i__22744__auto___24486]));

var G__24487 = (i__22744__auto___24486 + (1));
i__22744__auto___24486 = G__24487;
continue;
} else {
}
break;
}

var G__24484 = args24482.length;
switch (G__24484) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24482.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24489 = [];
var len__22743__auto___24492 = arguments.length;
var i__22744__auto___24493 = (0);
while(true){
if((i__22744__auto___24493 < len__22743__auto___24492)){
args24489.push((arguments[i__22744__auto___24493]));

var G__24494 = (i__22744__auto___24493 + (1));
i__22744__auto___24493 = G__24494;
continue;
} else {
}
break;
}

var G__24491 = args24489.length;
switch (G__24491) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24489.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24496 = [];
var len__22743__auto___24549 = arguments.length;
var i__22744__auto___24550 = (0);
while(true){
if((i__22744__auto___24550 < len__22743__auto___24549)){
args24496.push((arguments[i__22744__auto___24550]));

var G__24551 = (i__22744__auto___24550 + (1));
i__22744__auto___24550 = G__24551;
continue;
} else {
}
break;
}

var G__24498 = args24496.length;
switch (G__24498) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24496.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23875__auto___24553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___24553,tc,fc){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___24553,tc,fc){
return (function (state_24524){
var state_val_24525 = (state_24524[(1)]);
if((state_val_24525 === (7))){
var inst_24520 = (state_24524[(2)]);
var state_24524__$1 = state_24524;
var statearr_24526_24554 = state_24524__$1;
(statearr_24526_24554[(2)] = inst_24520);

(statearr_24526_24554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (1))){
var state_24524__$1 = state_24524;
var statearr_24527_24555 = state_24524__$1;
(statearr_24527_24555[(2)] = null);

(statearr_24527_24555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (4))){
var inst_24501 = (state_24524[(7)]);
var inst_24501__$1 = (state_24524[(2)]);
var inst_24502 = (inst_24501__$1 == null);
var state_24524__$1 = (function (){var statearr_24528 = state_24524;
(statearr_24528[(7)] = inst_24501__$1);

return statearr_24528;
})();
if(cljs.core.truth_(inst_24502)){
var statearr_24529_24556 = state_24524__$1;
(statearr_24529_24556[(1)] = (5));

} else {
var statearr_24530_24557 = state_24524__$1;
(statearr_24530_24557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (13))){
var state_24524__$1 = state_24524;
var statearr_24531_24558 = state_24524__$1;
(statearr_24531_24558[(2)] = null);

(statearr_24531_24558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (6))){
var inst_24501 = (state_24524[(7)]);
var inst_24507 = p.call(null,inst_24501);
var state_24524__$1 = state_24524;
if(cljs.core.truth_(inst_24507)){
var statearr_24532_24559 = state_24524__$1;
(statearr_24532_24559[(1)] = (9));

} else {
var statearr_24533_24560 = state_24524__$1;
(statearr_24533_24560[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (3))){
var inst_24522 = (state_24524[(2)]);
var state_24524__$1 = state_24524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24524__$1,inst_24522);
} else {
if((state_val_24525 === (12))){
var state_24524__$1 = state_24524;
var statearr_24534_24561 = state_24524__$1;
(statearr_24534_24561[(2)] = null);

(statearr_24534_24561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (2))){
var state_24524__$1 = state_24524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24524__$1,(4),ch);
} else {
if((state_val_24525 === (11))){
var inst_24501 = (state_24524[(7)]);
var inst_24511 = (state_24524[(2)]);
var state_24524__$1 = state_24524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24524__$1,(8),inst_24511,inst_24501);
} else {
if((state_val_24525 === (9))){
var state_24524__$1 = state_24524;
var statearr_24535_24562 = state_24524__$1;
(statearr_24535_24562[(2)] = tc);

(statearr_24535_24562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (5))){
var inst_24504 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24505 = cljs.core.async.close_BANG_.call(null,fc);
var state_24524__$1 = (function (){var statearr_24536 = state_24524;
(statearr_24536[(8)] = inst_24504);

return statearr_24536;
})();
var statearr_24537_24563 = state_24524__$1;
(statearr_24537_24563[(2)] = inst_24505);

(statearr_24537_24563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (14))){
var inst_24518 = (state_24524[(2)]);
var state_24524__$1 = state_24524;
var statearr_24538_24564 = state_24524__$1;
(statearr_24538_24564[(2)] = inst_24518);

(statearr_24538_24564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (10))){
var state_24524__$1 = state_24524;
var statearr_24539_24565 = state_24524__$1;
(statearr_24539_24565[(2)] = fc);

(statearr_24539_24565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24525 === (8))){
var inst_24513 = (state_24524[(2)]);
var state_24524__$1 = state_24524;
if(cljs.core.truth_(inst_24513)){
var statearr_24540_24566 = state_24524__$1;
(statearr_24540_24566[(1)] = (12));

} else {
var statearr_24541_24567 = state_24524__$1;
(statearr_24541_24567[(1)] = (13));

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
});})(c__23875__auto___24553,tc,fc))
;
return ((function (switch__23763__auto__,c__23875__auto___24553,tc,fc){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_24545 = [null,null,null,null,null,null,null,null,null];
(statearr_24545[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_24545[(1)] = (1));

return statearr_24545;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_24524){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24546){if((e24546 instanceof Object)){
var ex__23767__auto__ = e24546;
var statearr_24547_24568 = state_24524;
(statearr_24547_24568[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24569 = state_24524;
state_24524 = G__24569;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_24524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_24524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___24553,tc,fc))
})();
var state__23877__auto__ = (function (){var statearr_24548 = f__23876__auto__.call(null);
(statearr_24548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___24553);

return statearr_24548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___24553,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__){
return (function (state_24633){
var state_val_24634 = (state_24633[(1)]);
if((state_val_24634 === (7))){
var inst_24629 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
var statearr_24635_24656 = state_24633__$1;
(statearr_24635_24656[(2)] = inst_24629);

(statearr_24635_24656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (1))){
var inst_24613 = init;
var state_24633__$1 = (function (){var statearr_24636 = state_24633;
(statearr_24636[(7)] = inst_24613);

return statearr_24636;
})();
var statearr_24637_24657 = state_24633__$1;
(statearr_24637_24657[(2)] = null);

(statearr_24637_24657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (4))){
var inst_24616 = (state_24633[(8)]);
var inst_24616__$1 = (state_24633[(2)]);
var inst_24617 = (inst_24616__$1 == null);
var state_24633__$1 = (function (){var statearr_24638 = state_24633;
(statearr_24638[(8)] = inst_24616__$1);

return statearr_24638;
})();
if(cljs.core.truth_(inst_24617)){
var statearr_24639_24658 = state_24633__$1;
(statearr_24639_24658[(1)] = (5));

} else {
var statearr_24640_24659 = state_24633__$1;
(statearr_24640_24659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (6))){
var inst_24613 = (state_24633[(7)]);
var inst_24616 = (state_24633[(8)]);
var inst_24620 = (state_24633[(9)]);
var inst_24620__$1 = f.call(null,inst_24613,inst_24616);
var inst_24621 = cljs.core.reduced_QMARK_.call(null,inst_24620__$1);
var state_24633__$1 = (function (){var statearr_24641 = state_24633;
(statearr_24641[(9)] = inst_24620__$1);

return statearr_24641;
})();
if(inst_24621){
var statearr_24642_24660 = state_24633__$1;
(statearr_24642_24660[(1)] = (8));

} else {
var statearr_24643_24661 = state_24633__$1;
(statearr_24643_24661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (3))){
var inst_24631 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24633__$1,inst_24631);
} else {
if((state_val_24634 === (2))){
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24633__$1,(4),ch);
} else {
if((state_val_24634 === (9))){
var inst_24620 = (state_24633[(9)]);
var inst_24613 = inst_24620;
var state_24633__$1 = (function (){var statearr_24644 = state_24633;
(statearr_24644[(7)] = inst_24613);

return statearr_24644;
})();
var statearr_24645_24662 = state_24633__$1;
(statearr_24645_24662[(2)] = null);

(statearr_24645_24662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (5))){
var inst_24613 = (state_24633[(7)]);
var state_24633__$1 = state_24633;
var statearr_24646_24663 = state_24633__$1;
(statearr_24646_24663[(2)] = inst_24613);

(statearr_24646_24663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (10))){
var inst_24627 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
var statearr_24647_24664 = state_24633__$1;
(statearr_24647_24664[(2)] = inst_24627);

(statearr_24647_24664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (8))){
var inst_24620 = (state_24633[(9)]);
var inst_24623 = cljs.core.deref.call(null,inst_24620);
var state_24633__$1 = state_24633;
var statearr_24648_24665 = state_24633__$1;
(statearr_24648_24665[(2)] = inst_24623);

(statearr_24648_24665[(1)] = (10));


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
});})(c__23875__auto__))
;
return ((function (switch__23763__auto__,c__23875__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23764__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23764__auto____0 = (function (){
var statearr_24652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24652[(0)] = cljs$core$async$reduce_$_state_machine__23764__auto__);

(statearr_24652[(1)] = (1));

return statearr_24652;
});
var cljs$core$async$reduce_$_state_machine__23764__auto____1 = (function (state_24633){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24653){if((e24653 instanceof Object)){
var ex__23767__auto__ = e24653;
var statearr_24654_24666 = state_24633;
(statearr_24654_24666[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24667 = state_24633;
state_24633 = G__24667;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23764__auto__ = function(state_24633){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23764__auto____1.call(this,state_24633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23764__auto____0;
cljs$core$async$reduce_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23764__auto____1;
return cljs$core$async$reduce_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__))
})();
var state__23877__auto__ = (function (){var statearr_24655 = f__23876__auto__.call(null);
(statearr_24655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_24655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__))
);

return c__23875__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24668 = [];
var len__22743__auto___24720 = arguments.length;
var i__22744__auto___24721 = (0);
while(true){
if((i__22744__auto___24721 < len__22743__auto___24720)){
args24668.push((arguments[i__22744__auto___24721]));

var G__24722 = (i__22744__auto___24721 + (1));
i__22744__auto___24721 = G__24722;
continue;
} else {
}
break;
}

var G__24670 = args24668.length;
switch (G__24670) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24668.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__){
return (function (state_24695){
var state_val_24696 = (state_24695[(1)]);
if((state_val_24696 === (7))){
var inst_24677 = (state_24695[(2)]);
var state_24695__$1 = state_24695;
var statearr_24697_24724 = state_24695__$1;
(statearr_24697_24724[(2)] = inst_24677);

(statearr_24697_24724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (1))){
var inst_24671 = cljs.core.seq.call(null,coll);
var inst_24672 = inst_24671;
var state_24695__$1 = (function (){var statearr_24698 = state_24695;
(statearr_24698[(7)] = inst_24672);

return statearr_24698;
})();
var statearr_24699_24725 = state_24695__$1;
(statearr_24699_24725[(2)] = null);

(statearr_24699_24725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (4))){
var inst_24672 = (state_24695[(7)]);
var inst_24675 = cljs.core.first.call(null,inst_24672);
var state_24695__$1 = state_24695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24695__$1,(7),ch,inst_24675);
} else {
if((state_val_24696 === (13))){
var inst_24689 = (state_24695[(2)]);
var state_24695__$1 = state_24695;
var statearr_24700_24726 = state_24695__$1;
(statearr_24700_24726[(2)] = inst_24689);

(statearr_24700_24726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (6))){
var inst_24680 = (state_24695[(2)]);
var state_24695__$1 = state_24695;
if(cljs.core.truth_(inst_24680)){
var statearr_24701_24727 = state_24695__$1;
(statearr_24701_24727[(1)] = (8));

} else {
var statearr_24702_24728 = state_24695__$1;
(statearr_24702_24728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (3))){
var inst_24693 = (state_24695[(2)]);
var state_24695__$1 = state_24695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24695__$1,inst_24693);
} else {
if((state_val_24696 === (12))){
var state_24695__$1 = state_24695;
var statearr_24703_24729 = state_24695__$1;
(statearr_24703_24729[(2)] = null);

(statearr_24703_24729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (2))){
var inst_24672 = (state_24695[(7)]);
var state_24695__$1 = state_24695;
if(cljs.core.truth_(inst_24672)){
var statearr_24704_24730 = state_24695__$1;
(statearr_24704_24730[(1)] = (4));

} else {
var statearr_24705_24731 = state_24695__$1;
(statearr_24705_24731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (11))){
var inst_24686 = cljs.core.async.close_BANG_.call(null,ch);
var state_24695__$1 = state_24695;
var statearr_24706_24732 = state_24695__$1;
(statearr_24706_24732[(2)] = inst_24686);

(statearr_24706_24732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (9))){
var state_24695__$1 = state_24695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24707_24733 = state_24695__$1;
(statearr_24707_24733[(1)] = (11));

} else {
var statearr_24708_24734 = state_24695__$1;
(statearr_24708_24734[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (5))){
var inst_24672 = (state_24695[(7)]);
var state_24695__$1 = state_24695;
var statearr_24709_24735 = state_24695__$1;
(statearr_24709_24735[(2)] = inst_24672);

(statearr_24709_24735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (10))){
var inst_24691 = (state_24695[(2)]);
var state_24695__$1 = state_24695;
var statearr_24710_24736 = state_24695__$1;
(statearr_24710_24736[(2)] = inst_24691);

(statearr_24710_24736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24696 === (8))){
var inst_24672 = (state_24695[(7)]);
var inst_24682 = cljs.core.next.call(null,inst_24672);
var inst_24672__$1 = inst_24682;
var state_24695__$1 = (function (){var statearr_24711 = state_24695;
(statearr_24711[(7)] = inst_24672__$1);

return statearr_24711;
})();
var statearr_24712_24737 = state_24695__$1;
(statearr_24712_24737[(2)] = null);

(statearr_24712_24737[(1)] = (2));


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
});})(c__23875__auto__))
;
return ((function (switch__23763__auto__,c__23875__auto__){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_24716 = [null,null,null,null,null,null,null,null];
(statearr_24716[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_24716[(1)] = (1));

return statearr_24716;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_24695){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_24695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e24717){if((e24717 instanceof Object)){
var ex__23767__auto__ = e24717;
var statearr_24718_24738 = state_24695;
(statearr_24718_24738[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24739 = state_24695;
state_24695 = G__24739;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_24695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_24695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__))
})();
var state__23877__auto__ = (function (){var statearr_24719 = f__23876__auto__.call(null);
(statearr_24719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_24719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__))
);

return c__23875__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22336__auto__ = (((_ == null))?null:_);
var m__22337__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,_);
} else {
var m__22337__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22337__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m,ch);
} else {
var m__22337__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m);
} else {
var m__22337__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24961 = (function (mult,ch,cs,meta24962){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24962 = meta24962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24963,meta24962__$1){
var self__ = this;
var _24963__$1 = this;
return (new cljs.core.async.t_cljs$core$async24961(self__.mult,self__.ch,self__.cs,meta24962__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24963){
var self__ = this;
var _24963__$1 = this;
return self__.meta24962;
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24962","meta24962",1870719541,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24961";

cljs.core.async.t_cljs$core$async24961.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async24961");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24961 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24961(mult__$1,ch__$1,cs__$1,meta24962){
return (new cljs.core.async.t_cljs$core$async24961(mult__$1,ch__$1,cs__$1,meta24962));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24961(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23875__auto___25182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___25182,cs,m,dchan,dctr,done){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___25182,cs,m,dchan,dctr,done){
return (function (state_25094){
var state_val_25095 = (state_25094[(1)]);
if((state_val_25095 === (7))){
var inst_25090 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25096_25183 = state_25094__$1;
(statearr_25096_25183[(2)] = inst_25090);

(statearr_25096_25183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (20))){
var inst_24995 = (state_25094[(7)]);
var inst_25005 = cljs.core.first.call(null,inst_24995);
var inst_25006 = cljs.core.nth.call(null,inst_25005,(0),null);
var inst_25007 = cljs.core.nth.call(null,inst_25005,(1),null);
var state_25094__$1 = (function (){var statearr_25097 = state_25094;
(statearr_25097[(8)] = inst_25006);

return statearr_25097;
})();
if(cljs.core.truth_(inst_25007)){
var statearr_25098_25184 = state_25094__$1;
(statearr_25098_25184[(1)] = (22));

} else {
var statearr_25099_25185 = state_25094__$1;
(statearr_25099_25185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (27))){
var inst_25037 = (state_25094[(9)]);
var inst_25042 = (state_25094[(10)]);
var inst_24966 = (state_25094[(11)]);
var inst_25035 = (state_25094[(12)]);
var inst_25042__$1 = cljs.core._nth.call(null,inst_25035,inst_25037);
var inst_25043 = cljs.core.async.put_BANG_.call(null,inst_25042__$1,inst_24966,done);
var state_25094__$1 = (function (){var statearr_25100 = state_25094;
(statearr_25100[(10)] = inst_25042__$1);

return statearr_25100;
})();
if(cljs.core.truth_(inst_25043)){
var statearr_25101_25186 = state_25094__$1;
(statearr_25101_25186[(1)] = (30));

} else {
var statearr_25102_25187 = state_25094__$1;
(statearr_25102_25187[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (1))){
var state_25094__$1 = state_25094;
var statearr_25103_25188 = state_25094__$1;
(statearr_25103_25188[(2)] = null);

(statearr_25103_25188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (24))){
var inst_24995 = (state_25094[(7)]);
var inst_25012 = (state_25094[(2)]);
var inst_25013 = cljs.core.next.call(null,inst_24995);
var inst_24975 = inst_25013;
var inst_24976 = null;
var inst_24977 = (0);
var inst_24978 = (0);
var state_25094__$1 = (function (){var statearr_25104 = state_25094;
(statearr_25104[(13)] = inst_24976);

(statearr_25104[(14)] = inst_24977);

(statearr_25104[(15)] = inst_24975);

(statearr_25104[(16)] = inst_25012);

(statearr_25104[(17)] = inst_24978);

return statearr_25104;
})();
var statearr_25105_25189 = state_25094__$1;
(statearr_25105_25189[(2)] = null);

(statearr_25105_25189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (39))){
var state_25094__$1 = state_25094;
var statearr_25109_25190 = state_25094__$1;
(statearr_25109_25190[(2)] = null);

(statearr_25109_25190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (4))){
var inst_24966 = (state_25094[(11)]);
var inst_24966__$1 = (state_25094[(2)]);
var inst_24967 = (inst_24966__$1 == null);
var state_25094__$1 = (function (){var statearr_25110 = state_25094;
(statearr_25110[(11)] = inst_24966__$1);

return statearr_25110;
})();
if(cljs.core.truth_(inst_24967)){
var statearr_25111_25191 = state_25094__$1;
(statearr_25111_25191[(1)] = (5));

} else {
var statearr_25112_25192 = state_25094__$1;
(statearr_25112_25192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (15))){
var inst_24976 = (state_25094[(13)]);
var inst_24977 = (state_25094[(14)]);
var inst_24975 = (state_25094[(15)]);
var inst_24978 = (state_25094[(17)]);
var inst_24991 = (state_25094[(2)]);
var inst_24992 = (inst_24978 + (1));
var tmp25106 = inst_24976;
var tmp25107 = inst_24977;
var tmp25108 = inst_24975;
var inst_24975__$1 = tmp25108;
var inst_24976__$1 = tmp25106;
var inst_24977__$1 = tmp25107;
var inst_24978__$1 = inst_24992;
var state_25094__$1 = (function (){var statearr_25113 = state_25094;
(statearr_25113[(13)] = inst_24976__$1);

(statearr_25113[(14)] = inst_24977__$1);

(statearr_25113[(18)] = inst_24991);

(statearr_25113[(15)] = inst_24975__$1);

(statearr_25113[(17)] = inst_24978__$1);

return statearr_25113;
})();
var statearr_25114_25193 = state_25094__$1;
(statearr_25114_25193[(2)] = null);

(statearr_25114_25193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (21))){
var inst_25016 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25118_25194 = state_25094__$1;
(statearr_25118_25194[(2)] = inst_25016);

(statearr_25118_25194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (31))){
var inst_25042 = (state_25094[(10)]);
var inst_25046 = done.call(null,null);
var inst_25047 = cljs.core.async.untap_STAR_.call(null,m,inst_25042);
var state_25094__$1 = (function (){var statearr_25119 = state_25094;
(statearr_25119[(19)] = inst_25046);

return statearr_25119;
})();
var statearr_25120_25195 = state_25094__$1;
(statearr_25120_25195[(2)] = inst_25047);

(statearr_25120_25195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (32))){
var inst_25037 = (state_25094[(9)]);
var inst_25035 = (state_25094[(12)]);
var inst_25034 = (state_25094[(20)]);
var inst_25036 = (state_25094[(21)]);
var inst_25049 = (state_25094[(2)]);
var inst_25050 = (inst_25037 + (1));
var tmp25115 = inst_25035;
var tmp25116 = inst_25034;
var tmp25117 = inst_25036;
var inst_25034__$1 = tmp25116;
var inst_25035__$1 = tmp25115;
var inst_25036__$1 = tmp25117;
var inst_25037__$1 = inst_25050;
var state_25094__$1 = (function (){var statearr_25121 = state_25094;
(statearr_25121[(22)] = inst_25049);

(statearr_25121[(9)] = inst_25037__$1);

(statearr_25121[(12)] = inst_25035__$1);

(statearr_25121[(20)] = inst_25034__$1);

(statearr_25121[(21)] = inst_25036__$1);

return statearr_25121;
})();
var statearr_25122_25196 = state_25094__$1;
(statearr_25122_25196[(2)] = null);

(statearr_25122_25196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (40))){
var inst_25062 = (state_25094[(23)]);
var inst_25066 = done.call(null,null);
var inst_25067 = cljs.core.async.untap_STAR_.call(null,m,inst_25062);
var state_25094__$1 = (function (){var statearr_25123 = state_25094;
(statearr_25123[(24)] = inst_25066);

return statearr_25123;
})();
var statearr_25124_25197 = state_25094__$1;
(statearr_25124_25197[(2)] = inst_25067);

(statearr_25124_25197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (33))){
var inst_25053 = (state_25094[(25)]);
var inst_25055 = cljs.core.chunked_seq_QMARK_.call(null,inst_25053);
var state_25094__$1 = state_25094;
if(inst_25055){
var statearr_25125_25198 = state_25094__$1;
(statearr_25125_25198[(1)] = (36));

} else {
var statearr_25126_25199 = state_25094__$1;
(statearr_25126_25199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (13))){
var inst_24985 = (state_25094[(26)]);
var inst_24988 = cljs.core.async.close_BANG_.call(null,inst_24985);
var state_25094__$1 = state_25094;
var statearr_25127_25200 = state_25094__$1;
(statearr_25127_25200[(2)] = inst_24988);

(statearr_25127_25200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (22))){
var inst_25006 = (state_25094[(8)]);
var inst_25009 = cljs.core.async.close_BANG_.call(null,inst_25006);
var state_25094__$1 = state_25094;
var statearr_25128_25201 = state_25094__$1;
(statearr_25128_25201[(2)] = inst_25009);

(statearr_25128_25201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (36))){
var inst_25053 = (state_25094[(25)]);
var inst_25057 = cljs.core.chunk_first.call(null,inst_25053);
var inst_25058 = cljs.core.chunk_rest.call(null,inst_25053);
var inst_25059 = cljs.core.count.call(null,inst_25057);
var inst_25034 = inst_25058;
var inst_25035 = inst_25057;
var inst_25036 = inst_25059;
var inst_25037 = (0);
var state_25094__$1 = (function (){var statearr_25129 = state_25094;
(statearr_25129[(9)] = inst_25037);

(statearr_25129[(12)] = inst_25035);

(statearr_25129[(20)] = inst_25034);

(statearr_25129[(21)] = inst_25036);

return statearr_25129;
})();
var statearr_25130_25202 = state_25094__$1;
(statearr_25130_25202[(2)] = null);

(statearr_25130_25202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (41))){
var inst_25053 = (state_25094[(25)]);
var inst_25069 = (state_25094[(2)]);
var inst_25070 = cljs.core.next.call(null,inst_25053);
var inst_25034 = inst_25070;
var inst_25035 = null;
var inst_25036 = (0);
var inst_25037 = (0);
var state_25094__$1 = (function (){var statearr_25131 = state_25094;
(statearr_25131[(27)] = inst_25069);

(statearr_25131[(9)] = inst_25037);

(statearr_25131[(12)] = inst_25035);

(statearr_25131[(20)] = inst_25034);

(statearr_25131[(21)] = inst_25036);

return statearr_25131;
})();
var statearr_25132_25203 = state_25094__$1;
(statearr_25132_25203[(2)] = null);

(statearr_25132_25203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (43))){
var state_25094__$1 = state_25094;
var statearr_25133_25204 = state_25094__$1;
(statearr_25133_25204[(2)] = null);

(statearr_25133_25204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (29))){
var inst_25078 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25134_25205 = state_25094__$1;
(statearr_25134_25205[(2)] = inst_25078);

(statearr_25134_25205[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (44))){
var inst_25087 = (state_25094[(2)]);
var state_25094__$1 = (function (){var statearr_25135 = state_25094;
(statearr_25135[(28)] = inst_25087);

return statearr_25135;
})();
var statearr_25136_25206 = state_25094__$1;
(statearr_25136_25206[(2)] = null);

(statearr_25136_25206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (6))){
var inst_25026 = (state_25094[(29)]);
var inst_25025 = cljs.core.deref.call(null,cs);
var inst_25026__$1 = cljs.core.keys.call(null,inst_25025);
var inst_25027 = cljs.core.count.call(null,inst_25026__$1);
var inst_25028 = cljs.core.reset_BANG_.call(null,dctr,inst_25027);
var inst_25033 = cljs.core.seq.call(null,inst_25026__$1);
var inst_25034 = inst_25033;
var inst_25035 = null;
var inst_25036 = (0);
var inst_25037 = (0);
var state_25094__$1 = (function (){var statearr_25137 = state_25094;
(statearr_25137[(30)] = inst_25028);

(statearr_25137[(9)] = inst_25037);

(statearr_25137[(29)] = inst_25026__$1);

(statearr_25137[(12)] = inst_25035);

(statearr_25137[(20)] = inst_25034);

(statearr_25137[(21)] = inst_25036);

return statearr_25137;
})();
var statearr_25138_25207 = state_25094__$1;
(statearr_25138_25207[(2)] = null);

(statearr_25138_25207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (28))){
var inst_25053 = (state_25094[(25)]);
var inst_25034 = (state_25094[(20)]);
var inst_25053__$1 = cljs.core.seq.call(null,inst_25034);
var state_25094__$1 = (function (){var statearr_25139 = state_25094;
(statearr_25139[(25)] = inst_25053__$1);

return statearr_25139;
})();
if(inst_25053__$1){
var statearr_25140_25208 = state_25094__$1;
(statearr_25140_25208[(1)] = (33));

} else {
var statearr_25141_25209 = state_25094__$1;
(statearr_25141_25209[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (25))){
var inst_25037 = (state_25094[(9)]);
var inst_25036 = (state_25094[(21)]);
var inst_25039 = (inst_25037 < inst_25036);
var inst_25040 = inst_25039;
var state_25094__$1 = state_25094;
if(cljs.core.truth_(inst_25040)){
var statearr_25142_25210 = state_25094__$1;
(statearr_25142_25210[(1)] = (27));

} else {
var statearr_25143_25211 = state_25094__$1;
(statearr_25143_25211[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (34))){
var state_25094__$1 = state_25094;
var statearr_25144_25212 = state_25094__$1;
(statearr_25144_25212[(2)] = null);

(statearr_25144_25212[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (17))){
var state_25094__$1 = state_25094;
var statearr_25145_25213 = state_25094__$1;
(statearr_25145_25213[(2)] = null);

(statearr_25145_25213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (3))){
var inst_25092 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25094__$1,inst_25092);
} else {
if((state_val_25095 === (12))){
var inst_25021 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25146_25214 = state_25094__$1;
(statearr_25146_25214[(2)] = inst_25021);

(statearr_25146_25214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (2))){
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25094__$1,(4),ch);
} else {
if((state_val_25095 === (23))){
var state_25094__$1 = state_25094;
var statearr_25147_25215 = state_25094__$1;
(statearr_25147_25215[(2)] = null);

(statearr_25147_25215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (35))){
var inst_25076 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25148_25216 = state_25094__$1;
(statearr_25148_25216[(2)] = inst_25076);

(statearr_25148_25216[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (19))){
var inst_24995 = (state_25094[(7)]);
var inst_24999 = cljs.core.chunk_first.call(null,inst_24995);
var inst_25000 = cljs.core.chunk_rest.call(null,inst_24995);
var inst_25001 = cljs.core.count.call(null,inst_24999);
var inst_24975 = inst_25000;
var inst_24976 = inst_24999;
var inst_24977 = inst_25001;
var inst_24978 = (0);
var state_25094__$1 = (function (){var statearr_25149 = state_25094;
(statearr_25149[(13)] = inst_24976);

(statearr_25149[(14)] = inst_24977);

(statearr_25149[(15)] = inst_24975);

(statearr_25149[(17)] = inst_24978);

return statearr_25149;
})();
var statearr_25150_25217 = state_25094__$1;
(statearr_25150_25217[(2)] = null);

(statearr_25150_25217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (11))){
var inst_24995 = (state_25094[(7)]);
var inst_24975 = (state_25094[(15)]);
var inst_24995__$1 = cljs.core.seq.call(null,inst_24975);
var state_25094__$1 = (function (){var statearr_25151 = state_25094;
(statearr_25151[(7)] = inst_24995__$1);

return statearr_25151;
})();
if(inst_24995__$1){
var statearr_25152_25218 = state_25094__$1;
(statearr_25152_25218[(1)] = (16));

} else {
var statearr_25153_25219 = state_25094__$1;
(statearr_25153_25219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (9))){
var inst_25023 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25154_25220 = state_25094__$1;
(statearr_25154_25220[(2)] = inst_25023);

(statearr_25154_25220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (5))){
var inst_24973 = cljs.core.deref.call(null,cs);
var inst_24974 = cljs.core.seq.call(null,inst_24973);
var inst_24975 = inst_24974;
var inst_24976 = null;
var inst_24977 = (0);
var inst_24978 = (0);
var state_25094__$1 = (function (){var statearr_25155 = state_25094;
(statearr_25155[(13)] = inst_24976);

(statearr_25155[(14)] = inst_24977);

(statearr_25155[(15)] = inst_24975);

(statearr_25155[(17)] = inst_24978);

return statearr_25155;
})();
var statearr_25156_25221 = state_25094__$1;
(statearr_25156_25221[(2)] = null);

(statearr_25156_25221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (14))){
var state_25094__$1 = state_25094;
var statearr_25157_25222 = state_25094__$1;
(statearr_25157_25222[(2)] = null);

(statearr_25157_25222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (45))){
var inst_25084 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25158_25223 = state_25094__$1;
(statearr_25158_25223[(2)] = inst_25084);

(statearr_25158_25223[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (26))){
var inst_25026 = (state_25094[(29)]);
var inst_25080 = (state_25094[(2)]);
var inst_25081 = cljs.core.seq.call(null,inst_25026);
var state_25094__$1 = (function (){var statearr_25159 = state_25094;
(statearr_25159[(31)] = inst_25080);

return statearr_25159;
})();
if(inst_25081){
var statearr_25160_25224 = state_25094__$1;
(statearr_25160_25224[(1)] = (42));

} else {
var statearr_25161_25225 = state_25094__$1;
(statearr_25161_25225[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (16))){
var inst_24995 = (state_25094[(7)]);
var inst_24997 = cljs.core.chunked_seq_QMARK_.call(null,inst_24995);
var state_25094__$1 = state_25094;
if(inst_24997){
var statearr_25162_25226 = state_25094__$1;
(statearr_25162_25226[(1)] = (19));

} else {
var statearr_25163_25227 = state_25094__$1;
(statearr_25163_25227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (38))){
var inst_25073 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25164_25228 = state_25094__$1;
(statearr_25164_25228[(2)] = inst_25073);

(statearr_25164_25228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (30))){
var state_25094__$1 = state_25094;
var statearr_25165_25229 = state_25094__$1;
(statearr_25165_25229[(2)] = null);

(statearr_25165_25229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (10))){
var inst_24976 = (state_25094[(13)]);
var inst_24978 = (state_25094[(17)]);
var inst_24984 = cljs.core._nth.call(null,inst_24976,inst_24978);
var inst_24985 = cljs.core.nth.call(null,inst_24984,(0),null);
var inst_24986 = cljs.core.nth.call(null,inst_24984,(1),null);
var state_25094__$1 = (function (){var statearr_25166 = state_25094;
(statearr_25166[(26)] = inst_24985);

return statearr_25166;
})();
if(cljs.core.truth_(inst_24986)){
var statearr_25167_25230 = state_25094__$1;
(statearr_25167_25230[(1)] = (13));

} else {
var statearr_25168_25231 = state_25094__$1;
(statearr_25168_25231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (18))){
var inst_25019 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25169_25232 = state_25094__$1;
(statearr_25169_25232[(2)] = inst_25019);

(statearr_25169_25232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (42))){
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25094__$1,(45),dchan);
} else {
if((state_val_25095 === (37))){
var inst_25053 = (state_25094[(25)]);
var inst_24966 = (state_25094[(11)]);
var inst_25062 = (state_25094[(23)]);
var inst_25062__$1 = cljs.core.first.call(null,inst_25053);
var inst_25063 = cljs.core.async.put_BANG_.call(null,inst_25062__$1,inst_24966,done);
var state_25094__$1 = (function (){var statearr_25170 = state_25094;
(statearr_25170[(23)] = inst_25062__$1);

return statearr_25170;
})();
if(cljs.core.truth_(inst_25063)){
var statearr_25171_25233 = state_25094__$1;
(statearr_25171_25233[(1)] = (39));

} else {
var statearr_25172_25234 = state_25094__$1;
(statearr_25172_25234[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (8))){
var inst_24977 = (state_25094[(14)]);
var inst_24978 = (state_25094[(17)]);
var inst_24980 = (inst_24978 < inst_24977);
var inst_24981 = inst_24980;
var state_25094__$1 = state_25094;
if(cljs.core.truth_(inst_24981)){
var statearr_25173_25235 = state_25094__$1;
(statearr_25173_25235[(1)] = (10));

} else {
var statearr_25174_25236 = state_25094__$1;
(statearr_25174_25236[(1)] = (11));

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
});})(c__23875__auto___25182,cs,m,dchan,dctr,done))
;
return ((function (switch__23763__auto__,c__23875__auto___25182,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23764__auto__ = null;
var cljs$core$async$mult_$_state_machine__23764__auto____0 = (function (){
var statearr_25178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25178[(0)] = cljs$core$async$mult_$_state_machine__23764__auto__);

(statearr_25178[(1)] = (1));

return statearr_25178;
});
var cljs$core$async$mult_$_state_machine__23764__auto____1 = (function (state_25094){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_25094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e25179){if((e25179 instanceof Object)){
var ex__23767__auto__ = e25179;
var statearr_25180_25237 = state_25094;
(statearr_25180_25237[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25238 = state_25094;
state_25094 = G__25238;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23764__auto__ = function(state_25094){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23764__auto____1.call(this,state_25094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23764__auto____0;
cljs$core$async$mult_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23764__auto____1;
return cljs$core$async$mult_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___25182,cs,m,dchan,dctr,done))
})();
var state__23877__auto__ = (function (){var statearr_25181 = f__23876__auto__.call(null);
(statearr_25181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___25182);

return statearr_25181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___25182,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25239 = [];
var len__22743__auto___25242 = arguments.length;
var i__22744__auto___25243 = (0);
while(true){
if((i__22744__auto___25243 < len__22743__auto___25242)){
args25239.push((arguments[i__22744__auto___25243]));

var G__25244 = (i__22744__auto___25243 + (1));
i__22744__auto___25243 = G__25244;
continue;
} else {
}
break;
}

var G__25241 = args25239.length;
switch (G__25241) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25239.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m,ch);
} else {
var m__22337__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m,ch);
} else {
var m__22337__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m);
} else {
var m__22337__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m,state_map);
} else {
var m__22337__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22336__auto__ = (((m == null))?null:m);
var m__22337__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,m,mode);
} else {
var m__22337__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22750__auto__ = [];
var len__22743__auto___25256 = arguments.length;
var i__22744__auto___25257 = (0);
while(true){
if((i__22744__auto___25257 < len__22743__auto___25256)){
args__22750__auto__.push((arguments[i__22744__auto___25257]));

var G__25258 = (i__22744__auto___25257 + (1));
i__22744__auto___25257 = G__25258;
continue;
} else {
}
break;
}

var argseq__22751__auto__ = ((((3) < args__22750__auto__.length))?(new cljs.core.IndexedSeq(args__22750__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22751__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25250){
var map__25251 = p__25250;
var map__25251__$1 = ((((!((map__25251 == null)))?((((map__25251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25251):map__25251);
var opts = map__25251__$1;
var statearr_25253_25259 = state;
(statearr_25253_25259[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25251,map__25251__$1,opts){
return (function (val){
var statearr_25254_25260 = state;
(statearr_25254_25260[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25251,map__25251__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25255_25261 = state;
(statearr_25255_25261[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25246){
var G__25247 = cljs.core.first.call(null,seq25246);
var seq25246__$1 = cljs.core.next.call(null,seq25246);
var G__25248 = cljs.core.first.call(null,seq25246__$1);
var seq25246__$2 = cljs.core.next.call(null,seq25246__$1);
var G__25249 = cljs.core.first.call(null,seq25246__$2);
var seq25246__$3 = cljs.core.next.call(null,seq25246__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25247,G__25248,G__25249,seq25246__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25425 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25426){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25426 = meta25426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25427,meta25426__$1){
var self__ = this;
var _25427__$1 = this;
return (new cljs.core.async.t_cljs$core$async25425(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25426__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25427){
var self__ = this;
var _25427__$1 = this;
return self__.meta25426;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25426","meta25426",1006578345,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25425";

cljs.core.async.t_cljs$core$async25425.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async25425");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25425 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25425(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25426){
return (new cljs.core.async.t_cljs$core$async25425(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25426));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25425(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23875__auto___25588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___25588,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___25588,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25525){
var state_val_25526 = (state_25525[(1)]);
if((state_val_25526 === (7))){
var inst_25443 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25527_25589 = state_25525__$1;
(statearr_25527_25589[(2)] = inst_25443);

(statearr_25527_25589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (20))){
var inst_25455 = (state_25525[(7)]);
var state_25525__$1 = state_25525;
var statearr_25528_25590 = state_25525__$1;
(statearr_25528_25590[(2)] = inst_25455);

(statearr_25528_25590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (27))){
var state_25525__$1 = state_25525;
var statearr_25529_25591 = state_25525__$1;
(statearr_25529_25591[(2)] = null);

(statearr_25529_25591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (1))){
var inst_25431 = (state_25525[(8)]);
var inst_25431__$1 = calc_state.call(null);
var inst_25433 = (inst_25431__$1 == null);
var inst_25434 = cljs.core.not.call(null,inst_25433);
var state_25525__$1 = (function (){var statearr_25530 = state_25525;
(statearr_25530[(8)] = inst_25431__$1);

return statearr_25530;
})();
if(inst_25434){
var statearr_25531_25592 = state_25525__$1;
(statearr_25531_25592[(1)] = (2));

} else {
var statearr_25532_25593 = state_25525__$1;
(statearr_25532_25593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (24))){
var inst_25478 = (state_25525[(9)]);
var inst_25499 = (state_25525[(10)]);
var inst_25485 = (state_25525[(11)]);
var inst_25499__$1 = inst_25478.call(null,inst_25485);
var state_25525__$1 = (function (){var statearr_25533 = state_25525;
(statearr_25533[(10)] = inst_25499__$1);

return statearr_25533;
})();
if(cljs.core.truth_(inst_25499__$1)){
var statearr_25534_25594 = state_25525__$1;
(statearr_25534_25594[(1)] = (29));

} else {
var statearr_25535_25595 = state_25525__$1;
(statearr_25535_25595[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (4))){
var inst_25446 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25446)){
var statearr_25536_25596 = state_25525__$1;
(statearr_25536_25596[(1)] = (8));

} else {
var statearr_25537_25597 = state_25525__$1;
(statearr_25537_25597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (15))){
var inst_25472 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25472)){
var statearr_25538_25598 = state_25525__$1;
(statearr_25538_25598[(1)] = (19));

} else {
var statearr_25539_25599 = state_25525__$1;
(statearr_25539_25599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (21))){
var inst_25477 = (state_25525[(12)]);
var inst_25477__$1 = (state_25525[(2)]);
var inst_25478 = cljs.core.get.call(null,inst_25477__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25479 = cljs.core.get.call(null,inst_25477__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25480 = cljs.core.get.call(null,inst_25477__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25525__$1 = (function (){var statearr_25540 = state_25525;
(statearr_25540[(9)] = inst_25478);

(statearr_25540[(12)] = inst_25477__$1);

(statearr_25540[(13)] = inst_25479);

return statearr_25540;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25525__$1,(22),inst_25480);
} else {
if((state_val_25526 === (31))){
var inst_25507 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25507)){
var statearr_25541_25600 = state_25525__$1;
(statearr_25541_25600[(1)] = (32));

} else {
var statearr_25542_25601 = state_25525__$1;
(statearr_25542_25601[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (32))){
var inst_25484 = (state_25525[(14)]);
var state_25525__$1 = state_25525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25525__$1,(35),out,inst_25484);
} else {
if((state_val_25526 === (33))){
var inst_25477 = (state_25525[(12)]);
var inst_25455 = inst_25477;
var state_25525__$1 = (function (){var statearr_25543 = state_25525;
(statearr_25543[(7)] = inst_25455);

return statearr_25543;
})();
var statearr_25544_25602 = state_25525__$1;
(statearr_25544_25602[(2)] = null);

(statearr_25544_25602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (13))){
var inst_25455 = (state_25525[(7)]);
var inst_25462 = inst_25455.cljs$lang$protocol_mask$partition0$;
var inst_25463 = (inst_25462 & (64));
var inst_25464 = inst_25455.cljs$core$ISeq$;
var inst_25465 = (inst_25463) || (inst_25464);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25465)){
var statearr_25545_25603 = state_25525__$1;
(statearr_25545_25603[(1)] = (16));

} else {
var statearr_25546_25604 = state_25525__$1;
(statearr_25546_25604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (22))){
var inst_25485 = (state_25525[(11)]);
var inst_25484 = (state_25525[(14)]);
var inst_25483 = (state_25525[(2)]);
var inst_25484__$1 = cljs.core.nth.call(null,inst_25483,(0),null);
var inst_25485__$1 = cljs.core.nth.call(null,inst_25483,(1),null);
var inst_25486 = (inst_25484__$1 == null);
var inst_25487 = cljs.core._EQ_.call(null,inst_25485__$1,change);
var inst_25488 = (inst_25486) || (inst_25487);
var state_25525__$1 = (function (){var statearr_25547 = state_25525;
(statearr_25547[(11)] = inst_25485__$1);

(statearr_25547[(14)] = inst_25484__$1);

return statearr_25547;
})();
if(cljs.core.truth_(inst_25488)){
var statearr_25548_25605 = state_25525__$1;
(statearr_25548_25605[(1)] = (23));

} else {
var statearr_25549_25606 = state_25525__$1;
(statearr_25549_25606[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (36))){
var inst_25477 = (state_25525[(12)]);
var inst_25455 = inst_25477;
var state_25525__$1 = (function (){var statearr_25550 = state_25525;
(statearr_25550[(7)] = inst_25455);

return statearr_25550;
})();
var statearr_25551_25607 = state_25525__$1;
(statearr_25551_25607[(2)] = null);

(statearr_25551_25607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (29))){
var inst_25499 = (state_25525[(10)]);
var state_25525__$1 = state_25525;
var statearr_25552_25608 = state_25525__$1;
(statearr_25552_25608[(2)] = inst_25499);

(statearr_25552_25608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (6))){
var state_25525__$1 = state_25525;
var statearr_25553_25609 = state_25525__$1;
(statearr_25553_25609[(2)] = false);

(statearr_25553_25609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (28))){
var inst_25495 = (state_25525[(2)]);
var inst_25496 = calc_state.call(null);
var inst_25455 = inst_25496;
var state_25525__$1 = (function (){var statearr_25554 = state_25525;
(statearr_25554[(15)] = inst_25495);

(statearr_25554[(7)] = inst_25455);

return statearr_25554;
})();
var statearr_25555_25610 = state_25525__$1;
(statearr_25555_25610[(2)] = null);

(statearr_25555_25610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (25))){
var inst_25521 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25556_25611 = state_25525__$1;
(statearr_25556_25611[(2)] = inst_25521);

(statearr_25556_25611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (34))){
var inst_25519 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25557_25612 = state_25525__$1;
(statearr_25557_25612[(2)] = inst_25519);

(statearr_25557_25612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (17))){
var state_25525__$1 = state_25525;
var statearr_25558_25613 = state_25525__$1;
(statearr_25558_25613[(2)] = false);

(statearr_25558_25613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (3))){
var state_25525__$1 = state_25525;
var statearr_25559_25614 = state_25525__$1;
(statearr_25559_25614[(2)] = false);

(statearr_25559_25614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (12))){
var inst_25523 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25525__$1,inst_25523);
} else {
if((state_val_25526 === (2))){
var inst_25431 = (state_25525[(8)]);
var inst_25436 = inst_25431.cljs$lang$protocol_mask$partition0$;
var inst_25437 = (inst_25436 & (64));
var inst_25438 = inst_25431.cljs$core$ISeq$;
var inst_25439 = (inst_25437) || (inst_25438);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25439)){
var statearr_25560_25615 = state_25525__$1;
(statearr_25560_25615[(1)] = (5));

} else {
var statearr_25561_25616 = state_25525__$1;
(statearr_25561_25616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (23))){
var inst_25484 = (state_25525[(14)]);
var inst_25490 = (inst_25484 == null);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25490)){
var statearr_25562_25617 = state_25525__$1;
(statearr_25562_25617[(1)] = (26));

} else {
var statearr_25563_25618 = state_25525__$1;
(statearr_25563_25618[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (35))){
var inst_25510 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
if(cljs.core.truth_(inst_25510)){
var statearr_25564_25619 = state_25525__$1;
(statearr_25564_25619[(1)] = (36));

} else {
var statearr_25565_25620 = state_25525__$1;
(statearr_25565_25620[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (19))){
var inst_25455 = (state_25525[(7)]);
var inst_25474 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25455);
var state_25525__$1 = state_25525;
var statearr_25566_25621 = state_25525__$1;
(statearr_25566_25621[(2)] = inst_25474);

(statearr_25566_25621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (11))){
var inst_25455 = (state_25525[(7)]);
var inst_25459 = (inst_25455 == null);
var inst_25460 = cljs.core.not.call(null,inst_25459);
var state_25525__$1 = state_25525;
if(inst_25460){
var statearr_25567_25622 = state_25525__$1;
(statearr_25567_25622[(1)] = (13));

} else {
var statearr_25568_25623 = state_25525__$1;
(statearr_25568_25623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (9))){
var inst_25431 = (state_25525[(8)]);
var state_25525__$1 = state_25525;
var statearr_25569_25624 = state_25525__$1;
(statearr_25569_25624[(2)] = inst_25431);

(statearr_25569_25624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (5))){
var state_25525__$1 = state_25525;
var statearr_25570_25625 = state_25525__$1;
(statearr_25570_25625[(2)] = true);

(statearr_25570_25625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (14))){
var state_25525__$1 = state_25525;
var statearr_25571_25626 = state_25525__$1;
(statearr_25571_25626[(2)] = false);

(statearr_25571_25626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (26))){
var inst_25485 = (state_25525[(11)]);
var inst_25492 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25485);
var state_25525__$1 = state_25525;
var statearr_25572_25627 = state_25525__$1;
(statearr_25572_25627[(2)] = inst_25492);

(statearr_25572_25627[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (16))){
var state_25525__$1 = state_25525;
var statearr_25573_25628 = state_25525__$1;
(statearr_25573_25628[(2)] = true);

(statearr_25573_25628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (38))){
var inst_25515 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25574_25629 = state_25525__$1;
(statearr_25574_25629[(2)] = inst_25515);

(statearr_25574_25629[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (30))){
var inst_25478 = (state_25525[(9)]);
var inst_25479 = (state_25525[(13)]);
var inst_25485 = (state_25525[(11)]);
var inst_25502 = cljs.core.empty_QMARK_.call(null,inst_25478);
var inst_25503 = inst_25479.call(null,inst_25485);
var inst_25504 = cljs.core.not.call(null,inst_25503);
var inst_25505 = (inst_25502) && (inst_25504);
var state_25525__$1 = state_25525;
var statearr_25575_25630 = state_25525__$1;
(statearr_25575_25630[(2)] = inst_25505);

(statearr_25575_25630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (10))){
var inst_25431 = (state_25525[(8)]);
var inst_25451 = (state_25525[(2)]);
var inst_25452 = cljs.core.get.call(null,inst_25451,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25453 = cljs.core.get.call(null,inst_25451,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25454 = cljs.core.get.call(null,inst_25451,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25455 = inst_25431;
var state_25525__$1 = (function (){var statearr_25576 = state_25525;
(statearr_25576[(16)] = inst_25454);

(statearr_25576[(7)] = inst_25455);

(statearr_25576[(17)] = inst_25453);

(statearr_25576[(18)] = inst_25452);

return statearr_25576;
})();
var statearr_25577_25631 = state_25525__$1;
(statearr_25577_25631[(2)] = null);

(statearr_25577_25631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (18))){
var inst_25469 = (state_25525[(2)]);
var state_25525__$1 = state_25525;
var statearr_25578_25632 = state_25525__$1;
(statearr_25578_25632[(2)] = inst_25469);

(statearr_25578_25632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (37))){
var state_25525__$1 = state_25525;
var statearr_25579_25633 = state_25525__$1;
(statearr_25579_25633[(2)] = null);

(statearr_25579_25633[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25526 === (8))){
var inst_25431 = (state_25525[(8)]);
var inst_25448 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25431);
var state_25525__$1 = state_25525;
var statearr_25580_25634 = state_25525__$1;
(statearr_25580_25634[(2)] = inst_25448);

(statearr_25580_25634[(1)] = (10));


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
});})(c__23875__auto___25588,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23763__auto__,c__23875__auto___25588,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23764__auto__ = null;
var cljs$core$async$mix_$_state_machine__23764__auto____0 = (function (){
var statearr_25584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25584[(0)] = cljs$core$async$mix_$_state_machine__23764__auto__);

(statearr_25584[(1)] = (1));

return statearr_25584;
});
var cljs$core$async$mix_$_state_machine__23764__auto____1 = (function (state_25525){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_25525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e25585){if((e25585 instanceof Object)){
var ex__23767__auto__ = e25585;
var statearr_25586_25635 = state_25525;
(statearr_25586_25635[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25636 = state_25525;
state_25525 = G__25636;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23764__auto__ = function(state_25525){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23764__auto____1.call(this,state_25525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23764__auto____0;
cljs$core$async$mix_$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23764__auto____1;
return cljs$core$async$mix_$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___25588,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23877__auto__ = (function (){var statearr_25587 = f__23876__auto__.call(null);
(statearr_25587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___25588);

return statearr_25587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___25588,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22336__auto__ = (((p == null))?null:p);
var m__22337__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22337__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22336__auto__ = (((p == null))?null:p);
var m__22337__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,p,v,ch);
} else {
var m__22337__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25637 = [];
var len__22743__auto___25640 = arguments.length;
var i__22744__auto___25641 = (0);
while(true){
if((i__22744__auto___25641 < len__22743__auto___25640)){
args25637.push((arguments[i__22744__auto___25641]));

var G__25642 = (i__22744__auto___25641 + (1));
i__22744__auto___25641 = G__25642;
continue;
} else {
}
break;
}

var G__25639 = args25637.length;
switch (G__25639) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25637.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22336__auto__ = (((p == null))?null:p);
var m__22337__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,p);
} else {
var m__22337__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22336__auto__ = (((p == null))?null:p);
var m__22337__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22336__auto__)]);
if(!((m__22337__auto__ == null))){
return m__22337__auto__.call(null,p,v);
} else {
var m__22337__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22337__auto____$1 == null))){
return m__22337__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25645 = [];
var len__22743__auto___25770 = arguments.length;
var i__22744__auto___25771 = (0);
while(true){
if((i__22744__auto___25771 < len__22743__auto___25770)){
args25645.push((arguments[i__22744__auto___25771]));

var G__25772 = (i__22744__auto___25771 + (1));
i__22744__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var G__25647 = args25645.length;
switch (G__25647) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25645.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21673__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21673__auto__)){
return or__21673__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21673__auto__,mults){
return (function (p1__25644_SHARP_){
if(cljs.core.truth_(p1__25644_SHARP_.call(null,topic))){
return p1__25644_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25644_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21673__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25648 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25649){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25649 = meta25649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25650,meta25649__$1){
var self__ = this;
var _25650__$1 = this;
return (new cljs.core.async.t_cljs$core$async25648(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25649__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25650){
var self__ = this;
var _25650__$1 = this;
return self__.meta25649;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25649","meta25649",-1114013517,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25648";

cljs.core.async.t_cljs$core$async25648.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async25648");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25648 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25649){
return (new cljs.core.async.t_cljs$core$async25648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25649));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25648(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23875__auto___25774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___25774,mults,ensure_mult,p){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___25774,mults,ensure_mult,p){
return (function (state_25722){
var state_val_25723 = (state_25722[(1)]);
if((state_val_25723 === (7))){
var inst_25718 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25724_25775 = state_25722__$1;
(statearr_25724_25775[(2)] = inst_25718);

(statearr_25724_25775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (20))){
var state_25722__$1 = state_25722;
var statearr_25725_25776 = state_25722__$1;
(statearr_25725_25776[(2)] = null);

(statearr_25725_25776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (1))){
var state_25722__$1 = state_25722;
var statearr_25726_25777 = state_25722__$1;
(statearr_25726_25777[(2)] = null);

(statearr_25726_25777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (24))){
var inst_25701 = (state_25722[(7)]);
var inst_25710 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25701);
var state_25722__$1 = state_25722;
var statearr_25727_25778 = state_25722__$1;
(statearr_25727_25778[(2)] = inst_25710);

(statearr_25727_25778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (4))){
var inst_25653 = (state_25722[(8)]);
var inst_25653__$1 = (state_25722[(2)]);
var inst_25654 = (inst_25653__$1 == null);
var state_25722__$1 = (function (){var statearr_25728 = state_25722;
(statearr_25728[(8)] = inst_25653__$1);

return statearr_25728;
})();
if(cljs.core.truth_(inst_25654)){
var statearr_25729_25779 = state_25722__$1;
(statearr_25729_25779[(1)] = (5));

} else {
var statearr_25730_25780 = state_25722__$1;
(statearr_25730_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (15))){
var inst_25695 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25731_25781 = state_25722__$1;
(statearr_25731_25781[(2)] = inst_25695);

(statearr_25731_25781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (21))){
var inst_25715 = (state_25722[(2)]);
var state_25722__$1 = (function (){var statearr_25732 = state_25722;
(statearr_25732[(9)] = inst_25715);

return statearr_25732;
})();
var statearr_25733_25782 = state_25722__$1;
(statearr_25733_25782[(2)] = null);

(statearr_25733_25782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (13))){
var inst_25677 = (state_25722[(10)]);
var inst_25679 = cljs.core.chunked_seq_QMARK_.call(null,inst_25677);
var state_25722__$1 = state_25722;
if(inst_25679){
var statearr_25734_25783 = state_25722__$1;
(statearr_25734_25783[(1)] = (16));

} else {
var statearr_25735_25784 = state_25722__$1;
(statearr_25735_25784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (22))){
var inst_25707 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
if(cljs.core.truth_(inst_25707)){
var statearr_25736_25785 = state_25722__$1;
(statearr_25736_25785[(1)] = (23));

} else {
var statearr_25737_25786 = state_25722__$1;
(statearr_25737_25786[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (6))){
var inst_25653 = (state_25722[(8)]);
var inst_25701 = (state_25722[(7)]);
var inst_25703 = (state_25722[(11)]);
var inst_25701__$1 = topic_fn.call(null,inst_25653);
var inst_25702 = cljs.core.deref.call(null,mults);
var inst_25703__$1 = cljs.core.get.call(null,inst_25702,inst_25701__$1);
var state_25722__$1 = (function (){var statearr_25738 = state_25722;
(statearr_25738[(7)] = inst_25701__$1);

(statearr_25738[(11)] = inst_25703__$1);

return statearr_25738;
})();
if(cljs.core.truth_(inst_25703__$1)){
var statearr_25739_25787 = state_25722__$1;
(statearr_25739_25787[(1)] = (19));

} else {
var statearr_25740_25788 = state_25722__$1;
(statearr_25740_25788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (25))){
var inst_25712 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25741_25789 = state_25722__$1;
(statearr_25741_25789[(2)] = inst_25712);

(statearr_25741_25789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (17))){
var inst_25677 = (state_25722[(10)]);
var inst_25686 = cljs.core.first.call(null,inst_25677);
var inst_25687 = cljs.core.async.muxch_STAR_.call(null,inst_25686);
var inst_25688 = cljs.core.async.close_BANG_.call(null,inst_25687);
var inst_25689 = cljs.core.next.call(null,inst_25677);
var inst_25663 = inst_25689;
var inst_25664 = null;
var inst_25665 = (0);
var inst_25666 = (0);
var state_25722__$1 = (function (){var statearr_25742 = state_25722;
(statearr_25742[(12)] = inst_25663);

(statearr_25742[(13)] = inst_25665);

(statearr_25742[(14)] = inst_25664);

(statearr_25742[(15)] = inst_25688);

(statearr_25742[(16)] = inst_25666);

return statearr_25742;
})();
var statearr_25743_25790 = state_25722__$1;
(statearr_25743_25790[(2)] = null);

(statearr_25743_25790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (3))){
var inst_25720 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25722__$1,inst_25720);
} else {
if((state_val_25723 === (12))){
var inst_25697 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25744_25791 = state_25722__$1;
(statearr_25744_25791[(2)] = inst_25697);

(statearr_25744_25791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (2))){
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25722__$1,(4),ch);
} else {
if((state_val_25723 === (23))){
var state_25722__$1 = state_25722;
var statearr_25745_25792 = state_25722__$1;
(statearr_25745_25792[(2)] = null);

(statearr_25745_25792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (19))){
var inst_25653 = (state_25722[(8)]);
var inst_25703 = (state_25722[(11)]);
var inst_25705 = cljs.core.async.muxch_STAR_.call(null,inst_25703);
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25722__$1,(22),inst_25705,inst_25653);
} else {
if((state_val_25723 === (11))){
var inst_25677 = (state_25722[(10)]);
var inst_25663 = (state_25722[(12)]);
var inst_25677__$1 = cljs.core.seq.call(null,inst_25663);
var state_25722__$1 = (function (){var statearr_25746 = state_25722;
(statearr_25746[(10)] = inst_25677__$1);

return statearr_25746;
})();
if(inst_25677__$1){
var statearr_25747_25793 = state_25722__$1;
(statearr_25747_25793[(1)] = (13));

} else {
var statearr_25748_25794 = state_25722__$1;
(statearr_25748_25794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (9))){
var inst_25699 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25749_25795 = state_25722__$1;
(statearr_25749_25795[(2)] = inst_25699);

(statearr_25749_25795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (5))){
var inst_25660 = cljs.core.deref.call(null,mults);
var inst_25661 = cljs.core.vals.call(null,inst_25660);
var inst_25662 = cljs.core.seq.call(null,inst_25661);
var inst_25663 = inst_25662;
var inst_25664 = null;
var inst_25665 = (0);
var inst_25666 = (0);
var state_25722__$1 = (function (){var statearr_25750 = state_25722;
(statearr_25750[(12)] = inst_25663);

(statearr_25750[(13)] = inst_25665);

(statearr_25750[(14)] = inst_25664);

(statearr_25750[(16)] = inst_25666);

return statearr_25750;
})();
var statearr_25751_25796 = state_25722__$1;
(statearr_25751_25796[(2)] = null);

(statearr_25751_25796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (14))){
var state_25722__$1 = state_25722;
var statearr_25755_25797 = state_25722__$1;
(statearr_25755_25797[(2)] = null);

(statearr_25755_25797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (16))){
var inst_25677 = (state_25722[(10)]);
var inst_25681 = cljs.core.chunk_first.call(null,inst_25677);
var inst_25682 = cljs.core.chunk_rest.call(null,inst_25677);
var inst_25683 = cljs.core.count.call(null,inst_25681);
var inst_25663 = inst_25682;
var inst_25664 = inst_25681;
var inst_25665 = inst_25683;
var inst_25666 = (0);
var state_25722__$1 = (function (){var statearr_25756 = state_25722;
(statearr_25756[(12)] = inst_25663);

(statearr_25756[(13)] = inst_25665);

(statearr_25756[(14)] = inst_25664);

(statearr_25756[(16)] = inst_25666);

return statearr_25756;
})();
var statearr_25757_25798 = state_25722__$1;
(statearr_25757_25798[(2)] = null);

(statearr_25757_25798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (10))){
var inst_25663 = (state_25722[(12)]);
var inst_25665 = (state_25722[(13)]);
var inst_25664 = (state_25722[(14)]);
var inst_25666 = (state_25722[(16)]);
var inst_25671 = cljs.core._nth.call(null,inst_25664,inst_25666);
var inst_25672 = cljs.core.async.muxch_STAR_.call(null,inst_25671);
var inst_25673 = cljs.core.async.close_BANG_.call(null,inst_25672);
var inst_25674 = (inst_25666 + (1));
var tmp25752 = inst_25663;
var tmp25753 = inst_25665;
var tmp25754 = inst_25664;
var inst_25663__$1 = tmp25752;
var inst_25664__$1 = tmp25754;
var inst_25665__$1 = tmp25753;
var inst_25666__$1 = inst_25674;
var state_25722__$1 = (function (){var statearr_25758 = state_25722;
(statearr_25758[(12)] = inst_25663__$1);

(statearr_25758[(17)] = inst_25673);

(statearr_25758[(13)] = inst_25665__$1);

(statearr_25758[(14)] = inst_25664__$1);

(statearr_25758[(16)] = inst_25666__$1);

return statearr_25758;
})();
var statearr_25759_25799 = state_25722__$1;
(statearr_25759_25799[(2)] = null);

(statearr_25759_25799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (18))){
var inst_25692 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25760_25800 = state_25722__$1;
(statearr_25760_25800[(2)] = inst_25692);

(statearr_25760_25800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (8))){
var inst_25665 = (state_25722[(13)]);
var inst_25666 = (state_25722[(16)]);
var inst_25668 = (inst_25666 < inst_25665);
var inst_25669 = inst_25668;
var state_25722__$1 = state_25722;
if(cljs.core.truth_(inst_25669)){
var statearr_25761_25801 = state_25722__$1;
(statearr_25761_25801[(1)] = (10));

} else {
var statearr_25762_25802 = state_25722__$1;
(statearr_25762_25802[(1)] = (11));

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
});})(c__23875__auto___25774,mults,ensure_mult,p))
;
return ((function (switch__23763__auto__,c__23875__auto___25774,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_25766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25766[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_25766[(1)] = (1));

return statearr_25766;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_25722){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_25722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e25767){if((e25767 instanceof Object)){
var ex__23767__auto__ = e25767;
var statearr_25768_25803 = state_25722;
(statearr_25768_25803[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25804 = state_25722;
state_25722 = G__25804;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_25722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_25722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___25774,mults,ensure_mult,p))
})();
var state__23877__auto__ = (function (){var statearr_25769 = f__23876__auto__.call(null);
(statearr_25769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___25774);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___25774,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25805 = [];
var len__22743__auto___25808 = arguments.length;
var i__22744__auto___25809 = (0);
while(true){
if((i__22744__auto___25809 < len__22743__auto___25808)){
args25805.push((arguments[i__22744__auto___25809]));

var G__25810 = (i__22744__auto___25809 + (1));
i__22744__auto___25809 = G__25810;
continue;
} else {
}
break;
}

var G__25807 = args25805.length;
switch (G__25807) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25805.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25812 = [];
var len__22743__auto___25815 = arguments.length;
var i__22744__auto___25816 = (0);
while(true){
if((i__22744__auto___25816 < len__22743__auto___25815)){
args25812.push((arguments[i__22744__auto___25816]));

var G__25817 = (i__22744__auto___25816 + (1));
i__22744__auto___25816 = G__25817;
continue;
} else {
}
break;
}

var G__25814 = args25812.length;
switch (G__25814) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25812.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25819 = [];
var len__22743__auto___25890 = arguments.length;
var i__22744__auto___25891 = (0);
while(true){
if((i__22744__auto___25891 < len__22743__auto___25890)){
args25819.push((arguments[i__22744__auto___25891]));

var G__25892 = (i__22744__auto___25891 + (1));
i__22744__auto___25891 = G__25892;
continue;
} else {
}
break;
}

var G__25821 = args25819.length;
switch (G__25821) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25819.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23875__auto___25894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___25894,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___25894,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25860){
var state_val_25861 = (state_25860[(1)]);
if((state_val_25861 === (7))){
var state_25860__$1 = state_25860;
var statearr_25862_25895 = state_25860__$1;
(statearr_25862_25895[(2)] = null);

(statearr_25862_25895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (1))){
var state_25860__$1 = state_25860;
var statearr_25863_25896 = state_25860__$1;
(statearr_25863_25896[(2)] = null);

(statearr_25863_25896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (4))){
var inst_25824 = (state_25860[(7)]);
var inst_25826 = (inst_25824 < cnt);
var state_25860__$1 = state_25860;
if(cljs.core.truth_(inst_25826)){
var statearr_25864_25897 = state_25860__$1;
(statearr_25864_25897[(1)] = (6));

} else {
var statearr_25865_25898 = state_25860__$1;
(statearr_25865_25898[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (15))){
var inst_25856 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25866_25899 = state_25860__$1;
(statearr_25866_25899[(2)] = inst_25856);

(statearr_25866_25899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (13))){
var inst_25849 = cljs.core.async.close_BANG_.call(null,out);
var state_25860__$1 = state_25860;
var statearr_25867_25900 = state_25860__$1;
(statearr_25867_25900[(2)] = inst_25849);

(statearr_25867_25900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (6))){
var state_25860__$1 = state_25860;
var statearr_25868_25901 = state_25860__$1;
(statearr_25868_25901[(2)] = null);

(statearr_25868_25901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (3))){
var inst_25858 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25860__$1,inst_25858);
} else {
if((state_val_25861 === (12))){
var inst_25846 = (state_25860[(8)]);
var inst_25846__$1 = (state_25860[(2)]);
var inst_25847 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25846__$1);
var state_25860__$1 = (function (){var statearr_25869 = state_25860;
(statearr_25869[(8)] = inst_25846__$1);

return statearr_25869;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_25870_25902 = state_25860__$1;
(statearr_25870_25902[(1)] = (13));

} else {
var statearr_25871_25903 = state_25860__$1;
(statearr_25871_25903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (2))){
var inst_25823 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25824 = (0);
var state_25860__$1 = (function (){var statearr_25872 = state_25860;
(statearr_25872[(7)] = inst_25824);

(statearr_25872[(9)] = inst_25823);

return statearr_25872;
})();
var statearr_25873_25904 = state_25860__$1;
(statearr_25873_25904[(2)] = null);

(statearr_25873_25904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (11))){
var inst_25824 = (state_25860[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25860,(10),Object,null,(9));
var inst_25833 = chs__$1.call(null,inst_25824);
var inst_25834 = done.call(null,inst_25824);
var inst_25835 = cljs.core.async.take_BANG_.call(null,inst_25833,inst_25834);
var state_25860__$1 = state_25860;
var statearr_25874_25905 = state_25860__$1;
(statearr_25874_25905[(2)] = inst_25835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (9))){
var inst_25824 = (state_25860[(7)]);
var inst_25837 = (state_25860[(2)]);
var inst_25838 = (inst_25824 + (1));
var inst_25824__$1 = inst_25838;
var state_25860__$1 = (function (){var statearr_25875 = state_25860;
(statearr_25875[(7)] = inst_25824__$1);

(statearr_25875[(10)] = inst_25837);

return statearr_25875;
})();
var statearr_25876_25906 = state_25860__$1;
(statearr_25876_25906[(2)] = null);

(statearr_25876_25906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (5))){
var inst_25844 = (state_25860[(2)]);
var state_25860__$1 = (function (){var statearr_25877 = state_25860;
(statearr_25877[(11)] = inst_25844);

return statearr_25877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25860__$1,(12),dchan);
} else {
if((state_val_25861 === (14))){
var inst_25846 = (state_25860[(8)]);
var inst_25851 = cljs.core.apply.call(null,f,inst_25846);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25860__$1,(16),out,inst_25851);
} else {
if((state_val_25861 === (16))){
var inst_25853 = (state_25860[(2)]);
var state_25860__$1 = (function (){var statearr_25878 = state_25860;
(statearr_25878[(12)] = inst_25853);

return statearr_25878;
})();
var statearr_25879_25907 = state_25860__$1;
(statearr_25879_25907[(2)] = null);

(statearr_25879_25907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (10))){
var inst_25828 = (state_25860[(2)]);
var inst_25829 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25860__$1 = (function (){var statearr_25880 = state_25860;
(statearr_25880[(13)] = inst_25828);

return statearr_25880;
})();
var statearr_25881_25908 = state_25860__$1;
(statearr_25881_25908[(2)] = inst_25829);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25861 === (8))){
var inst_25842 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25882_25909 = state_25860__$1;
(statearr_25882_25909[(2)] = inst_25842);

(statearr_25882_25909[(1)] = (5));


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
});})(c__23875__auto___25894,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23763__auto__,c__23875__auto___25894,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_25886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25886[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_25886[(1)] = (1));

return statearr_25886;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_25860){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_25860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e25887){if((e25887 instanceof Object)){
var ex__23767__auto__ = e25887;
var statearr_25888_25910 = state_25860;
(statearr_25888_25910[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25911 = state_25860;
state_25860 = G__25911;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_25860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_25860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___25894,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23877__auto__ = (function (){var statearr_25889 = f__23876__auto__.call(null);
(statearr_25889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___25894);

return statearr_25889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___25894,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25913 = [];
var len__22743__auto___25969 = arguments.length;
var i__22744__auto___25970 = (0);
while(true){
if((i__22744__auto___25970 < len__22743__auto___25969)){
args25913.push((arguments[i__22744__auto___25970]));

var G__25971 = (i__22744__auto___25970 + (1));
i__22744__auto___25970 = G__25971;
continue;
} else {
}
break;
}

var G__25915 = args25913.length;
switch (G__25915) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25913.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23875__auto___25973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___25973,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___25973,out){
return (function (state_25945){
var state_val_25946 = (state_25945[(1)]);
if((state_val_25946 === (7))){
var inst_25924 = (state_25945[(7)]);
var inst_25925 = (state_25945[(8)]);
var inst_25924__$1 = (state_25945[(2)]);
var inst_25925__$1 = cljs.core.nth.call(null,inst_25924__$1,(0),null);
var inst_25926 = cljs.core.nth.call(null,inst_25924__$1,(1),null);
var inst_25927 = (inst_25925__$1 == null);
var state_25945__$1 = (function (){var statearr_25947 = state_25945;
(statearr_25947[(9)] = inst_25926);

(statearr_25947[(7)] = inst_25924__$1);

(statearr_25947[(8)] = inst_25925__$1);

return statearr_25947;
})();
if(cljs.core.truth_(inst_25927)){
var statearr_25948_25974 = state_25945__$1;
(statearr_25948_25974[(1)] = (8));

} else {
var statearr_25949_25975 = state_25945__$1;
(statearr_25949_25975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (1))){
var inst_25916 = cljs.core.vec.call(null,chs);
var inst_25917 = inst_25916;
var state_25945__$1 = (function (){var statearr_25950 = state_25945;
(statearr_25950[(10)] = inst_25917);

return statearr_25950;
})();
var statearr_25951_25976 = state_25945__$1;
(statearr_25951_25976[(2)] = null);

(statearr_25951_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (4))){
var inst_25917 = (state_25945[(10)]);
var state_25945__$1 = state_25945;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25945__$1,(7),inst_25917);
} else {
if((state_val_25946 === (6))){
var inst_25941 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25952_25977 = state_25945__$1;
(statearr_25952_25977[(2)] = inst_25941);

(statearr_25952_25977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (3))){
var inst_25943 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25945__$1,inst_25943);
} else {
if((state_val_25946 === (2))){
var inst_25917 = (state_25945[(10)]);
var inst_25919 = cljs.core.count.call(null,inst_25917);
var inst_25920 = (inst_25919 > (0));
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25920)){
var statearr_25954_25978 = state_25945__$1;
(statearr_25954_25978[(1)] = (4));

} else {
var statearr_25955_25979 = state_25945__$1;
(statearr_25955_25979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (11))){
var inst_25917 = (state_25945[(10)]);
var inst_25934 = (state_25945[(2)]);
var tmp25953 = inst_25917;
var inst_25917__$1 = tmp25953;
var state_25945__$1 = (function (){var statearr_25956 = state_25945;
(statearr_25956[(10)] = inst_25917__$1);

(statearr_25956[(11)] = inst_25934);

return statearr_25956;
})();
var statearr_25957_25980 = state_25945__$1;
(statearr_25957_25980[(2)] = null);

(statearr_25957_25980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (9))){
var inst_25925 = (state_25945[(8)]);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25945__$1,(11),out,inst_25925);
} else {
if((state_val_25946 === (5))){
var inst_25939 = cljs.core.async.close_BANG_.call(null,out);
var state_25945__$1 = state_25945;
var statearr_25958_25981 = state_25945__$1;
(statearr_25958_25981[(2)] = inst_25939);

(statearr_25958_25981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (10))){
var inst_25937 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25959_25982 = state_25945__$1;
(statearr_25959_25982[(2)] = inst_25937);

(statearr_25959_25982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (8))){
var inst_25926 = (state_25945[(9)]);
var inst_25917 = (state_25945[(10)]);
var inst_25924 = (state_25945[(7)]);
var inst_25925 = (state_25945[(8)]);
var inst_25929 = (function (){var cs = inst_25917;
var vec__25922 = inst_25924;
var v = inst_25925;
var c = inst_25926;
return ((function (cs,vec__25922,v,c,inst_25926,inst_25917,inst_25924,inst_25925,state_val_25946,c__23875__auto___25973,out){
return (function (p1__25912_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25912_SHARP_);
});
;})(cs,vec__25922,v,c,inst_25926,inst_25917,inst_25924,inst_25925,state_val_25946,c__23875__auto___25973,out))
})();
var inst_25930 = cljs.core.filterv.call(null,inst_25929,inst_25917);
var inst_25917__$1 = inst_25930;
var state_25945__$1 = (function (){var statearr_25960 = state_25945;
(statearr_25960[(10)] = inst_25917__$1);

return statearr_25960;
})();
var statearr_25961_25983 = state_25945__$1;
(statearr_25961_25983[(2)] = null);

(statearr_25961_25983[(1)] = (2));


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
});})(c__23875__auto___25973,out))
;
return ((function (switch__23763__auto__,c__23875__auto___25973,out){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_25965 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25965[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_25965[(1)] = (1));

return statearr_25965;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_25945){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_25945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e25966){if((e25966 instanceof Object)){
var ex__23767__auto__ = e25966;
var statearr_25967_25984 = state_25945;
(statearr_25967_25984[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25985 = state_25945;
state_25945 = G__25985;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_25945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_25945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___25973,out))
})();
var state__23877__auto__ = (function (){var statearr_25968 = f__23876__auto__.call(null);
(statearr_25968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___25973);

return statearr_25968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___25973,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25986 = [];
var len__22743__auto___26035 = arguments.length;
var i__22744__auto___26036 = (0);
while(true){
if((i__22744__auto___26036 < len__22743__auto___26035)){
args25986.push((arguments[i__22744__auto___26036]));

var G__26037 = (i__22744__auto___26036 + (1));
i__22744__auto___26036 = G__26037;
continue;
} else {
}
break;
}

var G__25988 = args25986.length;
switch (G__25988) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25986.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23875__auto___26039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___26039,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___26039,out){
return (function (state_26012){
var state_val_26013 = (state_26012[(1)]);
if((state_val_26013 === (7))){
var inst_25994 = (state_26012[(7)]);
var inst_25994__$1 = (state_26012[(2)]);
var inst_25995 = (inst_25994__$1 == null);
var inst_25996 = cljs.core.not.call(null,inst_25995);
var state_26012__$1 = (function (){var statearr_26014 = state_26012;
(statearr_26014[(7)] = inst_25994__$1);

return statearr_26014;
})();
if(inst_25996){
var statearr_26015_26040 = state_26012__$1;
(statearr_26015_26040[(1)] = (8));

} else {
var statearr_26016_26041 = state_26012__$1;
(statearr_26016_26041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (1))){
var inst_25989 = (0);
var state_26012__$1 = (function (){var statearr_26017 = state_26012;
(statearr_26017[(8)] = inst_25989);

return statearr_26017;
})();
var statearr_26018_26042 = state_26012__$1;
(statearr_26018_26042[(2)] = null);

(statearr_26018_26042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (4))){
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26012__$1,(7),ch);
} else {
if((state_val_26013 === (6))){
var inst_26007 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26019_26043 = state_26012__$1;
(statearr_26019_26043[(2)] = inst_26007);

(statearr_26019_26043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (3))){
var inst_26009 = (state_26012[(2)]);
var inst_26010 = cljs.core.async.close_BANG_.call(null,out);
var state_26012__$1 = (function (){var statearr_26020 = state_26012;
(statearr_26020[(9)] = inst_26009);

return statearr_26020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26012__$1,inst_26010);
} else {
if((state_val_26013 === (2))){
var inst_25989 = (state_26012[(8)]);
var inst_25991 = (inst_25989 < n);
var state_26012__$1 = state_26012;
if(cljs.core.truth_(inst_25991)){
var statearr_26021_26044 = state_26012__$1;
(statearr_26021_26044[(1)] = (4));

} else {
var statearr_26022_26045 = state_26012__$1;
(statearr_26022_26045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (11))){
var inst_25989 = (state_26012[(8)]);
var inst_25999 = (state_26012[(2)]);
var inst_26000 = (inst_25989 + (1));
var inst_25989__$1 = inst_26000;
var state_26012__$1 = (function (){var statearr_26023 = state_26012;
(statearr_26023[(10)] = inst_25999);

(statearr_26023[(8)] = inst_25989__$1);

return statearr_26023;
})();
var statearr_26024_26046 = state_26012__$1;
(statearr_26024_26046[(2)] = null);

(statearr_26024_26046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (9))){
var state_26012__$1 = state_26012;
var statearr_26025_26047 = state_26012__$1;
(statearr_26025_26047[(2)] = null);

(statearr_26025_26047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (5))){
var state_26012__$1 = state_26012;
var statearr_26026_26048 = state_26012__$1;
(statearr_26026_26048[(2)] = null);

(statearr_26026_26048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (10))){
var inst_26004 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26027_26049 = state_26012__$1;
(statearr_26027_26049[(2)] = inst_26004);

(statearr_26027_26049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (8))){
var inst_25994 = (state_26012[(7)]);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26012__$1,(11),out,inst_25994);
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
});})(c__23875__auto___26039,out))
;
return ((function (switch__23763__auto__,c__23875__auto___26039,out){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_26031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26031[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_26031[(1)] = (1));

return statearr_26031;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_26012){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_26012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e26032){if((e26032 instanceof Object)){
var ex__23767__auto__ = e26032;
var statearr_26033_26050 = state_26012;
(statearr_26033_26050[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26051 = state_26012;
state_26012 = G__26051;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_26012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_26012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___26039,out))
})();
var state__23877__auto__ = (function (){var statearr_26034 = f__23876__auto__.call(null);
(statearr_26034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___26039);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___26039,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26059 = (function (map_LT_,f,ch,meta26060){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26060 = meta26060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26061,meta26060__$1){
var self__ = this;
var _26061__$1 = this;
return (new cljs.core.async.t_cljs$core$async26059(self__.map_LT_,self__.f,self__.ch,meta26060__$1));
});

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26061){
var self__ = this;
var _26061__$1 = this;
return self__.meta26060;
});

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26062 = (function (map_LT_,f,ch,meta26060,_,fn1,meta26063){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26060 = meta26060;
this._ = _;
this.fn1 = fn1;
this.meta26063 = meta26063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26064,meta26063__$1){
var self__ = this;
var _26064__$1 = this;
return (new cljs.core.async.t_cljs$core$async26062(self__.map_LT_,self__.f,self__.ch,self__.meta26060,self__._,self__.fn1,meta26063__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26064){
var self__ = this;
var _26064__$1 = this;
return self__.meta26063;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26052_SHARP_){
return f1.call(null,(((p1__26052_SHARP_ == null))?null:self__.f.call(null,p1__26052_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26062.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26060","meta26060",-69354236,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26059","cljs.core.async/t_cljs$core$async26059",1284206595,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26063","meta26063",-1222896173,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26062";

cljs.core.async.t_cljs$core$async26062.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async26062");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26062 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26062(map_LT___$1,f__$1,ch__$1,meta26060__$1,___$2,fn1__$1,meta26063){
return (new cljs.core.async.t_cljs$core$async26062(map_LT___$1,f__$1,ch__$1,meta26060__$1,___$2,fn1__$1,meta26063));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26062(self__.map_LT_,self__.f,self__.ch,self__.meta26060,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21661__auto__ = ret;
if(cljs.core.truth_(and__21661__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21661__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26060","meta26060",-69354236,null)], null);
});

cljs.core.async.t_cljs$core$async26059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26059";

cljs.core.async.t_cljs$core$async26059.cljs$lang$ctorPrWriter = (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async26059");
});

cljs.core.async.__GT_t_cljs$core$async26059 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26059(map_LT___$1,f__$1,ch__$1,meta26060){
return (new cljs.core.async.t_cljs$core$async26059(map_LT___$1,f__$1,ch__$1,meta26060));
});

}

return (new cljs.core.async.t_cljs$core$async26059(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26068 = (function (map_GT_,f,ch,meta26069){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26069 = meta26069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26070,meta26069__$1){
var self__ = this;
var _26070__$1 = this;
return (new cljs.core.async.t_cljs$core$async26068(self__.map_GT_,self__.f,self__.ch,meta26069__$1));
});

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26070){
var self__ = this;
var _26070__$1 = this;
return self__.meta26069;
});

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26069","meta26069",-1370832778,null)], null);
});

cljs.core.async.t_cljs$core$async26068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26068";

cljs.core.async.t_cljs$core$async26068.cljs$lang$ctorPrWriter = (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async26068");
});

cljs.core.async.__GT_t_cljs$core$async26068 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26068(map_GT___$1,f__$1,ch__$1,meta26069){
return (new cljs.core.async.t_cljs$core$async26068(map_GT___$1,f__$1,ch__$1,meta26069));
});

}

return (new cljs.core.async.t_cljs$core$async26068(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26074 = (function (filter_GT_,p,ch,meta26075){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26075 = meta26075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26076,meta26075__$1){
var self__ = this;
var _26076__$1 = this;
return (new cljs.core.async.t_cljs$core$async26074(self__.filter_GT_,self__.p,self__.ch,meta26075__$1));
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26076){
var self__ = this;
var _26076__$1 = this;
return self__.meta26075;
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26075","meta26075",1459113427,null)], null);
});

cljs.core.async.t_cljs$core$async26074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26074";

cljs.core.async.t_cljs$core$async26074.cljs$lang$ctorPrWriter = (function (this__22279__auto__,writer__22280__auto__,opt__22281__auto__){
return cljs.core._write.call(null,writer__22280__auto__,"cljs.core.async/t_cljs$core$async26074");
});

cljs.core.async.__GT_t_cljs$core$async26074 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26074(filter_GT___$1,p__$1,ch__$1,meta26075){
return (new cljs.core.async.t_cljs$core$async26074(filter_GT___$1,p__$1,ch__$1,meta26075));
});

}

return (new cljs.core.async.t_cljs$core$async26074(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26077 = [];
var len__22743__auto___26121 = arguments.length;
var i__22744__auto___26122 = (0);
while(true){
if((i__22744__auto___26122 < len__22743__auto___26121)){
args26077.push((arguments[i__22744__auto___26122]));

var G__26123 = (i__22744__auto___26122 + (1));
i__22744__auto___26122 = G__26123;
continue;
} else {
}
break;
}

var G__26079 = args26077.length;
switch (G__26079) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26077.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23875__auto___26125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___26125,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___26125,out){
return (function (state_26100){
var state_val_26101 = (state_26100[(1)]);
if((state_val_26101 === (7))){
var inst_26096 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26102_26126 = state_26100__$1;
(statearr_26102_26126[(2)] = inst_26096);

(statearr_26102_26126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (1))){
var state_26100__$1 = state_26100;
var statearr_26103_26127 = state_26100__$1;
(statearr_26103_26127[(2)] = null);

(statearr_26103_26127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (4))){
var inst_26082 = (state_26100[(7)]);
var inst_26082__$1 = (state_26100[(2)]);
var inst_26083 = (inst_26082__$1 == null);
var state_26100__$1 = (function (){var statearr_26104 = state_26100;
(statearr_26104[(7)] = inst_26082__$1);

return statearr_26104;
})();
if(cljs.core.truth_(inst_26083)){
var statearr_26105_26128 = state_26100__$1;
(statearr_26105_26128[(1)] = (5));

} else {
var statearr_26106_26129 = state_26100__$1;
(statearr_26106_26129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (6))){
var inst_26082 = (state_26100[(7)]);
var inst_26087 = p.call(null,inst_26082);
var state_26100__$1 = state_26100;
if(cljs.core.truth_(inst_26087)){
var statearr_26107_26130 = state_26100__$1;
(statearr_26107_26130[(1)] = (8));

} else {
var statearr_26108_26131 = state_26100__$1;
(statearr_26108_26131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (3))){
var inst_26098 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26100__$1,inst_26098);
} else {
if((state_val_26101 === (2))){
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26100__$1,(4),ch);
} else {
if((state_val_26101 === (11))){
var inst_26090 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26109_26132 = state_26100__$1;
(statearr_26109_26132[(2)] = inst_26090);

(statearr_26109_26132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (9))){
var state_26100__$1 = state_26100;
var statearr_26110_26133 = state_26100__$1;
(statearr_26110_26133[(2)] = null);

(statearr_26110_26133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (5))){
var inst_26085 = cljs.core.async.close_BANG_.call(null,out);
var state_26100__$1 = state_26100;
var statearr_26111_26134 = state_26100__$1;
(statearr_26111_26134[(2)] = inst_26085);

(statearr_26111_26134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (10))){
var inst_26093 = (state_26100[(2)]);
var state_26100__$1 = (function (){var statearr_26112 = state_26100;
(statearr_26112[(8)] = inst_26093);

return statearr_26112;
})();
var statearr_26113_26135 = state_26100__$1;
(statearr_26113_26135[(2)] = null);

(statearr_26113_26135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26101 === (8))){
var inst_26082 = (state_26100[(7)]);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26100__$1,(11),out,inst_26082);
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
});})(c__23875__auto___26125,out))
;
return ((function (switch__23763__auto__,c__23875__auto___26125,out){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_26117 = [null,null,null,null,null,null,null,null,null];
(statearr_26117[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_26117[(1)] = (1));

return statearr_26117;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_26100){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_26100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e26118){if((e26118 instanceof Object)){
var ex__23767__auto__ = e26118;
var statearr_26119_26136 = state_26100;
(statearr_26119_26136[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26137 = state_26100;
state_26100 = G__26137;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_26100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_26100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___26125,out))
})();
var state__23877__auto__ = (function (){var statearr_26120 = f__23876__auto__.call(null);
(statearr_26120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___26125);

return statearr_26120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___26125,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26138 = [];
var len__22743__auto___26141 = arguments.length;
var i__22744__auto___26142 = (0);
while(true){
if((i__22744__auto___26142 < len__22743__auto___26141)){
args26138.push((arguments[i__22744__auto___26142]));

var G__26143 = (i__22744__auto___26142 + (1));
i__22744__auto___26142 = G__26143;
continue;
} else {
}
break;
}

var G__26140 = args26138.length;
switch (G__26140) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26138.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23875__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto__){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto__){
return (function (state_26310){
var state_val_26311 = (state_26310[(1)]);
if((state_val_26311 === (7))){
var inst_26306 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26312_26354 = state_26310__$1;
(statearr_26312_26354[(2)] = inst_26306);

(statearr_26312_26354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (20))){
var inst_26276 = (state_26310[(7)]);
var inst_26287 = (state_26310[(2)]);
var inst_26288 = cljs.core.next.call(null,inst_26276);
var inst_26262 = inst_26288;
var inst_26263 = null;
var inst_26264 = (0);
var inst_26265 = (0);
var state_26310__$1 = (function (){var statearr_26313 = state_26310;
(statearr_26313[(8)] = inst_26262);

(statearr_26313[(9)] = inst_26287);

(statearr_26313[(10)] = inst_26263);

(statearr_26313[(11)] = inst_26265);

(statearr_26313[(12)] = inst_26264);

return statearr_26313;
})();
var statearr_26314_26355 = state_26310__$1;
(statearr_26314_26355[(2)] = null);

(statearr_26314_26355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (1))){
var state_26310__$1 = state_26310;
var statearr_26315_26356 = state_26310__$1;
(statearr_26315_26356[(2)] = null);

(statearr_26315_26356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (4))){
var inst_26251 = (state_26310[(13)]);
var inst_26251__$1 = (state_26310[(2)]);
var inst_26252 = (inst_26251__$1 == null);
var state_26310__$1 = (function (){var statearr_26316 = state_26310;
(statearr_26316[(13)] = inst_26251__$1);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26252)){
var statearr_26317_26357 = state_26310__$1;
(statearr_26317_26357[(1)] = (5));

} else {
var statearr_26318_26358 = state_26310__$1;
(statearr_26318_26358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (15))){
var state_26310__$1 = state_26310;
var statearr_26322_26359 = state_26310__$1;
(statearr_26322_26359[(2)] = null);

(statearr_26322_26359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (21))){
var state_26310__$1 = state_26310;
var statearr_26323_26360 = state_26310__$1;
(statearr_26323_26360[(2)] = null);

(statearr_26323_26360[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (13))){
var inst_26262 = (state_26310[(8)]);
var inst_26263 = (state_26310[(10)]);
var inst_26265 = (state_26310[(11)]);
var inst_26264 = (state_26310[(12)]);
var inst_26272 = (state_26310[(2)]);
var inst_26273 = (inst_26265 + (1));
var tmp26319 = inst_26262;
var tmp26320 = inst_26263;
var tmp26321 = inst_26264;
var inst_26262__$1 = tmp26319;
var inst_26263__$1 = tmp26320;
var inst_26264__$1 = tmp26321;
var inst_26265__$1 = inst_26273;
var state_26310__$1 = (function (){var statearr_26324 = state_26310;
(statearr_26324[(8)] = inst_26262__$1);

(statearr_26324[(10)] = inst_26263__$1);

(statearr_26324[(11)] = inst_26265__$1);

(statearr_26324[(12)] = inst_26264__$1);

(statearr_26324[(14)] = inst_26272);

return statearr_26324;
})();
var statearr_26325_26361 = state_26310__$1;
(statearr_26325_26361[(2)] = null);

(statearr_26325_26361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (22))){
var state_26310__$1 = state_26310;
var statearr_26326_26362 = state_26310__$1;
(statearr_26326_26362[(2)] = null);

(statearr_26326_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (6))){
var inst_26251 = (state_26310[(13)]);
var inst_26260 = f.call(null,inst_26251);
var inst_26261 = cljs.core.seq.call(null,inst_26260);
var inst_26262 = inst_26261;
var inst_26263 = null;
var inst_26264 = (0);
var inst_26265 = (0);
var state_26310__$1 = (function (){var statearr_26328 = state_26310;
(statearr_26328[(8)] = inst_26262);

(statearr_26328[(10)] = inst_26263);

(statearr_26328[(11)] = inst_26265);

(statearr_26328[(12)] = inst_26264);

return statearr_26328;
})();
var statearr_26329_26363 = state_26310__$1;
(statearr_26329_26363[(2)] = null);

(statearr_26329_26363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (17))){
var inst_26276 = (state_26310[(7)]);
var inst_26280 = cljs.core.chunk_first.call(null,inst_26276);
var inst_26281 = cljs.core.chunk_rest.call(null,inst_26276);
var inst_26282 = cljs.core.count.call(null,inst_26280);
var inst_26262 = inst_26281;
var inst_26263 = inst_26280;
var inst_26264 = inst_26282;
var inst_26265 = (0);
var state_26310__$1 = (function (){var statearr_26330 = state_26310;
(statearr_26330[(8)] = inst_26262);

(statearr_26330[(10)] = inst_26263);

(statearr_26330[(11)] = inst_26265);

(statearr_26330[(12)] = inst_26264);

return statearr_26330;
})();
var statearr_26331_26364 = state_26310__$1;
(statearr_26331_26364[(2)] = null);

(statearr_26331_26364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (3))){
var inst_26308 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26310__$1,inst_26308);
} else {
if((state_val_26311 === (12))){
var inst_26296 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26332_26365 = state_26310__$1;
(statearr_26332_26365[(2)] = inst_26296);

(statearr_26332_26365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (2))){
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26310__$1,(4),in$);
} else {
if((state_val_26311 === (23))){
var inst_26304 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26333_26366 = state_26310__$1;
(statearr_26333_26366[(2)] = inst_26304);

(statearr_26333_26366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (19))){
var inst_26291 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26334_26367 = state_26310__$1;
(statearr_26334_26367[(2)] = inst_26291);

(statearr_26334_26367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (11))){
var inst_26262 = (state_26310[(8)]);
var inst_26276 = (state_26310[(7)]);
var inst_26276__$1 = cljs.core.seq.call(null,inst_26262);
var state_26310__$1 = (function (){var statearr_26335 = state_26310;
(statearr_26335[(7)] = inst_26276__$1);

return statearr_26335;
})();
if(inst_26276__$1){
var statearr_26336_26368 = state_26310__$1;
(statearr_26336_26368[(1)] = (14));

} else {
var statearr_26337_26369 = state_26310__$1;
(statearr_26337_26369[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (9))){
var inst_26298 = (state_26310[(2)]);
var inst_26299 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26310__$1 = (function (){var statearr_26338 = state_26310;
(statearr_26338[(15)] = inst_26298);

return statearr_26338;
})();
if(cljs.core.truth_(inst_26299)){
var statearr_26339_26370 = state_26310__$1;
(statearr_26339_26370[(1)] = (21));

} else {
var statearr_26340_26371 = state_26310__$1;
(statearr_26340_26371[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (5))){
var inst_26254 = cljs.core.async.close_BANG_.call(null,out);
var state_26310__$1 = state_26310;
var statearr_26341_26372 = state_26310__$1;
(statearr_26341_26372[(2)] = inst_26254);

(statearr_26341_26372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (14))){
var inst_26276 = (state_26310[(7)]);
var inst_26278 = cljs.core.chunked_seq_QMARK_.call(null,inst_26276);
var state_26310__$1 = state_26310;
if(inst_26278){
var statearr_26342_26373 = state_26310__$1;
(statearr_26342_26373[(1)] = (17));

} else {
var statearr_26343_26374 = state_26310__$1;
(statearr_26343_26374[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (16))){
var inst_26294 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26344_26375 = state_26310__$1;
(statearr_26344_26375[(2)] = inst_26294);

(statearr_26344_26375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (10))){
var inst_26263 = (state_26310[(10)]);
var inst_26265 = (state_26310[(11)]);
var inst_26270 = cljs.core._nth.call(null,inst_26263,inst_26265);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26310__$1,(13),out,inst_26270);
} else {
if((state_val_26311 === (18))){
var inst_26276 = (state_26310[(7)]);
var inst_26285 = cljs.core.first.call(null,inst_26276);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26310__$1,(20),out,inst_26285);
} else {
if((state_val_26311 === (8))){
var inst_26265 = (state_26310[(11)]);
var inst_26264 = (state_26310[(12)]);
var inst_26267 = (inst_26265 < inst_26264);
var inst_26268 = inst_26267;
var state_26310__$1 = state_26310;
if(cljs.core.truth_(inst_26268)){
var statearr_26345_26376 = state_26310__$1;
(statearr_26345_26376[(1)] = (10));

} else {
var statearr_26346_26377 = state_26310__$1;
(statearr_26346_26377[(1)] = (11));

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
});})(c__23875__auto__))
;
return ((function (switch__23763__auto__,c__23875__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23764__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23764__auto____0 = (function (){
var statearr_26350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26350[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23764__auto__);

(statearr_26350[(1)] = (1));

return statearr_26350;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23764__auto____1 = (function (state_26310){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_26310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e26351){if((e26351 instanceof Object)){
var ex__23767__auto__ = e26351;
var statearr_26352_26378 = state_26310;
(statearr_26352_26378[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26379 = state_26310;
state_26310 = G__26379;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23764__auto__ = function(state_26310){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23764__auto____1.call(this,state_26310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23764__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23764__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto__))
})();
var state__23877__auto__ = (function (){var statearr_26353 = f__23876__auto__.call(null);
(statearr_26353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto__);

return statearr_26353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto__))
);

return c__23875__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26380 = [];
var len__22743__auto___26383 = arguments.length;
var i__22744__auto___26384 = (0);
while(true){
if((i__22744__auto___26384 < len__22743__auto___26383)){
args26380.push((arguments[i__22744__auto___26384]));

var G__26385 = (i__22744__auto___26384 + (1));
i__22744__auto___26384 = G__26385;
continue;
} else {
}
break;
}

var G__26382 = args26380.length;
switch (G__26382) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26380.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26387 = [];
var len__22743__auto___26390 = arguments.length;
var i__22744__auto___26391 = (0);
while(true){
if((i__22744__auto___26391 < len__22743__auto___26390)){
args26387.push((arguments[i__22744__auto___26391]));

var G__26392 = (i__22744__auto___26391 + (1));
i__22744__auto___26391 = G__26392;
continue;
} else {
}
break;
}

var G__26389 = args26387.length;
switch (G__26389) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26387.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26394 = [];
var len__22743__auto___26445 = arguments.length;
var i__22744__auto___26446 = (0);
while(true){
if((i__22744__auto___26446 < len__22743__auto___26445)){
args26394.push((arguments[i__22744__auto___26446]));

var G__26447 = (i__22744__auto___26446 + (1));
i__22744__auto___26446 = G__26447;
continue;
} else {
}
break;
}

var G__26396 = args26394.length;
switch (G__26396) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26394.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23875__auto___26449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___26449,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___26449,out){
return (function (state_26420){
var state_val_26421 = (state_26420[(1)]);
if((state_val_26421 === (7))){
var inst_26415 = (state_26420[(2)]);
var state_26420__$1 = state_26420;
var statearr_26422_26450 = state_26420__$1;
(statearr_26422_26450[(2)] = inst_26415);

(statearr_26422_26450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (1))){
var inst_26397 = null;
var state_26420__$1 = (function (){var statearr_26423 = state_26420;
(statearr_26423[(7)] = inst_26397);

return statearr_26423;
})();
var statearr_26424_26451 = state_26420__$1;
(statearr_26424_26451[(2)] = null);

(statearr_26424_26451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (4))){
var inst_26400 = (state_26420[(8)]);
var inst_26400__$1 = (state_26420[(2)]);
var inst_26401 = (inst_26400__$1 == null);
var inst_26402 = cljs.core.not.call(null,inst_26401);
var state_26420__$1 = (function (){var statearr_26425 = state_26420;
(statearr_26425[(8)] = inst_26400__$1);

return statearr_26425;
})();
if(inst_26402){
var statearr_26426_26452 = state_26420__$1;
(statearr_26426_26452[(1)] = (5));

} else {
var statearr_26427_26453 = state_26420__$1;
(statearr_26427_26453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (6))){
var state_26420__$1 = state_26420;
var statearr_26428_26454 = state_26420__$1;
(statearr_26428_26454[(2)] = null);

(statearr_26428_26454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (3))){
var inst_26417 = (state_26420[(2)]);
var inst_26418 = cljs.core.async.close_BANG_.call(null,out);
var state_26420__$1 = (function (){var statearr_26429 = state_26420;
(statearr_26429[(9)] = inst_26417);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26420__$1,inst_26418);
} else {
if((state_val_26421 === (2))){
var state_26420__$1 = state_26420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26420__$1,(4),ch);
} else {
if((state_val_26421 === (11))){
var inst_26400 = (state_26420[(8)]);
var inst_26409 = (state_26420[(2)]);
var inst_26397 = inst_26400;
var state_26420__$1 = (function (){var statearr_26430 = state_26420;
(statearr_26430[(7)] = inst_26397);

(statearr_26430[(10)] = inst_26409);

return statearr_26430;
})();
var statearr_26431_26455 = state_26420__$1;
(statearr_26431_26455[(2)] = null);

(statearr_26431_26455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (9))){
var inst_26400 = (state_26420[(8)]);
var state_26420__$1 = state_26420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26420__$1,(11),out,inst_26400);
} else {
if((state_val_26421 === (5))){
var inst_26400 = (state_26420[(8)]);
var inst_26397 = (state_26420[(7)]);
var inst_26404 = cljs.core._EQ_.call(null,inst_26400,inst_26397);
var state_26420__$1 = state_26420;
if(inst_26404){
var statearr_26433_26456 = state_26420__$1;
(statearr_26433_26456[(1)] = (8));

} else {
var statearr_26434_26457 = state_26420__$1;
(statearr_26434_26457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (10))){
var inst_26412 = (state_26420[(2)]);
var state_26420__$1 = state_26420;
var statearr_26435_26458 = state_26420__$1;
(statearr_26435_26458[(2)] = inst_26412);

(statearr_26435_26458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (8))){
var inst_26397 = (state_26420[(7)]);
var tmp26432 = inst_26397;
var inst_26397__$1 = tmp26432;
var state_26420__$1 = (function (){var statearr_26436 = state_26420;
(statearr_26436[(7)] = inst_26397__$1);

return statearr_26436;
})();
var statearr_26437_26459 = state_26420__$1;
(statearr_26437_26459[(2)] = null);

(statearr_26437_26459[(1)] = (2));


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
});})(c__23875__auto___26449,out))
;
return ((function (switch__23763__auto__,c__23875__auto___26449,out){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_26441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26441[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_26441[(1)] = (1));

return statearr_26441;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_26420){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_26420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e26442){if((e26442 instanceof Object)){
var ex__23767__auto__ = e26442;
var statearr_26443_26460 = state_26420;
(statearr_26443_26460[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26461 = state_26420;
state_26420 = G__26461;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_26420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_26420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___26449,out))
})();
var state__23877__auto__ = (function (){var statearr_26444 = f__23876__auto__.call(null);
(statearr_26444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___26449);

return statearr_26444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___26449,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26462 = [];
var len__22743__auto___26532 = arguments.length;
var i__22744__auto___26533 = (0);
while(true){
if((i__22744__auto___26533 < len__22743__auto___26532)){
args26462.push((arguments[i__22744__auto___26533]));

var G__26534 = (i__22744__auto___26533 + (1));
i__22744__auto___26533 = G__26534;
continue;
} else {
}
break;
}

var G__26464 = args26462.length;
switch (G__26464) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26462.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23875__auto___26536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___26536,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___26536,out){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (7))){
var inst_26498 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26504_26537 = state_26502__$1;
(statearr_26504_26537[(2)] = inst_26498);

(statearr_26504_26537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (1))){
var inst_26465 = (new Array(n));
var inst_26466 = inst_26465;
var inst_26467 = (0);
var state_26502__$1 = (function (){var statearr_26505 = state_26502;
(statearr_26505[(7)] = inst_26466);

(statearr_26505[(8)] = inst_26467);

return statearr_26505;
})();
var statearr_26506_26538 = state_26502__$1;
(statearr_26506_26538[(2)] = null);

(statearr_26506_26538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (4))){
var inst_26470 = (state_26502[(9)]);
var inst_26470__$1 = (state_26502[(2)]);
var inst_26471 = (inst_26470__$1 == null);
var inst_26472 = cljs.core.not.call(null,inst_26471);
var state_26502__$1 = (function (){var statearr_26507 = state_26502;
(statearr_26507[(9)] = inst_26470__$1);

return statearr_26507;
})();
if(inst_26472){
var statearr_26508_26539 = state_26502__$1;
(statearr_26508_26539[(1)] = (5));

} else {
var statearr_26509_26540 = state_26502__$1;
(statearr_26509_26540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (15))){
var inst_26492 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26510_26541 = state_26502__$1;
(statearr_26510_26541[(2)] = inst_26492);

(statearr_26510_26541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (13))){
var state_26502__$1 = state_26502;
var statearr_26511_26542 = state_26502__$1;
(statearr_26511_26542[(2)] = null);

(statearr_26511_26542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (6))){
var inst_26467 = (state_26502[(8)]);
var inst_26488 = (inst_26467 > (0));
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26488)){
var statearr_26512_26543 = state_26502__$1;
(statearr_26512_26543[(1)] = (12));

} else {
var statearr_26513_26544 = state_26502__$1;
(statearr_26513_26544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (3))){
var inst_26500 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26502__$1,inst_26500);
} else {
if((state_val_26503 === (12))){
var inst_26466 = (state_26502[(7)]);
var inst_26490 = cljs.core.vec.call(null,inst_26466);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26502__$1,(15),out,inst_26490);
} else {
if((state_val_26503 === (2))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(4),ch);
} else {
if((state_val_26503 === (11))){
var inst_26482 = (state_26502[(2)]);
var inst_26483 = (new Array(n));
var inst_26466 = inst_26483;
var inst_26467 = (0);
var state_26502__$1 = (function (){var statearr_26514 = state_26502;
(statearr_26514[(7)] = inst_26466);

(statearr_26514[(10)] = inst_26482);

(statearr_26514[(8)] = inst_26467);

return statearr_26514;
})();
var statearr_26515_26545 = state_26502__$1;
(statearr_26515_26545[(2)] = null);

(statearr_26515_26545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (9))){
var inst_26466 = (state_26502[(7)]);
var inst_26480 = cljs.core.vec.call(null,inst_26466);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26502__$1,(11),out,inst_26480);
} else {
if((state_val_26503 === (5))){
var inst_26470 = (state_26502[(9)]);
var inst_26466 = (state_26502[(7)]);
var inst_26475 = (state_26502[(11)]);
var inst_26467 = (state_26502[(8)]);
var inst_26474 = (inst_26466[inst_26467] = inst_26470);
var inst_26475__$1 = (inst_26467 + (1));
var inst_26476 = (inst_26475__$1 < n);
var state_26502__$1 = (function (){var statearr_26516 = state_26502;
(statearr_26516[(11)] = inst_26475__$1);

(statearr_26516[(12)] = inst_26474);

return statearr_26516;
})();
if(cljs.core.truth_(inst_26476)){
var statearr_26517_26546 = state_26502__$1;
(statearr_26517_26546[(1)] = (8));

} else {
var statearr_26518_26547 = state_26502__$1;
(statearr_26518_26547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (14))){
var inst_26495 = (state_26502[(2)]);
var inst_26496 = cljs.core.async.close_BANG_.call(null,out);
var state_26502__$1 = (function (){var statearr_26520 = state_26502;
(statearr_26520[(13)] = inst_26495);

return statearr_26520;
})();
var statearr_26521_26548 = state_26502__$1;
(statearr_26521_26548[(2)] = inst_26496);

(statearr_26521_26548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (10))){
var inst_26486 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26522_26549 = state_26502__$1;
(statearr_26522_26549[(2)] = inst_26486);

(statearr_26522_26549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (8))){
var inst_26466 = (state_26502[(7)]);
var inst_26475 = (state_26502[(11)]);
var tmp26519 = inst_26466;
var inst_26466__$1 = tmp26519;
var inst_26467 = inst_26475;
var state_26502__$1 = (function (){var statearr_26523 = state_26502;
(statearr_26523[(7)] = inst_26466__$1);

(statearr_26523[(8)] = inst_26467);

return statearr_26523;
})();
var statearr_26524_26550 = state_26502__$1;
(statearr_26524_26550[(2)] = null);

(statearr_26524_26550[(1)] = (2));


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
});})(c__23875__auto___26536,out))
;
return ((function (switch__23763__auto__,c__23875__auto___26536,out){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_26528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26528[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_26528[(1)] = (1));

return statearr_26528;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_26502){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_26502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e26529){if((e26529 instanceof Object)){
var ex__23767__auto__ = e26529;
var statearr_26530_26551 = state_26502;
(statearr_26530_26551[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26552 = state_26502;
state_26502 = G__26552;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___26536,out))
})();
var state__23877__auto__ = (function (){var statearr_26531 = f__23876__auto__.call(null);
(statearr_26531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___26536);

return statearr_26531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___26536,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26553 = [];
var len__22743__auto___26627 = arguments.length;
var i__22744__auto___26628 = (0);
while(true){
if((i__22744__auto___26628 < len__22743__auto___26627)){
args26553.push((arguments[i__22744__auto___26628]));

var G__26629 = (i__22744__auto___26628 + (1));
i__22744__auto___26628 = G__26629;
continue;
} else {
}
break;
}

var G__26555 = args26553.length;
switch (G__26555) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26553.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23875__auto___26631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23875__auto___26631,out){
return (function (){
var f__23876__auto__ = (function (){var switch__23763__auto__ = ((function (c__23875__auto___26631,out){
return (function (state_26597){
var state_val_26598 = (state_26597[(1)]);
if((state_val_26598 === (7))){
var inst_26593 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26599_26632 = state_26597__$1;
(statearr_26599_26632[(2)] = inst_26593);

(statearr_26599_26632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (1))){
var inst_26556 = [];
var inst_26557 = inst_26556;
var inst_26558 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26597__$1 = (function (){var statearr_26600 = state_26597;
(statearr_26600[(7)] = inst_26558);

(statearr_26600[(8)] = inst_26557);

return statearr_26600;
})();
var statearr_26601_26633 = state_26597__$1;
(statearr_26601_26633[(2)] = null);

(statearr_26601_26633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (4))){
var inst_26561 = (state_26597[(9)]);
var inst_26561__$1 = (state_26597[(2)]);
var inst_26562 = (inst_26561__$1 == null);
var inst_26563 = cljs.core.not.call(null,inst_26562);
var state_26597__$1 = (function (){var statearr_26602 = state_26597;
(statearr_26602[(9)] = inst_26561__$1);

return statearr_26602;
})();
if(inst_26563){
var statearr_26603_26634 = state_26597__$1;
(statearr_26603_26634[(1)] = (5));

} else {
var statearr_26604_26635 = state_26597__$1;
(statearr_26604_26635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (15))){
var inst_26587 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26605_26636 = state_26597__$1;
(statearr_26605_26636[(2)] = inst_26587);

(statearr_26605_26636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (13))){
var state_26597__$1 = state_26597;
var statearr_26606_26637 = state_26597__$1;
(statearr_26606_26637[(2)] = null);

(statearr_26606_26637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (6))){
var inst_26557 = (state_26597[(8)]);
var inst_26582 = inst_26557.length;
var inst_26583 = (inst_26582 > (0));
var state_26597__$1 = state_26597;
if(cljs.core.truth_(inst_26583)){
var statearr_26607_26638 = state_26597__$1;
(statearr_26607_26638[(1)] = (12));

} else {
var statearr_26608_26639 = state_26597__$1;
(statearr_26608_26639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (3))){
var inst_26595 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26597__$1,inst_26595);
} else {
if((state_val_26598 === (12))){
var inst_26557 = (state_26597[(8)]);
var inst_26585 = cljs.core.vec.call(null,inst_26557);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26597__$1,(15),out,inst_26585);
} else {
if((state_val_26598 === (2))){
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26597__$1,(4),ch);
} else {
if((state_val_26598 === (11))){
var inst_26561 = (state_26597[(9)]);
var inst_26565 = (state_26597[(10)]);
var inst_26575 = (state_26597[(2)]);
var inst_26576 = [];
var inst_26577 = inst_26576.push(inst_26561);
var inst_26557 = inst_26576;
var inst_26558 = inst_26565;
var state_26597__$1 = (function (){var statearr_26609 = state_26597;
(statearr_26609[(11)] = inst_26575);

(statearr_26609[(12)] = inst_26577);

(statearr_26609[(7)] = inst_26558);

(statearr_26609[(8)] = inst_26557);

return statearr_26609;
})();
var statearr_26610_26640 = state_26597__$1;
(statearr_26610_26640[(2)] = null);

(statearr_26610_26640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (9))){
var inst_26557 = (state_26597[(8)]);
var inst_26573 = cljs.core.vec.call(null,inst_26557);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26597__$1,(11),out,inst_26573);
} else {
if((state_val_26598 === (5))){
var inst_26561 = (state_26597[(9)]);
var inst_26565 = (state_26597[(10)]);
var inst_26558 = (state_26597[(7)]);
var inst_26565__$1 = f.call(null,inst_26561);
var inst_26566 = cljs.core._EQ_.call(null,inst_26565__$1,inst_26558);
var inst_26567 = cljs.core.keyword_identical_QMARK_.call(null,inst_26558,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26568 = (inst_26566) || (inst_26567);
var state_26597__$1 = (function (){var statearr_26611 = state_26597;
(statearr_26611[(10)] = inst_26565__$1);

return statearr_26611;
})();
if(cljs.core.truth_(inst_26568)){
var statearr_26612_26641 = state_26597__$1;
(statearr_26612_26641[(1)] = (8));

} else {
var statearr_26613_26642 = state_26597__$1;
(statearr_26613_26642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (14))){
var inst_26590 = (state_26597[(2)]);
var inst_26591 = cljs.core.async.close_BANG_.call(null,out);
var state_26597__$1 = (function (){var statearr_26615 = state_26597;
(statearr_26615[(13)] = inst_26590);

return statearr_26615;
})();
var statearr_26616_26643 = state_26597__$1;
(statearr_26616_26643[(2)] = inst_26591);

(statearr_26616_26643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (10))){
var inst_26580 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26617_26644 = state_26597__$1;
(statearr_26617_26644[(2)] = inst_26580);

(statearr_26617_26644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (8))){
var inst_26561 = (state_26597[(9)]);
var inst_26565 = (state_26597[(10)]);
var inst_26557 = (state_26597[(8)]);
var inst_26570 = inst_26557.push(inst_26561);
var tmp26614 = inst_26557;
var inst_26557__$1 = tmp26614;
var inst_26558 = inst_26565;
var state_26597__$1 = (function (){var statearr_26618 = state_26597;
(statearr_26618[(7)] = inst_26558);

(statearr_26618[(8)] = inst_26557__$1);

(statearr_26618[(14)] = inst_26570);

return statearr_26618;
})();
var statearr_26619_26645 = state_26597__$1;
(statearr_26619_26645[(2)] = null);

(statearr_26619_26645[(1)] = (2));


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
});})(c__23875__auto___26631,out))
;
return ((function (switch__23763__auto__,c__23875__auto___26631,out){
return (function() {
var cljs$core$async$state_machine__23764__auto__ = null;
var cljs$core$async$state_machine__23764__auto____0 = (function (){
var statearr_26623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26623[(0)] = cljs$core$async$state_machine__23764__auto__);

(statearr_26623[(1)] = (1));

return statearr_26623;
});
var cljs$core$async$state_machine__23764__auto____1 = (function (state_26597){
while(true){
var ret_value__23765__auto__ = (function (){try{while(true){
var result__23766__auto__ = switch__23763__auto__.call(null,state_26597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23766__auto__;
}
break;
}
}catch (e26624){if((e26624 instanceof Object)){
var ex__23767__auto__ = e26624;
var statearr_26625_26646 = state_26597;
(statearr_26625_26646[(5)] = ex__23767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26647 = state_26597;
state_26597 = G__26647;
continue;
} else {
return ret_value__23765__auto__;
}
break;
}
});
cljs$core$async$state_machine__23764__auto__ = function(state_26597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23764__auto____1.call(this,state_26597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23764__auto____0;
cljs$core$async$state_machine__23764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23764__auto____1;
return cljs$core$async$state_machine__23764__auto__;
})()
;})(switch__23763__auto__,c__23875__auto___26631,out))
})();
var state__23877__auto__ = (function (){var statearr_26626 = f__23876__auto__.call(null);
(statearr_26626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23875__auto___26631);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23877__auto__);
});})(c__23875__auto___26631,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1465824124663