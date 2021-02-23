a) Jelly-1Q
b) initialize a variable called sum and traverse the array of the unit price, adding the price at each index to the sum. Once finished divide the sum obtained by 20 which is the length of the unit_price array.
c) 
```
PID = INPUT "Enter Product ID: "
FOUND = FALSE
IDX = 0
loop WHILE I < 20 AND NOT FOUND
  if Product_ID[I] = PID then
    FOUND = TRUE
    IDX = I
  end if
end loop
if NOT FOUND then
  OUTPUT "The Product ID entered does not exist"
else
  OUTPUT Unit_Price[IDX]
end if
```

d)
  i) 10
  ii) 
  ```
  loop I from 0 to 14
    loop J from 0 to 9
      if One[I] == Two[J] then
        Three.push(One[I])
      end if
    end loop
  end loop
  ```
