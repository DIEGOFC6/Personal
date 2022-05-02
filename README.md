# FuegoQuasarMeli

Aplicación compuesta por servicios encargados de calcular la posición y un mensaje secreto emitido por una nave a partir de la posición y distancia de tres satélites.

## Tecnologías 🔧

![Springboot - 2.5.2](https://img.shields.io/badge/SpringBoot-2.5.2-green?logo=spring&logoColor=white)

![Java - 1.8](https://img.shields.io/badge/Java-1.8-red?logo=java&logoColor=white)

![Maven - 3.6.3](https://img.shields.io/badge/Maven-3.6.3-yellow?logo=maven&logoColor=white)

## Despliegue Local 🔩

Ubicados en la raiz del proyecto ejecutar los siguientes comandos:

1. Compilar y generar el .jar
	* mvn clean install

2. Iniciar el servicios
    * java -jar "./target/FuegoQuasar-0.0.1-SNAPSHOT.jar"

## Servicios ⚙️

La información del detalle del consumo de los servicios (peticiones, respuestas y códigos de respuesta http) se puede encontrar en el siguiente swagger:
* http://localhost:8080/swagger-ui.html#/

### GetShipInformation**: Determina la ubicación de la nave y el mensaje que emite, a partir de los satélites enviados en la petición.
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

### **SetSatelliteInformation** Envía la información de un satélite para registrar o actualizar en memoria.
  * _Método HTTP:_ POST
  * _Endpoint:_ http://localhost:8080/topsecret_split/{nombre_satelite}
  * _Payload ejemplo:_ 
  ```
	{
		"distance": "600",
		"message": ["", "mensaje", ""]
	}
  ```
  
### **GetSatelliteInformation** Consulta por nombre, la información de un satélite registrado en memoria.
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
	
### **GetSatellitesList** Consulta la lista de satélites registrados en memoria.
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
	
### **GetShipInformation** Determina la ubicación de la nave y el mensaje que emite, a partir de los satélites registrados previamente.
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

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Dona con cripto a esta dirección: `0xf253fc233333078436d111175e5a76a649890000`
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊
