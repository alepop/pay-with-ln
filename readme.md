![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
<p align="center">
 <img alt="pay-with-ln" src="https://raw.githubusercontent.com/alepop/pay-with-ln/master/button.png" height="190px" />
</p>

## Overview

A simple Web Component button that giving you abillity to trigger LND payment request through [webln](https://github.com/wbobeirne/webln) provider. 

## Using this component

### Script tag

- Put a script tag in the head of your index.html 
```
<script
   src='https://unpkg.com/pay-with-ln@0.0.1/dist/pay-with-ln.js'
  integrity="sha384-0gE98IqUZdWHtdgtLOnon/9r/4abSzW18MBIYvk58FWgOGLgtZT3XEnB1GcpA3Fy"
  crossorigin="anonymous">
</script>
```
- Then you can use the element anywhere in your template, JSX, html etc

### Framework integration
You can find instructions [here](https://stenciljs.com/docs/overview)

Then add this to your html/jsx file (replace payment-request data with your invoice)
```
<pay-with-ln payment-request="lnbc1pw2uhctpp5p7e6ru568ry6w9ecxn0288gdt65ehdxqmaqchn0xnye09vxvu5qsdqjgdhkven9v5s8g6tsyycqzpgxq97zvuqfh2drun3d9p57nxzj6rmhupnqly84kkte0vxjgqmsz99y2g4aat58xpnc9967kkycnfylx4vrc94ns87cym2y3uu7evc3ecaq26qjhgpeyv6wr"></pay-with-ln>
```

### Styling
You can change button colors by defining css variables
```
:root {
  --pay-with-ln-color: #40a9ff;
  --pay-with-ln-active-color: #ffdd57;
  --pay-with-ln-text-color: white;
  --pay-with-ln-ative-text-color: red;
}
```