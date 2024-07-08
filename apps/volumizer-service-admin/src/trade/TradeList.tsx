import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TOKEN_TITLE_FIELD } from "../token/TokenTitle";

export const TradeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trades"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
