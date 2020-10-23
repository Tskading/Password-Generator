# Password-Generator
Utilize user preferences to generate a pseudo password.

# Goals
The goal of this project was to create the javascript logic to utilize a provided html/css password generator template.  The ability of the user to dictate possible variables provided the challenge of the project.  

# Process
I started by creating one array with all possible variables and wrote a 'for' loop to generate a random number - that was in turn, used to call upon random indexs of all of the possible outcomes.  Incoroparating the first prompt of charachter length was the next step.  With this in place, I was able to create all prompts for the remaining variables: lower case letters, upper case letters, numbers, and special characters.  From this point I could get a random password of the users length of choice (between 8 and 128).  But, I wasn't yet able to only select certain variables.  To accomplish this, I broke apart the all encompassing array into seperate varaiables.  From here I added them to a new custom array if the prompt to include was true/accepted.  This provided a custom array to create a random password from.  Final steps incuded creating a new array for the outputs of the 'for' loop, and making sure the result printed within the page.

## Known Bugs
- There is no way to cancel out of initial prompt without providing a correct response.
- After generating initial password and clicking button a second (or more) time, the text field does not reset until a new password is generated.
- New password continues to add selected values to the array, so the user inputs may not be correctly reflected in the new password.
- Password is not guanteed to contain all requested values.

_Please let me know if you find any other improvemnts that can be made!_

