import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { IconType } from 'react-icons';
import { IoEarthOutline } from 'react-icons/io5';
import { MdOutlinePeopleOutline, MdLockOutline } from 'react-icons/md';

import roomTypeState from '@atoms/room-type';

const Box = styled.button`
  width : 90px;
  height : 90px;
  background-color:${(props : {isSelected : boolean}) => (props.isSelected ? '#D8E0EB' : '#F5F5F5')};
  border-radius: 20px;
  display : flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border:none;
`;

const BoxText = styled.div`
  font-size: 18px;
  width: max-content;
  text-align: center;
`;

interface RoomTypeCheckBoxProps{
    checkBoxName : 'public' | 'social' | 'closed',
}

function RoomTypeCheckBox({ checkBoxName } : RoomTypeCheckBoxProps) {
  const [roomType, setRoomType] = useRecoilState(roomTypeState);

  const onClick = () => {
    setRoomType(checkBoxName);
  };

  const TypeWithIcon = {
    public: { component: IoEarthOutline, color: '#4E84C1' },
    social: { component: MdOutlinePeopleOutline, color: '#78A55A' },
    closed: { component: MdLockOutline, color: '#999999' },
  };

  const Icon : IconType = TypeWithIcon[checkBoxName].component;

  return (
    <Box isSelected={roomType === checkBoxName} onClick={onClick}>
      <Icon size={32} color={TypeWithIcon[checkBoxName].color} />
      <BoxText>{checkBoxName}</BoxText>
    </Box>
  );
}

export default RoomTypeCheckBox;