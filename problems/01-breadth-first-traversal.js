/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printBreadthFirst(start) {
  //from the canvas instructions we know we need to use a queue to manage the nodes
  //we need a "visited" variable to track the nodes weve visited already
  //we'll dequeue the front of the queue, print it, and then enqueue all of its neighbrs that havent been visited

  //lets start by initializing our queue
  const queue = [start];
  //now lets make our visited list
  const visited = new Set()//since sets cant have duplicates
  
  visited.add(start)//mark our first node as visited

  //lets use a while loop like in canvas
  while(queue.length > 0) { //so as long as the queues not empty
    const current = queue.shift() //dequeue the first element
    console.log(current); //this prints the current node
    //then we have to get the neighbors of the current node
    const neighbors = adjList[current];

    //we need to enqueue the unvisited neighbors
    for(let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); //mark the neighbor as visited
        queue.push(neighbor); //enqueue the neighbor
      }
    }

  }


}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                      // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                      // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                      // One possible solution:  4, 3, 5, 6, 2, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
