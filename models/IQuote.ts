interface IQuote{
    _id: string,
    title: string,
    body: string,
    poster: string,
    likeCount: number,
    dislikeCount: number,
    date: Date
}

export {IQuote}