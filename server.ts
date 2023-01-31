import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {app} from './src/app'

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
}); 