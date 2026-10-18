import { createApp } from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";

async function bootstrap() {
  await connectDB();
  const app = createApp();
  const server = app.listen(env.port, () => {
    console.log(`API listening on http://localhost:${env.port}`);
  });
  server.on("error", (err: NodeJS.ErrnoException) => {
    console.error(err);
    process.exit(1);
  });
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
