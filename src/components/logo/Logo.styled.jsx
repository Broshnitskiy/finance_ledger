import styled from 'styled-components';

export const LinkHome = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  margin-bottom: 16px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.04);
  }

  img {
    margin-right: 8px;
  }

  p {
    font-size: 28px;
    line-height: 38px;
    color: ${props => props.theme.colors.$styleColor};
  }

  span {
    color: ${props => props.theme.colors.$white};
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    p {
      font-size: 35px;
      line-height: 48px;
    }
  }
`;
