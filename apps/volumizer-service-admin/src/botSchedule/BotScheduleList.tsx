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
import { TRADE_TITLE_FIELD } from "../trade/TradeTitle";

export const BotScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BotSchedules"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
