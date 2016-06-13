// Compiled by ClojureScript 1.8.51 {}
goog.provide('game_of_life.render');
goog.require('cljs.core');
goog.require('game_of_life.core');
game_of_life.render.canvas_dom = document.getElementById("canvas");
game_of_life.render.ctx = game_of_life.render.canvas_dom.getContext("2d");
game_of_life.render.ctx.fillStyle = "rgb(200,0,0)";
game_of_life.render.draw_rect = (function game_of_life$render$draw_rect(ctx,x,y,w,h){
return ctx.fillRect(x,y,w,h);
});
game_of_life.render.clear_canvas = (function game_of_life$render$clear_canvas(ctx){
return ctx.clearRect((0),(0),(500),(500));
});
game_of_life.render.board = cljs.core.atom.call(null,game_of_life.core.make_board.call(null,(40),(40)));
game_of_life.render.draw = (function game_of_life$render$draw(board){
game_of_life.render.clear_canvas.call(null,game_of_life.render.ctx);

var seq__33827 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
var chunk__33828 = null;
var count__33829 = (0);
var i__33830 = (0);
while(true){
if((i__33830 < count__33829)){
var y = cljs.core._nth.call(null,chunk__33828,i__33830);
var seq__33831_33839 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,board))));
var chunk__33832_33840 = null;
var count__33833_33841 = (0);
var i__33834_33842 = (0);
while(true){
if((i__33834_33842 < count__33833_33841)){
var x_33843 = cljs.core._nth.call(null,chunk__33832_33840,i__33834_33842);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33843,y], null)))){
game_of_life.render.draw_rect.call(null,game_of_life.render.ctx,(x_33843 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33844 = seq__33831_33839;
var G__33845 = chunk__33832_33840;
var G__33846 = count__33833_33841;
var G__33847 = (i__33834_33842 + (1));
seq__33831_33839 = G__33844;
chunk__33832_33840 = G__33845;
count__33833_33841 = G__33846;
i__33834_33842 = G__33847;
continue;
} else {
var temp__4657__auto___33848 = cljs.core.seq.call(null,seq__33831_33839);
if(temp__4657__auto___33848){
var seq__33831_33849__$1 = temp__4657__auto___33848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33831_33849__$1)){
var c__22484__auto___33850 = cljs.core.chunk_first.call(null,seq__33831_33849__$1);
var G__33851 = cljs.core.chunk_rest.call(null,seq__33831_33849__$1);
var G__33852 = c__22484__auto___33850;
var G__33853 = cljs.core.count.call(null,c__22484__auto___33850);
var G__33854 = (0);
seq__33831_33839 = G__33851;
chunk__33832_33840 = G__33852;
count__33833_33841 = G__33853;
i__33834_33842 = G__33854;
continue;
} else {
var x_33855 = cljs.core.first.call(null,seq__33831_33849__$1);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33855,y], null)))){
game_of_life.render.draw_rect.call(null,game_of_life.render.ctx,(x_33855 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33856 = cljs.core.next.call(null,seq__33831_33849__$1);
var G__33857 = null;
var G__33858 = (0);
var G__33859 = (0);
seq__33831_33839 = G__33856;
chunk__33832_33840 = G__33857;
count__33833_33841 = G__33858;
i__33834_33842 = G__33859;
continue;
}
} else {
}
}
break;
}

var G__33860 = seq__33827;
var G__33861 = chunk__33828;
var G__33862 = count__33829;
var G__33863 = (i__33830 + (1));
seq__33827 = G__33860;
chunk__33828 = G__33861;
count__33829 = G__33862;
i__33830 = G__33863;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33827);
if(temp__4657__auto__){
var seq__33827__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33827__$1)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,seq__33827__$1);
var G__33864 = cljs.core.chunk_rest.call(null,seq__33827__$1);
var G__33865 = c__22484__auto__;
var G__33866 = cljs.core.count.call(null,c__22484__auto__);
var G__33867 = (0);
seq__33827 = G__33864;
chunk__33828 = G__33865;
count__33829 = G__33866;
i__33830 = G__33867;
continue;
} else {
var y = cljs.core.first.call(null,seq__33827__$1);
var seq__33835_33868 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,board))));
var chunk__33836_33869 = null;
var count__33837_33870 = (0);
var i__33838_33871 = (0);
while(true){
if((i__33838_33871 < count__33837_33870)){
var x_33872 = cljs.core._nth.call(null,chunk__33836_33869,i__33838_33871);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33872,y], null)))){
game_of_life.render.draw_rect.call(null,game_of_life.render.ctx,(x_33872 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33873 = seq__33835_33868;
var G__33874 = chunk__33836_33869;
var G__33875 = count__33837_33870;
var G__33876 = (i__33838_33871 + (1));
seq__33835_33868 = G__33873;
chunk__33836_33869 = G__33874;
count__33837_33870 = G__33875;
i__33838_33871 = G__33876;
continue;
} else {
var temp__4657__auto___33877__$1 = cljs.core.seq.call(null,seq__33835_33868);
if(temp__4657__auto___33877__$1){
var seq__33835_33878__$1 = temp__4657__auto___33877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33835_33878__$1)){
var c__22484__auto___33879 = cljs.core.chunk_first.call(null,seq__33835_33878__$1);
var G__33880 = cljs.core.chunk_rest.call(null,seq__33835_33878__$1);
var G__33881 = c__22484__auto___33879;
var G__33882 = cljs.core.count.call(null,c__22484__auto___33879);
var G__33883 = (0);
seq__33835_33868 = G__33880;
chunk__33836_33869 = G__33881;
count__33837_33870 = G__33882;
i__33838_33871 = G__33883;
continue;
} else {
var x_33884 = cljs.core.first.call(null,seq__33835_33878__$1);
if(cljs.core.truth_(game_of_life.core.alive_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_33884,y], null)))){
game_of_life.render.draw_rect.call(null,game_of_life.render.ctx,(x_33884 * (10)),(y * (10)),(10),(10));
} else {
}

var G__33885 = cljs.core.next.call(null,seq__33835_33878__$1);
var G__33886 = null;
var G__33887 = (0);
var G__33888 = (0);
seq__33835_33868 = G__33885;
chunk__33836_33869 = G__33886;
count__33837_33870 = G__33887;
i__33838_33871 = G__33888;
continue;
}
} else {
}
}
break;
}

var G__33889 = cljs.core.next.call(null,seq__33827__$1);
var G__33890 = null;
var G__33891 = (0);
var G__33892 = (0);
seq__33827 = G__33889;
chunk__33828 = G__33890;
count__33829 = G__33891;
i__33830 = G__33892;
continue;
}
} else {
return null;
}
}
break;
}
});
game_of_life.render.draw_loop = (function game_of_life$render$draw_loop(){
cljs.core.swap_BANG_.call(null,game_of_life.render.board,game_of_life.core.next_board);

game_of_life.render.draw.call(null,cljs.core.deref.call(null,game_of_life.render.board));

return window.requestAnimationFrame(game_of_life$render$draw_loop);
});
window.requestAnimationFrame(game_of_life.render.draw_loop);

//# sourceMappingURL=render.js.map?rel=1465827682273