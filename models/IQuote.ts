interface IQuote{
    _id: string,
    title: string,
    body: string,
    poster: string,
    author: string,
    likeCount: number,
    dislikeCount: number,
    tags: string[],
    isPrivate: boolean,
    date: Date
}

export {IQuote}