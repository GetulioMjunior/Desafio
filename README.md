**#Desafio**
**Project Description - Desafio.C:**

Desafio.C is a C program that receives three monthly values and performs a simple validation and analysis. The goal is to validate whether the entered values meet a minimum criterion and calculate the average of these values to determine if the user is eligible.

**Main Features:**
Data Input: The program prompts the user to input three monthly values. Each value must be at least $1000, and the program validates this input, asking the user to re-enter the value if it is below this minimum limit.

Use of if and else: The program uses an if statement to check if the entered value is valid (at least $1000). If the value is invalid, it uses the else statement to display an error message and prompt the user to enter a valid value.

**Average Calculation:** After entering the three valid values, the program calculates the average of these values.

**Eligibility:** Based on the calculated average, the program determines whether the user is eligible or not. The eligibility criterion is an average of $1500 or higher.

**Running the Program:**
In the terminal, type the following commands:
gcc Desafio.c -o Desafio.exe
./Desafio.exe
**Execution Example:**
Enter the value for month 1 (minimum $1000): 1200
Enter the value for month 2 (minimum $1000): 1500
Enter the value for month 3 (minimum $1000): 1800
Average for the 3 months: $1500.00
User is eligible.
