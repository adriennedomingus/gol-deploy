// Compiled by ClojureScript 1.8.51 {}
goog.provide('game_of_life.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
game_of_life.core.make_board = (function game_of_life$core$make_board(height,width){
return cljs.core.vec.call(null,(function (){var iter__22453__auto__ = (function game_of_life$core$make_board_$_iter__33708(s__33709){
return (new cljs.core.LazySeq(null,(function (){
var s__33709__$1 = s__33709;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33709__$1);
if(temp__4657__auto__){
var s__33709__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33709__$2)){
var c__22451__auto__ = cljs.core.chunk_first.call(null,s__33709__$2);
var size__22452__auto__ = cljs.core.count.call(null,c__22451__auto__);
var b__33711 = cljs.core.chunk_buffer.call(null,size__22452__auto__);
if((function (){var i__33710 = (0);
while(true){
if((i__33710 < size__22452__auto__)){
var y = cljs.core._nth.call(null,c__22451__auto__,i__33710);
cljs.core.chunk_append.call(null,b__33711,cljs.core.vec.call(null,cljs.core.take.call(null,width,cljs.core.repeatedly.call(null,((function (i__33710,y,c__22451__auto__,size__22452__auto__,b__33711,s__33709__$2,temp__4657__auto__){
return (function (){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
});})(i__33710,y,c__22451__auto__,size__22452__auto__,b__33711,s__33709__$2,temp__4657__auto__))
))));

var G__33712 = (i__33710 + (1));
i__33710 = G__33712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33711),game_of_life$core$make_board_$_iter__33708.call(null,cljs.core.chunk_rest.call(null,s__33709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33711),null);
}
} else {
var y = cljs.core.first.call(null,s__33709__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,width,cljs.core.repeatedly.call(null,((function (y,s__33709__$2,temp__4657__auto__){
return (function (){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
});})(y,s__33709__$2,temp__4657__auto__))
))),game_of_life$core$make_board_$_iter__33708.call(null,cljs.core.rest.call(null,s__33709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22453__auto__.call(null,cljs.core.range.call(null,height));
})());
});
game_of_life.core.neighbors = (function game_of_life$core$neighbors(p__33713){
var vec__33721 = p__33713;
var x = cljs.core.nth.call(null,vec__33721,(0),null);
var y = cljs.core.nth.call(null,vec__33721,(1),null);
var iter__22453__auto__ = ((function (vec__33721,x,y){
return (function game_of_life$core$neighbors_$_iter__33722(s__33723){
return (new cljs.core.LazySeq(null,((function (vec__33721,x,y){
return (function (){
var s__33723__$1 = s__33723;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33723__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x_shift = cljs.core.first.call(null,xs__5205__auto__);
var iterys__22449__auto__ = ((function (s__33723__$1,x_shift,xs__5205__auto__,temp__4657__auto__,vec__33721,x,y){
return (function game_of_life$core$neighbors_$_iter__33722_$_iter__33724(s__33725){
return (new cljs.core.LazySeq(null,((function (s__33723__$1,x_shift,xs__5205__auto__,temp__4657__auto__,vec__33721,x,y){
return (function (){
var s__33725__$1 = s__33725;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__33725__$1);
if(temp__4657__auto____$1){
var s__33725__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33725__$2)){
var c__22451__auto__ = cljs.core.chunk_first.call(null,s__33725__$2);
var size__22452__auto__ = cljs.core.count.call(null,c__22451__auto__);
var b__33727 = cljs.core.chunk_buffer.call(null,size__22452__auto__);
if((function (){var i__33726 = (0);
while(true){
if((i__33726 < size__22452__auto__)){
var y_shift = cljs.core._nth.call(null,c__22451__auto__,i__33726);
if(!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_shift,y_shift], null)))){
cljs.core.chunk_append.call(null,b__33727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + x_shift),(y + y_shift)], null));

var G__33728 = (i__33726 + (1));
i__33726 = G__33728;
continue;
} else {
var G__33729 = (i__33726 + (1));
i__33726 = G__33729;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33727),game_of_life$core$neighbors_$_iter__33722_$_iter__33724.call(null,cljs.core.chunk_rest.call(null,s__33725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33727),null);
}
} else {
var y_shift = cljs.core.first.call(null,s__33725__$2);
if(!(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_shift,y_shift], null)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + x_shift),(y + y_shift)], null),game_of_life$core$neighbors_$_iter__33722_$_iter__33724.call(null,cljs.core.rest.call(null,s__33725__$2)));
} else {
var G__33730 = cljs.core.rest.call(null,s__33725__$2);
s__33725__$1 = G__33730;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__33723__$1,x_shift,xs__5205__auto__,temp__4657__auto__,vec__33721,x,y))
,null,null));
});})(s__33723__$1,x_shift,xs__5205__auto__,temp__4657__auto__,vec__33721,x,y))
;
var fs__22450__auto__ = cljs.core.seq.call(null,iterys__22449__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null)));
if(fs__22450__auto__){
return cljs.core.concat.call(null,fs__22450__auto__,game_of_life$core$neighbors_$_iter__33722.call(null,cljs.core.rest.call(null,s__33723__$1)));
} else {
var G__33731 = cljs.core.rest.call(null,s__33723__$1);
s__33723__$1 = G__33731;
continue;
}
} else {
return null;
}
break;
}
});})(vec__33721,x,y))
,null,null));
});})(vec__33721,x,y))
;
return iter__22453__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null));
});
game_of_life.core.alive_QMARK_ = (function game_of_life$core$alive_QMARK_(board,p__33732){
var vec__33734 = p__33732;
var x = cljs.core.nth.call(null,vec__33734,(0),null);
var y = cljs.core.nth.call(null,vec__33734,(1),null);
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
});
game_of_life.core.count_living_neighbors = (function game_of_life$core$count_living_neighbors(board,coord){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,game_of_life.core.alive_QMARK_,board),game_of_life.core.neighbors.call(null,coord)));
});
game_of_life.core.next_state = (function game_of_life$core$next_state(board,coord){
var live_count = game_of_life.core.count_living_neighbors.call(null,board,coord);
var currently_living = game_of_life.core.alive_QMARK_.call(null,board,coord);
if((cljs.core._EQ_.call(null,live_count,(2))) && (cljs.core.not.call(null,currently_living))){
return false;
} else {
if((live_count < (2))){
return false;
} else {
if((live_count < (4))){
return true;
} else {
return false;

}
}
}
});
game_of_life.core.next_board = (function game_of_life$core$next_board(board){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (y,row){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (x,state){
return game_of_life.core.next_state.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,row)),row));
}),cljs.core.range.call(null,cljs.core.count.call(null,board)),board));
});
game_of_life.core.canvas_dom = document.getElementById("canvas");
game_of_life.core.ctx = game_of_life.core.canvas_dom.getContext("2d");
game_of_life.core.ctx.fillStyle = "rgb(200,0,0)";
game_of_life.core.draw_rect = (function game_of_life$core$draw_rect(ctx,x,y,w,h){
return ctx.fillRect(x,y,w,h);
});
game_of_life.core.clear_canvas = (function game_of_life$core$clear_canvas(ctx){
return ctx.clearRect((0),(0),(500),(500));
});
game_of_life.core.board = cljs.core.atom.call(null,game_of_life.core.make_board.call(null,(40),(40)));
game_of_life.core.draw = (function game_of_life$core$draw(board){
game_of_life.core.clear_canvas.call(null,game_of_life.core.ctx);

var seq__33747 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
var chunk__33748 = null;
var count__33749 = (0);
var i__33750 = (0);
while(true){
if((i__33750 < count__33749)){
var y = cljs.core._nth.call(null,chunk__33748,i__33750);
var seq__33751_33759 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,board))));
var chunk__33752_33760 = null;
var count__33753_33761 = (0);
var i__33754_33762 = (0);
while(true){
if((i__33754_33762 < count__33753_33761)){
var x_33763 = cljs.core._nth.call(null,chunk__33752_33760,i__33754_33762);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33763,y], null)))){
game_of_life.core.draw_rect.call(null,game_of_life.core.ctx,(x_33763 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33764 = seq__33751_33759;
var G__33765 = chunk__33752_33760;
var G__33766 = count__33753_33761;
var G__33767 = (i__33754_33762 + (1));
seq__33751_33759 = G__33764;
chunk__33752_33760 = G__33765;
count__33753_33761 = G__33766;
i__33754_33762 = G__33767;
continue;
} else {
var temp__4657__auto___33768 = cljs.core.seq.call(null,seq__33751_33759);
if(temp__4657__auto___33768){
var seq__33751_33769__$1 = temp__4657__auto___33768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33751_33769__$1)){
var c__22484__auto___33770 = cljs.core.chunk_first.call(null,seq__33751_33769__$1);
var G__33771 = cljs.core.chunk_rest.call(null,seq__33751_33769__$1);
var G__33772 = c__22484__auto___33770;
var G__33773 = cljs.core.count.call(null,c__22484__auto___33770);
var G__33774 = (0);
seq__33751_33759 = G__33771;
chunk__33752_33760 = G__33772;
count__33753_33761 = G__33773;
i__33754_33762 = G__33774;
continue;
} else {
var x_33775 = cljs.core.first.call(null,seq__33751_33769__$1);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33775,y], null)))){
game_of_life.core.draw_rect.call(null,game_of_life.core.ctx,(x_33775 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33776 = cljs.core.next.call(null,seq__33751_33769__$1);
var G__33777 = null;
var G__33778 = (0);
var G__33779 = (0);
seq__33751_33759 = G__33776;
chunk__33752_33760 = G__33777;
count__33753_33761 = G__33778;
i__33754_33762 = G__33779;
continue;
}
} else {
}
}
break;
}

