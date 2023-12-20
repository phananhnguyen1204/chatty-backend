import { config } from '@root/config';
import { ChattyServer } from '@root/setupServer';
import express, { Express } from 'express';
import databaseConnection from '@root/setupDatabase';

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
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();
