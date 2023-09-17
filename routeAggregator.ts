import express, { Application } from 'express';
import quotesRoutes from './routes/api/quotes';
import commentsRoutes from './routes/api/comments';

class RouteAggregator {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  /**
  * This function adds all routes that are known to the (app) instance
  * @returns {void}
  */
  init(): void {
    this.app.use('/api/quotes', quotesRoutes);
    this.app.use('/api/comments', commentsRoutes);
  }
}

export default RouteAggregator;
