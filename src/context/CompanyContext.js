import React from 'react';
import faker from 'faker';

const CompanyContext = React.createContext({
  name: faker.company.companyName(),
  phrase: faker.company.catchPhrase(),
});

export default CompanyContext;
