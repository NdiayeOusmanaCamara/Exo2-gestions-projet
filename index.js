import express from 'express';
import bodyParser from 'body-parser';
import { Employe, Tache, Assignation  } from './gestionProjet.js';

const app = express();
const port = 3080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bonjour les simploniens' });
});

app.post('/employe', (req, res) => {
    const emp1 = new Employe();
    emp1.createEmploye({nom:"camara", prenom:"samba" ,email: "camara@gmail.com", post: "technicien",dateEmbauche: new Date(), statut:"actif"});
   
    const emp2 = new Employe();
    emp2.createEmploye({nom:"Ba", prenom:"Bakary" ,email: "camara@gmail.com", post: "technicien",dateEmbauche: new Date(), statut:"actif"});
    
    const emp3 = new Employe();
    emp3.createEmploye({nom:"SALL", prenom:"Harouna" ,email: "camara@gmail.com", post: "technicien",dateEmbauche: new Date(), statut:"actif"});
    
    const emp4 = new Employe();
    emp4.createEmploye({nom:"Fofana", prenom:"Mariam" ,email: "camara@gmail.com", post: "technicien",dateEmbauche: new Date(), statut:"actif"})
    // res.send(`Un nouveu employer a été crée `)
    const tache1 = new Tache();
    tache1.createTache({nom: "conception app", description: "Création d'une application e-commerce", dateDebut: new Date(), dateFin: new Date(), statut:"en cours",priorite:"haut"});
    
    const tache2 = new Tache();
    tache2.createTache({nom: "Design UI", description: "Conception de l'interface utilisateur d'une application e-commerce", dateDebut: new Date(), dateFin: new Date(), statut:"en cours",priorite:"haut"});
    
    const tache3 = new Tache();
    tache3.createTache({nom: "Planification", description: "Planification du développement de l'application e-commerce", dateDebut: new Date(), dateFin: new Date(), statut:"en cours",priorite:"haut"})
    
    const tache4 = new Tache();
    tache4.createTache({nom: "tester", description: "Tests de l'application e-commerce", dateDebut: new Date(), dateFin: new Date(), statut:"en cours",priorite:"haut"})


    Assignation.assign({employe:emp1, tache: tache1, dateAssignation: new Date ()});
    Assignation.assign({employe:emp2, tache: tache2, dateAssignation: new Date ()});
    Assignation.assign({employe:emp3, tache: tache3, dateAssignation: new Date ()});
    Assignation.assign({employe:emp4, tache: tache4, dateAssignation: new Date ()})
   
    const assignation =  Assignation.tabAssignations
    Assignation.dropAssign(emp4.getEmploye);
   
    const newAssignation = Assignation.getTab()
    
   Assignation.getEmpAssign(emp1.getEmploye());
   Assignation.assign({employe: emp2.getEmploye(), tache: tache1.getTache(), dateAssignation: new Date()});
   
    const testEcrase = Assignation.getTab()

    const resulFiltre = [];

   res.status(200).json({newAssignation, testEcrase, resulFiltre});
    });
 

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

