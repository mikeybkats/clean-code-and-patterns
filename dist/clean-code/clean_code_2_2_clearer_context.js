"use strict";
class GuessStatisticsMessage {
    make(candidate, count) {
        this.createPluralDependentMessageParts(count);
        return `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier}`;
    }
    createPluralDependentMessageParts(count) {
        if (count === 0) {
            this.thereAreNoLetters();
        }
        else if (count === 1) {
            this.thereIsOneLetter();
        }
        else {
            this.thereAreManyLetters(count);
        }
    }
    thereAreManyLetters(count) {
        this.number = count.toString();
        this.verb = "are";
        this.pluralModifier = "s";
    }
    thereIsOneLetter() {
        this.number = "1";
        this.verb = "is";
        this.pluralModifier = "";
    }
    thereAreNoLetters() {
        this.number = "no";
        this.verb = "are";
        this.pluralModifier = "s";
    }
}
const Message = new GuessStatisticsMessage();
const message1 = Message.make("hello", 0);
const message2 = Message.make("hello", 4);
console.log(message1);
console.log(message2);
