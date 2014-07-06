@echo off
del "../scss/_sprite.scss"
del "../img/icons.png"
@echo on
glue icons ./ --css=../scss --img=../img --padding=1 --margin=2
@echo off
cd ../scss
ren icons.css _sprite.scss
cd ../img
copy icons.png "../../img/"
cd ../sprite
echo "Sprite Generated..."
pause
