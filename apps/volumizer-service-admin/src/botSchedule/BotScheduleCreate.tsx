import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TradeTitle } from "../trade/TradeTitle";

export const BotScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <DateTimeInput label="runAt" source="runAt" />
        <ReferenceInput source="trade.id" reference="Trade" label="Trade">
          <SelectInput optionText={TradeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
