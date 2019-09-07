class Guide
  if (ENV["DATABASE_URL"])
    uri = URI.parse(ENV["DATABASE_URL"])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: "trophyhunter_development")
  end

  def self.all
    results = DB.exec("SELECT * FROM guides;")
    return results.map do |result|
      {
        id: result["id"].to_i,
        title: result["title"],
        username: result["username"],
        body: result["body"],
        url: result["url"]
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
        url: results.first["url"]
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
        INSERT INTO guides (title, username, body, url, image)
        VALUES ('#{opts["title"]}', '#{opts["username"]}', '#{opts["body"]}', '#{opts["url"]}', '#{opts["image"]}')
        RETURNING id, title, username, body, url, image;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      body: result["body"],
      url: result["url"],
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
          url='#{opts["url"]}',
          image='#{opts["image"]}'
        WHERE id=#{id}
        RETURNING id, title, username, body, url, image;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      body: result["body"],
      url: result["url"],
      image: result["image"]
    }
  end

end
