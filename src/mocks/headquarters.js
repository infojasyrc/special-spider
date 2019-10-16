import {uuidv4} from '../tools';

let staticHeadquarters;

const getHeadquarters = () => {
  if (staticHeadquarters) {
    return staticHeadquarters;
  }

  staticHeadquarters = [
    {
      id: uuidv4(),
      name: 'Buenos Aires'
    }, {
      id: uuidv4(),
      name: 'Mendoza Centro'
    }, {
      id: uuidv4(),
      name: 'Mendoza Chacras'
    }, {
      id: uuidv4(),
      name: 'Lima'
    }, {
      id: uuidv4(),
      name: 'Bogotá'
    }
  ];

  return staticHeadquarters;
}

export const headquarters = getHeadquarters();

export const getHeadquarterByName = (name) => {
  const index = headquarters.findIndex(headquarter => headquarter.name === name);

  return headquarters[index];
}