var G__33780 = seq__33747;
var G__33781 = chunk__33748;
var G__33782 = count__33749;
var G__33783 = (i__33750 + (1));
seq__33747 = G__33780;
chunk__33748 = G__33781;
count__33749 = G__33782;
i__33750 = G__33783;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33747);
if(temp__4657__auto__){
var seq__33747__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33747__$1)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,seq__33747__$1);
var G__33784 = cljs.core.chunk_rest.call(null,seq__33747__$1);
var G__33785 = c__22484__auto__;
var G__33786 = cljs.core.count.call(null,c__22484__auto__);
var G__33787 = (0);
seq__33747 = G__33784;
chunk__33748 = G__33785;
count__33749 = G__33786;
i__33750 = G__33787;
continue;
} else {
var y = cljs.core.first.call(null,seq__33747__$1);
var seq__33755_33788 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,board))));
var chunk__33756_33789 = null;
var count__33757_33790 = (0);
var i__33758_33791 = (0);
while(true){
if((i__33758_33791 < count__33757_33790)){
var x_33792 = cljs.core._nth.call(null,chunk__33756_33789,i__33758_33791);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33792,y], null)))){
game_of_life.core.draw_rect.call(null,game_of_life.core.ctx,(x_33792 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33793 = seq__33755_33788;
var G__33794 = chunk__33756_33789;
var G__33795 = count__33757_33790;
var G__33796 = (i__33758_33791 + (1));
seq__33755_33788 = G__33793;
chunk__33756_33789 = G__33794;
count__33757_33790 = G__33795;
i__33758_33791 = G__33796;
continue;
} else {
var temp__4657__auto___33797__$1 = cljs.core.seq.call(null,seq__33755_33788);
if(temp__4657__auto___33797__$1){
var seq__33755_33798__$1 = temp__4657__auto___33797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33755_33798__$1)){
var c__22484__auto___33799 = cljs.core.chunk_first.call(null,seq__33755_33798__$1);
var G__33800 = cljs.core.chunk_rest.call(null,seq__33755_33798__$1);
var G__33801 = c__22484__auto___33799;
var G__33802 = cljs.core.count.call(null,c__22484__auto___33799);
var G__33803 = (0);
seq__33755_33788 = G__33800;
chunk__33756_33789 = G__33801;
count__33757_33790 = G__33802;
i__33758_33791 = G__33803;
continue;
} else {
var x_33804 = cljs.core.first.call(null,seq__33755_33798__$1);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33804,y], null)))){
game_of_life.core.draw_rect.call(null,game_of_life.core.ctx,(x_33804 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33805 = cljs.core.next.call(null,seq__33755_33798__$1);
var G__33806 = null;
var G__33807 = (0);
var G__33808 = (0);
seq__33755_33788 = G__33805;
chunk__33756_33789 = G__33806;
count__33757_33790 = G__33807;
i__33758_33791 = G__33808;
continue;
}
} else {
}
}
break;
}

var G__33809 = cljs.core.next.call(null,seq__33747__$1);
var G__33810 = null;
var G__33811 = (0);
var G__33812 = (0);
seq__33747 = G__33809;
chunk__33748 = G__33810;
count__33749 = G__33811;
i__33750 = G__33812;
continue;
}
} else {
return null;
}
}
break;
}
});
game_of_life.core.draw_loop = (function game_of_life$core$draw_loop(){
cljs.core.swap_BANG_.call(null,game_of_life.core.board,game_of_life.core.next_board);

game_of_life.core.draw.call(null,cljs.core.deref.call(null,game_of_life.core.board));

return window.requestAnimationFrame(game_of_life$core$draw_loop);
});
window.requestAnimationFrame(game_of_life.core.draw_loop);

//# sourceMappingURL=core.js.map?rel=1465827682205