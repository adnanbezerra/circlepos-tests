class IsbnParser
  def get_full_isbn(isbn)
    sum = 0

    isbn.each_char.with_index do |char, index|
      factor = index.even? ? 1 : 3
      sum += char.to_i * factor
    end

    mod = sum % 10
    final_result = 10 - mod

    final_result
  end

  def isbn_valid?(isbn)
    isbn.length == 12
  end
end

class Main
  def self.run
    puts "Welcome to the ISBN3 barcode calculator!"
    puts "Insert the ISBN number: "

    parser = IsbnParser.new

    isbn = gets.chomp

    until parser.isbn_valid?(isbn)
      puts "Insert a valid ISBN number!"
      puts "Try again."
      isbn = gets.chomp
    end

    full_isbn = parser.get_full_isbn(isbn)

    puts "The full ISBN number is #{isbn}#{full_isbn}"
  end
end

Main.run
