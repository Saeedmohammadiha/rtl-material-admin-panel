import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],
  ["سعید محمدیها", "نمونه.", "کرج", "البرز"],

];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="جداول" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="لیست کارکنان"
            data={datatableData}
            columns={["نام", "کمپانی", "شهر", "استان"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="جدول متریال" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
