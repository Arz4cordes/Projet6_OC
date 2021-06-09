# Projet6_OC
# maquette de site de sélection de films: film le mieux noté, films les mieux notés, films de 3 catégories
* La structure html est dans le fichier index_OCmovies.html, ce fichier est à exécuter pour lancer l'application web,
il sera lu dans un navigateur web tel que Edge, Chrome, Mozilla Firefox...
* La mise en forme css associée se situe dans le dossier css et le code javascript correspondant se situe dans le dossier JavaScript

Le site fait appel à une API exécutable localement, la procédure pour l'installer la première fois se trouve sur ce site:
https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

parmi les informations fourni dans ce dernier lien, voici le détail de l'installation de l'API:

I) avec pipenv
1. Cloner ce dépôt de code à l'aide de la commande $ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (vous pouvez également télécharger le code en temps qu'archive zip)
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande $ cd ocmovies-api-fr
3. Installez les dépendances du projet à l'aide de la commande pipenv install
4. Créer et alimenter la base de données à l'aide de la commande pipenv run python manage.py create_db
5. Démarrer le serveur avec pipenv run python manage.py runserver

II) avec venv et pip:
1. Cloner ce dépôt de code à l'aide de la commande $ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (vous pouvez également télécharger le code en temps qu'archive zip)
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande $ cd ocmovies-api-fr
3. Créer un environnement virtuel pour le projet avec $ python -m venv env sous windows ou $ python3 -m venv env sous macos ou linux.
4. Activez l'environnement virtuel avec $ env\Scripts\activate sous windows ou $ source env/bin/activate sous macos ou linux.
5. Installez les dépendances du projet avec la commande $ pip install -r requirements.txt
6. Créer et alimenter la base de données avec la commande $ python manage.py create_db
7. Démarrer le serveur avec $ python manage.py runserver
