class Guide
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => "trophyhunter_development"})

  def self.create opts
    results = DB.exec(
      <<-SQL
        INSERT INTO guides (title, username, body, url)
        VALUES ('#{opts["title"]}', '#{opts["username"]}', '#{opts["body"]}', '#{opts["url"]}')
        RETURNING id, title, username, body, url;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      body: result["body"],
      url: result["url"]
    }
  end

end
