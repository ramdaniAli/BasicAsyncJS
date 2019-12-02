
const o = new Object()
o.firstName = 'Ali'
o.lastName = 'Ramdani'
o.isTeaching = true
o.greet = function() { console.log('Hello!') }

console.log(JSON.stringify(o))

const o2 = {}
o2['firstName'] = 'Ali'
const a = 'lastName'
o2[a] = 'Ramdani'

const o3 = {
  firstName: 'Ali',
  lastName: 'Ramdani',
  greet: function() {
    console.log('hi')
  },
  address: {
    street: "Main st.",
    number: '111'
  }
}

// see 3-objectsMutation.js for more objects
