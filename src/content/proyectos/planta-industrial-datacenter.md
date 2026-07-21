---
title: "Sala de servidores redundante para planta industrial"
summary: "Diseño y construcción de una sala de servidores con energía y climatización redundante para una planta de manufactura en operación 24/7."
client: "Grupo Industrial Andes"
location: "Talcahuano, Región del Biobío"
services: ["Servidores y Data Center", "Redes LAN y WAN", "Mantención"]
technologies: ["VMware", "Dell PowerEdge", "UPS redundante", "Climatización de precisión"]
coverImage: "./_images/planta-industrial-datacenter-cover.svg"
gallery:
  - "./_images/planta-industrial-datacenter-1.svg"
  - "./_images/planta-industrial-datacenter-2.svg"
result: "Cero horas de downtime no planificado en los primeros doce meses de operación."
date: 2026-01-14
featured: true
---

## El desafío

La planta operaba sus sistemas de manufactura críticos sobre un servidor único, sin redundancia de energía ni climatización adecuada, lo que representaba un riesgo alto de detención de línea ante cualquier falla de hardware.

## La solución

Construimos una sala de servidores técnica con:

- Virtualización de cargas críticas sobre clúster de dos nodos con failover automático.
- Energía redundante N+1 con UPS y grupo electrógeno de respaldo.
- Climatización de precisión con control de humedad y temperatura.
- Política de respaldo 3-2-1 con copia fuera de sitio.

## Ejecución

La migración de los sistemas de manufactura al nuevo clúster se realizó en una ventana de mantención de fin de semana, con plan de rollback probado previamente en ambiente de pruebas.

## Resultado

Desde la puesta en marcha, la planta no ha registrado horas de downtime no planificado atribuibles a la infraestructura de servidores, cumpliendo el objetivo de continuidad operacional definido por la gerencia de manufactura.
