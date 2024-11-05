import React from 'react';
import styled from 'styled-components';
import PrinterTable from './PrinterTable';

export default function PrinterManagement() {
    return (
        <StyledPrinterList>
            <StyledHeader>
                <Title>Danh sách máy in</Title>
                <Actions>
                    <AddPrinterButton>
                    <AddIcon src="https://cdn.builder.io/api/v1/image/assets/39b01875d7164623805557885af3caf0/e9352148ef87713fd28400e7ceea641f10ccafa74af0811cc3dab8da6f253a5f?apiKey=39b01875d7164623805557885af3caf0&" alt="Add" />
                    Thêm máy in
                    </AddPrinterButton>
                </Actions>
            </StyledHeader>
            <PrinterTable/>
        </StyledPrinterList>
    );
};
  
const StyledPrinterList = styled.section`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #242222;
  font-size: 16px;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const AddPrinterButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #3497f9;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const AddIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;