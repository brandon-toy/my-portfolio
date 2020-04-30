import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';

const GithubButton = () => {
  const { footer } = useContext(PortfolioContext);
  const { sourceCodeUrl } = footer;
  console.log(sourceCodeUrl);
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-btn--resume"
        href={sourceCodeUrl || '#!'}
      >
        Source Code
      </a>
    </>
  );
};

export default GithubButton;
