import styled from 'styled-components';

import { slideXFromTo } from '@src/assets/styles/keyframe';
import ScrollBarStyle from '@styles/scrollbar-style';

export const SectionLayout = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 600px;
`;

export const ActiveFollowingLayout = styled.div`
  height: 80vh;
  min-width: 280px;
  width: 20vw;
  margin: 10px;
  @media (max-width: 1024px) {
    position: fixed;
    display: ${(props: { state: boolean }) => (props.state ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-space-between;
    align-items: center;
    z-index: 100;
    background-color: #F1F0E4;
    width: 100vw;
    min-width: 320px;
    height: 85vh;
  }
`;

export const MainSectionLayout = styled.div`
  @media (min-width: 1025px) {
    min-width: 500px;
  }
  position: relative;
  height: 80vh;
  width: 100%;
  min-width: 320px;
  margin: 10px;
  ${ScrollBarStyle};
`;

export const RoomLayout = styled.div`
  @media (min-width: 768px) {
    height: 80vh;
    width: 40vw;
    min-width: 320px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    position: fixed;
    display: ${(props: { state : boolean}) => (props.state ? 'flex' : 'none')};
    z-index: 100;
    width: 99vw;
    height: 85vh;
    margin-left: 0.5vw;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideXFromTo(300, 0)};
    animation-fill-mode: forward;
  }
`;

export const ActiveFollowingFooter = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  background: inherit ;
  border:none;
  box-shadow:none;
  border-radius:0;
  padding:0;
  overflow:visible;
  cursor:pointer;
  margin: 10px 30px 10px 0;
`;