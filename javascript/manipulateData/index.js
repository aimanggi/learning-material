const data = [
    {
      id: 1,
      name: "Dina",
      occupations: [
        {
          id: 1,
          title: "Frontend Developer",
        },
        {
          id: 2,
          title: "Graphic Designer",
        },
      ],
    },
    {
      id: 1,
      name: "Deni",
      occupations: [
        {
          id: 3,
          title: "Backend Developer",
        },
      ],
    },
    {
      id: 3,
      name: "Scarlett",
      occupations: [
        {
          id: 2,
          title: "Graphic Designer",
        },
        {
            id: 4,
            title: "UI/UX Designer",
          },
      ],
    },
    {
      id: 4,
      name: "John",
      occupations: [],
    },
    {
      id: 5,
      name: "David",
      occupations: [
          {
            id: 3,
            title: "Backend Developer",
          },
        ],
    },
  ];

//   Case
//   1. Return name and accupation
//   2. Show all occupations, name can be render more than 1
//   3. If person doesn't have ocupation, remove from list

  console.log('data', data)

// Reduce
// accumulator: result from current loop
// currentValue: value from reduced array
// index: value index

  const newData = data.reduce((accumulator, currentValue, index) => {
      console.log(`acc : ${index}`, accumulator)
      console.log(`val : ${index}`, currentValue)

    if(currentValue.occupations.length) {
        // .map: loop all value from array 
        const occupationLoop = currentValue.occupations.map(data => {
            return {
                name: currentValue.name,
                occupation: data.title,
            }
        });
        // return accumulator.concat(occupationLoop)
        return [...accumulator, ...occupationLoop]
    }
    return accumulator;
  }, [])

  console.log('new data', newData)

const returnData = [
    {
        name: 'Dina',
        occupation: 'Frontend Developer',
    },
    {
        name: 'Dina',
        occupation: 'Graphic Designer',
    },
    {
        name: 'Deni',
        occupation: 'Backend Developer',
    },
    {
        name: 'Scarlett',
        occupation: 'Graphic Designer',
    },
    {
        name: 'Scarlett',
        occupation: 'UI/UX Designer',
    },
    {
        name: 'John',
        occupation: 'Backend Developer',
    },
]

// Array manipulation : map, concat, filter, sort, reduce, includes, join, push
// String manipulation: indexOf, replace, slice

const name = ['Dina', 'Dini', 'Dono', 'Dina'];

const uniqueArr = new Set(name)

console.log('Set', name, [...uniqueArr])

console.log('includes', name.includes('Anggi')) // False

console.log('Join', name.join(' '))
