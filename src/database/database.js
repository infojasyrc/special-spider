import Dexie from 'dexie';

let db;

const getInstance = () => {
  if (db) {
    return db;
  }

  db = new Dexie('event-manager');
  db.version(1)
    .stores({
      attendees: `id, idEvent, firstName, lastName, email, phoneNumber, company, position, university, java, ui, qa, php, mobile, fullStack, dotNet, others, student, threeToFive, noExperience, moreThanFive, oneToThree, scrumLeader`
    });
  return db;
}

export default getInstance();
