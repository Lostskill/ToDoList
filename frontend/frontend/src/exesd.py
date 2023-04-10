args = ['cat', 'dog', 1,True]
print(*args)

def exe(*args):
    print(*args)

exe(*args)


def myMinFunction(*args):
    if len(args) == 1:  # ?
        values = args[0]  # ?
    else:
        values = args  # ?
    if len(values) == 0:  # ?
        raise ValueError('myMinFunction() args is an empty sequence')  # ?
    for i, value in enumerate(values):  # ?
        if i == 0 or value < smallestValue: # ?
            smallestValue = value # ? 
    return smallestValue # ?

num = [1,46,754,422,31,-4]
print(myMinFunction(*num))