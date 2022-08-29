// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ) => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].


function sumIntervals(intervals){
   if (intervals.length===1){return intervals[0][1]-intervals[0][0]} 
     intervals = intervals.sort(function(a, b) { 
    return a[0] - b[0];
  });
    let result = 0;
   let startValue = intervals[0][0];
   let endValue = intervals[0][1];
   for (let i =1; i < intervals.length; i++){
         if(intervals[i][0]< endValue)
       {
         if(intervals[i][1]>endValue){
           endValue=intervals[i][1]
         }
       }
     else if (intervals[i][0]=== endValue){
       endValue=intervals[i][1]
     }
     else {
       result += endValue-startValue;
       startValue= intervals[i][0];
       endValue=intervals[i][1]
     }
     
   }
   if(i = intervals.length-1){
     result += endValue-startValue;
     // console.log(result)
     return result
   }  
 }
 