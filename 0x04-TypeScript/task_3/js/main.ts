/// <reference path='./crud.d.ts' />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guilherme',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRowID: RowElement = { ...row, age: 23, };

CRUD.updateRow(newRowID, updatedRowID);
CRUD.deleteRow(newRowID);
