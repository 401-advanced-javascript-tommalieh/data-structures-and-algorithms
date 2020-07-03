## Step 1
In the first pass through of the merge sort, the input array will be divided in half to create two new arrays but there elements will be coming from the main input array, where one of them will have first half elements and will be called left and the other one will contain the rest of the elements and will be called right.

## Step 2
Then we will divide each one of these arrays same as we did with the main input array, and we will keep doing the same for each new array formed till we reach to a poing where the newest array only contatin one element.


![picture](cc27.png)


## Step 3
At this point we start comparing the values between those one element arrays and add the lowest value to the main array at index 0, follwed by the next higher value at to the next index and etc.. .

## Step 4
So at the bottom level of the devision the newest main array will consist of 2 values and will be divided to two single element arrays, these two single element arrays will be compared and the lowest value will be add to the main 2 values array at index 0.

![picture](cc27d.png)


## Step 5
Once this two elements array is sorted it will be merged with it's sibling array on the same level, and once all of array on the same level are done, they will be compared togother and add the higher level arrays, until we reach the main input array level.

![picture](cc27c.png)


## Step 6
Now the input array will have it's values sorted by dividing it into single element arrays sorting them and merging them.

![picture](cc27b.png)


### Efficiency 

* Time: Big O(nlogn)

* Space: Big O(n)

