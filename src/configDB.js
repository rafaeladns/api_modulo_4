//Importanto sqlite//
//Instanciando sqlite 3//
import sqlite3 from 'sqlite3'
import {open} from 'sqlite'

export async function openDb(){
  return open ({
    filename: './databse.db',
    driver: sqlite3.Database
  })
}