import express from 'express'; 
import {getAllQuotes, getQuote, createQuote, deleteQuote, updateQuote} from '../../controllers/quotes';

const router  = express.Router();

router.route('/').get(getAllQuotes).post(createQuote);
router.route('/:id').get(getQuote).patch(updateQuote).delete(deleteQuote);

export default router;