import styled from 'styled-components';
import { IcFeelingLBlank, IcPcBlank, IcPcRecordream } from '../assets/svg';
import { Outlet } from 'react-router-dom';

interface RecordreamLayoutInterface {
  iconOn: boolean;
}

const RecordreamLayout = ({ iconOn }: RecordreamLayoutInterface) => {
  return (
    <RecordreamLayoutWrapper>
      <IcPcRecordream style={{ width: 134, height: 24, marginTop: 74, marginBottom: 18 }} />
      {iconOn ? (
        <IcFeelingLBlank style={{ width: 85, height: 85, marginTop: 74, marginBottom: 18 }} />
      ) : (
        <IcPcBlank style={{ width: 85, height: 85, marginTop: 74, marginBottom: 18 }} />
      )}
      <Outlet />
    </RecordreamLayoutWrapper>
  );
};

export default RecordreamLayout;

const RecordreamLayoutWrapper = styled.div`
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
