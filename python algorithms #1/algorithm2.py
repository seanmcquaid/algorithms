# Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

# WE KNOW THE 1 and 1 ARE THE FIRST TWO NUMBERS OF THE FIB SEQ

fib1 = 1 
fib2 = 1 

sum_total = 0
user_answer = int(raw_input("What's your max? "))

for num in range (0,user_answer):
    if(fib1 % 2 == 0):
        sum_total += fib1
    temp = fib1 + fib2 # stash the new value in temp
    fib1 = fib2 # old 2 is now the new 1
    fib2 = temp # temp is the new 2
    
print sum_total