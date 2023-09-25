import express from 'express'; 
import {getAllQuotes, getQuote, createQuote, deleteQuote, patchQuote, updateQuote, getRandomQuote} from '../../controllers/quotes';

const router  = express.Router();

router.route('/').get(getAllQuotes).post(createQuote);
router.route('/random').get(getRandomQuote); 
router.route('/:id').get(getQuote).patch(patchQuote).delete(deleteQuote);

export default router;