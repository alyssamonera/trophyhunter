class Guide
  if (ENV["DATABASE_URL"])
    uri = URI.parse(ENV["DATABASE_URL"])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: "trophyhunter_development")
  end

  def self.all
    results = DB.exec("SELECT * FROM guides ORDER BY id DESC;")
    return results.map do |result|
      {
        id: result["id"].to_i,
        title: result["title"],
        username: result["username"],
        body: result["body"],
        image: result["image"],
      }
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM guides WHERE id=#{id};")
    if !results.num_tuples.zero?
      return {
        id: results.first["id"].to_i,
        title: results.first["title"],
        username: results.first["username"],
        body: results.first["body"],
        image: results.first["image"]
      }
    else
      return {
        "error" => "no such post, check the id!"
      }, status: 400
    end
  end

  def self.create opts
    results = DB.exec(
      <<-SQL
        INSERT INTO guides (title, username, body, image)
        VALUES ('#{opts["title"]}', '#{opts["username"]}', '#{opts["body"]}', '#{opts["image"]}')
        RETURNING id, title, username, body, image;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      body: result["body"],
      image: result["image"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM guides WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update (id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE guides
        SET
          title='#{opts["title"]}',
          username='#{opts["username"]}',
          body='#{opts["body"]}',
          image='#{opts["image"]}'
        WHERE id=#{id}
        RETURNING id, title, username, body, image;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      body: result["body"],
      image: result["image"]
    }
  end

end
