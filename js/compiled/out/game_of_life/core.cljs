(ns game-of-life.core
  (:require))

(enable-console-print!)

(defn make-board [height width]
  (vec (for [y (range height)]
    (vec (take width (repeatedly (fn [] (rand-nth [ true false ]))))))))

(defn neighbors [[x y]]
  (for [x-shift [1 0 -1]
        y-shift [1 0 -1]
        :when (not (= [0 0] [x-shift y-shift]))]
    [(+ x x-shift) (+ y y-shift)]))

(defn alive? [board [x y]]
  (get-in board [y x]))

(defn count-living-neighbors [board coord]
  (count (filter (partial alive? board)
                 (neighbors coord))))

(defn next-state [board coord]
  (let [live-count (count-living-neighbors board coord)
        currently-living (alive? board coord) ]
    (cond
      (and (= live-count 2) (not currently-living)) false
      (< live-count 2) false
      (< live-count 4) true
      :else false)))

(defn next-board [board]
  (vec (map (fn [y row]
                 (vec (map (fn [x state]
                                (next-state board [x y]))
                                (range (count row)) row )))
             (range (count board)) board)))

(def canvas-dom (.getElementById js/document "canvas"))

(def ctx (.getContext canvas-dom "2d"))


(set! (.-fillStyle ctx) "rgb(200,0,0)")

  (defn draw-rect [ctx x y w h]
   (.fillRect ctx x y w h))

  (defn clear-canvas [ctx]
   (.clearRect ctx 0 0 500 500))

(def board (atom (make-board 40 40)))

(defn draw [board]
  (clear-canvas ctx)
  (doseq [y (range (count board))]
    (doseq [x (range (count (first board)))]
      (when (alive? board [x y ])
        (draw-rect ctx
          (* x 10)
          (* y 10)
          10
          10 )))))

(defn draw-loop []
  (swap! board next-board)
    (draw @board)
      (.requestAnimationFrame js/window draw-loop))

(.requestAnimationFrame js/window draw-loop)
