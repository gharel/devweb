/* eslint-disable no-console */
import express from "express";
import knex from "knex";
import createDebug from "debug";
const debug = createDebug("app:knex");

const app = express();
const port = 5000;

// app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

// un exemple avec knex
const conn = knex({
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
  pool: {
    afterCreate: function (conn, done) {
      debug(`Connected to ${JSON.stringify(conn)}`);
      done(undefined, conn);
    },
  },
  useNullAsDefault: true,
});

// on rempli le template d'accueil
app.get("/", async (_request, response, _next) => {
  const users = await conn.select("name").from("users");
  response.render("home", { title: "Welcome Home!", users });
});

// creation de la db si elle n'existait pas
async function createDatabase() {
  const exists = await conn.schema.hasTable("users");
  if (!exists) {
    return conn.schema.createTable("users", function (table) {
      table.increments();
      table.string("name");
      table.integer("year");
      table.timestamps();
    });
  }
}

// lancement du serveur web en ecoute
app.listen(port, async () => {
  await createDatabase();
  console.log(`Listening at http://localhost:${port}`);
});

