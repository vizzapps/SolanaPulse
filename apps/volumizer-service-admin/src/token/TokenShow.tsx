import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TOKEN_TITLE_FIELD } from "./TokenTitle";

export const TokenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="address" source="address" />
        <TextField label="name" source="name" />
        <ReferenceManyField reference="Trade" target="tokenId" label="Trades">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="duration" source="duration" />
            <TextField label="numberOfTrades" source="numberOfTrades" />
            <TextField label="amount" source="amount" />
            <ReferenceField label="Token" source="token.id" reference="Token">
              <TextField source={TOKEN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
