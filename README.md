# Painterly

### Architecture

* There are four colors.
* When the brush is clicked, cycle through colors.
* Alternately, multiple colors and one brush. When any color is clicked, we switch to that color for the brush.
* when the mouse is clicked on a square, check the dom to see what brush color is currently set and change the square to have that color.
* Any time a square is clicked, check its surrounding squares to see if all three are of different colors. If so, change them to the last remaining color.