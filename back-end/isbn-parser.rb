puts "Welcome to the ISBN3 barcode calculator!";
puts "Insert the ISBN number: ";

isbn = gets.chomp;
sum = 0;

for i in 0...isbn.length
  if(i % 2 == 0)
    sum += (isbn[i].to_i * 1);
  else
    sum += (isbn[i].to_i * 3);
  end
end

mod = sum % 10;

if (mod == 10)
  finalResult = 0;
else 
  finalResult = 10 - mod;
end

puts "The full ISBN number is #{isbn}#{finalResult}";
