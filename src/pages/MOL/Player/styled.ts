import styled from 'styled-components';

export const Root = styled.div<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? 70 : 50)}px;
  padding: ${({ isMobile }) => (isMobile ? '5px 20' : 5)}px;
  border-radius: ${({ isMobile }) => (isMobile ? 0 : 50)}px;
  position: fixed;
  ${({ isMobile }) =>
    isMobile
      ? `
        bottom: 0;
        left: 0;
    `
      : `
        top: 2rem;
        right: 5rem;
    `}
  z-index: 100;
  background: #fff;
  box-shadow: #00000066 0px 0px 20px -10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Progress = styled.div
  .withConfig<{ value: number; isMobile: boolean }>({
    shouldForwardProp: (prop) => !['value', 'isMobile'].includes(prop),
  })
  .attrs<{ value: number; isMobile: boolean }>(({ value, isMobile }) => ({
    style: {
      width: `${value}%`,
      marginLeft: isMobile ? -20 : -5,
      marginRight: isMobile ? -20 : -5,
    },
  }))`
    position: absolute;
    height: 100%;
    background-color: #ffdee1;
`;

export const StartStop = styled.button<{ isMobile: boolean; played: boolean }>`
  z-index: 1;
  border: 0;
  cursor: pointer;
  width: ${({ isMobile }) => (isMobile ? 50 : 40)}px;
  height: ${({ isMobile }) => (isMobile ? 50 : 40)}px;
  border-radius: 50%;
  background: #a31f22;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  margin-right: ${({ played }) => played && '10px'};
`;

export const NextPrev = styled.button<{ isMobile: boolean }>`
  z-index: 1;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ isMobile }) => (isMobile ? 40 : 30)}px;
`;

export const InfoBox = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  & span {
    opacity: 0.8;
    font-size: ${({ isMobile }) => (isMobile ? 14 : 10)}px;
  }
`;

export const ActionsWrapper = styled.div<{ isMobile: boolean; played: boolean }>`
  z-index: 1;
  transition: 0.3s;
  width: ${({ played, isMobile }) => (played ? (isMobile ? '100vw' : '280px') : '0px')};
  overflow: hidden;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.div<{ isMobile: boolean }>`
  min-width: ${({ isMobile }) => (isMobile ? 'calc(100% - 120px)' : '280px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
