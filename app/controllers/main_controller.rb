class MainController < ApplicationController


def giraffe
	d = params[:penguin].to_i
	begin 
		if d > 5
			d / 1
		else
			d / 0
		end
	rescue => e
		puts 'Error'
	else
		puts "Else " + d.to_s
	ensure
		puts 'All Done!'
	end
	head :ok
end



end