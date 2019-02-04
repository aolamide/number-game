# number-game
A fun to play number game. 

This game is usually played with 4 digits, but can also be played with 3 or any other number of digits. We'd be using 4 digits in this game.

At the beginning, a 4-digit number is secretely picked by the computer. The digits would be all different. Then, you try to guess the computer's number, and the number of matches is shown to you. 
If the matching digits are in their right positions, they are "dead", if in different positions, they are "wounded". 

Example:
			<ul>
				<li>Secret number: 4271</li>
				<li>Your try: 1234</li>
				<li>Answer: 1 dead and 2 wounded. (The dead is "2", the wounded are "4" and "1".) </li>
			</ul>
      <ul>
				<li>Secret number: 4271</li>
				<li>Your try: 2140</li>
				<li>Answer: 0 dead and 3 wounded. (No number in right position, the wounded are "4", "1" and "2".) </li>
			</ul>
      <ul>
				<li>Secret number: 4271</li>
				<li>Your try: 4271</li>
				<li>Answer: 4 dead and 0 wounded. (All numbers are correct and in right positions).
        You win the game if you achieve this within 7 guesses</li>
			</ul>
			You must correctly give the computer's secret number in the right order within 7 guesses to win the game. <br>
			Basic Tips :
			<ul>
				<li>All four digits are different</li>
				<li>Number cannot begin with 0</li>
			</ul>
			Goodluck. :thumbsup:
