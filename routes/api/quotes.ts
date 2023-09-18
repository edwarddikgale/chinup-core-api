import express from 'express'; 
import {getAllQuotes, getQuote, createQuote, deleteQuote, updateQuote, getRandomQuote} from '../../controllers/quotes';

const router  = express.Router();

router.route('/').get(getAllQuotes).post(createQuote);
router.route('/random').get(getRandomQuote); 
router.route('/:id').get(getQuote).patch(updateQuote).delete(deleteQuote);

export default router;