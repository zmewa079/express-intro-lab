const students = [ 
  {text: 'Emma', late: true, _id: 745939}, 
  {text: 'Oliver', late: true, _id: 982736}, 
  {text: 'Noah', late: false, _id: 356243} 
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, students)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}