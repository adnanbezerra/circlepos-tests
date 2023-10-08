class Isbn_parser
  def getFullIsbn(isbn)
    sum = 0

    for i in 0...isbn.length
      sum += if i % 2 == 0
        (isbn[i].to_i * 1)
      else 
        (isbn[i].to_i * 3)
      end
    end

    mod = sum % 10
    finalResult = 10 - mod

    return finalResult
  end

  def isIsbnValid?(isbn) 
    isbn.length == 12 ? true : false
  end
end

class Main
  puts "Welcome to the ISBN3 barcode calculator!"
  puts "Insert the ISBN number: "

  parser = Isbn_parser.new

  isbn = gets.chomp

  until parser.isIsbnValid?(isbn) do
    puts "Insert a valid ISBN number!"
    puts "Try again."
    isbn = gets.chomp
  end

  fullIsbn = parser.getFullIsbn(isbn)

  puts "The full ISBN number is #{isbn}#{fullIsbn}"
end 
