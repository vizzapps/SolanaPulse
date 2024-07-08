import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BotScheduleTitle } from "../botSchedule/BotScheduleTitle";
import { TokenTitle } from "../token/TokenTitle";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="duration" source="duration" />
        <NumberInput step={1} label="numberOfTrades" source="numberOfTrades" />
        <NumberInput step={1} label="amount" source="amount" />
        <ReferenceArrayInput
          source="botSchedules"
          reference="BotSchedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BotScheduleTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="token.id" reference="Token" label="Token">
          <SelectInput optionText={TokenTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
