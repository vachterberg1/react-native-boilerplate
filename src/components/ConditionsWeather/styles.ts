import styled from 'styled-components/native';

export const Condition = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 60px;
`;

export const ConditionContent = styled.View`
  width: 200px;
  height: 150px;
  margin-right: 8px;
  padding: 16px;
  background-color: #fafbfb;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextCondition = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.gray700};
  text-align: center;
  margin-left: 6px;
`;

export const TextConditionInfos = styled.Text`
  font-size: 20px;
  text-align: center;
  /* margin: 20px 0; */
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.gray700};
`;
