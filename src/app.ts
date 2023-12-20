import { config } from './config';
import { ChattyServer } from './setupServer';
import express, { Express } from 'express';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
