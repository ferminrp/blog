![comparison between neumorphism and skeuomophism and flat design](https://assets.justinmind.com/wp-content/uploads/2020/04/neumorphism-skeuomorphism-flat-compared.png)

### ¿Qué es?

Es un trend en diseño UI que este de moda desde el 2019. y Arranco con este post en Dribbble

![](https://miro.medium.com/max/1600/1*gza8htfpZ-5eDabA7_kTJw.png)


### ¿Por qué surje?

Fue una especie de contrafuerza al push que venian haciendo ios y material de design systems completamente chatos y minimalistas.

Neumorphism busca traer mas profundidad al diseño.

El nombre viene de Neo-skeuomorphism.

Skeuomorfism, que wikipedia define asi, fue la tecnica original de diseño de Apple.

> Es una técnica de diseño en que un objeto derivado retiene ornamentos o estructuras que eran necesarias en los objetos originales

![Skeuomorphism: Design We Learned To Outgrow | by Scott Oliveri | Design  Warp | Medium](https://miro.medium.com/max/1400/0*6DRkHp3goMcRGI6C)


### ¿Qué trae Neumorphism?

El principal cambio lo vamos a ver en las Cards, pero tambien se puede apreciar en iconos, botones, inputs, sliders.

![](https://miro.medium.com/max/1322/1*BO4cJTJyGovxXwaNJRoS-w.jpeg)

**Modern / Material Cards**

Normalmente es una superficie flotando por encima del fondo. Dejando una sombra. La sombra da la impresion de profundidad y a veces es incluso lo que nos marca los limites ya que no tiene bordes.


**Neumorphic cards**

Sobresalen del fondo como un meseta. Es una superficie mas elevada del mismo material que el fondo. Si la mirasemos de costado, no esta flotando.

Para lograrlo tenemos que jugar con dos sombras. Una con valores negativos y otra con valores positivos. El fondo necesita al menos un poco de color, no puede ser ni del todo blanco ni del todo negro.

![](https://miro.medium.com/max/991/1*-1NT6L5KepZbD19Rw77-EQ.jpeg)

## ¿Cómo hacerlo?

**1 - Arranca con un documento en Figma, XD o Sketch y crea un frame de fondo # D2DEEF**

**2 - Crea un rectangulo de fondo # EAF0F8 y con el borde blanco (# FFFFFF) de un pixel.**

**3 - Agregale sombra**
```
x = 0
y = 30
blur = 60
Color #A7B3BE
Opacidad 35%
```
![[Neumorphism Step 3.jpg]]

**4 - Agrega una segunda sombra**

```
x = 0
y = -30
blur = 60
Color #F8FCFF
Opacidad 50%
```

**5 - Duplica el rectangulo, achicalo a la forma de un boton y centralo.**

**6 - Al boton ponele estas sombra y elimina las anteriores.**

```
x = 0
y = -12
blur = 16
Color #FFFFFF
Opacidad 100%

x = 0
y = 12
blur = 16
Color #8D9095
Opacidad 55%


```
![[Neumorphism 2.jpg]]

7 - Agregale un icono y texto
![[Neumorphism 3.jpg]]

**8 - Suma una linea blanca entre el icono y el texto**

![[Neumorphism 4.jpg]]

Listo

## Algunos ejemplos

![](https://miro.medium.com/max/1600/1*LqmSXD5A-3AXp8JDI758yA.png)
![](https://miro.medium.com/max/3200/1*vkiyZ-XbahBkecV61mkd7Q.png)
![accessibility testing can be a problem with neumorphic interfaces](https://assets.justinmind.com/wp-content/uploads/2020/04/accessibility-testing-neumorphic-interfaces.png)
![free ui kit for neumorphism](https://assets.justinmind.com/wp-content/uploads/2020/04/free-neumorphism-ui-kit.png)
![neumorphic elements free ui kit](https://assets.justinmind.com/wp-content/uploads/2020/04/neumorphic-elements-free-ui-kit.png)
![free neumorph ui kit](https://assets.justinmind.com/wp-content/uploads/2020/04/neumorph-ui-kit-free.png)
![free ui kit for neumorphic user experience](https://assets.justinmind.com/wp-content/uploads/2020/04/ui-kit-free-neumorphic-ux.png)

---
Sources: 

🔗 Neumorphism in User Interfaces | [Uxdesign](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
🔗 Neumorphism: why it’s all the hype in UI design | [justinmind](https://www.justinmind.com/blog/neumorphism-ui/)
🔗 Neumorphism the right way — A 2020 Design Trend | [David Ofiare](https://medium.com/@artofofiare/neumorphism-the-right-way-a-2020-design-trend-386e6a09040a#:~:text=Neumorphism%20(or%20Neo%2Dskeuomorphism),let's%20look%20at%20%E2%80%9CSkeuomorphism%E2%80%9D.)
