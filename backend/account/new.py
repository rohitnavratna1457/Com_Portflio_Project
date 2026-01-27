size = int(input("Enter the number of rows : "))

for i in range(size,0,-1):
    print(" "*(size-i),end="")
    print("*"*i)


