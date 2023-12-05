let arr = [77,8,123,33,4,50,25,10,2,1,15]


// // SORTING  ARRAYS OF OBJECTS

const users = [
    {
      name: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: { street: '123 Main St', city: 'New York', country: 'USA' },
      hobbies: ['reading', 'cooking', 'sports'],
      friends: { name: 'Jane', lastName: 'Smith', age: 28 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-01-15',
      languages: ['English', 'Spanish', 'French'],
      education: { degree: "Bachelor's", major: 'Computer Science' }
    },
    {
      name: 'Alice',
      lastName: 'Johnson',
      age: 25,
      email: 'alice.johnson@example.com',
      address: { street: '456 Elm St', city: 'London', country: 'UK' },
      hobbies: ['painting', 'traveling', 'photography'],
      friends: { name: 'Bob', lastName: 'Anderson', age: 27 },
      isActive: false,
      role: 'user',
      registrationDate: '2023-02-10',
      languages: ['English', 'German'],
      education: { degree: "Master's", major: 'Business Administration' }
    },
    {
      name: 'Sarah',
      lastName: 'Brown',
      age: 35,
      email: 'sarah.brown@example.com',
      address: { street: '789 Oak St', city: 'Sydney', country: 'Australia' },
      hobbies: ['guitar', 'hiking'],
      friends: { name: 'Michael', lastName: 'Smith', age: 32 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-03-05',
      languages: ['English'],
      education: { degree: "Bachelor's", major: 'Psychology' }
    },
    {
      name: 'Tim',
      lastName: 'Doe',
      age: 30,
      email: 'tim.doe@example.com',
      address: { street: '13 Main St', city: 'New York', country: 'USA' },
      hobbies: ['reading', 'gaming', 'soccer'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 28 },
      isActive: true,
      role: 'admin',
      registrationDate: '2023-01-15',
      languages: ['English', 'Spanish', 'French'],
      education: { degree: "Bachelor's", major: 'Computer Science' }
    },
    {
      name: 'Alex',
      lastName: 'Henry',
      age: 27,
      email: 'Alex.henry@example.com',
      address: { street: '45 Ben St', city: 'London', country: 'South Africa' },
      hobbies: ['painting', 'traveling', 'gaming'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 27 },
      isActive: false,
      role: 'user',
      registrationDate: '2023-02-10',
      languages: ['English', 'German'],
      education: { degree: "Master's", major: 'Business Administration' }
    },
    {
      name: 'Celeste',
      lastName: 'Brown',
      age: 35,
      email: 'Celeste.brown@example.com',
      address: { street: '67 Geldenhuis Road', city: 'Germiston', country: 'South Africa' },
      hobbies: ['guitar', 'hiking', 'soccer'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 32 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-03-05',
      languages: ['English'],
      education: { degree: 'N/A', major: 'N/A' }
    },
    {
      name: 'Celeste',
      lastName: 'Brayers',
      age: 35,
      email: 'Celeste.brown@example.com',
      address: { street: '67 Geldenhuis Road', city: 'Germiston', country: 'South Africa' },
      hobbies: ['guitar', 'hiking', 'soccer'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 32 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-03-05',
      languages: ['English'],
      education: { degree: 'N/A', major: 'N/A' }
    }
]

// SELECTION SORT
function selectionSortOBJ(arr) {
    for (let i = 0; i < arr.length; i++) {
    
    let minIndex = i

      for (let j = i+1; j < arr.length; j++) {

          // no same names allowd
          if (arr[j].name !==  arr[minIndex].name) {
            
              // compare which is the smaaller name
              if (arr[j].name < arr[minIndex].name) {

                // save the index of the smaller name
                minIndex = j
              }
          }
          else {
              if (arr[j].lastName < arr[minIndex].lastName) {

                //save the index of the smaller lastname
                minIndex = j
              }
          }
      }
      
      let swap = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = swap 

    }
}

// BUBBLE SORT
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] > arr[j + 1]) {

            let swap = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = swap  
        }
    }
  }
}

// SELECTION SORT
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {

     let minIndex = i

        for (let j = i+1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j
          }
        }
      
        let swap = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = swap
   }
}

// INSERTION SORT
function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) { 

        let itemToInsert = arr[i];  
        let j = i - 1;  
   
        /* Move elements of arr[0..i-1], that are  
        greater than itemToInsert, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > itemToInsert) {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }

        arr[j + 1] = itemToInsert;  
  }
 
}

// MERGE SORT
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return  merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []

    while (leftArr.length && rightArr.leftArr) {
        if (leftArr[0] <= rightArr[0]) {
          sortedArr.push(leftArr.shift())
        }
        else {
          sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(arr);
console.log(users);