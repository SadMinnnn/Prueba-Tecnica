# Prueba-Tecnica

Explicacion del primer codigo:

Primeramente el lenguaje de programacion de este codigo es JavaScript. Sabiendo esto al inicio del codigo empieza declarando un arreglo de objetos nombrado: 'namelist', que en este caso tiene 5 elementos. Cada uno con dos elementos principales llamados: 'name' y 'lastname' que traduciendolos son nombre y apellido.

Despues de que se proporcionan los datos de los nombres de estas personas, se creaun arreglo vacio que es nombrado: 'fullnames'
que se utiliza para poder almancenar y combinar los nombres y apellidos anteriormente escritos en 'namelist'.

Luego de esto se esta declarando una variable llamada 'size' (tamaño) que contiene la longitud del arreglo antes mencionado 'namelist'

Luego se inicia un bucle for que itere a través de la matriz de listas de nombres. En cada iteración, las cadenas let se utilizan para crear una cadena que concatena el nombre y el apellido de cada objeto de la lista mediante la notación de propiedad de objeto. Esta cadena se almacena en una variable de elemento.

Luego, la cadena de elementos se agrega a la matriz de fullnames mediante el método push().

Finalmente, se usa el método console.log() para mostrar el contenido del fullnames en la consola.

El código combina el nombre y el apellido de cada objeto en la matriz de la lista de nombres y los almacena en una nueva matriz llamada fullnames.

![image](https://user-images.githubusercontent.com/128757228/235797279-df99de6f-dbcc-40bd-988d-6f2b4164517e.png)



Explicacion del segundo codigo:

Aqui lo que hice para darle una solucion diferente al codigo anterior fue utilizar el metodo 'map()' ![image](https://user-images.githubusercontent.com/128757228/235797707-93d10e7d-3273-4115-b579-7116b2b5ada5.png) este con la finalidad de iterar a traves de cada objeto de la matriz 'namelist'. Con la funcion llamada 'Arrow function' y esto lo que permite es poder extraer las propiedades tanto de 'name' como de 'lastname', en el cual se concatenan en una cadena dando el nombre completo, y asi dejando que se almacenen en la matriz de 'fullnames'.

Y al igual que el anterior codigo, se muestra el contenido del nombre completo en la consola.

![image](https://user-images.githubusercontent.com/128757228/235797587-5d6a2b48-19ad-4da5-8273-1e1832bc5ec6.png)



