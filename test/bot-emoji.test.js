/*jslint node: true*/
/*jslint expr: true*/
/*global describe, it*/
"use strict";

var should = require('should');
var emoji = require('../index');

describe("bot-emoji.js", function () {
    describe("emojify(emoji)", function () {
        it("should return a string with emoji code", function () {
            var think = emoji.emojify('你叫什么呢?[思考]');
            console.log(think)
            should.exist(think);
            think.should.be.exactly('你叫什么呢?🤔');
        });

        it("should return a string with on missing code", function () {
            var think = emoji.emojify('你叫什么呢?[哈哈]', function (data) {
                return data;
            });
            console.log(think)
            should.exist(think);
            think.should.be.exactly('你叫什么呢?哈哈');
        });
    })
})