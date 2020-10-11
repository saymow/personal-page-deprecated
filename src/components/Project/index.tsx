import React from 'react';
import Img from 'gatsby-image';

import TecnologiesUsed from './TecnologiesUsed';

import { IProject } from '../../@Types/Project';

import {
  Container,
  HiddenElement,
  ProjectInfo,
  MoreInfo,
  GithubIcon,
  NetlifyIcon,
  Attachment,
  StarIcon,
} from './styles';

const Project: React.FC<IProject> = ({
  title,
  fluidImage,
  description,
  references,
  techsUsed,
  beyondCourse,
}) => {
  const referenceIcon = {
    Github: <GithubIcon />,
    Netlify: <NetlifyIcon />,
  };

  return (
    <Container>
      <HiddenElement>
        <TecnologiesUsed techsUsed={techsUsed} />
      </HiddenElement>
      <Img fluid={fluidImage} />
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
          {beyondCourse && (
            <Attachment
              text={'This was developed beyond the course. Check it out.'}
            >
              <StarIcon />
            </Attachment>
          )}
          <ul>
            {references.map(({ type, url }) => (
              <li key={type}>
                <a href={url} target="_blank" rel="noreferrer">
                  {referenceIcon[type]}
                </a>
              </li>
            ))}
          </ul>
        </MoreInfo>
      </ProjectInfo>
    </Container>
  );
};

export default Project;
