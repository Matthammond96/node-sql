# Database 

The database is a MySQL database that contains two tables; artists and songs. You can either copy the `dump.sql` file into your own database, please note that if you do this, you will need to also update the config wthin `/src/MySQL/connection.ts`.

Alternatavly you can use `docker compose up` to automatically create and configure the database on port 3306.

<br />

## Artists
There are three artists.
| id   | artistName     | artistDescription  |
| -----| -------------- | ------------------ |
| 1    | Dermot Kennedy | Dermot Joseph ...  |
| 2    | Ed Sheeran     | Edward Christo...  |
| 3    | Olivia Rodrigo | Olivia Isabel ...  |

<br />

## Songs
Each artist has 5 songs.
| id   | songName        | songDescription  | songLength | songURL | Artists_id |
| -----| --------------- | ---------------- | ---------- | ------- | ---------- |
| 3    | Outnumbered     | null             | 200        | null    | 1          |
| 10   | Visiting Hours  | null             | 201        | null    | 2          |
| 15   | No More Friends | null             | 187        | null    | 3          |

<br />

# Node API Server

The rest api is built on nodejs express module written in typescript. To run the api please ensure `node`, `npm` and `typescript` have been installed onto your machine.

<br />

Clean install modules

```
npm install
```

<br />

Start the node application on port 8080

```
npm start
```

<br />

Alternativily if you do not have typescript installed, you can run the following command.

```
npm start-node
```

# Restful API Routes

| Method | Path                     | Result                                       |
| ------ | ------------------------ | -------------------------------------------- |
| GET    | /artist/:artistID        | Return all data on artist by artists id      |
| GET    | /artist/name/:artistName | Return all data on artist by artists name    |
| GET    | /song/:songID            | Return all data on song by song id           |
| GET    | /song/title/:songTitle   | Return all data on song by song name         |
| GET    | /songs/random/:limit?    | Returns random songs with associated artists |
| PUT    | /song/update/:songID     | Update song with inputed JSON by song id     |
| DELETE | /song/delete/:songID     | Deletes song by song id                      |

<br />

### Update CURL Example

```
curl --request PUT \
  --url http://localhost:8080/song/update/3 \
  --header 'Content-Type: application/json' \
  --data '{
	"songTitle": "Outnumbered",
	"songLength": 200
}'
```

# Improvements
- Security, currently there is no attempt to fix an vunarbililty of the api, such as sql injection.
- Better database structure, including 1 - many structure
- On the update function check if new artist is found.