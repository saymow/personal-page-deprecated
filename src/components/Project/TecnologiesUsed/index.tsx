import React from 'react';

import { Container, TecnologiesList } from './styles';

import { IProjectTechs } from '../../../@Types/Project';

interface Props {
  techsUsed: IProjectTechs;
}

const TecnologiesUsed: React.FC<Props> = ({ techsUsed }) => {
  return (
    <Container>
      <h4>Techs </h4>
      <section>
        {techsUsed.map(({ field, tecnologies }) => (
          <article key={field}>
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
          </article>
        ))}
      </section>
    </Container>
  );
};

export default TecnologiesUsed;
