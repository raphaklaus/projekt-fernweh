import { get } from "../../repo/firestore/repo";

export const routes = (app: any) => {
  app.post("/sentences", (req: any, res: any) => {
    res.send("Hello world!");
  });

  app.get("/sentences/:id", (req: any, res: any) => {
    res.send("Hello world!");
  });

  app.get("/sentences", async (req: any, res: any) => {
    const data = await get();
    console.log(data);
    res.send(data);
  });

  app.delete("/sentences/:id", (req: any, res: any) => {
    res.send("Hello world!");
  });

  app.patch("/sentences/:id", (req: any, res: any) => {
    res.send("Hello world!");
  });
};
