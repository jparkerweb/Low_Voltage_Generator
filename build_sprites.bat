@echo off
glue icons --css=css --img=sprites --padding=1 --margin=2 --html --global-template="%%(all_classes)s{background-image:url('%%(sprite_url)s'); background-repeat:no-repeat; display:inline-block;}\n"
cls
echo "Sprite Generated..."
pause
