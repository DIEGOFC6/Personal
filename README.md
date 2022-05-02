# FuegoQuasarMeli

Aplicación compuesta por servicios encargados de calcular la posición y un mensaje secreto emitido por una nave a partir de la posición y distancia de tres satélites.

## 🔧 Tecnologías 

![Springboot - 2.5.2](https://img.shields.io/badge/SpringBoot-2.5.2-green?logo=spring&logoColor=white)

![Java - 1.8](https://img.shields.io/badge/Java-1.8-red?logo=java&logoColor=white)

![Maven - 3.6.3](https://img.shields.io/badge/Maven-3.6.3-yellow?logo=maven&logoColor=white)

![Swagger - 2.9.2](https://img.shields.io/badge/Swagger-2.9.2-green?logo=swagger&logoColor=white)

![JUnit - 4.13.2](https://img.shields.io/badge/JUnit-2.9.2-blue?logo=JUnit&logoColor=white)

## 🔩 Despliegue Local 

Ubicados en la raiz del proyecto ejecutar los siguientes comandos:

1. Compilar y generar el .jar
	* mvn clean install

2. Iniciar el servicios
    * java -jar "./target/FuegoQuasar-0.0.1-SNAPSHOT.jar"

## ⚙️ Servicios 

### **GetShipInformation:** 
Determina la ubicación de la nave y el mensaje que emite, a partir de los satélites enviados en la petición.
  * _Método HTTP:_ POST
  * _Endpoint:_ http://localhost:8080/topsecret
  * _Payload ejemplo:_ 
```
	{
		"satellites":[
			{
					"name": "kenobi",
					"distance": "600",
					"message": ["", "mensaje", ""]
			},
			{
					"name": "skywalker",
					"distance": 100,
					"message": ["", "", "secreto"]
			},
			{
					"name": "sato",
					"distance": 445.09335,
					"message": ["Es", "", ""]
			}
		]
	}
```
  * _Respuesta ejemplo:_ 
```
	{
		"position": {
			"x": 67.56761,
			"y": -5.4054565
		},
		"message": "Es mensaje secreto "
	}
```
### **SetSatelliteInformation**
Envía la información de un satélite para registrar o actualizar en memoria.
  * _Método HTTP:_ POST
  * _Endpoint:_ http://localhost:8080/topsecret_split/{nombre_satelite}
  * _Payload ejemplo:_ 
```
	{
		"distance": "600",
		"message": ["", "mensaje", ""]
	}
```
  
### **GetSatelliteInformation** 
Consulta por nombre, la información de un satélite registrado en memoria.
  * _Método HTTP:_ GET
  * _Endpoint:_ http://localhost:8080/topsecret_split/{nombre_satelite}
  * _Respuesta ejemplo:_ 
```
	{
		"name": "skywalker",
		"distance": 100.0,
		"message": [
			"",
			"",
			"secreto"
		]
	}
```
	
### **GetSatellitesList** 
Consulta la lista de satélites registrados en memoria.
  * _Método HTTP:_ GET
  * _Endpoint:_ http://localhost:8080/topsecret_split/satellites
  * _Respuesta ejemplo:_ 
```
	[
		{
			"name": "skywalker",
			"distance": 100.0,
			"message": [
				"",
				"",
				"secreto"
			]
		},
		{
			"name": "kenobi",
			"distance": 600.0,
			"message": [
				"",
				"mensaje",
				""
			]
		}
	]
```
	
### **GetShipInformation** 
Determina la ubicación de la nave y el mensaje que emite, a partir de los satélites registrados previamente.
  * _Método HTTP:_ GET
  * _Endpoint:_ http://localhost:8080/topsecret_split/
  * _Respuesta ejemplo:_ 
```
	{
		"position": {
			"x": 67.56761,
			"y": -5.4054565
		},
		"message": "Es mensaje secreto "
	}
```

### Pruebas Unitarias ⌨️

Coverage lineas: 89.5 %
Coverage Instrucciónes: 87.3 %
Coverage Métodos: 74.4 %

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Documentación adicional 📖

La información del detalle del consumo de los servicios (peticiones, respuestas y códigos de respuesta http) se puede encontrar en el siguiente swagger:
* http://localhost:8080/swagger-ui.html#/

## Autor ✒️

* **Diego Cuervo** - [diegofc6](diegof.cuervog@gmail.com)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 
