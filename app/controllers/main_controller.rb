class MainController < ApplicationController


def giraffe
	d = params[:penguin].to_i
	begin
		if d > 5
			d / 1
		else
			if d == 4
				puts "hi"
				raise ArgumentError "Boom" #this is not working
			else 
				d / 0
			end
		end
	rescue ArgumentError => e #this is not working
		puts "argument error" #this is not working

	rescue => e
		puts 'Error'
	else
		puts "Else " + d.to_s #have to use .to_s b/c i am concatenating w/ "Else", which is a string
	ensure
		puts 'All Done!'
	end
	head :ok
end



end