import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.size.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.size.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.size.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.size.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.size.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSizes[size](theme)};
    ${titleCase(uppercase)}
  `}
`;
