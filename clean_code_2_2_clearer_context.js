var GuessStatisticsMessage = /** @class */ (function () {
    function GuessStatisticsMessage() {
    }
    GuessStatisticsMessage.prototype.make = function (candidate, count) {
        this.createPluralDependentMessageParts(count);
        return "There " + this.verb + " " + this.number + " " + candidate + this.pluralModifier;
    };
    GuessStatisticsMessage.prototype.createPluralDependentMessageParts = function (count) {
        if (count === 0) {
            this.thereAreNoLetters();
        }
        else if (count === 1) {
            this.thereIsOneLetter();
        }
        else {
            this.thereAreManyLetters(count);
        }
    };
    GuessStatisticsMessage.prototype.thereAreManyLetters = function (count) {
        this.number = count.toString();
        this.verb = "are";
        this.pluralModifier = "s";
    };
    GuessStatisticsMessage.prototype.thereIsOneLetter = function () {
        this.number = "1";
        this.verb = "is";
        this.pluralModifier = "";
    };
    GuessStatisticsMessage.prototype.thereAreNoLetters = function () {
        this.number = "no";
        this.verb = "are";
        this.pluralModifier = "s";
    };
    return GuessStatisticsMessage;
}());
var Message = new GuessStatisticsMessage();
var message1 = Message.make("hello", 0);
var message2 = Message.make("hello", 4);
console.log(message1);
console.log(message2);
