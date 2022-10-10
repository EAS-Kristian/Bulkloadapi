#!bin/bash
while IFS="," read -r rec_column1 rec_column2 rec_column3 rec_column4    #Input Field Separator (IFS) to “,”  in the while loop
do
  echo "transaction_id-$rec_column1"
  echo "from_user: $rec_column2"
  echo "to_user: $rec_column3"
  echo "amount: $rec_column4"
  echo ""
  #POST request to your api passing above in
  json_str='{"transaction_id":"'$rec_column1'","from_user":"'$rec_column2'","to_user":"'$rec_column3'","amount":"'$rec_column4'"}'
  echo $json_str
  curl -X POST 'http://localhost:8080/api/payments' -H 'Content-Type: application/json' -d "$json_str"
done < <(tail -n +2 data.csv)
