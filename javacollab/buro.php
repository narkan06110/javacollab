<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/bootstrap.min.css" >
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="style/ProjetJ.css" rel="stylesheet">
    <link rel="stylesheet" href="style/result.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script>
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
    </script>
    <title>Document</title>
</head>
<body>
    <aside>
        <div class="top">
            <ul>
                <li><a href="ProjetJ.html">Accueil</a></li>
                <li><a href="ProjetJ.html">Connexion</a></li>
                <li><a href="ProjetJ.html">Réserver</a></li>
                <li><a href="ProjetJ.html">Ajouter une Salle</a></li>
                <li><a href="ProjetJ.html">Récap Journalier</a></li>
            </ul>
            <p id="reservation">
                Vos Réservation : 
            </p>
        </div>
        <div class='bottom'>
          <input type="date" value="2020-01-01" min="2020-01-01" max="2042-12-31">
        </div>
    </aside>
    <article>
    <h1 id="buroTitle">Buro</h1>
<p>Vous avez reserver au nom de <?php echo $_POST['nom']; ?></p>
<p>De <?php echo $_POST['heures1']; ?> 
à 
<?php echo $_POST['heures28'];
echo $_POST['heures29'];
echo $_POST['heures210']; 
echo $_POST['heures211']; 
echo $_POST['heures212']; 
echo $_POST['heures213']; 
echo $_POST['heures214']; 
echo $_POST['heures215']; 
?></p>
<p>Avec comme commentaire : <?php echo $_POST['com']; ?></p>
<a href="./ProjetJ.html"><button type="button" >Retour à l'acceuil</button></a>

    </article>
    <script src="js/buro.js"></script>
</body>
</html>
