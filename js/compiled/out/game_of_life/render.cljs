(ns game-of-life.render
  (:require [game-of-life.core :as g ]))

(def canvas-dom (.getElementById js/document "canvas"))

(def ctx (.getContext canvas-dom "2d"))


(set! (.-fillStyle ctx) "rgb(200,0,0)")

  (defn draw-rect [ctx x y w h]
   (.fillRect ctx x y w h))

  (defn clear-canvas [ctx]
   (.clearRect ctx 0 0 500 500))

(def board (atom (g/make-board 40 40)))

(defn draw [board]
  (clear-canvas ctx)
  (doseq [y (range (count board))]
    (doseq [x (range (count (first board)))]
      (when (g/alive? board [x y ])
        (draw-rect ctx
          (* x 10)
          (* y 10)
          10
          10 )))))

(defn draw-loop []
  (swap! board g/next-board)
    (draw @board)
      (.requestAnimationFrame js/window draw-loop))

(.requestAnimationFrame js/window draw-loop)
