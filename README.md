# POTIFY City Public World Bible

[Complete repository directory tree](docs/DIRECTORY.md)

## A city can have 469 ideas and one playable roof

A world bible lets an illustrator and a game developer talk about the same corner of town without spoiling what lives there. A feature ID is useful precisely because a sketch, a line of dialogue and a playable scene can all refer to it without pretending to be the same milestone.

The [public registry](public/POTIFY_CITY_REGISTRY_PUBLIC.json) divides 469 distinct IDs into 18 sections. The [count check](tests/project.test.mjs) verifies the IDs. The playable neighborhood has its own game repository; an entry in this book does not make a mechanic playable.

Pick one public ID and describe what its stated status lets a reader expect. If you can reproduce it in the game, cite the game revision and the action; otherwise leave the design status as written. Keep story discoveries out of the issue title.

**Creative registry and searchable site.** Let players and contributors explore the city while keeping story discoveries intact.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Choose a district and submit one annotated idea. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

A public JSON registry feeds the searchable canon and exported guide. Design status is recorded per entry separately from playtest evidence. Explore `public/`, `tests/` in the full tree.

### Verification

The public registry contained 469 distinct IDs across 18 sections, and the public registry page loaded in a local Chromium session.

```sh
node --test tests/project.test.mjs
```

### Release scope

The 469-entry public registry is a design record. The game runtime lives in the separate Potify repository. POTIFY_CITY_COMPLETE_PUBLIC_WEBSITE.zip (public edition) and its embedded project link to the CompetentEminentAlgorithms Replit. The private owner master key is outside this edition.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
