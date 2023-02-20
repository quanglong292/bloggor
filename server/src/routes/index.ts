import { Express, Request, Response } from 'express';

// Routers
import AuthenticateRoutes from "@/routes/authenticate/index";

// Composables
import { test } from '@/controllers/test.controll';

const useRoutes = (app: Express) => {
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!1111' + test());
  })

  app.use("/auth", AuthenticateRoutes)
}

export default useRoutes