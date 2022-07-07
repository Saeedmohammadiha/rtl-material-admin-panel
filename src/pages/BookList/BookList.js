import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";


const booksData = [
  {
    name : 'اسم کتاب',
    price : 20000,
    publisher : 'ناشر 1',
    authur : 'سعید محمدیها',
  },
  {
    name : 'اسم کتاب',
    price : 20000,
    publisher : 'ناشر 2',
    authur : 'سعید محمدیها',
  },
  {
    name : 'اسم کتاب',
    price : 20000,
    publisher : 'ناشر 3',
    authur : 'سعید محمدیها',
  },
]

export default function BookList() {


  const transform = (data)=>{
   return data.map((item)=>{
      return [
        item.name,
        item.price,
        item.publisher,
        item.authur,
      ]
    })
  }
  return (
    <>
      <PageTitle title="لیست کتاب ها" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="لیست کتاب ها"
            data={transform(booksData)}
            columns={["نام کتاب", "قیمت", "ناشر", "نویسنده"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
