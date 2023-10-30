import styled from "styled-components";
import OptionType from "./Type";
import OptionValue from "./Value";
import { useState } from "react";

export default function Options({
  $type,
  $value,
  $selectFirst = () => null,
  $selectSecond = () => null,
}) {
  const [selected, setSelected] = useState(false);

  console.log($value);

  function toggleSelection(selected) {
    if (selected) {
      setSelected(false);
      $selectFirst(selected);
      $selectSecond(selected);
    } else {
      setSelected(true);
      $selectFirst(selected);
      $selectSecond(selected);
    }
  }

  return (
    <OptionContainer
      $select={selected}
      onClick={() => toggleSelection(selected)}
    >
      <TextContainer>
        <OptionType>{$type}</OptionType>
        <OptionValue>{$value}</OptionValue>
      </TextContainer>
    </OptionContainer>
  );
}

const OptionContainer = styled.article`
  height: 145px;
  width: 145px;
  margin-right: 30px;
  border: ${(props) => (props.$select ? "none" : "solid #cecece 1px")};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => (props.$select ? "#FFEED2" : "white")};
`;

const TextContainer = styled.div``;
