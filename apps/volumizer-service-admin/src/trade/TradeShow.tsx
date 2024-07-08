import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRADE_TITLE_FIELD } from "./TradeTitle";
import { TOKEN_TITLE_FIELD } from "../token/TokenTitle";

export const TradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="duration" source="duration" />
        <TextField label="numberOfTrades" source="numberOfTrades" />
        <TextField label="amount" source="amount" />
        <ReferenceField label="Token" source="token.id" reference="Token">
          <TextField source={TOKEN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="BotSchedule"
          target="tradeId"
          label="BotSchedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="status" source="status" />
            <TextField label="runAt" source="runAt" />
            <ReferenceField label="Trade" source="trade.id" reference="Trade">
              <TextField source={TRADE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
