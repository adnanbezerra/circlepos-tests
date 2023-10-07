def getFullIsbn(isbn)
  sum = 0;

  for i in 0...isbn.length
    if(i % 2 == 0)
      sum += (isbn[i].to_i * 1);
    else
      sum += (isbn[i].to_i * 3);
    end
  end

  mod = sum % 10;
  finalResult = 10 - mod;

  return finalResult;
end

def isIsbnValid(isbn) 
  if (isbn.length != 12) 
    return false;
  else
     return true;
  end
end

puts "Welcome to the ISBN3 barcode calculator!";
puts "Insert the ISBN number: ";

isbn = gets.chomp;

while !isIsbnValid(isbn) do
  puts "Insert a valid ISBN number!";
  puts "Try again.";
  isbn = gets.chomp;
end

fullIsbn = getFullIsbn(isbn);

puts "The full ISBN number is #{isbn}#{fullIsbn}";
