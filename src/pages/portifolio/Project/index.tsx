import React from 'react';

import TecnologiesUsed from './TecnologiesUsed';

import { IProject } from '../../../@Types/Project';

import {
  Container,
  ProjectInfo,
  MoreInfo,
  GithubIcon,
  NetlifyIcon,
} from './styles';

const Project: React.FC<IProject> = ({
  title,
  thumbnailUrl,
  description,
  references,
  techsUsed,
}) => {
  const referenceIcon = {
    Github: <GithubIcon />,
    Netlify: <NetlifyIcon />,
  };

  return (
    <Container>
      <TecnologiesUsed techsUsed={techsUsed} />
      <div>
        <img src={thumbnailUrl} />
      </div>
      <ProjectInfo>
        <div>
          <h3>{title}</h3>
          <div>
            <p>{description.pt}</p>
            <p>{description.en}</p>
          </div>
        </div>
        <MoreInfo>
          <h4>More about</h4>
          <ul>
            {references.map(({ type, url }) => (
              <li key={type}>
                <a href={url}>{referenceIcon[type]}</a>
              </li>
            ))}
          </ul>
        </MoreInfo>
      </ProjectInfo>
    </Container>
  );
};

export default Project;
