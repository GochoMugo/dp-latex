#
# Updates Our assets
#


# we will stop on error
set -e


# script variables
LOG_TITLE="update" # for logging messages to terminal


# (conditionally) downloading some shell utilities
wget -nc https://raw.githubusercontent.com/GochoMugo/docvy-devtools/master/utils.sh


# require the just-downloaded utilities
source utils.sh


log "getting LaTeX2HTML5 JS" 0
wget --directory-prefix=assets https://raw.github.com/Mathapedia/LaTeX2HTML5/master/latex2html5.min.js


log "getting LaTeX2HTML5 CSS" 0
wget --directory-prefix=assets https://raw.github.com/Mathapedia/LaTeX2HTML5/master/css/latex2html5.css


log "getting MathJax" 0
wget https://github.com/mathjax/MathJax/archive/master.zip
unzip master.zip
mkdir -p assets/MathJax
cp -r master/* assets/MathJax
rm -r master master.zip

