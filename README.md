# Tracker-gps

Lucas Custos / Maxime Lubrano / Lucas Monribot
Le module récupère les données des trajets, on le branche à un pc qui envoie les données sur un serveur (programme automatisation) pour y accéder depuis internet en l’affichant sur une carte. 

Tâches à réaliser :
Arduino :
1.	Hardware (4/15) : 
>	Connexion module GPS ( 2/5)
>	Coque protection en 3d (1/5)
>	Gestion alimentation (1/5)

2.	Programmation (7/10) : 
>	Récupération de points gps (4/5)
>	Envoie des données vers le serveur (3/5)

Création serveur :
1.	Création api (9/15) : 
>	Stockage des points gps (2/5)

>	Manipulation de données afin d’obtenir des trajets / vitesse (4/5)

>	Accès aux données en ligne (3/5)

2.	Création serveur web (12/20) : 
>	Mise en place Proxmox pour une VM (3/5)

>	Mise en place serveur Apache (1/5)

>	Création des pages internet (3/5)

>	Liaison des données et de la page web (5/5)

Matériels : 

Esp32 / Raspberry Py / Arduino

Module GPS

Batterie 

PC pour faire un serveur


Logiciels : 

IDE Arduino pour programmer l'ESP32

Langages de programmation tels que C++ et Python pour le traitement et la manipulation des données

Protocoles de communication tels que MQTT pour l'envoi des données au serveur

Base de données pour stocker les données

