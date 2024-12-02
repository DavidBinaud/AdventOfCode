// ==UserScript==
// @name         Advent Of Code 2024 - Day 1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  take on advent of code 2024 day 1 challenge
// @author       You
// @match        https://adventofcode.com/2024/day/1/input
// @icon         https://www.google.com/s2/favicons?sz=64&domain=adventofcode.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let part1 = true
    let part2 = false
    let part3 = false

    let part1input = document.getElementsByTagName('pre')[0].innerText.split('\n').slice(0, -1)
    console.log('initial', part1input)

    let part1function = (input) => {
        let left = []
        let right = []
        input.forEach(line => {
            let l_split = line.split(/\s+/)
            left.push(+l_split[0])
            right.push(+l_split[1])
        })

        console.log('splitted', left, right)
        left.sort((a,b) => a - b)
        right.sort((a,b) => a - b)
        console.log('sorted', left, right)

        let differences = []
        left.forEach((l,i) => differences.push(Math.abs(l - right[i])))
        console.log('differences', differences)

        let sumDiff = differences.reduce((acc,d) => acc + d,0)
        console.log('total diff', sumDiff)
    }

    if(part1) part1function(part1input)
})();
