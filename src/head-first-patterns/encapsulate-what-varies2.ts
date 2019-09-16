/*
 *
 * THE STRATEGY PATTERN:
 * defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 * Strategy lets the algorithm vary independently from clients that use it.
 *
 * Favors composition over inheritance, even though we use the class structure.
 * This pattern favors many classes to decouple the structure
 *
 */

interface IReadContentBehavior {
    read: () => void;
}
interface IPostContentBehavior {
    post: () => void;
}

class Bot {
    _ReadContent!: IReadContentBehavior;
    _SendContent!: IPostContentBehavior;

    public PerformReadContent() {
        this._ReadContent.read();
    }
    public PerformReadNewsFeed() {}

    set ReadContent(value: IReadContentBehavior) {}
    get ReadContent() {
        return this._ReadContent;
    }

    set PostContent(value: IPostContentBehavior) {}
    get PostContent() {
        return this._SendContent;
    }
}

class ReadTextMessages implements IReadContentBehavior {
    public read = () => {
        // reads messages
    };
}

class ReadNewsFeed implements IReadContentBehavior {
    public read = () => console.log("reading news feed");
}

class ReadEmail implements IReadContentBehavior {
    public read = () => {
        // reads email
    };
}

class PostToNewsFeed implements IPostContentBehavior {
    public post = () => {
        // posts to news feed
        console.log("posting to news feed");
    };
}

// versatile bot can read any kind of message
class NewsReaderBot extends Bot {
    constructor() {
        super();
        this._ReadContent = new ReadNewsFeed();
    }

    public readNews = (): void => {
        this.ReadContent.read();
    };
}

const newsReaderBot = new NewsReaderBot();
console.log(newsReaderBot);

newsReaderBot.readNews();

//newsReaderBot.PerformReadContent();
//newsReaderBot.ReadContent.read = () => console.log("I'm reading the news");
//newsReaderBot.PerformReadContent();
