import { SQLDatabase } from "encore.dev/storage/sqldb"

export const database = new SQLDatabase("todo", {
  migrations: "./migrations",
})
