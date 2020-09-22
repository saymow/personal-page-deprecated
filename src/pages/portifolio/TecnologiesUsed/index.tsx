import React from 'react';

import { Container, TecnologiesList } from './styles';

interface Props {
  tecnlogiesUsed: {
    field: string;
    tecnologies: {
      name: string;
      url: string;
    }[];
  }[];
}

const TecnologiesUsed: React.FC<Props> = ({ tecnlogiesUsed }) => {
  return (
    <Container>
      <h4>Techs </h4>
      {tecnlogiesUsed.map(({ field, tecnologies }) => (
        <section key={field}>
          <h5>{field}</h5>
          <TecnologiesList>
            {tecnologies.map((tecnology) => (
              <li key={tecnology.name}>
                <a href={tecnology.url} target="__blank">
                  {tecnology.name}
                </a>
              </li>
            ))}
          </TecnologiesList>
        </section>
      ))}
    </Container>
  );
};

export default TecnologiesUsed;
