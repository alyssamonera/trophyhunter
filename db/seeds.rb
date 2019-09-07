# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Guide.create({
  title: "[DAI] Astrarium puzzles",
  username: "trinity",
  body: <<-BODYSTART
  Throughout five areas of Dragon Age Inquisition, you'll stumble across constellation challenges known as Astrarium puzzles. The trick is to connect up the dots in a certain order, so that you create the correct image. Think of constellations in the real world like The Plough or Orion's Belt for an idea of what's going on here.

  While these challenges start off easily enough, they get increasingly trickier as you work through the whole series. It's worth the effort though, as once you've solved each set of three, you'll be guided towards a cave containing lots of delicious equipment. We've put together a quick guide - with fancy diagrams and everything - so you can tick them off in short order, and hoover up that lovely loot.

  If you're looking for a more general guide to Dragon Age Inquisition, we've already put together a walkthrough for the core story, along with plenty of hints and tips for getting the most out of your Rogues, Warriors and Mages. Check out the links towards the bottom of this page for more details.
        BODYSTART
  ,
  url: "https://www.eurogamer.net/articles/2014-11-28-dragon-age-inquisition-astrarium-puzzle-solutions"
  })
