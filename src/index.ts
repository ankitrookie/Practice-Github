import express, { Request, Response, Express } from "express";
const app: Express = express();

app.use(express());

app.get("/", (req: Request, res: Response) => {
  res.send("connect app")
})


app.get("/user", (req: Request, res: Response) => {
  res.send("sedond time user add ")
})

app.post("/user", (req: Request, res: Response) => {
  res.send({
    username: req.body.username,
    password: req.body.password
  })
})



app.listen(3000, () => {
  console.log("PORT is listning at http://localhost:3000")
})
