import { faker } from '@faker-js/faker'

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

export type Materia = {
    nombre: string
    inicio: number
    fin: number
    horario: string
    dueno: string
    carrera: string
    docente: string
    subRows?: Materia[]
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newMateria = (): Materia => {
    return {
      nombre: faker.word.verb(),
      inicio: faker.datatype.number(13),
      fin: faker.datatype.number(13),
      horario: faker.word.verb(1),
      dueno: faker.name.fullName(),
      carrera: faker.word.adjective(),
      docente: faker.name.fullName()
    }
  }

const newPerson = (): Person => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(40),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single',
    ])[0]!,
  }
}

// export function makeData(...lens: number[]) {
//   const makeDataLevel = (depth = 0): Person[] => {
//     const len = lens[depth]!
//     return range(len).map((d): Person => {
//       return {
//         ...newPerson(),
//         subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
//       }
//     })
//   }
// //   console.log(makeDataLevel())
//   return makeDataLevel()
// }

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Materia[] => {
      const len = lens[depth]!
      return range(len).map((d): Materia => {
        return {
          ...newMateria(),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        }
      })
    }
    return makeDataLevel()
}
