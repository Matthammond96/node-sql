exports.getSongByID = async (req, res, next) => {
  const requestedSongID: number = req.params.songID
  const query: string = `SELECT * FROM Songs WHERE id = ${requestedSongID}`
  
  req.connection.query(query, (error, rows) => {
    if (error) return res.status(400).json({ error })

    const result: string = rows.length > 0 ? rows[0] : "Song Not Found In Libary"
    res.status(200).send({ result })
  })

  next()
}

exports.getSongByTitle = async (req, res, next) => {
  const requestedSongTitle: string = req.params.songTitle
  const query: string = `SELECT * FROM Songs WHERE songTitle = "${requestedSongTitle}"`

  req.connection.query(query, (error, rows) => {
    if (error) return res.status(400).json({ error })

    const result: string = rows.length > 0 ? rows[0] : "Song Not Found In Libary"
    res.status(200).send({ result })
  })

  next()
}

exports.updateSongByID = (req, res, next) => {
  const songID: number = req.params.songID
  const requestData: Song = req.body
  const querySetString: string = Object.keys(requestData).map(key => key + ' = ' + (typeof requestData[key] === 'string' ? `"${requestData[key]}"` : requestData[key])).join(', ');
  const query: string = `UPDATE Songs SET ${querySetString} WHERE id = ${songID}`

  req.connection.query(query, (error, rows) => {
    if (error) return res.status(400).json({ error })

    res.status(200).send({result: rows.message})
  })

  next()
}

exports.deleteSongByID = (req, res, next) => {
  const songID: number = req.params.songID
  const query: string = `DELETE FROM Songs WHERE id = ${songID}`

  req.connection.query(query, (error, rows) => {
    if (error) return res.status(400).json({ error })

    const afftectedRows: number = rows.affectedRows
    res.status(200).send({ result: `Succesfully deleted ${afftectedRows} rows`})
  })

  next()
}

interface Song {
  songTitle?: string,
  songDescription?: string,
  songLength?: number,
  songURL?: string,
  Artists_id?: number
}
