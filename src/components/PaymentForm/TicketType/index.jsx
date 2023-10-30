import styled from "styled-components";
import Row from "../Row";
import MOTD from "../MOTD";
import Options from "../Options";
import { useState } from "react";

export default function TicketOptions({
  $selectFirst,
  $selectSecond,
  $firstType,
  $firstValue,
  $secondType,
  $secondValue,
  $message,
  $setTotal,
}) {

  return (
    <OptionsWrapper>
      <MOTD text={$message}></MOTD>
      <Row>
        <Options
          $selectFirst={$selectFirst}
          $selectSecond={$selectSecond}
          $type={$firstType}
          $value={$firstValue}
          $setTotal={$setTotal}
        ></Options>
        <Options
          $selectFirst={$selectFirst}
          $type={$secondType}
          $value={$secondValue}
          $setTotal={$setTotal}
        ></Options>
      </Row>
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;
