# Prueba-Tecnica
Primeramente el lenguaje de programacion de este codigo es JavaScript. Sabiendo esto al inicio del codigo empieza declarando un arreglo de objetos nombrado: 'namelist', que en este caso tiene 5 elementos. Cada uno con dos elementos principales llamados: 'name' y 'lastname' que traduciendolos son nombre y apellido.

Despues de que se proporcionan los datos de los nombres de estas personas, se creaun arreglo vacio que es nombrado: 'fullnames'
que se utiliza para poder almancenar y combinar los nombres y apellidos anteriormente escritos en 'namelist'.

Luego de esto se esta declarando una variable llamada 'size' (tamaño) que contiene la longitud del arreglo antes mencionado 'namelist'

Luego se inicia un bucle for que itere a través de la matriz de listas de nombres. En cada iteración, las cadenas let se utilizan para crear una cadena que concatena el nombre y el apellido de cada objeto de la lista mediante la notación de propiedad de objeto. Esta cadena se almacena en una variable de elemento.

Luego, la cadena de elementos se agrega a la matriz de fullnames mediante el método push().

Finalmente, se usa el método console.log() para mostrar el contenido del fullnames en la consola.

El código combina el nombre y el apellido de cada objeto en la matriz de la lista de nombres y los almacena en una nueva matriz llamada fullnames.
