import Quotes from '../models/Schema/Quotes';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const getAllQuotes = asyncWrapper(
    async (req: any, res:any) =>{
    
        const quotes = await Quotes.find();
        if(!quotes) throw Error('No Quotes found!');
        res.status(200).json({quotes});
    }
);

const getQuote = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: quoteId} = req.params;
        const quote = await Quotes.findOne({_id: quoteId});
        if(!quote){
            return next(createCustomeApiError(`A quote with this id: ${quoteId}  has not been found`, 404));
            //return res.status(404).json({message: `A quote with this id: ${quoteId}  has not been found`});
        }
        res.status(200).json({quote});
})

const createQuote = asyncWrapper(async(req:any, res: any, next: any) => {
    const newQuote = new Quotes(req.body);
    const quote = await newQuote.save();
    if(!quote) {
        return next(createCustomeApiError('Could not create a new quote', 404));
    }
    res.status(200).json(quote);
})

const deleteQuote = asyncWrapper(async(req:any, res: any) => {
    const quote = await Quotes.findByIdAndDelete(req.params.id);
    if(!quote) throw Error(`No quote with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updateQuote = asyncWrapper(async(req:any, res: any) => {
    const quote = await Quotes.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!quote) throw Error(`An error occured while updating this quote ${req.params.id}`);
    res.status(200).json(quote);
})


export {getAllQuotes, getQuote, createQuote, updateQuote, deleteQuote};