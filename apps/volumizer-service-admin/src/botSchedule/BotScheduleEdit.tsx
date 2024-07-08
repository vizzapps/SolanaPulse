import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TradeTitle } from "../trade/TradeTitle";

export const BotScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <DateTimeInput label="runAt" source="runAt" />
        <ReferenceInput source="trade.id" reference="Trade" label="Trade">
          <SelectInput optionText={TradeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
