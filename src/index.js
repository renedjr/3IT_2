
const express = require('express');
const app = express();
const morgan=require('morgan');
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Nuestro primer WS Get
app.get('/', (req, res) => {    
    res.json(
        {
           
                "version": "1.7.0",
                "autor": "mindicador.cl",
                "fecha": "2021-12-19T20:00:00.000Z",
                "uf": {
                    "codigo": "uf",
                    "nombre": "Unidad de fomento (UF)",
                    "unidad_medida": "Pesos",
                    "fecha": "2021-12-19T03:00:00.000Z",
                    "valor": 30931.97
                },
                "ivp": {
                    "codigo": "ivp",
                    "nombre": "Indice de valor promedio (IVP)",
                    "unidad_medida": "Pesos",
                    "fecha": "2021-12-19T03:00:00.000Z",
                    "valor": 31664.72
                },
                "dolar": {
                    "codigo": "dolar",
                    "nombre": "Dólar observado",
                    "unidad_medida": "Pesos",
                    "fecha": "2021-12-17T03:00:00.000Z",
                    "valor": 849.65
                },
                "dolar_intercambio": {
                    "codigo": "dolar_intercambio",
                    "nombre": "Dólar acuerdo",
                    "unidad_medida": "Pesos",
                    "fecha": "2014-11-13T03:00:00.000Z",
                    "valor": 758.87
                },
                "euro": {
                    "codigo": "euro",
                    "nombre": "Euro",
                    "unidad_medida": "Pesos",
                    "fecha": "2021-12-17T03:00:00.000Z",
                    "valor": 961.25
                },
                "ipc": {
                    "codigo": "ipc",
                    "nombre": "Indice de Precios al Consumidor (IPC)",
                    "unidad_medida": "Porcentaje",
                    "fecha": "2021-11-01T03:00:00.000Z",
                    "valor": 0.5
                },
                "utm": {
                    "codigo": "utm",
                    "nombre": "Unidad Tributaria Mensual (UTM)",
                    "unidad_medida": "Pesos",
                    "fecha": "2021-12-01T03:00:00.000Z",
                    "valor": 54171
                },
                "imacec": {
                    "codigo": "imacec",
                    "nombre": "Imacec",
                    "unidad_medida": "Porcentaje",
                    "fecha": "2021-10-01T03:00:00.000Z",
                    "valor": 15
                },
                "tpm": {
                    "codigo": "tpm",
                    "nombre": "Tasa Política Monetaria (TPM)",
                    "unidad_medida": "Porcentaje",
                    "fecha": "2021-12-17T03:00:00.000Z",
                    "valor": 4
                },
                "libra_cobre": {
                    "codigo": "libra_cobre",
                    "nombre": "Libra de Cobre",
                    "unidad_medida": "Dólar",
                    "fecha": "2021-12-17T03:00:00.000Z",
                    "valor": 4.18
                },
                "tasa_desempleo": {
                    "codigo": "tasa_desempleo",
                    "nombre": "Tasa de desempleo",
                    "unidad_medida": "Porcentaje",
                    "fecha": "2021-10-01T03:00:00.000Z",
                    "valor": 8.08
                },
                "bitcoin": {
                    "codigo": "bitcoin",
                    "nombre": "Bitcoin",
                    "unidad_medida": "Dólar",
                    "fecha": "2021-12-16T03:00:00.000Z",
                    "valor": 47658.38
                }
            }
            
        
    );
})
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});