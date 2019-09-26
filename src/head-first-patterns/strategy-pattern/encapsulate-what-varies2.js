class Bot {
    PerformReadContent() {
        this._ReadContent.read();
    }
    PerformReadNewsFeed() { }
    set ReadContent(value) { }
    get ReadContent() {
        return this._ReadContent;
    }
    set PostContent(value) { }
    get PostContent() {
        return this._SendContent;
    }
}
class ReadTextMessages {
    constructor() {
        this.read = () => {
            // reads messages
        };
    }
}
class ReadNewsFeed {
    constructor() {
        this.read = () => console.log("reading news feed");
    }
}
class ReadEmail {
    constructor() {
        this.read = () => {
            // reads email
        };
    }
}
class PostToNewsFeed {
    constructor() {
        this.post = () => {
            // posts to news feed
            console.log("posting to news feed");
        };
    }
}
// versatile bot can read any kind of message
class NewsReaderBot extends Bot {
    constructor() {
        super();
        this.readNews = () => {
            this.ReadContent.read();
        };
        this._ReadContent = new ReadNewsFeed();
    }
}
const newsReaderBot = new NewsReaderBot();
console.log(newsReaderBot);
newsReaderBot.readNews();
//newsReaderBot.PerformReadContent();
//newsReaderBot.ReadContent.read = () => console.log("I'm reading the news");
//newsReaderBot.PerformReadContent();
