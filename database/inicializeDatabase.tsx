import { type SQLiteDatabase }  from 'expo-sqlite';

export async function inicializeDatabase(database: SQLiteDatabase){
    await database.execAsync(
            ` 
            -- DROP TABLE IF EXISTS usuarios;
            -- DELETE FROM usuarios;

            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT NOT NULL,
                senha TEXT NOT NULL,
                cep TEXT,
                endereco TEXT,
                numero TEXT,
                complemento TEXT,
                telefone TEXT,
                selectedPlan TEXT

        );

         -- INSERT INTO usuarios (nome,email,senha,cep,endereco,numero,complemento,telefone,selectedPlan) VALUES ('anna laura','annalaura@gmail.com','15012007','19456783','josé placca','300','perto do oba oba','1440228922','Outros');

        `
    );
}

