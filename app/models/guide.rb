class Guide
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => "trophyhunter_development"})

  def self.create opts
    results = DB.exec(
      <<-SQL
        INSERT INTO guides (title, body, user)
      SQL
    )
  end

end
