/* eslint-disable object-shorthand */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';

import roomTypeState from '@atoms/room-type';
import roomDocumentIdState from '@atoms/room-document-id';
import roomViewType from '@src/recoil/atoms/room-view-type';
import { postRoomInfo } from '@api/index';
import DefaultButton from '@common/default-button';
import RoomTypeCheckBox from '@components/room/room-type-check-box';
import AnonymousCheckBox from '@components/room/anonymous-checkbox';

const CustomTitleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleInputbar = styled.input`
  border: 1px solid #58964F;
  border-radius: 8px;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const TitleInputbarLabel = styled.label`
  font-size: 12px;
  color: #B6B6B6;
`;

// 룸 생성 모달
function RoomModal() {
  const setRoomView = useSetRecoilState(roomViewType);
  const [roomType] = useRecoilState(roomTypeState);
  const setRoomDocumentId = useSetRecoilState(roomDocumentIdState);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitButtonHandler = () => {
    // userId 현재 아이디 가져와야함
    const roomInfo = {
      type: roomType,
      title: inputRef.current?.value as string,
      userId: 'dlatqdlatq',
      userName: 'sungbin',
      isAnonymous: isAnonymous,
    };
    postRoomInfo(roomInfo)
      .then((roomDocumentId: any) => {
        setRoomDocumentId(roomDocumentId);
        if (roomType === 'closedSelectorView') setRoomView('closedSelectorView');
        else setRoomView('inRoomView');
      })
      .catch((err) => console.error(err));
  };

  const inputOnChange = () => {
    setIsDisabled(!inputRef.current?.value);
  };

  const checkboxOnChange = () => {
    setIsAnonymous(!isAnonymous);
  };

  return (
    <>
      <RoomTypeCheckBox checkBoxName="public" />
      <RoomTypeCheckBox checkBoxName="social" />
      <RoomTypeCheckBox checkBoxName="closed" />
      <AnonymousCheckBox checked={isAnonymous} onChange={checkboxOnChange} />
      <CustomTitleForm>
        <TitleInputbarLabel>Add a Room Title</TitleInputbarLabel>
        <TitleInputbar ref={inputRef} onChange={inputOnChange} />
      </CustomTitleForm>
      <DefaultButton buttonType="secondary" size="medium" onClick={submitButtonHandler} isDisabled={isDisabled}>
        Lets Go
      </DefaultButton>
    </>
  );
}

export default RoomModal;