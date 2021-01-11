def personal_filter(fn, arr):
  newArr = []
  for i in arr:
    if fn(i):
      newArr.append(i)
  return newArr

seq = [1,2,3,4,5,6]
a = personal_filter(lambda x: x % 2 == 0, seq)
b = filter(lambda x: x % 2 == 0, seq)
print(list(b))
