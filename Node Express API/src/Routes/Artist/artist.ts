
exports.getArtistByID = async (req, res, next) => {
  const requestedArtistNameID: number = req.params.artistID
  const query: string = `SELECT * FROM Artists WHERE id = ${requestedArtistNameID}`

  req.connection.query(query, (error, rows) => {
    if (error) return res.status(400).json({ error })

    const result: string = rows.length > 0 ? rows[0] : "Artists Not Found In Libary"
    res.status(200).send({ result })
  })

  next()
}

exports.getArtistByName = async (req, res, next) => {
  const requestedArtistName: string = req.params.artistName
  const query: string = `SELECT * FROM Artists WHERE artistName = "${requestedArtistName}"`

  req.connection.query(query, (error, rows) => {
    if (error) return res.status(400).json({ error })

    const result: string = rows.length > 0 ? rows[0] : "Artists Not Found In Libary"
    res.status(200).send({ result })
  })

  next()
}