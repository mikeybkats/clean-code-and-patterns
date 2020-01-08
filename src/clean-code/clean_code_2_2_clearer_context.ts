class GuessStatisticsMessage {
  private number: string;
  private verb: string;
  private pluralModifier: string;

  public make(candidate: string, count: number): string {
    this.createPluralDependentMessageParts(count);
    return `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier}`
  }

  private createPluralDependentMessageParts(count: number): void { 
    if (count === 0){
      this.thereAreNoLetters();
    } else if (count === 1){
      this.thereIsOneLetter();
    } else {
      this.thereAreManyLetters(count);
    }
  }

  private thereAreManyLetters(count: number): void {
    this.number = count.toString();
    this.verb = "are";
    this.pluralModifier = "s";
  }

  private thereIsOneLetter(): void {
    this.number = "1";
    this.verb = "is";
    this.pluralModifier = "";
  }

  private thereAreNoLetters(): void {
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
