function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (const element of collection) {
        callback(element);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    } else {
      console.log('Invalid collection type');
    }
  
    return collection;
  }

  function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      return collection.map((element) => callback(element));
    } else if (typeof collection === 'object') {
      return Object.keys(collection).map((key) => callback(collection[key]));
    } else {
      throw new Error('Invalid collection type');
    }
  }
  function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      // Check if the initial value is undefined
      if (acc === undefined) {
        // If the collection is not empty, set the initial value to the first element
        if (collection.length > 0) {
          acc = collection[0];
          // Start iterating from the second element
          for (let i = 1; i < collection.length; i++) {
            acc = callback(acc, collection[i]);
          }
        } else {
          return acc; // Return the initial value if the collection is empty
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
        let collectionArray = Object.values(collection)
        if (acc === undefined) {
            // If the collection is not empty, set the initial value to the first element
            if (collectionArray.length > 0) {
              acc = collectionArray[0];
              // Start iterating from the second element
              for (let i = 1; i < collectionArray.length; i++) {
                acc = callback(acc, collectionArray[i]);
              }
            } else {
              return acc; // Return the initial value if the collection is empty
            }
          } else {
            for (let i = 0; i < collectionArray.length; i++) {
              acc = callback(acc, collectionArray[i]);
            }
          }
      //for (let key in collection) {
        //console.log(acc)
        //if (collection.hasOwnProperty(key)) {
          //acc = callback(acc, collection[key]);
        //}
     // }
    } 
    return acc;
  }

  function myFind (collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
            return collection[i]
        }
      }
    
  }

  function myFilter(collection, predicate) {
    const filterArray = []
    for (let i = 0; i < collection.length; i++) {
        if(predicate(collection[i]) === true) {
            filterArray.push(collection[i])
        }
    }
    return filterArray
  }

function mySize (collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
     return   Object.keys(collection).length
    }
    
    }
    function myFirst(collection, n) {
        if (n) {
          return collection.slice(0, n);
        } else {
          return collection[0];
        }
      }

    function myLast(collection, n) {
        if (n) {
        return collection.slice(-n);
       } else {
        return collection[3]
       }

    }

    function myKeys (object) {
        return Object.keys(object)
    }

    function myValues (object) {
        return Object.values(object)
    }

