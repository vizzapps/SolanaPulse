import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TRADE_TITLE_FIELD } from "../trade/TradeTitle";

export const BotScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="runAt" source="runAt" />
        <ReferenceField label="Trade" source="trade.id" reference="Trade">
          <TextField source={TRADE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
