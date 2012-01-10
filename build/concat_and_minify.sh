#!/usr/bin/env bash
juicer merge ../javascript/javascript.js -o ../javascript/spaceinvaders.src.js -s --force &&
java -jar ../bin/yuicompressor-2.4.7.jar ../javascript/spaceinvaders.src.js -o ../javascript/spaceinvaders.min.js