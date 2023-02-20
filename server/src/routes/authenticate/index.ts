import { Router, Request, Response } from "express";
const router = Router()

router.get("/:id", (red: Request, res: Response) => {
    res.send("Hello get id router " + red.params.id)
})

export default router